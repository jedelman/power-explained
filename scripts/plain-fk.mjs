#!/usr/bin/env node
/**
 * plain-fk — the gate for the plain river.
 *
 * Walks every chapter manifest, pulls each gesture's `plain:` block, and
 * reports:
 *   - coverage: how many gestures across the book have a plain translation
 *   - per-gesture Flesch–Kincaid grade for every translated block
 *   - any block above the target grade (default 6.0), flagged FAIL
 *
 * The plain edition's whole claim is "5th-grade reading level," so this is the
 * objective test of that claim. Run: node scripts/plain-fk.mjs [targetGrade]
 *
 * Reuses readability() from src/lib/corpus-metrics.mjs so it never drifts from
 * the corpus analyzer.
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";
import { composePlainUnits } from "../src/lib/composePlainBody.mjs";
import { readability } from "../src/lib/corpus-metrics.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BOOK = path.join(ROOT, "src", "content", "book");
const TARGET = Number(process.argv[2] || 6.0);

// Canonical order if the river manifest is present; else all chapter files.
function chapterFiles() {
  const riverPath = path.join(
    ROOT,
    "src",
    "content",
    "manifests",
    "the-river.manifest.yml"
  );
  if (fs.existsSync(riverPath)) {
    const river = yaml.load(fs.readFileSync(riverPath, "utf8")) || {};
    const sources = river.sources || river.chapters || [];
    const files = sources
      .map((s) => path.join(BOOK, `${s}.md`))
      .filter((f) => fs.existsSync(f));
    if (files.length) return files;
  }
  return fs
    .readdirSync(BOOK)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(BOOK, f));
}

let total = 0;
let translated = 0;
const grades = [];
const fails = [];

for (const file of chapterFiles()) {
  const slug = path.basename(file, ".md");
  let res;
  try {
    res = composePlainUnits(file, ROOT);
  } catch {
    continue;
  }
  for (const u of res.units) {
    total += 1;
    if (!u.plain) continue;
    translated += 1;
    const fk = readability(u.plain).fleschKincaidGrade;
    grades.push(fk);
    const flag = fk != null && fk > TARGET ? "FAIL" : "ok";
    if (flag === "FAIL") fails.push({ slug, id: u.id, fk });
    console.log(
      `${flag.padEnd(4)} ${u.id.padEnd(12)} FK ${fk == null ? "  n/a" : fk.toFixed(1).padStart(5)}  (${slug})`
    );
  }
}

const mean =
  grades.length > 0 ? grades.reduce((a, b) => a + b, 0) / grades.length : null;
const max = grades.length ? Math.max(...grades) : null;

console.log("\n── plain river ──────────────────────────────");
console.log(`coverage     ${translated} / ${total} gestures translated`);
console.log(`target grade <= ${TARGET.toFixed(1)}`);
if (mean != null)
  console.log(`mean FK      ${mean.toFixed(2)}    max FK ${max.toFixed(1)}`);
console.log(`over target  ${fails.length}`);
if (fails.length) {
  console.log("\nblocks above target:");
  for (const f of fails) console.log(`  ${f.id} (${f.slug}) FK ${f.fk.toFixed(1)}`);
}
process.exit(fails.length ? 1 : 0);
