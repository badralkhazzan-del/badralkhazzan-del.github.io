#!/usr/bin/env node
/*
 * Portfolio checker: data consistency, missing files and privacy.
 * Run from the repository root:   node tools/check.mjs
 * Exit code 1 means something must be fixed before publishing.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

/* ---------- load data exactly as the browser does ---------- */
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ["site", "links", "research", "projects", "experience", "awards", "education", "programs", "skills"]) {
  const file = path.join(root, "data", f + ".js");
  try { vm.runInContext(fs.readFileSync(file, "utf8"), ctx, { filename: file }); }
  catch (e) { err(`data/${f}.js does not load: ${e.message}`); }
}
const P = ctx.PORTFOLIO || {};
const S = P.site || {};
const exists = (rel) => fs.existsSync(path.join(root, rel));
const ids = (list) => new Set((list || []).map((x) => x.id));
const researchIds = ids(P.research), projectIds = ids(P.projects), awardIds = ids(P.awards);
const roleIds = ids((P.experience || {}).roles);

function checkImage(img, where) {
  if (!img) return;
  for (const ext of [".jpg", ".webp"]) if (!exists(img.src + ext)) err(`${where}: missing image ${img.src}${ext}`);
  if (!img.alt || img.alt.length < 8) err(`${where}: image ${img.src} needs descriptive alt text`);
}
function checkRef(token, where) {
  const [kind, id] = String(token).split(":");
  const ok = { research: researchIds, project: projectIds, award: awardIds, experience: roleIds }[kind];
  if (!ok || !ok.has(id)) err(`${where}: reference "${token}" does not exist`);
}

/* ---------- research ---------- */
const statuses = P.researchStatuses || {};
for (const r of P.research || []) {
  const w = `research "${r.id}"`;
  if (!statuses[r.status]) err(`${w}: unknown status "${r.status}"`);
  for (const f of ["id", "title", "year", "summary"]) if (!r[f]) err(`${w}: missing ${f}`);
  if (r.status !== "published" && (r.links || []).length) err(`${w}: only published work may have public links (status is ${r.status})`);
  if (r.status !== "published" && r.doi) err(`${w}: a DOI is only allowed once the work is published`);
  if (r.status === "published" && !(r.links || []).length) warn(`${w}: published but has no official link`);
  if (r.relatedProject && !projectIds.has(r.relatedProject)) err(`${w}: relatedProject "${r.relatedProject}" does not exist`);
  if (r.relatedAward && !awardIds.has(r.relatedAward)) err(`${w}: relatedAward "${r.relatedAward}" does not exist`);
  for (const m of r.methods || []) if (!(S.methods || {})[m]) err(`${w}: method "${m}" is not defined in data/site.js`);
}

/* ---------- projects ---------- */
for (const p of P.projects || []) {
  const w = `project "${p.id}"`;
  if (!["flagship", "supporting"].includes(p.tier)) err(`${w}: tier must be "flagship" or "supporting"`);
  for (const id of p.relatedResearch || []) if (!researchIds.has(id)) err(`${w}: related research "${id}" does not exist`);
  if (p.recognition && !awardIds.has(p.recognition)) err(`${w}: recognition "${p.recognition}" does not exist`);
  for (const m of p.methods || []) if (!(S.methods || {})[m]) err(`${w}: method "${m}" is not defined in data/site.js`);
  checkImage(p.cover, w + " cover");
  (p.gallery || []).forEach((g, i) => checkImage(g, `${w} gallery[${i}]`));
  if (p.video) {
    if (!exists(p.video.src)) err(`${w}: missing video ${p.video.src}`);
    if (p.video.webm && !exists(p.video.webm)) err(`${w}: missing video ${p.video.webm}`);
  }
  if (p.demo) { if (!exists(p.demo.src)) err(`${w}: missing demo ${p.demo.src}`); checkImage(p.demo.poster, w + " demo poster"); }
  checkImage(p.feature, w + " feature image");
  if (p.document && !exists(p.document.src)) err(`${w}: missing document ${p.document.src}`);
}

