#!/usr/bin/env python3
"""
Make the public CV from the Master CV: removes the phone number from the header line,
re-centres the remaining items in the original font, keeps the email/LinkedIn links,
and saves the result as assets/Badr_Aldeen_CV.pdf.

    python3 tools/make_public_cv.py path/to/Badr_Aldeen_Master_CV.pdf
    python3 tools/update_cv_preview.py

Requires:  pip install pymupdf pillow
"""
import re
import sys
from pathlib import Path

import pymupdf  # PyMuPDF

PHONE = re.compile(r"\+?\d[\d\s()-]{7,}\d")
SEPARATOR = re.compile(r"^\s*[|·•]\s*$")

root = Path(__file__).resolve().parent.parent
out = root / "assets" / "Badr_Aldeen_CV.pdf"
if len(sys.argv) != 2:
    sys.exit(__doc__)

doc = pymupdf.open(sys.argv[1])
page = doc[0]


def find_phone_line():
    for block in page.get_text("dict")["blocks"]:
        for line in block.get("lines", []):
            if any(PHONE.search(s["text"]) for s in line["spans"]):
                return line
    return None


line = find_phone_line()
if line is None:
    print("No phone number found on page 1; copying the CV unchanged.")
else:
    spans = [s for s in line["spans"] if s["text"].strip() or SEPARATOR.match(s["text"])]
    idx = next(i for i, s in enumerate(spans) if PHONE.search(s["text"]))
    drop = {idx}
    # Drop one neighbouring separator so no double "|" remains.
    if idx > 0 and SEPARATOR.match(spans[idx - 1]["text"]):
        drop.add(idx - 1)
    elif idx + 1 < len(spans) and SEPARATOR.match(spans[idx + 1]["text"]):
        drop.add(idx + 1)
    keep = [s for i, s in enumerate(spans) if i not in drop]

    # Links on this line, matched to the span they cover.
    y0, y1 = line["bbox"][1], line["bbox"][3]
    links = [l for l in page.get_links() if l["from"].y0 < y1 and l["from"].y1 > y0 and l.get("uri")]
    span_uri = {}
    for s in keep:
        if SEPARATOR.match(s["text"]):
            continue
        r = pymupdf.Rect(s["bbox"])
        centre = pymupdf.Point((r.x0 + r.x1) / 2, (r.y0 + r.y1) / 2)
        for l in links:
            if centre in l["from"]:
                span_uri[id(s)] = l["uri"]

    # Pick an embedded font that contains every character we need.
    needed = set("".join(s["text"] for s in keep))
    font_buf, font = None, None
    for xref, _ext, _type, basefont, *_ in page.get_fonts():
        if "Bold" in basefont or "Italic" in basefont:
            continue
        name = keep[0]["font"].split("+")[-1]
        if name.split("-")[0] not in basefont:
            continue
        try:
            buf = doc.extract_font(xref)[3]
            f = pymupdf.Font(fontbuffer=buf)
        except Exception:
            continue
        if all(f.has_glyph(ord(c)) for c in needed):
            font_buf, font = buf, f
            break
    if font is None:
        sys.exit("Could not find an embedded font with all characters; edit the CV by hand instead.")

    for l in links:
        page.delete_link(l)
    x_left, x_right = line["bbox"][0], line["bbox"][2]
    page.add_redact_annot(pymupdf.Rect(x_left - 1, y0 + 1, x_right + 2, y1 - 0.6))
    page.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_NONE)

    size = keep[0]["size"]
    baseline = keep[0]["origin"][1]
    total = sum(font.text_length(s["text"], size) for s in keep)
    x = (x_left + x_right) / 2 - total / 2
    page.insert_font(fontname="PubCVFont", fontbuffer=font_buf)
    for s in keep:
        w = font.text_length(s["text"], size)
        c = s["color"]
        page.insert_text((x, baseline), s["text"], fontname="PubCVFont", fontsize=size,
                         color=((c >> 16 & 255) / 255, (c >> 8 & 255) / 255, (c & 255) / 255))
        if id(s) in span_uri:
            page.insert_link({"kind": pymupdf.LINK_URI, "from": pymupdf.Rect(x, y0 - 2, x + w, y1 + 2), "uri": span_uri[id(s)]})
        x += w

doc.set_metadata({"title": "Badr Aldeen Al-Khazan, CV", "author": "Badr Aldeen Al-Khazan"})
doc.save(out, garbage=4, deflate=True)

text = "".join(p.get_text() for p in pymupdf.open(out))
if PHONE.search(text.replace("\xa0", " ")):
    out.unlink()
    sys.exit("A phone number is still present. The public CV was NOT saved.")
print(f"Saved {out.relative_to(root)} without a phone number. Now run: python3 tools/update_cv_preview.py")
