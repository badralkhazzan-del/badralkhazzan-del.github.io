/* ==========================================================================
   Portfolio renderer
   Builds every page from the data files in /data. No build step, no framework.
   Each HTML page sets <body data-page="..."> and provides empty containers.
   ========================================================================== */
(function () {
  "use strict";

  var P = window.PORTFOLIO || {};
  var S = P.site || {};
  var L = P.links || {};
  var body = document.body;
  var page = body.getAttribute("data-page") || "";
  var root = body.getAttribute("data-root") || ""; // "/" on the 404 page, empty elsewhere

  /* Prefix site-relative links with the root (needed only when a page can be served from any path). */
  function u(path) {
    if (!root || /^(https?:|mailto:|#|\/)/.test(path)) return path;
    return root + path;
  }

  /* ------------------------------------------------------------------ helpers */

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function byId(list, id) {
    for (var i = 0; i < (list || []).length; i++) if (list[i].id === id) return list[i];
    return null;
  }
  function fill(id, html) {
    var node = document.getElementById(id);
    if (node) node.innerHTML = html;
    return node;
  }
  function plural(n, one, many) { return n === 1 ? one : many; }
  function shortTitle(project) { return project.short || project.title.split(":")[0]; }

  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function fmtMonth(ym) {
    if (!ym) return "";
    var parts = String(ym).split("-");
    return MONTHS[parseInt(parts[1], 10) - 1].slice(0, 3) + " " + parts[0];
  }
  function fmtDate(ymd) {
    if (!ymd) return "";
    var p = String(ymd).split("-");
    return parseInt(p[2], 10) + " " + MONTHS[parseInt(p[1], 10) - 1] + " " + p[0];
  }
  function fmtRange(start, end) {
    if (!start) return "";
    return fmtMonth(start) + " – " + (end ? fmtMonth(end) : "Present");
  }

  /* Icons: 24x24, stroke-based unless noted. */
  var ICON = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    download: '<path d="M12 3v12m0 0l-5-5m5 5l5-5M4 19h16"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    pin: '<path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5L2 9z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
    play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5.5 3.5-5.5 3.5z"/>',
    badge: '<path d="M12 3l2.4 1.8 3 .1.9 2.8 2.3 1.9-1 2.8 1 2.8-2.3 1.9-.9 2.8-3 .1L12 21l-2.4-1.8-3-.1-.9-2.8-2.3-1.9 1-2.8-1-2.8 2.3-1.9.9-2.8 3-.1z"/><path d="M9 12l2 2 4-4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>',
    route: '<circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="6" r="2.2"/><circle cx="17" cy="17" r="2.2"/><circle cx="7" cy="7" r="2.2"/><path d="M7 16.5L7 9.2M9 7.3l8 -1M18.4 8.1l-1 6.7M15 17.3l-7.8.6"/>',
    wave: '<path d="M3 17c2.5 0 2.5-10 5-10s2.5 10 5 10 2.5-10 5-10 2.5 5 3 5"/><path d="M3 21h18" opacity=".5"/>',
    decision: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/><circle cx="16" cy="8" r="2"/>',
    leaf: '<path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15"/><path d="M5 19l7-7"/>'
  };
  var BRAND = {
    linkedin: '<path fill="currentColor" stroke="none" d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    github: '<path fill="currentColor" stroke="none" d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57l-.02-2.04c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22l-.01 3.29c0 .31.21.69.82.57A12 12 0 0 0 12 .3"/>'
  };
  function icon(name, cls) {
    var inner = ICON[name] || BRAND[name] || "";
    return '<svg class="' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + inner + "</svg>";
  }

  /* <picture> with WebP + JPEG fallback. `img.src` has no extension. */
  function pic(img, opts) {
    if (!img) return "";
    opts = opts || {};
    var style = img.focus ? ' style="object-position:' + esc(img.focus) + '"' : "";
    return '<picture><source type="image/webp" srcset="' + esc(img.src) + '.webp">' +
      '<img src="' + esc(img.src) + '.jpg" alt="' + esc(img.alt || "") + '"' +
      (img.w ? ' width="' + img.w + '" height="' + img.h + '"' : "") +
      (opts.eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async"' + style + "></picture>";
  }

  function statusBadge(key) {
    var st = (P.researchStatuses || {})[key];
    if (!st) return "";
    return '<span class="badge badge-' + esc(key) + '">' + esc(st.label) + "</span>";
  }

  function authorsHtml(list) {
    if (!list || !list.length) return "";
    return list.map(function (name) {
      return name === P.authorSelf ? "<strong>" + esc(name) + "</strong>" : esc(name);
    }).join(", ");
  }

  /* Resolve "research:id" / "project:id" / "experience:id" / "award:id" references. */
  function ref(token) {
    var parts = String(token).split(":"), kind = parts[0], id = parts[1], item;
    if (kind === "research" && (item = byId(P.research, id))) return { href: "research.html#r-" + id, label: item.short || item.title };
    if (kind === "project" && (item = byId(P.projects, id))) return { href: "project.html?id=" + id, label: shortTitle(item) };
    if (kind === "award" && (item = byId(P.awards, id))) return { href: "awards.html#" + id, label: item.short || item.title + ", " + item.event };
    if (kind === "experience") {
      var role = byId((P.experience || {}).roles, id);
      if (role) return { href: "experience.html#" + id, label: role.org.split(",")[0].replace(" (Volunteer)", "") };
    }
    return null;
  }

  function sortedResearch() {
    var st = P.researchStatuses || {};
    return (P.research || []).slice().sort(function (a, b) {
      var d = (st[a.status] ? st[a.status].order : 99) - (st[b.status] ? st[b.status].order : 99);
      return d !== 0 ? d : (b.year || 0) - (a.year || 0);
    });
  }
  function countStatus(key) {
    return (P.research || []).filter(function (r) { return r.status === key; }).length;
  }

  function venueLine(r) {
    var bits = [];
    if (r.status === "published") {
      if (r.venue) bits.push("<em>" + esc(r.venue) + "</em>");
      if (r.doi) bits.push('DOI: <a href="https://doi.org/' + esc(r.doi) + '" rel="noopener">' + esc(r.doi) + "</a>");
    } else if (r.status === "accepted") {
      bits.push(esc(r.statusDetail || "Accepted for publication"));
      if (r.venue) bits.push("<em>" + esc(r.venue) + "</em>");
    } else if (r.status === "conference") {
      bits.push(esc(r.statusDetail || "Accepted for presentation"));
      if (r.venue) bits.push("<em>" + esc(r.venue) + "</em>");
    } else if (r.status === "under-review") {
      bits.push("Submitted, under review");
    } else if (r.status === "in-progress") {
      bits.push("Ongoing research");
    } else {
      bits.push("Publication status not stated");
    }
    return bits.join(" · ");
  }

  /* ------------------------------------------------------------------ header & footer */

  function renderHeader() {
    var current = body.getAttribute("data-nav") || page;
    var items = (S.nav || []).map(function (n) {
      return '<li><a href="' + esc(u(n.href)) + '"' + (n.id === current ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a></li>";
    }).join("");
    var html =
      '<div class="wrap">' +
        '<a class="brand" href="' + esc(u("index.html")) + '" aria-label="' + esc(S.name) + ', home">' +
          '<span class="brand-mark" aria-hidden="true">' + esc(S.initials) + "</span>" +
          '<span class="brand-text"><span class="brand-name">' + esc(S.name) + '</span><span class="brand-role">' + esc(S.identity.slice(0, 2).join(" · ")) + "</span></span>" +
        "</a>" +
        '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav"><span class="nav-toggle-bars" aria-hidden="true"><span></span></span>Menu</button>' +
        '<nav class="site-nav" id="site-nav" aria-label="Main"><ul>' + items +
          '<li class="nav-cta"><a class="btn btn-primary btn-sm" href="' + esc(u("contact.html")) + '"' + (current === "contact" ? ' aria-current="page"' : "") + ">Contact</a></li>" +
        "</ul></nav>" +
      "</div>";
    var header = fill("site-header", html);
    if (!header) return;

    var toggle = header.querySelector(".nav-toggle");
    var nav = header.querySelector(".site-nav");
    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      nav.classList.toggle("is-open", open);
    }
    toggle.addEventListener("click", function () { setOpen(toggle.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !header.contains(e.target)) setOpen(false);
    });
  }

  function renderFooter() {
    var navLinks = (S.nav || []).map(function (n) { return '<li><a href="' + esc(u(n.href)) + '">' + esc(n.label) + "</a></li>"; }).join("");
    var html =
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          "<div>" +
            '<p class="footer-name">' + esc(S.name) + "</p>" +
            "<p>" + esc(S.identity.join(" · ")) + "</p>" +
            "<p>" + esc(S.location) + "</p>" +
          "</div>" +
          '<div><h2>Explore</h2><ul>' + navLinks + '<li><a href="' + esc(u("contact.html")) + '">Contact</a></li></ul></div>' +
          '<div><h2>Connect</h2><ul>' +
            '<li><a href="mailto:' + esc(L.email) + '">' + esc(L.email) + "</a></li>" +
            '<li><a href="' + esc(L.linkedin) + '" rel="me noopener">LinkedIn</a></li>' +
            '<li><a href="' + esc(L.github) + '" rel="me noopener">GitHub</a></li>' +
            '<li><a href="' + esc(u(S.cv.file)) + '">Download CV (PDF)</a></li>' +
          "</ul></div>" +
        "</div>" +
        '<div class="footer-base">' +
          '<span class="updated">Portfolio last updated ' + esc(fmtDate(S.lastUpdated)) + "</span>" +
          "<span>© " + esc(String(S.lastUpdated).slice(0, 4)) + " " + esc(S.name) + "</span>" +
        "</div>" +
      "</div>";
    fill("site-footer", html);
  }

  /* ------------------------------------------------------------------ shared blocks */

  function pubCard(r) {
    return '<article class="card pub-card">' +
      "<h3>" + esc(r.title) + "</h3>" +
      '<div class="pub-card-top">' + statusBadge(r.status) + '<span class="small muted">' + esc(r.year) + "</span></div>" +
      "<p>" + venueLine(r) + "</p>" +
      '<a class="text-link" href="research.html#r-' + esc(r.id) + '">Read summary ' + icon("arrow") + "</a>" +
    "</article>";
  }

  function awardMini(a) {
    return '<a class="card award-mini" href="awards.html#' + esc(a.id) + '" style="text-decoration:none">' +
      '<span class="award-title">' + esc(a.title) + "</span>" +
      '<span class="award-event">' + esc(a.event) + "</span>" +
      '<span class="award-sub">' + esc(a.for) + "</span>" +
    "</a>";
  }

  function recognitionLine(p) {
    var a = p.recognition ? byId(P.awards, p.recognition) : null;
    if (a) return '<p class="recognition-line">' + icon("award") + esc(a.title) + ", " + esc(a.event) + "</p>";
    if (p.recognitionNote) return '<p class="recognition-line">' + icon("award") + esc(p.recognitionNote) + "</p>";
    return "";
  }

  function highlights(p, max) {
    var items = (p.results || []).slice(0, max || 2);
    if (!items.length) return "";
    return '<div class="project-highlights">' + items.map(function (r) {
      return "<div><strong>" + esc(r.value) + "</strong><span>" + esc(r.label) + "</span></div>";
    }).join("") + "</div>";
  }

  function projectFeature(p) {
    var research = (p.relatedResearch || []).map(function (id) { return byId(P.research, id); }).filter(Boolean);
    var researchLink = research.length
      ? '<a class="btn btn-ghost" href="research.html#r-' + esc(research[0].id) + '">Related research ' + statusBadge(research[0].status) + "</a>"
      : "";
    return '<article class="project-feature">' +
      '<div class="project-media">' + pic(p.cover) + "</div>" +
      '<div class="project-body">' +
        "<h3>" + esc(p.title) + "</h3>" +
        '<p class="project-kicker">' + esc(p.category) + "</p>" +
        '<p class="tagline">' + esc(p.tagline) + "</p>" +
        highlights(p, 2) +
        recognitionLine(p) +
        '<div class="btn-row"><a class="btn btn-primary" href="project.html?id=' + esc(p.id) + '">Read case study ' + icon("arrow") + "</a>" + researchLink + "</div>" +
      "</div>" +
    "</article>";
  }

  function projectCard(p) {
    var thumb;
    if (p.cover) {
      thumb = '<div class="thumb' + (p.id === "hydraulic-press" ? " contain" : "") + '">' + pic(p.cover) + "</div>";
    } else if (p.entities) {
      thumb = '<div class="thumb schema" aria-hidden="true">' + p.entities.map(function (e) { return '<span class="entity">' + esc(e) + "</span>"; }).join("") + "</div>";
    } else {
      thumb = "";
    }
    return '<article class="card project-card">' + thumb +
      '<div class="body">' +
        "<h3>" + esc(p.title) + "</h3>" +
        '<p class="project-kicker">' + esc(p.category) + "</p>" +
        "<p>" + esc(p.tagline) + "</p>" +
        recognitionLine(p) +
        '<a class="text-link" href="project.html?id=' + esc(p.id) + '">Project details ' + icon("arrow") + "</a>" +
      "</div>" +
    "</article>";
  }

  function sectionHead(title, intro, linkHref, linkText) {
    return '<div class="section-head"><div>' +
      "<h2>" + esc(title) + "</h2>" +
      (intro ? "<p>" + esc(intro) + "</p>" : "") +
      "</div>" +
      (linkHref ? '<a class="text-link" href="' + esc(linkHref) + '">' + esc(linkText) + " " + icon("arrow") + "</a>" : "") +
    "</div>";
  }

  /* ------------------------------------------------------------------ pages */

  var pages = {};

  pages.home = function () {
    var edu = ((P.education || {}).degrees || [])[0] || {};
    var identity = S.identity.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    var motif =
      '<svg class="portrait-motif" viewBox="0 0 120 150" fill="none" aria-hidden="true">' +
        '<path d="M14 18 L70 44 L30 92 L96 120" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4"/>' +
        '<circle cx="14" cy="18" r="6" fill="#FAF7F0" stroke="currentColor" stroke-width="1.6"/>' +
        '<circle cx="70" cy="44" r="6" fill="#2B6763"/>' +
        '<circle cx="30" cy="92" r="6" fill="#FAF7F0" stroke="currentColor" stroke-width="1.6"/>' +
        '<rect x="90" y="114" width="12" height="12" rx="2" fill="#1B2F55"/>' +
      "</svg>";

    var html =
      '<section class="hero"><div class="wrap">' +
        "<div>" +
          "<h1>" + esc(S.name).replace(/(\S+-\S+)$/, '<span class="nowrap">$1</span>') + "</h1>" +
          '<ul class="hero-identity" aria-label="Fields">' + identity + "</ul>" +
          '<p class="lead">' + esc(S.statement) + "</p>" +
          '<p class="hero-stage">' + icon("cap") + "<span>" + esc(S.stage) + (edu.gpa ? " GPA " + esc(edu.gpa) + "." : "") + "</span></p>" +
          '<div class="btn-row">' +
            '<a class="btn btn-primary" href="research.html">Explore research ' + icon("arrow") + "</a>" +
            '<a class="btn btn-secondary" href="projects.html">View projects</a>' +
            '<a class="btn btn-secondary" href="' + esc(S.cv.file) + '" download>' + icon("download") + "Download CV</a>" +
          "</div>" +
          '<ul class="icon-links">' +
            '<li><a href="' + esc(L.linkedin) + '" rel="me noopener">' + icon("linkedin") + "LinkedIn</a></li>" +
            '<li><a href="' + esc(L.github) + '" rel="me noopener">' + icon("github") + "GitHub</a></li>" +
            '<li><a href="mailto:' + esc(L.email) + '">' + icon("mail") + "Email</a></li>" +
            '<li><a href="contact.html">' + icon("arrow") + "Contact</a></li>" +
          "</ul>" +
        "</div>" +
        '<figure class="portrait">' + motif +
          '<div class="portrait-media"><div class="portrait-frame"><picture>' +
            '<source type="image/webp" srcset="' + esc(S.portrait.small) + ".webp 480w, " + esc(S.portrait.src) + '.webp 800w" sizes="(max-width: 860px) 340px, 420px">' +
            '<img src="' + esc(S.portrait.src) + '.jpg" srcset="' + esc(S.portrait.small) + ".jpg 480w, " + esc(S.portrait.src) + '.jpg 800w" sizes="(max-width: 860px) 340px, 420px" width="' + S.portrait.width + '" height="' + S.portrait.height + '" alt="' + esc(S.portrait.alt) + '" fetchpriority="high" decoding="async">' +
          "</picture></div></div>" +
          "<figcaption>" + icon("pin") + esc(S.location) + "</figcaption>" +
        "</figure>" +
      "</div></section>";

    // At a glance (computed from data)
    var competitive = (P.awards || []).filter(function (a) { return a.type === "competition"; }).length;
    var tiles = [
      [countStatus("published"), plural(countStatus("published"), "Published work", "Published works")],
      [countStatus("accepted"), "Accepted, forthcoming"],
      [countStatus("conference"), plural(countStatus("conference"), "Conference paper", "Conference papers")],
      [countStatus("under-review"), plural(countStatus("under-review"), "Manuscript under review", "Manuscripts under review")],
      [competitive, plural(competitive, "Competitive award", "Competitive awards")],
      [(edu.gpa || "").split("/")[0].trim(), "GPA out of 4.00"]
    ].filter(function (t) { return t[0] !== 0 && t[0] !== ""; });
    html += '<section class="section-tight" aria-label="At a glance" style="padding-top:0"><div class="wrap"><div class="stats">' +
      tiles.map(function (t) { return '<div class="stat"><div class="stat-value">' + esc(t[0]) + '</div><div class="stat-label">' + esc(t[1]) + "</div></div>"; }).join("") +
      "</div></div></section>";

    // Focus areas
    var focusIcons = ["route", "wave", "decision", "leaf"];
    html += '<section class="section section-alt"><div class="wrap">' +
      sectionHead("What I work on", "Better decisions for complex operational systems: how a system behaves, where it breaks, and which decision improves it.") +
      '<div class="grid grid-4">' + (S.focusAreas || []).map(function (f, i) {
        var ev = (f.evidence || []).map(ref).filter(Boolean).map(function (r) { return '<a class="chip" href="' + esc(r.href) + '">' + esc(r.label) + "</a>"; }).join("");
        return '<article class="card focus-card">' + icon(focusIcons[i % focusIcons.length], "focus-icon") + "<h3>" + esc(f.title) + "</h3><p>" + esc(f.text) + '</p><div class="evidence">' + ev + "</div></article>";
      }).join("") + "</div></div></section>";

    // Featured research
    var featured = sortedResearch().filter(function (r) { return r.featured; });
    html += '<section class="section"><div class="wrap">' +
      sectionHead("Selected research", "Each item carries its real status. Only published work links to a public copy.", "research.html", "All research") +
      '<div class="grid grid-2">' + featured.map(pubCard).join("") + "</div></div></section>";

    // Flagship projects
    var flagship = (P.projects || []).filter(function (p) { return p.tier === "flagship"; });
    html += '<section class="section section-alt"><div class="wrap">' +
      sectionHead("Flagship projects", "The three projects closest to my current direction. Two of them won first place in competition.", "projects.html", "All projects") +
      flagship.map(projectFeature).join("") + "</div></section>";

    // Recognition + now
    var comp = (P.awards || []).filter(function (a) { return a.type === "competition"; });
    html += '<section class="section"><div class="wrap two-col">' +
      "<div>" + sectionHead("Awards", null, "awards.html", "All recognition") + '<div class="grid grid-2">' + comp.map(awardMini).join("") + "</div></div>" +
      "<div>" + sectionHead("Currently") + '<ul class="now-list">' + (S.now || []).map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
        '<h3 style="margin-top:32px;font-size:1.05rem">Open to</h3><ul class="now-list">' + (S.openTo || []).map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ul>" +
      "</div>" +
    "</div></section>";

    html += contactBand();
    fill("page-content", html);
  };

  function contactBand() {
    return '<section class="section-tight"><div class="wrap"><div class="cta-band">' +
      "<div><h2>Let's talk</h2><p>Internships, research collaboration or graduate study: I would be glad to hear from you.</p></div>" +
      '<div class="btn-row"><a class="btn btn-primary" href="mailto:' + esc(L.email) + '">' + icon("mail") + "Email me</a>" +
      '<a class="btn btn-secondary" href="' + esc(L.linkedin) + '" rel="noopener">' + icon("linkedin") + "LinkedIn</a></div>" +
    "</div></div></section>";
  }

  pages.about = function () {
    var A = S.about || {};
    var story = (A.story || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");

    // Methods map: which research and projects use each method.
    var rows = Object.keys(S.methods || {}).map(function (key) {
      var items = [];
      (P.projects || []).forEach(function (p) { if ((p.methods || []).indexOf(key) > -1) items.push({ id: p.id, href: "project.html?id=" + p.id, label: shortTitle(p), kind: "Project" }); });
      (P.research || []).forEach(function (r) {
        if ((r.methods || []).indexOf(key) < 0) return;
        var dup = r.relatedProject && items.some(function (i) { return i.id === r.relatedProject; });
        if (!dup) items.push({ href: "research.html#r-" + r.id, label: r.short || r.title, kind: "Research" });
      });
      if (!items.length) return "";
      return '<div class="row"><strong>' + esc(S.methods[key]) + '</strong><ul class="chip-list">' +
        items.map(function (i) { return '<li><a class="chip" href="' + esc(i.href) + '" title="' + esc(i.kind) + '">' + esc(i.label) + "</a></li>"; }).join("") +
      "</ul></div>";
    }).join("");

    var iyec = byId(P.awards, "iyec12");
    var html =
      '<section class="section"><div class="wrap about-grid">' +
        '<div class="prose">' + story + "</div>" +
        '<aside class="stack">' +
          (iyec && iyec.image ? '<figure class="about-figure"><div class="frame">' + pic(iyec.image) + "</div><figcaption>Delegate of Germany at IYEC 12, Malaysia and Singapore, November 2025.</figcaption></figure>" : "") +
          '<div class="card"><h2 style="font-size:1.05rem">Quick facts</h2><ul class="now-list">' +
            "<li>" + esc(S.stage) + "</li>" +
            "<li>Based in " + esc(S.location) + "</li>" +
            "<li>" + esc(((P.education || {}).languages || []).map(function (l) { return l.name; }).join(", ")) + "</li>" +
          "</ul></div>" +
        "</aside>" +
      "</div></section>" +

      '<section class="section section-alt"><div class="wrap">' +
        sectionHead("Methods and where I have used them", "Generated from my research and project records, so it stays current as new work is added.") +
        '<div class="methods-map">' + rows + "</div>" +
      "</div></section>" +

      '<section class="section"><div class="wrap">' +
        sectionHead("Direction") +
        '<blockquote class="pull">' + esc(S.direction) + "</blockquote>" +
      "</div></section>" +

      '<section class="section section-alt"><div class="wrap two-col">' +
        "<div>" + sectionHead("Qualities") + '<ul class="tag-list">' + (A.qualities || []).map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></div>" +
        "<div>" + sectionHead("Interests") + '<ul class="tag-list">' + (A.interests || []).map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></div>" +
      "</div></section>" +
      contactBand();
    fill("page-content", html);
  };

  pages.research = function () {
    var statuses = P.researchStatuses || {};
    var keys = Object.keys(statuses).sort(function (a, b) { return statuses[a].order - statuses[b].order; })
      .filter(function (k) { return countStatus(k) > 0; });

    var legend = '<details class="legend-details"' + (window.innerWidth > 720 ? " open" : "") + "><summary>What the status labels mean</summary>" +
      '<ul class="status-legend">' + keys.map(function (k) {
        return "<li>" + statusBadge(k) + "<span>" + esc(statuses[k].note) + "</span></li>";
      }).join("") + "</ul></details>";

    var filters = '<ul class="filter-bar" aria-label="Filter research by status">' +
      '<li><button class="filter-btn" type="button" data-filter="all" aria-pressed="true">All<span class="count">' + (P.research || []).length + "</span></button></li>" +
      keys.map(function (k) {
        return '<li><button class="filter-btn" type="button" data-filter="' + esc(k) + '" aria-pressed="false">' + esc(statuses[k].label) + '<span class="count">' + countStatus(k) + "</span></button></li>";
      }).join("") + "</ul>";

    var groups = keys.map(function (k) {
      var items = sortedResearch().filter(function (r) { return r.status === k; });
      return '<section class="pub-group" id="status-' + esc(k) + '" data-status="' + esc(k) + '" aria-labelledby="h-' + esc(k) + '">' +
        '<div class="pub-group-head"><h2 id="h-' + esc(k) + '">' + esc(statuses[k].label) + "</h2><p>" + items.length + " " + plural(items.length, "item", "items") + "</p></div>" +
        items.map(pubItem).join("") +
      "</section>";
    }).join("");

    fill("page-content",
      '<section class="section-tight" style="padding-bottom:0"><div class="wrap">' + legend + "</div></section>" +
      '<section class="section"><div class="wrap">' + filters + '<div id="pub-groups">' + groups + "</div></div></section>");

    var buttons = document.querySelectorAll(".filter-btn");
    function apply(filter, updateHash) {
      if (filter !== "all" && !statuses[filter]) filter = "all";
      Array.prototype.forEach.call(buttons, function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-filter") === filter ? "true" : "false"); });
      Array.prototype.forEach.call(document.querySelectorAll(".pub-group"), function (g) {
        g.hidden = !(filter === "all" || g.getAttribute("data-status") === filter);
      });
      if (updateHash && window.history && history.replaceState) {
        history.replaceState(null, "", filter === "all" ? location.pathname : "#" + filter);
      }
    }
    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-filter"), true); });
    });
    var hash = decodeURIComponent((location.hash || "").slice(1));
    if (statuses[hash]) apply(hash, false);
  };

  function pubItem(r) {
    var links = (r.links || []).map(function (l) {
      return '<a class="btn btn-secondary btn-sm" href="' + esc(l.url) + '" rel="noopener">' + esc(l.label) + " " + icon("external") + "</a>";
    }).join("");
    var project = r.relatedProject ? byId(P.projects, r.relatedProject) : null;
    var award = r.relatedAward ? byId(P.awards, r.relatedAward) : null;
    var extras = "";
    if (project) extras += '<a class="text-link small" href="project.html?id=' + esc(project.id) + '">Related project: ' + esc(shortTitle(project)) + " " + icon("arrow") + "</a>";
    if (award) extras += '<a class="text-link small" href="awards.html#' + esc(award.id) + '">' + esc(award.short || award.title + ", " + award.event) + " " + icon("arrow") + "</a>";
    var topics = (r.topics || []).length ? '<ul class="chip-list" aria-label="Topics">' + r.topics.map(function (t) { return '<li><span class="chip">' + esc(t) + "</span></li>"; }).join("") + "</ul>" : "";
    // First sentence stays visible; the rest of the summary and the topics open on request.
    var split = String(r.summary || "").match(/^(.+?[.?!])\s+(?=[A-Z])([\s\S]+)$/);
    var lede = split ? split[1] : r.summary, rest = split ? split[2] : "";
    var more = (rest || topics) ? '<details class="pub-more"><summary>Read more</summary>' +
      (rest ? '<p class="pub-summary">' + esc(rest) + "</p>" : "") + (topics ? '<div class="pub-topics">' + topics + "</div>" : "") + "</details>" : "";
    return '<article class="pub" id="r-' + esc(r.id) + '">' +
      '<div class="pub-meta"><span class="pub-year">' + esc(r.year) + "</span>" + statusBadge(r.status) + "<span>" + esc(r.type || "") + "</span></div>" +
      "<div>" +
        "<h3>" + esc(r.title) + "</h3>" +
        '<p class="pub-venue">' + venueLine(r) + "</p>" +
        (r.authors ? '<p class="pub-authors">' + authorsHtml(r.authors) + "</p>" : "") +
        '<p class="pub-summary">' + esc(lede) + "</p>" + more +
        ((links || extras) ? '<div class="pub-foot">' + links + extras + "</div>" : "") +
      "</div>" +
    "</article>";
  }

  pages.projects = function () {
    var flagship = (P.projects || []).filter(function (p) { return p.tier === "flagship"; });
    var supporting = (P.projects || []).filter(function (p) { return p.tier !== "flagship"; });
    fill("page-content",
      '<section class="section"><div class="wrap">' +
        sectionHead("Flagship projects", "Operations research, queueing and sustainable engineering, each with a full case study.") +
        flagship.map(projectFeature).join("") +
      "</div></section>" +
      '<section class="section section-alt"><div class="wrap">' +
        sectionHead("Supporting projects", "Engineering, design, business and data-modelling projects that broaden the base behind my current direction.") +
        '<div class="grid grid-2">' + supporting.map(projectCard).join("") + "</div>" +
      "</div></section>" + contactBand());
  };

  pages.project = function () {
    var params = new URLSearchParams(location.search);
    var id = params.get("id");
    var list = P.projects || [];
    var p = byId(list, id);
    if (!p) {
      fill("page-intro", '<div class="wrap"><p class="crumbs"><a href="projects.html">Projects</a></p><h1>Project not found</h1><p>This project link may be out of date.</p></div>');
      fill("page-content", '<section class="section"><div class="wrap"><a class="btn btn-primary" href="projects.html">See all projects</a></div></section>');
      return;
    }
    document.title = p.title + " · " + S.name;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", p.tagline);

    var award = p.recognition ? byId(P.awards, p.recognition) : null;
    var tierLabel = p.tier === "flagship" ? "Flagship project" : "Supporting project";
    fill("page-intro",
      '<div class="wrap">' +
        '<p class="crumbs"><a href="projects.html">Projects</a> / ' + esc(shortTitle(p)) + "</p>" +
        "<h1>" + esc(p.title) + "</h1>" +
        "<p>" + esc(p.tagline) + "</p>" +
        '<div class="btn-row" style="margin-top:18px;gap:8px">' +
          '<span class="badge badge-plain">' + esc(tierLabel) + "</span>" +
          (p.year ? '<span class="badge badge-plain">' + esc(p.year) + "</span>" : "") +
          (award ? '<span class="badge badge-award">' + esc(award.title) + ", " + esc(award.event) + "</span>" : "") +
          (p.recognitionNote ? '<span class="badge badge-award">' + esc(p.recognitionNote) + "</span>" : "") +
        "</div>" +
      "</div>");

    var main = "";
    if (p.demo) {
      main += '<section aria-labelledby="demo-h"><h2 id="demo-h">' + esc(p.demo.title) + "</h2>" +
        '<div class="demo-frame" id="demo-frame">' +
          '<button class="demo-poster" type="button" id="demo-load" aria-label="Load the interactive map (about 1.2 MB)">' + pic(p.demo.poster) +
          '<span class="demo-cta">' + icon("play") + "Load interactive map</span></button>" +
        "</div>" +
        '<p class="small muted" style="margin-top:10px">' + esc(p.demo.note) + ' <a href="' + esc(p.demo.src) + '" target="_blank" rel="noopener">Open full screen</a>.</p></section>';
    } else if (p.video) {
      main += '<section aria-labelledby="video-h"><h2 id="video-h">Prototype demo</h2>' +
        '<div class="video-frame"><video controls muted playsinline preload="none" width="' + p.video.w + '" height="' + p.video.h + '" poster="' + esc(p.video.poster) + '.jpg" aria-label="' + esc(p.video.label) + '">' +
        (p.video.webm ? '<source src="' + esc(p.video.webm) + '" type="video/webm">' : "") +
        '<source src="' + esc(p.video.src) + '" type="video/mp4"></video></div>' +
        '<p class="small muted" style="margin-top:10px">' + esc(p.video.label) + ". No audio.</p></section>";
    }
    if (p.feature) {
      main += '<section aria-labelledby="feature-h"><h2 id="feature-h">' + esc(p.featureTitle || "The design") + "</h2>" +
        '<figure class="feature-figure"><a class="frame" href="' + esc(p.feature.src) + '.jpg" target="_blank" rel="noopener" aria-label="Open full-size image: ' + esc(p.feature.alt) + '">' + pic(p.feature) + "</a>" +
        (p.feature.caption ? "<figcaption>" + esc(p.feature.caption) + (p.document ? ' <a href="' + esc(p.document.src) + '" target="_blank" rel="noopener">' + esc(p.document.label) + "</a>." : "") + "</figcaption>" : "") +
        "</figure></section>";
    }
    if (p.problem) main += "<section><h2>The problem</h2><p>" + esc(p.problem) + "</p></section>";
    if (p.context) main += "<section><h2>Context</h2><p>" + esc(p.context) + "</p></section>";
    if (p.role) main += "<section><h2>My role</h2><p>" + esc(p.role) + "</p></section>";
    if ((p.approach || []).length) main += '<section><h2>Approach</h2><ol class="steps">' + p.approach.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") + "</ol></section>";
    if (p.entities) {
      main += '<section><h2>Data model</h2><p class="muted small">Entities</p><ul class="chip-list">' + p.entities.map(function (e) { return '<li><span class="chip">' + esc(e) + "</span></li>"; }).join("") + "</ul>" +
        ((p.relationships || []).length ? '<p class="muted small" style="margin:18px 0 6px">Relationships</p><ul class="rel-list">' + p.relationships.map(function (r) {
          return "<li><span>" + esc(r.link) + '</span><span class="rel-type">' + esc(r.type) + "</span></li>";
        }).join("") + "</ul>" : "") + "</section>";
    }
    if ((p.results || []).length) main += '<section><h2>Results</h2><div class="stats stats-results">' + p.results.map(function (r) { return '<div class="stat"><div class="stat-value">' + esc(r.value) + '</div><div class="stat-label">' + esc(r.label) + "</div></div>"; }).join("") + "</div></section>";
    if ((p.findings || []).length) main += '<section><h2>Key findings so far</h2><ul class="now-list">' + p.findings.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></section>";
    if (p.caveat) main += '<section><div class="note">' + icon("info") + "<p>" + esc(p.caveat) + "</p></div></section>";

    var gallery = p.gallery || [];
    if (gallery.length) {
      main += '<section><h2>Visual evidence</h2><div class="gallery">' + gallery.map(function (g) {
        return '<figure><a class="frame" href="' + esc(g.src) + '.jpg" target="_blank" rel="noopener" aria-label="Open full-size image: ' + esc(g.alt) + '">' + pic(g) + "</a>" + (g.caption ? "<figcaption>" + esc(g.caption) + "</figcaption>" : "") + "</figure>";
      }).join("") + "</div></section>";
    } else if (p.cover && !p.video && !p.demo) {
      main += '<section><h2>Visual</h2><figure class="cover">' + pic(p.cover) + "</figure>" + (p.coverCaption ? "<figcaption>" + esc(p.coverCaption) + "</figcaption>" : "") + "</section>";
    }

    // Aside
    var aside = "";
    if (award) {
      aside += '<div class="card award-mini aside-block"><h2>Recognition</h2><span class="award-title">' + esc(award.title) + '</span><span class="award-event">' + esc(award.event) + '</span><span class="award-sub">' + esc(award.date) + '</span><a class="text-link small" href="awards.html#' + esc(award.id) + '">About this award ' + icon("arrow") + "</a></div>";
    }
    var methods = (p.methods || []).map(function (m) { return S.methods[m]; }).filter(Boolean);
    if (methods.length) aside += '<div class="aside-block"><h2>Methods</h2><ul class="chip-list">' + methods.map(function (m) { return '<li><span class="chip">' + esc(m) + "</span></li>"; }).join("") + "</ul></div>";
    if (p.document) aside += '<div class="aside-block"><h2>Document</h2><a class="btn btn-secondary btn-sm" href="' + esc(p.document.src) + '" target="_blank" rel="noopener">' + icon("file") + esc(p.document.label) + "</a></div>";
    if ((p.tools || []).length) aside += '<div class="aside-block"><h2>Tools & techniques</h2><ul class="chip-list">' + p.tools.map(function (m) { return '<li><span class="chip">' + esc(m) + "</span></li>"; }).join("") + "</ul></div>";
    var rel = (p.relatedResearch || []).map(function (rid) { return byId(P.research, rid); }).filter(Boolean);
    if (rel.length) aside += '<div class="aside-block"><h2>Related research</h2>' + rel.map(pubCard).join("") + "</div>";

    // Pager
    var idx = list.indexOf(p);
    var prev = list[idx - 1], next = list[idx + 1];
    var pager = '<nav class="pager" aria-label="More projects">' +
      (prev ? '<a href="project.html?id=' + esc(prev.id) + '"><span>Previous</span><strong>' + esc(shortTitle(prev)) + "</strong></a>" : "") +
      (next ? '<a class="next" href="project.html?id=' + esc(next.id) + '"><span>Next</span><strong>' + esc(shortTitle(next)) + "</strong></a>" : "") +
    "</nav>";

    fill("page-content",
      '<section class="section"><div class="wrap">' +
        '<div class="detail-grid"><div class="detail-main">' + main + pager + "</div>" +
        '<aside class="detail-aside" aria-label="Project facts">' + aside +
          '<a class="text-link" href="projects.html">' + icon("arrow") + " All projects</a>" +
        "</aside></div>" +
      "</div></section>");

    var load = document.getElementById("demo-load");
    if (load) {
      load.addEventListener("click", function () {
        var frame = document.getElementById("demo-frame");
        frame.innerHTML = '<iframe src="' + esc(p.demo.src) + '" title="' + esc(p.demo.title) + '" loading="lazy"></iframe>';
        var ifr = frame.querySelector("iframe");
        if (ifr) ifr.focus();
      });
    }
  };

  pages.experience = function () {
    var E = P.experience || {};
    var roles = (E.roles || []).map(function (r) {
      var dates = fmtRange(r.start, r.end);
      var prog = (r.progression || []).length ? '<ul class="progression" aria-label="Progression">' + r.progression.map(function (s) {
        return '<li><span class="when">' + esc(s.when) + "</span> " + esc(s.what) + "</li>";
      }).join("") + "</ul>" : "";
      var related = (r.related || []).length ? '<p class="small muted" style="margin-top:10px"><strong>Also:</strong> ' + r.related.map(esc).join(" ") + "</p>" : "";
      var tags = (r.tags || []).length ? '<ul class="chip-list" style="margin-top:14px">' + r.tags.map(function (t) { return '<li><span class="chip">' + esc(t) + "</span></li>"; }).join("") + "</ul>" : "";
      return '<li id="' + esc(r.id) + '" class="' + (r.kind === "Technical" ? "is-technical" : "") + '">' +
        '<article class="card role-card"><div>' +
          '<p class="kind-tag">' + esc(r.kind) + "</p>" +
          '<div class="role-head"><h3>' + esc(r.title) + "</h3>" + (dates ? '<span class="role-dates">' + esc(dates) + "</span>" : "") + "</div>" +
          '<p class="role-org">' + esc(r.org) + "</p>" +
          (r.summary ? '<p class="role-summary">' + esc(r.summary) + "</p>" : "") +
          "<ul>" + (r.bullets || []).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
          prog + related + tags +
        "</div>" +
        (r.image ? '<div class="role-img">' + pic(r.image) + "</div>" : "") +
        "</article></li>";
    }).join("");

    var community = (E.community || []).map(function (c) {
      return '<article class="card" id="' + esc(c.id) + '"><p class="kind-tag">' + esc(c.role) + " · " + esc(c.date) + "</p>" +
        '<h3 style="margin-top:8px">' + esc(c.title) + '</h3><p class="role-org">' + esc(c.org) + "</p><p>" + esc(c.text) + "</p></article>";
    }).join("");

    fill("page-content",
      '<section class="section"><div class="wrap">' +
        sectionHead("Technical and leadership roles", "Technical training in simulation and modelling, and leadership in student and community organizations.") +
        '<ol class="timeline">' + roles + "</ol>" +
      "</div></section>" +
      '<section class="section section-alt"><div class="wrap">' +
        sectionHead("Community & volunteering") +
        '<div class="grid grid-2">' + community + "</div>" +
      "</div></section>" + contactBand());
  };

  pages.awards = function () {
    var types = P.awardTypes || {};
    var comp = (P.awards || []).filter(function (a) { return a.type === "competition"; });
    var other = (P.awards || []).filter(function (a) { return a.type !== "competition"; });

    function links(a) {
      var out = [];
      if (a.project) { var p = byId(P.projects, a.project); if (p) out.push('<a class="text-link small" href="project.html?id=' + esc(p.id) + '">Project: ' + esc(shortTitle(p)) + " " + icon("arrow") + "</a>"); }
      if (a.research) { var r = byId(P.research, a.research); if (r) out.push('<a class="text-link small" href="research.html#r-' + esc(r.id) + '">' + esc(r.short || r.title) + " " + statusBadge(r.status) + "</a>"); }
      return out.length ? '<div class="pub-foot">' + out.join("") + "</div>" : "";
    }

    function cert(a) {
      var c = a.certificate;
      if (!c) return "";
      return '<a class="cert-link" href="' + esc(c.src) + '.jpg" target="_blank" rel="noopener" aria-label="View certificate (opens full size): ' + esc(c.alt) + '">' +
        '<span class="cert-thumb">' + pic({ src: c.src + "-thumb", w: 480, h: Math.round(480 * c.h / c.w), alt: "" }) + "</span>" +
        '<span class="cert-label">' + icon("badge") + "View certificate " + icon("external") + "</span></a>";
    }

    var compHtml = comp.map(function (a) {
      return '<article class="card award-card" id="' + esc(a.id) + '">' +
        (a.image ? '<div class="award-img">' + pic(a.image) + "</div>" : "") +
        "<div>" +
          '<p class="award-title">' + esc(a.title) + "</p>" +
          '<p class="award-event">' + esc(a.event) + "</p>" +
          '<p class="award-sub">' + esc([a.eventDetail, a.date].filter(Boolean).join(" · ")) + "</p>" +
          "<p><strong>" + esc(a.for) + "</strong></p>" +
          (a.detail ? '<p class="muted">' + esc(a.detail) + "</p>" : "") +
          links(a) + cert(a) +
        "</div></article>";
    }).join("");

    var otherHtml = other.map(function (a) {
      return '<article class="card" id="' + esc(a.id) + '">' +
        '<p class="award-title" style="font-size:1.2rem;margin-top:0">' + esc(a.title) + "</p>" +
        '<p class="award-event">' + esc(a.event) + '</p><p class="award-sub">' + esc(a.date) + " · " + esc(a.for) + "</p>" +
        (a.detail ? '<p class="muted small">' + esc(a.detail) + "</p>" : "") + cert(a) +
      "</article>";
    }).join("");

    var extra = (P.projects || []).filter(function (p) { return p.recognitionNote; }).map(function (p) {
      return '<li><a href="project.html?id=' + esc(p.id) + '">' + esc(p.recognitionNote) + "</a> (" + esc(shortTitle(p)) + ")</li>";
    }).join("");

    fill("page-content",
      '<section class="section"><div class="wrap">' +
        sectionHead("Competitive awards", "Results from competitions and an international conference, each linked to the work behind it.") +
        '<div class="grid grid-2">' + compHtml + "</div>" +
      "</div></section>" +
      '<section class="section section-alt"><div class="wrap">' +
        sectionHead("Scholarship and leadership development", "Listed separately from competitive awards.") +
        '<div class="grid grid-2">' + otherHtml + "</div>" +
        (extra ? '<h3 style="margin-top:36px;font-size:1.05rem">Other recognition</h3><ul>' + extra + "</ul>" : "") +
        '<p class="small muted" style="margin-top:24px">' + icon("info", "inline-icon") + " Certificates are shown where available, with reference numbers hidden. Other supporting documents are available on request.</p>" +
      "</div></section>" + contactBand());
  };

  pages.education = function () {
    var E = P.education || {};
    var LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

    var degrees = (E.degrees || []).map(function (d) {
      var sch = d.scholarship ? byId(P.awards, d.scholarship) : null;
      return '<article class="card degree">' +
        "<div>" +
          "<h3>" + esc(d.degree) + "</h3>" +
          '<div class="facts"><span>' + icon("cap") + esc(d.institution) + "</span><span>" + icon("pin") + esc(d.location) + "</span><span>" + esc(d.period) + "</span></div>" +
          (sch ? '<p class="small"><strong>Scholarship:</strong> <a href="awards.html#' + esc(sch.id) + '">' + esc(sch.title) + "</a> (" + esc(sch.date) + ")</p>" : "") +
          '<p class="small muted" style="margin-bottom:8px">Relevant coursework</p>' +
          '<ul class="chip-list">' + (d.coursework || []).map(function (c) { return '<li><span class="chip">' + esc(c) + "</span></li>"; }).join("") + "</ul>" +
        "</div>" +
        (d.gpa ? '<div class="gpa"><strong>' + esc(d.gpa.split("/")[0].trim()) + "</strong><span>GPA / " + esc((d.gpa.split("/")[1] || "").trim()) + "</span></div>" : "") +
      "</article>";
    }).join("");

    var creds = (E.certifications || []).map(function (c) {
      return '<article class="card cred"><div class="cred-icon">' + icon(c.id === "capm" ? "badge" : "globe") + "</div><div>" +
        '<p class="kind-tag">' + esc(c.kind) + "</p><h3>" + esc(c.name) + "</h3>" +
        "<p>" + esc(c.issuer) + " · " + esc(c.issued) + (c.validUntil ? ", valid until " + esc(c.validUntil) : "") + "</p></div></article>";
    }).join("");

    var langs = (E.languages || []).map(function (l) {
      var n = l.level === "Native" ? 6 : LEVELS.indexOf(l.level) + 1;
      var bars = ""; for (var i = 1; i <= 6; i++) bars += '<i class="' + (i <= n ? "on" : "") + '"></i>';
      return "<li><strong>" + esc(l.name) + "</strong><span>" + esc(l.level) + (l.note ? " · " + esc(l.note) : "") + '</span><div class="lang-bar" aria-hidden="true">' + bars + "</div></li>";
    }).join("");

    var skills = (P.skills || []).map(function (g) {
      return '<article class="card skill-group"><h3>' + esc(g.group) + "</h3><ul>" + g.items.map(function (s) {
        var r = (s.evidence || []).map(ref).filter(Boolean)[0];
        return "<li><span>" + esc(s.name) + "</span>" + (r ? '<span class="used">Used in <a href="' + esc(r.href) + '">' + esc(r.label) + "</a></span>" : "") + "</li>";
      }).join("") + "</ul></article>";
    }).join("");

    var programs = (P.programs || []).slice().sort(function (a, b) { return a.sort < b.sort ? 1 : -1; }).map(function (p) {
      return '<li class="' + (p.highlight ? "highlight" : "") + '"><span class="when">' + esc(p.date) + '</span><div class="what"><strong>' + esc(p.title) + "</strong><span>" + esc(p.kind) + " · " + esc(p.org) + (p.note ? " · " + esc(p.note) : "") + "</span></div></li>";
    }).join("");

    fill("page-content",
      '<section class="section" id="degree"><div class="wrap">' + sectionHead("Degree") + degrees + "</div></section>" +
      '<section class="section section-alt" id="credentials"><div class="wrap two-col">' +
        "<div>" + sectionHead("Certifications") + '<div class="stack">' + creds + "</div></div>" +
        "<div>" + sectionHead("Languages", "CEFR levels. Arabic is my native language.") + '<ul class="lang-list">' + langs + "</ul></div>" +
      "</div></section>" +
      '<section class="section" id="skills"><div class="wrap">' +
        sectionHead("Skills by area", "Grouped by area, with a link to where each skill was used when there is a clear example.") +
        '<div class="grid grid-3">' + skills + "</div>" +
      "</div></section>" +
      '<section class="section section-alt" id="programs"><div class="wrap">' +
        sectionHead("Programs, courses & workshops", "Summer courses, international programs and short academic events, newest first.") +
        '<ul class="program-list">' + programs + "</ul>" +
      "</div></section>" + contactBand());
  };

  pages.cv = function () {
    var E = P.education || {};
    var d = (E.degrees || [])[0] || {};
    var comp = (P.awards || []).filter(function (a) { return a.type === "competition"; });
    fill("page-content",
      '<section class="section"><div class="wrap detail-grid">' +
        "<div>" +
          '<div class="cv-viewer"><object data="' + esc(S.cv.file) + '#view=FitH" type="application/pdf" aria-label="CV of ' + esc(S.name) + ' (PDF)">' +
            '<a class="cv-preview" href="' + esc(S.cv.file) + '" aria-label="Open the CV (PDF)">' + pic({ src: S.cv.preview, w: S.cv.previewW, h: S.cv.previewH, alt: "Preview of the first page of the CV of " + S.name }) + "</a>" +
          "</object></div>" +
        "</div>" +
        '<aside class="detail-aside">' +
          '<div class="card stack">' +
            '<a class="btn btn-primary" href="' + esc(S.cv.file) + '" download>' + icon("download") + "Download CV (PDF)</a>" +
            '<a class="btn btn-secondary" href="' + esc(S.cv.file) + '" target="_blank" rel="noopener">' + icon("file") + "Open in a new tab</a>" +
            '<p class="small muted">Updated ' + esc(fmtDate(S.cv.updated)) + ". " + esc(S.cv.note) + "</p>" +
          "</div>" +
          '<div class="aside-block card"><h2>At a glance</h2><ul class="now-list small">' +
            "<li>" + esc(d.degree) + ", " + esc(d.institution) + " (" + esc(d.period) + ")</li>" +
            "<li>GPA " + esc(d.gpa) + "</li>" +
            (E.certifications || []).map(function (c) { return "<li>" + esc(c.name) + "</li>"; }).join("") +
            "<li>" + comp.length + " competitive awards</li>" +
          "</ul></div>" +
        "</aside>" +
      "</div></section>");
  };

  pages.contact = function () {
    var items =
      '<li><div class="contact-item"><span class="ci-icon">' + icon("mail") + '</span><a href="mailto:' + esc(L.email) + '" style="text-decoration:none;color:inherit"><strong>Email</strong><span>' + esc(L.email) + "</span></a>" +
        '<button class="btn btn-secondary btn-sm copy-btn" type="button" data-copy="' + esc(L.email) + '">' + icon("copy") + '<span>Copy</span></button></div></li>' +
      '<li><a class="contact-item" href="' + esc(L.linkedin) + '" rel="me noopener"><span class="ci-icon">' + icon("linkedin") + "</span><span><strong>LinkedIn</strong><span>Professional profile and updates</span></span></a></li>" +
      '<li><a class="contact-item" href="' + esc(L.github) + '" rel="me noopener"><span class="ci-icon">' + icon("github") + "</span><span><strong>GitHub</strong><span>" + esc(L.github.replace("https://", "")) + "</span></span></a></li>" +
      '<li><div class="contact-item"><span class="ci-icon">' + icon("pin") + "</span><span><strong>Location</strong><span>" + esc(S.location) + "</span></span></div></li>";

    fill("page-content",
      '<section class="section"><div class="wrap two-col">' +
        '<div><ul class="contact-list">' + items + "</ul></div>" +
        "<div>" +
          sectionHead("What I am looking for") +
          '<ul class="now-list">' + (S.openTo || []).map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul>" +
          '<div class="btn-row" style="margin-top:28px"><a class="btn btn-primary" href="mailto:' + esc(L.email) + '">' + icon("mail") + "Send an email</a>" +
          '<a class="btn btn-secondary" href="cv.html">' + icon("file") + "View CV</a></div>" +
        "</div>" +
      "</div></section>");

    var btn = document.querySelector(".copy-btn");
    if (btn && navigator.clipboard) {
      btn.addEventListener("click", function () {
        navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(function () {
          btn.querySelector("span").textContent = "Copied";
          setTimeout(function () { btn.querySelector("span").textContent = "Copy"; }, 2000);
        });
      });
    } else if (btn) { btn.hidden = true; }
  };

  /* ------------------------------------------------------------------ structured data */

  function absolute(path) { return (S.url || "").replace(/\/$/, "") + "/" + path; }

  function jsonLd() {
    var blocks = [];
    var person = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: S.name,
      url: S.url,
      image: absolute(S.portrait.src + ".jpg"),
      email: "mailto:" + L.email,
      description: S.statement,
      jobTitle: "Industrial Engineering student",
      affiliation: { "@type": "CollegeOrUniversity", name: "Universitas Islam Indonesia" },
      address: { "@type": "PostalAddress", addressLocality: "Yogyakarta", addressCountry: "ID" },
      knowsAbout: ["Industrial Engineering", "Operations Research", "Decision Analytics", "Supply Chain Management", "Simulation", "Optimization"],
      knowsLanguage: ((P.education || {}).languages || []).map(function (l) { return l.name; }),
      sameAs: [L.linkedin, L.github].filter(Boolean),
      hasCredential: ((P.education || {}).certifications || []).filter(function (c) { return c.id === "capm"; }).map(function (c) {
        return { "@type": "EducationalOccupationalCredential", name: c.name, recognizedBy: { "@type": "Organization", name: "Project Management Institute" } };
      }),
      award: (P.awards || []).filter(function (a) { return a.type === "competition"; }).map(function (a) { return a.title + ", " + a.event; })
    };
    if (page === "home" || page === "about" || page === "contact") blocks.push(person);
    if (page === "home") blocks.push({ "@context": "https://schema.org", "@type": "WebSite", name: S.name, url: S.url });

    // ScholarlyArticle only for published items with an official link.
    if (page === "research") {
      (P.research || []).filter(function (r) { return r.status === "published" && r.links && r.links.length; }).forEach(function (r) {
        var art = {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: r.title,
          name: r.title,
          author: (r.authors || []).map(function (a) { return { "@type": "Person", name: a }; }),
          datePublished: String(r.year),
          url: r.links[0].url,
          inLanguage: "en"
        };
        if (r.doi) art.sameAs = "https://doi.org/" + r.doi;
        blocks.push(art);
      });
    }
    blocks.forEach(function (b) {
      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.textContent = JSON.stringify(b);
      document.head.appendChild(s);
    });
  }

  /* ------------------------------------------------------------------ boot */

  try {
    renderHeader();
    if (pages[page]) pages[page]();
    renderFooter();
    jsonLd();
    if (location.hash && page !== "research") {
      var target = document.getElementById(location.hash.slice(1));
      if (target) target.scrollIntoView();
    } else if (page === "research" && /^#r-/.test(location.hash)) {
      var item = document.getElementById(location.hash.slice(1));
      if (item) item.scrollIntoView();
    }
  } catch (err) {
    var box = document.getElementById("page-content");
    if (box) box.innerHTML = '<div class="wrap section"><p>Sorry, this page could not be displayed. Please <a href="' + esc((S.cv || {}).file || "assets/Badr_Aldeen_CV.pdf") + '">download the CV</a> instead.</p></div>';
    if (window.console) console.error(err);
  }
})();
