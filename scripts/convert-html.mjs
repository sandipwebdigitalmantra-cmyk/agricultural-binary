// Programmatic HTML -> TSX converter for Negila Sene legacy pages.
// Reads every *.html file from ../Frontend-design and emits a Next.js
// route under src/app/<slug>/page.tsx. Page-specific content lives
// inside dangerouslySetInnerHTML so the original markup, attributes,
// inline SVGs, CSS-variable styles, and event-relevant data attributes
// are preserved exactly. Header/footer/scripts come from React components.

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const sourceDir = path.resolve(projectRoot, "..", "Frontend-design");
const appDir = path.resolve(projectRoot, "src", "app");

// Map of HTML filename (without extension) to the route slug used by Next.js.
// "index" maps to "" (root route); everything else uses its filename.
const slugFor = (name) => (name === "index" ? "" : name);

// Convert "filename.html" or "./foo.html" to a Next.js route path.
const htmlHrefToRoute = (href) => {
  const file = href.replace(/^\.?\/?/, "").replace(/\.html$/, "");
  if (file === "index" || file === "") return "/";
  return "/" + file;
};

function extractBodyClass(html) {
  const match = html.match(/<body[^>]*class="([^"]*)"/i);
  return match ? match[1].trim() : "";
}

function extractTitle(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? match[1].trim() : "";
}

function extractMain(html) {
  const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  return match ? match[1] : "";
}

function rewriteAssetsAndLinks(content) {
  // Local asset references -> /assets/...
  content = content.replace(/src="assets\//g, 'src="/assets/');
  content = content.replace(/href="assets\//g, 'href="/assets/');
  // Internal anchors *.html -> /route. Skip absolute URLs and hash-only links.
  content = content.replace(/href="([^"#:]+\.html)(#[^"]*)?"/g, (_m, file, hash) => {
    return `href="${htmlHrefToRoute(file)}${hash || ""}"`;
  });
  return content;
}

function escapeForTemplate(str) {
  // The HTML is embedded inside a backtick template literal in the TSX file.
  // Escape backslashes, backticks, and ${ to keep the template literal safe.
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
}

function buildTsx({ slug, bodyClass, title, mainHtml }) {
  const safeHtml = escapeForTemplate(mainHtml);
  const titleLine = title ? `// ${title}` : "";
  const route = slug === "" ? "/" : "/" + slug;

  return `import BodyClass from "@/components/BodyClass";

${titleLine ? titleLine + "\n" : ""}// Auto-generated from Frontend-design/${slug === "" ? "index" : slug}.html
// Route: ${route}
const html = \`${safeHtml}\`;

export default function Page() {
  return (
    <>
      <BodyClass className=${JSON.stringify(bodyClass)} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
`;
}

async function readSourceFiles() {
  const entries = await fs.readdir(sourceDir);
  return entries
    .filter((name) => name.endsWith(".html"))
    .map((name) => ({
      name,
      base: name.replace(/\.html$/, ""),
      full: path.join(sourceDir, name),
    }));
}

async function emitPage({ base, html }) {
  const bodyClass = extractBodyClass(html);
  const title = extractTitle(html);
  let mainHtml = extractMain(html);
  if (!mainHtml) {
    // Some pages might not have a <main> wrapper; fall back to body.
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) mainHtml = bodyMatch[1];
  }

  // Strip any trailing <script src=...></script> tags that referenced script.js.
  mainHtml = mainHtml.replace(/<script[\s\S]*?<\/script>/gi, "");

  mainHtml = rewriteAssetsAndLinks(mainHtml);

  const slug = slugFor(base);
  const tsx = buildTsx({ slug, bodyClass, title, mainHtml });

  const targetDir = slug === "" ? appDir : path.join(appDir, slug);
  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(path.join(targetDir, "page.tsx"), tsx, "utf8");
  return { slug, bodyClass, route: slug === "" ? "/" : "/" + slug };
}

async function main() {
  const files = await readSourceFiles();
  console.log(`Found ${files.length} HTML files in ${sourceDir}`);
  const results = [];
  for (const f of files) {
    const html = await fs.readFile(f.full, "utf8");
    const out = await emitPage({ base: f.base, html });
    results.push(out);
    console.log(`  -> ${out.route} (body=${out.bodyClass || "-"})`);
  }
  console.log(`Wrote ${results.length} pages to ${appDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
