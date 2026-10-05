/* ==========================================================================
   Language and theme, applied in <head> before the page is drawn (no flash).
   Language: ?lang=en|id|ar in the address, else the saved choice, else English.
   Theme: the saved choice, else the visitor's system setting.
   assets/js/app.js renders the page and handles the switches.
   ========================================================================== */
(function () {
  var d = document.documentElement;
  var LANGS = { en: 1, id: 1, ar: 1 };
  var lang = null, theme = null, store = null;
  try { store = window.localStorage; } catch (e) {}

  var fromUrl = (location.search.match(/[?&]lang=([a-z]{2})(?:&|$)/) || [])[1];
  if (fromUrl && LANGS[fromUrl]) {
    lang = fromUrl;
    try { store.setItem("lang", lang); } catch (e) {}
  }
  try { if (!lang) lang = store.getItem("lang"); theme = store.getItem("theme"); } catch (e) {}
  if (!LANGS[lang]) lang = "en";
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  d.setAttribute("lang", lang);
  d.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  d.setAttribute("data-theme", theme);
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0F1726" : "#FAF7F0");

  if (lang !== "en") d.setAttribute("data-i18n-pending", "");
  if (lang === "ar") {
    var font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600&family=Noto+Naskh+Arabic:wght@500;600&display=swap";
    document.head.appendChild(font);
  }
})();
