# Changelog

Meaningful updates to the portfolio. Newest first. Also update `lastUpdated` in `data/site.js`.

## 2026-10-19 · New CV, focus on Operations Research & Supply Chain

- CV replaced with the latest Drive version (phone and Drive links removed).
- Positioning follows the CV: the hero, page titles, descriptions, search-engine data and the About text now say Operations Research and Supply Chain, instead of Industrial Engineering, Operations Research and Decision Analytics. The degree is shown as B.Eng.
- Coursework, skills (Python tools, generative AI tools) and the Yemeni Students' Union dates (April 2025 to March 2026, volunteer) follow the CV.
- New entry under programs: industrial company visit to PT Gaya Motor (BMW Indonesia), April 2025.
- Translations (Indonesian, Arabic) updated to match.

## 2026-10-17 · Ergonomic pen project rewritten

- New 3D concept render as the project image and a labelled component view (tip, grip, ruler, PLA body, voice recorder, telescopic body, eraser); old renders removed.
- Shorter, clearer text: the problem, four design steps, and corrected results. The usability score is now the report's own average (SUS 65.5 from 5 respondents) instead of the top individual score (75), and the participant count for the hand measurements is no longer quoted because the report gives conflicting numbers.
- Tools now list SolidWorks (3D model) and Blender (render).

## 2026-10-14 · CV layout update

- CV replaced with the latest Drive version (same content; status labels now sit in each paper's line).

## 2026-10-12 · CV email fix

- CV replaced with the latest Drive version, which corrects the email address.
- The site's email (Contact page, footer, CV page and search-engine data) is corrected to badralkhazzan@gmail.com; it was missing an "l".

## 2026-10-11 · New CV, research update, TMIC award

- Light mode is now the default; dark mode applies only when the visitor picks it.
- CV replaced with the October 2026 version (phone number and links to private Google Drive files removed). `make_public_cv.py` now strips Drive/Docs links and accepts a fallback font.
- Research follows the new CV: groups ordered Accepted, Conference, Under Review, In Progress, Published, and papers inside each group in CV order.
  - Relief pre-positioning: new title, accepted for presentation at the 16th AIC 2026 (Universitas Syiah Kuala).
  - New: risk-aware last-mile routing, abstract accepted at ICORSI 2026 (IIT Delhi).
  - New: school-meal kitchen capacity (MBG), under review at Spektrum Industri.
  - Wheat import study: new title, full paper accepted at ICOBLAST 2026 (Diponegoro University).
  - Electric vehicle routing: new title and summary for the configurable framework.
  - Predictive maintenance: presented at TMIC 2026. Venues added for the bullwhip (JTMIT), SCOR (IJPMB) and SIGAP (JuTISI) papers.
  - Removed the Green-AI literacy manuscript, which is not in the current CV.
- New award: Best Presenter, TMIC 2026, with the certificate (reference number hidden).
- Experience dates follow the CV: Delsim from April 2025, UII Global from January 2025.
- Lembah Susu Dairy: website screenshot as the cover, plus the case study poster and the phone view.
- Removed the decorative route sign beside the portrait on the Home page.

## 2026-10-05 · Three languages, dark mode, Lembah Susu Dairy

- Language switch in the header: English, Bahasa Indonesia and Arabic. All interface text and content are translated; Arabic uses a right-to-left layout and an Arabic font. Paper titles, people's names and certificate names stay in their original form.
- Light and dark mode, following the system setting until the visitor picks one.
- The header now switches to the compact Menu button whenever the full menu does not fit, in any language.
- New project: Lembah Susu Dairy: From Cow to Cup (The INDEX 2026, Telkom University Purwokerto), with a link to the live demo website. The card shows the six journey steps until the website screenshot and poster are added.
- The checker also validates the translation files.
- Arabic pages show the name in Arabic script: بدر الدين الخزان. Search-engine data keeps the Latin spelling, with the Arabic name as an alternate name.

## 2026-09-26 · About story

- Removed the anecdote about using an AI tool in the Operations Research course from the About story.

## 2026-09-26 · Shorter About page

- Story shortened from six paragraphs to three (375 to 225 words); earlier projects, the Delsim traineeship and the Aspire program remain on their own pages.
- "Where I am heading" now follows the story, in one sentence. The methods map shows the eight core methods only.
- Removed the Quick facts box (it repeated the story), trimmed Qualities to six, and removed Photography and Public speaking from Interests.

## 2026-09-26 · Main information first

- Home: your name now comes first, with the field labels under it.
- Project cards: the project title comes before its category line.
- Section and page headings: removed the small labels that sat above titles (for example "COMPETITIVE AWARDS" above "Awards"). Where the label was the clearer title it became the heading ("What I work on", "Competitive awards", "Direction"). The About page title is now "About me".
- Home section titles shortened to "Research" and "Projects".
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
