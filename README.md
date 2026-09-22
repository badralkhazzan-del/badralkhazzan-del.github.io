# Badr Aldeen Al-Khazan · Portfolio

Personal academic and professional portfolio of **Badr Aldeen Al-Khazan**, Industrial Engineering student at Universitas Islam Indonesia, working on Operations Research, Decision Analytics, and Supply Chain & Sustainable Systems.

It is a static website built with plain HTML, CSS and JavaScript. It has no backend, no database and no build step, so GitHub Pages can host it for free.

---

## 1. How the site is organized

```
index.html            Home
about.html            About (story, methods map, direction, interests)
research.html         Research & Publications, grouped by status
projects.html         Projects (flagship + supporting)
project.html          One page for every project, e.g. project.html?id=sigap
experience.html       Experience & Leadership, community work
awards.html           Awards, scholarship, leadership development
education.html        Degree, credentials, languages, skills, academic programs
cv.html               CV viewer and download
contact.html          Contact
404.html              "Page not found"

data/                 ALL CONTENT LIVES HERE (edit these files to update the site)
  site.js             name, statement, portrait, CV file, focus areas, About text, "last updated" date
  links.js            email, LinkedIn, GitHub
  research.js         every paper and its status
  projects.js         every project
  experience.js       roles and community work
  awards.js           awards, scholarship, leadership program
  education.js        degree, certifications, languages
  programs.js         summer courses, workshops, seminars
  skills.js           grouped skills

assets/
  Badr_Aldeen_CV.pdf  public CV (phone number removed)
  cv-preview.jpg/.webp  image of the CV's first page
  profile/            portrait (badr-aldeen.jpg / .webp)
  img/                project, event and experience images (.jpg and .webp)
  demos/              interactive EV routing explorer
  css/main.css        design
  js/app.js           builds every page from the data files
  og-image.jpg        preview image shown when the link is shared

tools/
  check.mjs           checks the data, missing files and privacy (run before publishing)
  set-site-url.mjs    changes the site address everywhere (after renaming or adding a domain)
  make_public_cv.py   makes the public CV (phone number removed) from the Master CV
  update_cv_preview.py  regenerates the CV preview image after replacing the CV

CHANGELOG.md          record of meaningful updates
```

Every fact is written once, in `data/`. The pages read it from there. For example, changing a paper's `status` in `data/research.js` updates its badge on the Research page, the Home page, the linked project page and the search-engine data at the same time.

---

## 2. Preview on your computer

Double-click `index.html`. That is enough for most checks.

For a preview that behaves exactly like the live site, run a small local server from this folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

---

## 3. Publish on GitHub Pages

**Step 1 (recommended): give the repository the right name.**
GitHub serves a personal site at the clean address `https://<username>.github.io/` only when the repository is named exactly `<username>.github.io`. For this account that is:

- Go to the repository on GitHub → **Settings** → **General** → **Repository name**
- Rename `badr.github.io` to **`badralkhazzan-del.github.io`** and click **Rename**.

The site is already configured for `https://badralkhazzan-del.github.io/`.

If you prefer to keep the name `badr.github.io`, the address becomes `https://badralkhazzan-del.github.io/badr.github.io/`. In that case run this once and commit the result:

```
node tools/set-site-url.mjs https://badralkhazzan-del.github.io/badr.github.io/
```

(The custom 404 page only works fully at a root address, i.e. with the recommended name or a custom domain.)

**Step 2: turn on Pages.**

- **Settings** → **Pages**
- Under **Build and deployment**, set **Source** to **Deploy from a branch**
- Choose the branch that holds the website (`main` once the work is merged, or the current `claude/badr-portfolio-website-vc8m2b` branch) and the folder **/ (root)**, then click **Save**.

After a minute or two the site is live. The Pages settings screen shows the address.

---

## 4. Connect a custom domain later

