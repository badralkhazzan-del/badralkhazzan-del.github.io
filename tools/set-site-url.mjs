#!/usr/bin/env node
/*
 * Change the public address of the site everywhere it is written
 * (HTML meta tags, data/site.js, sitemap.xml, robots.txt).
 *
 *   node tools/set-site-url.mjs https://www.example.com/
 *
 * Use it after renaming the repository or connecting a custom domain.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
let next = process.argv[2];
if (!next || !/^https:\/\/[^/]+(\/.*)?$/.test(next)) {
  console.error("Usage: node tools/set-site-url.mjs https://your-domain/");
  process.exit(1);
}
if (!next.endsWith("/")) next += "/";

const siteJs = path.join(root, "data", "site.js");
const current = (fs.readFileSync(siteJs, "utf8").match(/url:\s*"([^"]+)"/) || [])[1];
if (!current) { console.error("Could not find the current url in data/site.js"); process.exit(1); }
if (current === next) { console.log("Already set to " + next); process.exit(0); }

const files = fs.readdirSync(root).filter((f) => f.endsWith(".html"))
  .concat(["sitemap.xml", "robots.txt", "data/site.js"]);
let changed = 0;
for (const f of files) {
  const full = path.join(root, f);
  if (!fs.existsSync(full)) continue;
  const text = fs.readFileSync(full, "utf8");
  const updated = text.split(current).join(next);
  if (updated !== text) { fs.writeFileSync(full, updated); changed++; console.log("updated " + f); }
}
console.log(`\n${current}  ->  ${next}   (${changed} files)`);
