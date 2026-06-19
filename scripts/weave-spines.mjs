#!/usr/bin/env node
/**
 * weave-spines — the coverage layer of the tapestry.
 *
 * Goal (Jason, 2026-06-19): every river gesture on at least one walkable path.
 * The connection a thread asserts must already be Jason's — so every spine here
 * is built from a tag Jason already assigned. No invented connections, no
 * composed invocations: a spine is the book's own tag, gathered in river order.
 *
 * Two axes (the "practices + spines hybrid"):
 *   - PRACTICES — the practice/* verbs ("what the book does": attending, naming,
 *     building, holding, ...). The wizard's craft, in motion.
 *   - SPINES — the concept/image/motif/person/place/school tags ("what the book
 *     is about"), chosen by greedy set-cover so the fewest threads cover the most
 *     still-uncovered gestures (existing curated threads count as already-covering).
 *
 * Output: src/content/manifests/paths/spine-<tag>.md, one per chosen tag.
 * These are regenerated idempotently (only spine-*.md are touched). Curated
 * threads (every other manifest) are never modified. Marked `kind: spine` so the
 * threads index can section them under the curated walks.
 *
 * Run: node scripts/weave-spines.mjs        (write)
 *      node scripts/weave-spines.mjs --dry   (report only)
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GES = path.join(ROOT, "src/content/gestures");
const PATHS = path.join(ROOT, "src/content/manifests/paths");
const DRY = process.argv.includes("--dry");

// --- config ---------------------------------------------------------------
const PRACTICE_MIN = 4;      // a practice verb needs this many gestures to be a walk
const SPINE_TOTAL_MIN = 6;   // a spine must be a real walk (this many stops)
const SPINE_GAIN_MIN = 2;    // ...and must newly cover at least this many gestures
const SPINE_NS = ["concept/", "image/", "motif/", "person/", "place/", "school/"];
// too generic to be a meaningful walk (they touch nearly everything)
const DENY = new Set(["concept/commons", "concept/community", "concept/practice"]);

// --- gesture index + tags --------------------------------------------------
const idx = new Map();
for (const f of fs.readdirSync(GES)) {
  if (!f.startsWith("G-") || !f.endsWith(".md")) continue;
  idx.set(f.split("-").slice(0, 3).join("-"), path.join(GES, f));
}
const _fm = new Map();
function fmOf(id) {
  if (_fm.has(id)) return _fm.get(id);
  const fp = idx.get(id);
  let fm = {};
  if (fp) {
    const t = fs.readFileSync(fp, "utf8");
    const e = t.indexOf("\n---\n", 4);
    fm = yaml.load(t.slice(4, e)) || {};
  }
  _fm.set(id, fm);
  return fm;
}
const tagsOf = (id) => (Array.isArray(fmOf(id).tags) ? fmOf(id).tags : []);
const titleOf = (id) => fmOf(id).title || id;

// --- river order + per-gesture chapter -------------------------------------
const river = yaml.load(
  fs.readFileSync(path.join(ROOT, "src/content/manifests/the-river.manifest.yml"), "utf8")
);
const order = [];
const chapterOf = new Map();
for (const slug of river.sources) {
  const cp = path.join(ROOT, "src/content/book", slug + ".md");
  if (!fs.existsSync(cp)) continue;
  const t = fs.readFileSync(cp, "utf8");
  const e = t.indexOf("\n---\n", 4);
  const fm = yaml.load(t.slice(4, e)) || {};
  for (const g of fm.gestures || []) {
    order.push(g);
    chapterOf.set(g, slug);
  }
}
const orderIndex = new Map(order.map((id, i) => [id, i]));
const riverSet = new Set(order);

// --- existing (curated) thread membership ----------------------------------
const existing = new Set();
for (const f of fs.readdirSync(PATHS)) {
  if (!f.endsWith(".md") || f.startsWith("spine-")) continue; // ignore prior spines
  const t = fs.readFileSync(path.join(PATHS, f), "utf8");
  const e = t.indexOf("\n---\n", 4);
  const fm = yaml.load(t.slice(4, e)) || {};
  for (const g of fm.gestures || []) existing.add(g);
}

// --- tag -> river ids (in order) -------------------------------------------
function tagToIds(predicate) {
  const m = new Map();
  for (const id of order) {
    for (const tg of tagsOf(id)) {
      if (DENY.has(tg) || !predicate(tg)) continue;
      if (!m.has(tg)) m.set(tg, []);
      m.get(tg).push(id);
    }
  }
  return m;
}
const practiceTags = tagToIds((t) => t.startsWith("practice/"));
const spineTags = tagToIds((t) => SPINE_NS.some((p) => t.startsWith(p)));

// --- choose the thread set -------------------------------------------------
const covered = new Set([...existing].filter((id) => riverSet.has(id)));
const chosen = []; // { tag, axis, ids }

// Axis 1 — practices (the verbs), all that clear the size bar, biggest first.
for (const [tag, ids] of [...practiceTags].sort((a, b) => b[1].length - a[1].length)) {
  if (ids.length < PRACTICE_MIN) continue;
  chosen.push({ tag, axis: "practice", ids });
  ids.forEach((i) => covered.add(i));
}

// Axis 2 — spines (what it's about), greedy set-cover of what's left.
const pool = new Map([...spineTags].filter(([, ids]) => ids.length >= SPINE_TOTAL_MIN));
while (true) {
  let best = null, bestGain = 0;
  for (const [tag, ids] of pool) {
    const gain = ids.reduce((n, i) => n + (covered.has(i) ? 0 : 1), 0);
    if (gain > bestGain) { bestGain = gain; best = tag; }
  }
  if (!best || bestGain < SPINE_GAIN_MIN) break;
  const ids = spineTags.get(best);
  chosen.push({ tag: best, axis: "theme", ids });
  ids.forEach((i) => covered.add(i));
  pool.delete(best);
}

const orphans = order.filter((id) => !covered.has(id));

// --- naming / framing ------------------------------------------------------
function humanize(tag) {
  const [prefix, ...rest] = tag.split("/");
  let words = rest.join("/").split("-");
  if (prefix === "place" && words.length > 1 && words[words.length - 1].length === 2) {
    words = words.slice(0, -1); // norfolk-va -> Norfolk
  }
  let v = words.join(" ");
  if (prefix === "place" || prefix === "person") v = v.replace(/\b\w/g, (c) => c.toUpperCase());
  return v;
}
function titleFor({ tag, axis }) {
  const h = humanize(tag);
  if (axis === "practice") return h.replace(/^\w/, (c) => c.toUpperCase());
  const prefix = tag.split("/")[0];
  if (prefix === "person" || prefix === "place") return h;
  if (prefix === "image") return h.replace(/^\w/, (c) => c.toUpperCase());
  return h.replace(/^\w/, (c) => c.toUpperCase());
}
function descFor({ tag, axis, ids }) {
  const h = humanize(tag);
  if (axis === "practice")
    return `Every gesture the book marks as the practice of ${h} — one of the things the wizard does, gathered in the river's order. ${ids.length} stops.`;
  const prefix = tag.split("/")[0];
  const kind = { concept: "the idea of", image: "the image of", motif: "the motif of", person: "", place: "", school: "the school of" }[prefix] || "";
  const what = prefix === "person" ? h : prefix === "place" ? h : `${kind} ${h}`.trim();
  return `Every gesture the book tags with ${what}, in the order the river meets them. ${ids.length} stops.`;
}

// --- write -----------------------------------------------------------------
function manifest(c) {
  const slug = "spine-" + c.tag.replace(/\//g, "-");
  const ids = c.ids;
  const seps = ids.slice(0, -1).map((id, i) =>
    chapterOf.get(id) !== chapterOf.get(ids[i + 1]) ? "section" : "paragraph"
  );
  const fm = {
    id: slug,
    slug,
    label: c.axis === "practice" ? "Practice" : "Spine",
    kind: "spine",
    axis: c.axis,
    title: titleFor(c),
    h1: titleFor(c),
    kicker: c.axis === "practice" ? "What the book does" : "What the book is about",
    spine_tag: c.tag,
    description: descFor(c),
    gestures: ids,
    separators: seps,
  };
  return { slug, text: "---\n" + yaml.dump(fm, { lineWidth: 100, quotingType: '"' }) + "---\n" };
}

const files = chosen.map(manifest);

if (!DRY) {
  for (const f of fs.readdirSync(PATHS)) {
    if (f.startsWith("spine-") && f.endsWith(".md")) fs.unlinkSync(path.join(PATHS, f));
  }
  for (const f of files) fs.writeFileSync(path.join(PATHS, f.slug + ".md"), f.text);
}

// --- report ----------------------------------------------------------------
const practices = chosen.filter((c) => c.axis === "practice");
const spines = chosen.filter((c) => c.axis === "theme");
console.log(`${DRY ? "[dry] " : ""}wrote ${files.length} spine threads (${practices.length} practices + ${spines.length} themes)`);
console.log(`river coverage: ${order.length - orphans.length}/${order.length} (${((100 * (order.length - orphans.length)) / order.length).toFixed(1)}%)`);
console.log(`\nPRACTICES (${practices.length}): ` + practices.map((c) => `${humanize(c.tag)}(${c.ids.length})`).join(", "));
console.log(`\nSPINES (${spines.length}): ` + spines.map((c) => `${c.tag.split("/").slice(1).join("/")}(${c.ids.length})`).join(", "));
console.log(`\norphans remaining: ${orphans.length}`);
console.log(orphans.map((id) => `${id} (${titleOf(id)})`).join("\n"));
