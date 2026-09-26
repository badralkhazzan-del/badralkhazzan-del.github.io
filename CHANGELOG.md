# Changelog

Meaningful updates to the portfolio. Newest first. Also update `lastUpdated` in `data/site.js`.

## 2026-09-26 · Main information first

- Home: your name now comes first, with the field labels under it.
- Project cards: the project title comes before its category line.
- Section and page headings: removed the small labels that sat above titles (for example "COMPETITIVE AWARDS" above "Awards"). Where the label was the clearer title it became the heading ("What I work on", "Competitive awards", "Direction"). The About page title is now "About me".
- Research cards on Home show the title before the status; award cards no longer repeat the award type above the title.

## 2026-09-23 · Lighter Research and Home pages

- Research: each entry now shows its first sentence, with the rest of the summary and the topics behind "Read more". The repeated "Summary only" note is removed (the status legend already explains it). Visible text on the page drops from about 1,100 to about 630 words.
- Home: removed the extra findings paragraph from the flagship project cards and the two "Currently" items that repeated the Selected research cards.

## 2026-09-23 · Award certificates

- Awards page: added certificates for Idea Champion 2.0, IYEC 12 (Outstanding Delegate), EXPO RSKE 2025 (Best Presentation) and the Aspire Leaders Program. Each card shows a thumbnail that opens the full certificate.
- Certificates are published as images only (no original PDFs or file metadata). The IYEC 12 certificate reference number is hidden, and the scanning-app mark on the Best Presentation scan is cropped out.

## 2026-09-23 · CV with portfolio link

- Public CV replaced with the updated CV from Google Drive (phone number removed). Its only change is the header, which now links to this portfolio ("My Portfolio") instead of LinkedIn.
- `tools/make_public_cv.py` now moves link underlines together with their text and keeps each link on its own words.

## 2026-09-22 · Privacy checker

- `tools/check.mjs` no longer contains any real private values, since the file is published with the site. It now uses general patterns, plus an optional local list (`tools/private-values.local.txt`, never committed) for exact values.

## 2026-09-22 · GPA 3.90

- GPA updated to 3.90 / 4.00 (Home page, Education page and public CV).
- Public CV rebuilt from the latest Master CV with the new `tools/make_public_cv.py`, which removes the phone number automatically.

## 2026-09-22 · Hospital Management System ERD

- Added the updated ERD presentation from Google Drive to the Hospital Management System project: full ERD diagram (large, opens full size), two summary slides, title-slide card image and a PDF of the presentation.
- Added the nine relationships with their cardinalities, key figures (9 entities, 9 relationships, 3NF) and a fuller approach, based on the project report (individual project, August 2025).

## 2026-09-22 · New Master CV

- Public CV replaced with the new Master CV from Google Drive (phone number removed). Its only content change is the language line: Indonesian (B2).

## 2026-09-22 · Bahasa Indonesia level

- Bahasa Indonesia updated from A2 to B2 on the Education page and in the public CV (and its preview image).

## 2026-09-22 · Research grouping and portrait

- Relief pre-positioning and wheat import Mean-CVaR are now listed as Research in Progress (confirmed by Badr), so that group holds 3 items and the separate "Research Project" group is no longer shown.
- Removed the offset outline behind the home page portrait.

## 2026-09-22 · First version

- Built the complete static portfolio: Home, About, Research, Projects (with a detail page per project), Experience, Awards, Education & Skills, CV, Contact and a 404 page.
- All content comes from the curated Google Drive source package (FINAL Source of Truth, Master CV and canonical folders).
- Research: 10 items with verified statuses. 2 published (UII Repository links), 1 accepted and in production (Bullwhip effect), 1 conference (TMIC 2026), 3 under review, 1 in progress (Green Vehicle Routing), 2 research projects without a status claim (relief pre-positioning, wheat import Mean-CVaR).
- Projects: 3 flagship case studies (SIGAP, AI-PHL Guardian, Green Vehicle Routing, including the interactive route explorer) and 4 supporting projects.
- Recognition: 4 competitive awards, the Future Global Leaders Scholarship and the Aspire Leaders Program, labelled by type.
- Public CV published without the phone number; public email badrakhazzan@gmail.com.
- Added `tools/check.mjs` (data and privacy checks), `tools/set-site-url.mjs` and `tools/update_cv_preview.py`.
