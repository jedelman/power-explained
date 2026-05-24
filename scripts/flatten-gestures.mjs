#!/usr/bin/env node
/**
 * Flatten gestures: move src/content/gestures/P-NN/NNN[a]-slug.md
 * to                   src/content/gestures/G-NN-NNN[a]-slug.md
 *
 * One-shot migration for the chapter-restructure work. Uses `git mv` so
 * file history follows. After migration the per-plateau directories are
 * removed (README.md is hoisted up one level).
 *
 * Run from repo root:
 *   node scripts/flatten-gestures.mjs --dry-run   # preview
 *   node scripts/flatten-gestures.mjs --apply     # execute
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { execSync } from "node:child_process";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const GROOT = path.join(REPO_ROOT, "src", "content", "gestures");

const APPLY = process.argv.includes("--apply");

function readFm(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  if (!text.startsWith("---\n")) return null;
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) return null;
  return yaml.load(text.slice(4, end)) || {};
}

function gitMv(from, to) {
  const rel = (p) => path.relative(REPO_ROOT, p);
  execSync(`git mv "${rel(from)}" "${rel(to)}"`, { cwd: REPO_ROOT });
}

const moves = [];
const errors = [];

for (const entry of fs.readdirSync(GROOT, { withFileTypes: true })) {
  if (!entry.isDirectory() || !entry.name.startsWith("P-")) continue;
  const pid = entry.name;
  const dir = path.join(GROOT, pid);

  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith(".md")) continue;
    if (f === "README.md") continue;

    const src = path.join(dir, f);
    const fm = readFm(src);
    if (!fm || !fm.id) {
      errors.push(`${src}: missing frontmatter id`);
      continue;
    }
    const expectedPlateau = "P-" + fm.id.split("-")[1];
    if (expectedPlateau !== pid) {
      errors.push(`${src}: id ${fm.id} → ${expectedPlateau} but lives in ${pid}`);
      continue;
    }
    // strip leading NNN[a]- from filename to recover slug portion
    const slugPart = f.replace(/^\d+[a-z]?-/, "");
    if (slugPart === f) {
      errors.push(`${src}: filename does not match NNN[a]-slug.md`);
      continue;
    }
    const newName = `${fm.id}-${slugPart}`;
    const dst = path.join(GROOT, newName);
    moves.push({ src, dst, id: fm.id });
  }
}

console.log(`Found ${moves.length} gestures across ${
  new Set(moves.map(m => m.id.split("-")[1])).size
} plateaus.`);
if (errors.length) {
  console.error(`\n${errors.length} ERRORS:`);
  for (const e of errors) console.error("  " + e);
  process.exit(1);
}

// Detect destination collisions
const seen = new Map();
for (const m of moves) {
  if (seen.has(m.dst)) {
    console.error(`COLLISION: ${m.dst} from ${seen.get(m.dst)} and ${m.src}`);
    process.exit(1);
  }
  seen.set(m.dst, m.src);
}
console.log("No filename collisions.");

if (!APPLY) {
  console.log("\nDry-run. Re-run with --apply to execute git mv.");
  for (const m of moves.slice(0, 5)) {
    console.log(`  ${path.relative(REPO_ROOT, m.src)} → ${path.relative(REPO_ROOT, m.dst)}`);
  }
  if (moves.length > 5) console.log(`  ... and ${moves.length - 5} more`);
  process.exit(0);
}

console.log("\nApplying...");
for (const m of moves) gitMv(m.src, m.dst);
console.log(`Moved ${moves.length} files.`);

// Remove now-empty P-NN dirs (and hoist any stray README files, though none expected)
for (const entry of fs.readdirSync(GROOT, { withFileTypes: true })) {
  if (!entry.isDirectory() || !entry.name.startsWith("P-")) continue;
  const dir = path.join(GROOT, entry.name);
  const remaining = fs.readdirSync(dir);
  if (remaining.length === 0) {
    fs.rmdirSync(dir);
    console.log(`Removed empty ${path.relative(REPO_ROOT, dir)}`);
  } else {
    console.log(`KEPT ${path.relative(REPO_ROOT, dir)} (still contains: ${remaining.join(", ")})`);
  }
}

console.log("\nDone.");
