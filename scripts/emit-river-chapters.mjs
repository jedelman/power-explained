#!/usr/bin/env node
/**
 * Emit the river as chapter-delimited plain text for the PDF renderer
 * (scripts/render-book-pdf.py). Each chapter is prefixed with a sentinel
 * line `@@@CHAPTER:<slug>@@@` so the typesetter can start chapters on a
 * fresh page. Body text is exactly what composePlateauBody produces.
 *
 * Usage: node scripts/emit-river-chapters.mjs [out.txt]   (default /tmp/river-chapters.txt)
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";
import { composePlateauBody } from "../src/lib/composePlateauBody.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const man = yaml.load(
  fs.readFileSync(path.join(ROOT, "src/content/manifests/the-river.manifest.yml"), "utf8")
);

const out = [];
for (const slug of man.sources) {
  const body = composePlateauBody(path.join(ROOT, "src/content/book", slug + ".md"), ROOT);
  out.push(`@@@CHAPTER:${slug}@@@\n${body.trim()}`);
}

const dest = process.argv[2] || "/tmp/river-chapters.txt";
fs.writeFileSync(dest, out.join("\n\n"));
console.error(`wrote ${man.sources.length} chapters -> ${dest}`);