/* ---------- awards, experience, skills, site ---------- */
for (const a of P.awards || []) {
  const w = `award "${a.id}"`;
  if (!(P.awardTypes || {})[a.type]) err(`${w}: unknown type "${a.type}"`);
  if (a.project && !projectIds.has(a.project)) err(`${w}: project "${a.project}" does not exist`);
  if (a.research && !researchIds.has(a.research)) err(`${w}: research "${a.research}" does not exist`);
  checkImage(a.image, w);
}
for (const r of (P.experience || {}).roles || []) checkImage(r.image, `role "${r.id}"`);
for (const g of P.skills || []) for (const s of g.items) for (const e of s.evidence || []) checkRef(e, `skill "${s.name}"`);
for (const f of S.focusAreas || []) for (const e of f.evidence || []) checkRef(e, `focus area "${f.title}"`);
if (!exists(S.cv.file)) err(`CV file missing: ${S.cv.file}`);
if (S.cv.preview) for (const ext of [".jpg", ".webp"]) if (!exists(S.cv.preview + ext)) err(`CV preview missing: ${S.cv.preview}${ext}`);
for (const ext of [".jpg", ".webp"]) if (!exists(S.portrait.src + ext)) err(`portrait missing: ${S.portrait.src}${ext}`);
if (!/^\d{4}-\d{2}-\d{2}$/.test(S.lastUpdated || "")) err(`site.lastUpdated must be YYYY-MM-DD`);

/* ---------- local links in HTML ---------- */
const htmlFiles = fs.readdirSync(root).filter((f) => f.endsWith(".html"));
for (const f of htmlFiles) {
  const html = fs.readFileSync(path.join(root, f), "utf8");
  for (const m of html.matchAll(/(?:src|href)="([^"#?]+)[^"]*"/g)) {
    const ref = m[1];
    if (/^(https?:|mailto:|data:)/.test(ref)) continue;
    const rel = ref.replace(/^\//, "");
    if (rel && !exists(rel)) err(`${f}: link to missing file "${ref}"`);
  }
}

/* ---------- privacy scan of every published text file ---------- */
const PRIVATE = [
  [/\+62[\s\d-]{6,}/, "phone number"],
  [/813[\s-]?1315[\s-]?5470/, "phone number"],
  [/2352\d{4}/, "student number"],
  [/students\.uii\.ac\.id/, "student email address"],
  [/7870343/, "passport number"],
  [/01 January 2003|2003-01-01/, "date of birth"],
  [/Gg\.?\s*Mawar|Umbulmartani|Ngemplak/i, "home address"],
  [/4377259/, "certificate number"],
  [/2447\s?2032/, "test appointment number"]
];
const TEXT_EXT = new Set([".html", ".js", ".mjs", ".css", ".md", ".txt", ".xml", ".json", ".svg"]);
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".git") || entry.name === "node_modules") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (TEXT_EXT.has(path.extname(entry.name)) && !full.endsWith(path.join("tools", "check.mjs"))) {
      const text = fs.readFileSync(full, "utf8");
      for (const [re, label] of PRIVATE) if (re.test(text)) err(`PRIVACY: possible ${label} in ${path.relative(root, full)}`);
    }
  }
}
walk(root);

/* ---------- report ---------- */
const counts = Object.keys(statuses).map((k) => `${statuses[k].label}: ${(P.research || []).filter((r) => r.status === k).length}`);
console.log(`Research  ${counts.join(" | ")}`);
console.log(`Projects  ${(P.projects || []).length}   Awards ${(P.awards || []).length}   Programs ${(P.programs || []).length}`);
warnings.forEach((w) => console.log("WARN  " + w));
errors.forEach((e) => console.log("ERROR " + e));
console.log(errors.length ? `\n${errors.length} problem(s) found.` : "\nAll checks passed.");
process.exit(errors.length ? 1 : 0);
