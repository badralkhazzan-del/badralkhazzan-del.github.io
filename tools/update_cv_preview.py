#!/usr/bin/env python3
"""
Regenerate the CV preview image (assets/cv-preview.jpg and .webp) from assets/Badr_Aldeen_CV.pdf.
Run after replacing the CV:   python3 tools/update_cv_preview.py
Requires:                     pip install pymupdf pillow

It also refuses to continue if the CV text contains something that looks like a phone number,
because the public CV must not show one.
"""
import re
import sys
from pathlib import Path

import pymupdf  # PyMuPDF
from PIL import Image

root = Path(__file__).resolve().parent.parent
pdf = root / "assets" / "Badr_Aldeen_CV.pdf"
doc = pymupdf.open(pdf)

text = "".join(page.get_text() for page in doc)
if re.search(r"\+\d{2}[\s\d-]{8,}", text):
    sys.exit("The CV appears to contain a phone number. Remove it before publishing.")

pix = doc[0].get_pixmap(dpi=150)
tmp = root / "assets" / "_cv_preview.png"
pix.save(tmp)
img = Image.open(tmp).convert("RGB")
img.save(root / "assets" / "cv-preview.jpg", quality=85, optimize=True)
img.save(root / "assets" / "cv-preview.webp", quality=82, method=6)
tmp.unlink()

print(f"Preview updated ({img.width} x {img.height}).")
print(f'If the size changed, set previewW: {img.width} and previewH: {img.height} in data/site.js.')