1. Buy a domain (for example `example.com`) from any registrar.
2. In the registrar's DNS settings add:
   - for `www.example.com`: a **CNAME** record `www` → `badralkhazzan-del.github.io`
   - for the bare domain `example.com`: four **A** records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (and optionally AAAA records → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`)
3. On GitHub: **Settings** → **Pages** → **Custom domain**, enter the domain, click **Save**, and tick **Enforce HTTPS** once it becomes available (it can take up to 24 hours).
4. Update the address used in links and previews, then commit:
   ```
   node tools/set-site-url.mjs https://www.example.com/
   ```

Official guide: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

---

## 5. Updating the site

The quickest way: tell Claude what changed, for example *"This paper has now been published, here is the link"* or *"Add this new internship"*, and it will edit the right data file. The recipes below are the same steps done by hand.

After any update: change `lastUpdated` in `data/site.js`, add a line to `CHANGELOG.md`, and run `node tools/check.mjs`.

### A paper changes status (Under Review → Accepted → Published)
Open `data/research.js`, find the paper by its `id`, and change `status`:

| Situation | Set |
|---|---|
| Accepted, in production | `status: "accepted"`, `statusDetail: "Accepted for publication; currently in production"` |
| Accepted for a conference | `status: "conference"`, `venue: "Conference name"` |
| Published | `status: "published"`, `venue: "Journal name"`, `year`, and `links: [{ label: "View article", url: "https://official-page" }]`, plus `doi: "10.xxxx/xxxxx"` if one exists |

Only published work may have `links` or a `doi`; the checker stops you otherwise. Never add a journal, DOI or date that is not official.

### Add a new paper
Copy one block in `data/research.js`, give it a new `id`, and fill in `title`, `year`, `status`, `summary`, `topics`, `methods` (keys from `methods` in `data/site.js`). Set `featured: true` to show it on the Home page.

### Add an internship or a new role
In `data/experience.js`, copy a block inside `roles`, set `kind: "Internship"`, `title`, `org`, `start: "2027-01"`, `end: "2027-06"` (or `end: null` while ongoing) and `bullets`. Put it first in the list if it is the most important role.

### Add a project
1. Put images in `assets/img/projects/<project-id>/` as both `.jpg` and `.webp` (about 1200 px wide at most).
2. Copy a block in `data/projects.js`, set a new `id`, `short`, `tier` (`"flagship"` or `"supporting"`), and the text fields.
3. The detail page appears automatically at `project.html?id=<project-id>`. Add that address to `sitemap.xml`.

### Add an award or scholarship
Copy a block in `data/awards.js`. Use `type: "competition"` for competitive awards, `"scholarship"` for scholarships and `"program"` for leadership programs, so the site labels them correctly. Link it with `project: "<project-id>"` or `research: "<paper-id>"`.

### Add a course, workshop or summer program
Add an entry to `data/programs.js` with `title`, `org`, `kind`, `date` and `sort` (`"YYYY-MM-DD"`).

### Replace the CV
1. Download the new Master CV from Google Drive (it may include the phone number).
2. Create the public copy. This removes the phone number, keeps the email and LinkedIn links, and saves `assets/Badr_Aldeen_CV.pdf`:
   ```
   python3 tools/make_public_cv.py path/to/Badr_Aldeen_Master_CV.pdf
   python3 tools/update_cv_preview.py
   ```
   (Both need `pip install pymupdf pillow`. The scripts refuse to save a CV that still contains a phone number.)
3. Update `cv.updated` in `data/site.js`, and any facts that changed (for example the GPA in `data/education.js`).

### Change the profile photo
Replace `assets/profile/badr-aldeen.jpg` and `.webp` (800 × 1000 px, portrait) and `badr-aldeen-480.jpg` / `.webp` (480 × 600 px). Keep the same file names.

### Add a public profile (Google Scholar, ORCID…)
Add it to `data/links.js`. To show it on the page, add a line next to LinkedIn and GitHub in `assets/js/app.js` (search for `L.github`).

---

## 6. Before publishing: run the checks

```
node tools/check.mjs
```

It confirms that every status is valid, every link between papers, projects and awards points to something real, every image exists with alt text, and that no private information (phone number, student number, passport, address, certificate numbers) appears in any published file.

`check.mjs` is published with the site, so it only contains general patterns. The exact private values it also looks for are kept in `tools/private-values.local.txt`, one per line, which is listed in `.gitignore` and never committed. Create that file on any new computer before running the checks (the checker warns when it is missing).

---

## 7. Privacy rules

- The Google Drive package is the private evidence layer. Only curated public assets belong in this repository.
- Never publish: phone number, student number, home address, identity documents, date of birth, banking details, scholarship letters or applications, reviewer or editor correspondence, raw score reports, certificate numbers, or full manuscripts that are not published.
- Certificates verify claims; they do not need to be public. The Awards page says certificates are available on request.

---

## 8. Technical notes

- Plain scripts are used instead of ES modules, so the site also works when opened directly from the file system.
- Images use WebP with a JPEG fallback and load lazily; the portrait loads first.
- Accessibility: semantic landmarks, skip link, keyboard-operable menu and filters, visible focus, alt text, WCAG AA colour contrast, reduced-motion support. Audited with axe-core (no violations at desktop and mobile widths).
- SEO: per-page titles and descriptions, OpenGraph and Twitter tags, `sitemap.xml`, `robots.txt`, Person JSON-LD, and ScholarlyArticle JSON-LD for published papers only.
- Fonts: Source Serif 4 (headings) and Inter (text) from Google Fonts.
