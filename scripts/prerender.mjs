// Post-build step: writes route-specific static HTML heads so crawlers see the
// correct title/canonical/OG/JSON-LD WITHOUT executing JS. No dependencies.
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, getRouteSeo, buildJsonLd } from "../src/seo/seo.js";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setMeta(html, attr, name, content) {
  const tag = `<meta ${attr}="${name}" content="${esc(content)}" />`;
  const re = new RegExp(`<meta\\s+${attr}="${name}"[^>]*?>`, "s");
  return re.test(html) ? html.replace(re, tag) : html.replace("</head>", `  ${tag}\n</head>`);
}

function render(seo) {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`);
  html = setMeta(html, "name", "description", seo.description);
  html = setMeta(html, "name", "robots", seo.noindex ? "noindex, follow" : "index, follow");
  html = html.replace(/\s*<link rel="canonical"[^>]*>/, "");
  if (!seo.noindex) {
    html = html.replace("</head>", `  <link rel="canonical" href="${seo.canonical}" />\n</head>`);
  }
  if (seo.noindex) html = html.replace(/\s*<meta property="og:url"[^>]*>/, "");
  else html = setMeta(html, "property", "og:url", seo.canonical);
  html = setMeta(html, "property", "og:title", seo.title);
  html = setMeta(html, "property", "og:description", seo.description);
  html = setMeta(html, "name", "twitter:title", seo.title);
  html = setMeta(html, "name", "twitter:description", seo.description);
  const ld = buildJsonLd(seo);
  if (ld) {
    html = html.replace("</head>", `  <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, "\\u003c")}</script>\n</head>`);
  }
  return html;
}

for (const path of Object.keys(ROUTES)) {
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  writeFileSync(join(dist, file), render(getRouteSeo(path)));
}
writeFileSync(join(dist, "404.html"), render(getRouteSeo("/404")));
console.log(`prerender: wrote ${Object.keys(ROUTES).length} routes + 404.html`);
