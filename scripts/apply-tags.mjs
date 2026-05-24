#!/usr/bin/env node
/**
 * Apply a flat tag-additions plan to gestures.
 *
 * Input: a JSON file of the form
 *
 *   {
 *     "plateau": "P-01",                  (optional, for sanity check only)
 *     "additions": {
 *       "G-01-001": ["place/hampton-roads"],
 *       "G-01-003": ["place/hampton-roads", "place/new-york", ...],
 *       ...
 *     }
 *   }
 *
 * Tags are merged into the gesture's existing `tags:` list (deduped).
 * Frontmatter ordering of other fields is preserved.
 *
 * Usage:
 *   node scripts/apply-tags.mjs <plan.json>           # apply
 *   node scripts/apply-tags.mjs <plan.json> --dry-run # preview, no writes
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const GROOT = path.join(REPO_ROOT, "src", "content", "gestures");

const planPath = process.argv[2];
const DRY = process.argv.includes("--dry-run");
if (!planPath) {
  console.error("Usage: apply-tags.mjs <plan.json> [--dry-run]");
  process.exit(2);
}

const plan = JSON.parse(fs.readFileSync(path.resolve(planPath), "utf8"));
if (!plan.additions || typeof plan.additions !== "object") {
  console.error("plan.additions must be an object {gestureId: [tag, ...]}");
  process.exit(1);
}

// Index gestures by id
const byId = new Map();
for (const f of fs.readdirSync(GROOT)) {
  if (!f.endsWith(".md") || f === "README.md") continue;
  if (!f.startsWith("G-")) continue;
  const text = fs.readFileSync(path.join(GROOT, f), "utf8");
  const end = text.indexOf("\n---\n", 4);
  if (end === -1) continue;
  const fm = yaml.load(text.slice(4, end)) || {};
  if (!fm.id) continue;
  byId.set(fm.id, {
    file: path.join(GROOT, f),
    fmRaw: text.slice(4, end),
    body: text.slice(end + 5),
    fm,
  });
}

let touched = 0;
let added = 0;
const missing = [];

for (const [gid, newTags] of Object.entries(plan.additions)) {
  const entry = byId.get(gid);
  if (!entry) {
    missing.push(gid);
    continue;
  }
  const existing = new Set(entry.fm.tags || []);
  const before = existing.size;
  for (const t of newTags) existing.add(t);
  const after = existing.size;
  const delta = after - before;
  if (delta === 0) continue;

  if (DRY) {
    console.log(`  ${gid}: +${delta}  (${newTags.join(", ")})`);
  } else {
    const fm = { ...entry.fm, tags: [...existing] };
    const newYaml = yaml.dump(fm, { lineWidth: 100, noRefs: true }).trimEnd();
    const newText = `---\n${newYaml}\n---\n${entry.body.replace(/^\n+/, "\n")}`;
    fs.writeFileSync(entry.file, newText);
  }
  touched++;
  added += delta;
}

if (missing.length) {
  console.error(`MISSING ${missing.length} gesture(s): ${missing.join(", ")}`);
}
console.log(`${DRY ? "[dry-run]" : "Applied"}: ${added} tag(s) across ${touched} gesture(s).`);
