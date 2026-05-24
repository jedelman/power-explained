#!/usr/bin/env node
/**
 * Tag audit — survey the current state of tag coverage across the corpus.
 *
 * Reports:
 *   1. Per-namespace coverage (% gestures with at least one tag in ns)
 *   2. Top terms per namespace, with the plateaus that use them
 *   3. Tag-vs-ontology gap (unknown terms in open namespaces; errors in closed)
 *   4. Tag-vs-prose gap (terms that appear in many prose bodies but rarely as tags)
 *   5. Variant clusters (terms that look like spelling variants of each other)
 *   6. Per-plateau coverage table
 *
 * Run from repo root:
 *   node scripts/tag-audit.mjs
 *   node scripts/tag-audit.mjs --json > analysis/tag-audit.json
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const GROOT = path.join(REPO_ROOT, "src", "content", "gestures");
const ONTOLOGY_PATH = path.join(REPO_ROOT, "for-agents", "tag-ontology.yml");

const ASJSON = process.argv.includes("--json");

function loadOntology() {
  const doc = yaml.load(fs.readFileSync(ONTOLOGY_PATH, "utf8"));
  const out = {};
  for (const [ns, def] of Object.entries(doc.namespaces || {})) {
    out[ns] = {
      cardinality: def.cardinality,
      open: !!def.open,
      terms: new Set(def.terms || []),
    };
  }
  return out;
}

function loadGestures() {
  const gestures = [];
  for (const f of fs.readdirSync(GROOT)) {
    if (!f.endsWith(".md") || f === "README.md") continue;
    if (!f.startsWith("G-")) continue;
    const text = fs.readFileSync(path.join(GROOT, f), "utf8");
    const end = text.indexOf("\n---\n", 4);
    if (end === -1) continue;
    const fm = yaml.load(text.slice(4, end)) || {};
    const body = text.slice(end + 5).trim();
    gestures.push({
      id: fm.id || f,
      plateau: fm.plateau || "",
      file: f,
      tags: fm.tags || [],
      body,
      words: body.split(/\s+/).filter(Boolean).length,
    });
  }
  return gestures;
}

function parseTag(t) {
  const i = t.indexOf("/");
  if (i === -1) return { ns: null, term: t };
  return { ns: t.slice(0, i), term: t.slice(i + 1) };
}

const ontology = loadOntology();
const gestures = loadGestures();
const namespaces = Object.keys(ontology);

// 1. Per-namespace coverage
const nsCoverage = {};
for (const ns of namespaces) nsCoverage[ns] = { tagged: 0, byPlateau: {} };
for (const g of gestures) {
  const seen = new Set();
  for (const t of g.tags) {
    const { ns } = parseTag(t);
    if (ns && nsCoverage[ns]) seen.add(ns);
  }
  for (const ns of seen) {
    nsCoverage[ns].tagged++;
    nsCoverage[ns].byPlateau[g.plateau] = (nsCoverage[ns].byPlateau[g.plateau] || 0) + 1;
  }
}

// 2. Top terms per namespace
const termCounts = {};
const termPlateaus = {};
for (const ns of namespaces) {
  termCounts[ns] = {};
  termPlateaus[ns] = {};
}
for (const g of gestures) {
  for (const t of g.tags) {
    const { ns, term } = parseTag(t);
    if (!ns || !namespaces.includes(ns)) continue;
    termCounts[ns][term] = (termCounts[ns][term] || 0) + 1;
    (termPlateaus[ns][term] ||= new Set()).add(g.plateau);
  }
}

// 3. Ontology gap
const unknownNs = new Set();
const unknownClosed = []; // {ns, term, files}
const unknownOpen = [];   // {ns, term, count}
for (const ns of Object.keys(termCounts)) {
  if (!ontology[ns]) {
    unknownNs.add(ns);
    continue;
  }
  for (const [term, count] of Object.entries(termCounts[ns])) {
    if (ontology[ns].terms.has(term)) continue;
    if (ontology[ns].open) {
      unknownOpen.push({ ns, term, count, plateaus: termPlateaus[ns][term].size });
    } else {
      const files = gestures
        .filter(g => g.tags.includes(`${ns}/${term}`))
        .map(g => g.id);
      unknownClosed.push({ ns, term, count, files });
    }
  }
}

// 5. Variant clusters (simple — same trimmed, lowercased, hyphens removed)
function variantKey(s) {
  return s.toLowerCase().replace(/[-_\s]/g, "");
}
const variantBuckets = {};
for (const ns of Object.keys(termCounts)) {
  variantBuckets[ns] = {};
  for (const term of Object.keys(termCounts[ns])) {
    const key = variantKey(term);
    (variantBuckets[ns][key] ||= []).push(term);
  }
}
const variants = [];
for (const [ns, buckets] of Object.entries(variantBuckets)) {
  for (const [key, terms] of Object.entries(buckets)) {
    if (terms.length > 1) variants.push({ ns, key, terms });
  }
}

// 6. Per-plateau coverage
const plateauStats = {};
for (const g of gestures) {
  const p = plateauStats[g.plateau] ||= {
    total: 0, byNs: {}, totalTags: 0, conceptTags: 0, words: 0,
  };
  p.total++;
  p.words += g.words;
  for (const ns of namespaces) p.byNs[ns] = p.byNs[ns] || 0;
  const seen = new Set();
  for (const t of g.tags) {
    const { ns } = parseTag(t);
    if (ns && namespaces.includes(ns)) seen.add(ns);
    p.totalTags++;
    if (ns === "concept") p.conceptTags++;
  }
  for (const ns of seen) p.byNs[ns]++;
}

// ── Output ───────────────────────────────────────────────────────────────
if (ASJSON) {
  process.stdout.write(JSON.stringify({
    summary: { gestures: gestures.length, plateaus: Object.keys(plateauStats).length },
    nsCoverage,
    termCounts: Object.fromEntries(
      Object.entries(termCounts).map(([ns, terms]) => [
        ns,
        Object.fromEntries(
          Object.entries(terms).sort((a, b) => b[1] - a[1])
        ),
      ])
    ),
    unknownNs: [...unknownNs],
    unknownClosed,
    unknownOpen: unknownOpen.sort((a, b) => b.count - a.count),
    variants,
    plateauStats,
  }, null, 2));
  process.exit(0);
}

function pct(n, d) { return d === 0 ? "  0%" : `${String(Math.round(100 * n / d)).padStart(3)}%`; }
function row(...cells) { return cells.join("  "); }

console.log(`\n  TAG AUDIT — ${gestures.length} gestures, ${Object.keys(plateauStats).length} plateaus\n`);
console.log(`  ─────────────────────────────────────────────────────────────────`);
console.log(`  1. NAMESPACE COVERAGE  (% gestures with ≥1 tag in this namespace)`);
console.log(`  ─────────────────────────────────────────────────────────────────`);
console.log(`  ${"namespace".padEnd(12)}  ${"covered".padStart(8)}  ${"unique terms".padStart(13)}  ${"in ontology".padStart(12)}`);
for (const ns of namespaces) {
  const n = nsCoverage[ns].tagged;
  const ut = Object.keys(termCounts[ns]).length;
  const inOnt = ontology[ns]?.terms.size ?? "?";
  console.log(`  ${ns.padEnd(12)}  ${pct(n, gestures.length).padStart(8)}  ${String(ut).padStart(13)}  ${String(inOnt).padStart(12)}`);
}

console.log(`\n  ─────────────────────────────────────────────────────────────────`);
console.log(`  2. ONTOLOGY GAP`);
console.log(`  ─────────────────────────────────────────────────────────────────`);
if (unknownClosed.length === 0 && unknownOpen.length === 0) {
  console.log(`  No gap. All in-use terms are in the ontology.`);
} else {
  if (unknownClosed.length) {
    console.log(`  CLOSED-NAMESPACE ERRORS (${unknownClosed.length}):`);
    for (const u of unknownClosed.sort((a, b) => b.count - a.count)) {
      console.log(`    ${u.ns}/${u.term} — ${u.count} use(s)`);
      for (const f of u.files.slice(0, 3)) console.log(`        ${f}`);
      if (u.files.length > 3) console.log(`        ... +${u.files.length - 3} more`);
    }
  }
  if (unknownOpen.length) {
    console.log(`\n  OPEN-NAMESPACE TERMS NOT YET PROMOTED (top 30 by frequency):`);
    console.log(`  ${"ns/term".padEnd(40)}  ${"count".padStart(5)}  ${"plateaus".padStart(8)}`);
    for (const u of unknownOpen.slice(0, 30)) {
      console.log(`  ${(u.ns + "/" + u.term).padEnd(40)}  ${String(u.count).padStart(5)}  ${String(u.plateaus).padStart(8)}`);
    }
    if (unknownOpen.length > 30) console.log(`  ... +${unknownOpen.length - 30} more`);
  }
}

console.log(`\n  ─────────────────────────────────────────────────────────────────`);
console.log(`  3. TOP TERMS BY NAMESPACE`);
console.log(`  ─────────────────────────────────────────────────────────────────`);
for (const ns of ["concept", "person", "place", "year"]) {
  const terms = Object.entries(termCounts[ns] || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);
  if (terms.length === 0) {
    console.log(`\n  [${ns}]  no tags`);
    continue;
  }
  console.log(`\n  [${ns}]  top 15 of ${Object.keys(termCounts[ns]).length}`);
  for (const [t, c] of terms) {
    const ps = termPlateaus[ns][t].size;
    console.log(`    ${t.padEnd(28)}  ${String(c).padStart(4)} use(s)  ${ps} plateau(s)`);
  }
}

if (variants.length) {
  console.log(`\n  ─────────────────────────────────────────────────────────────────`);
  console.log(`  4. POSSIBLE VARIANT CLUSTERS  (same key, different spelling)`);
  console.log(`  ─────────────────────────────────────────────────────────────────`);
  for (const v of variants) {
    const withCounts = v.terms.map(t => `${t} (${termCounts[v.ns][t]})`);
    console.log(`  ${v.ns}/  ${withCounts.join("  vs  ")}`);
  }
}

console.log(`\n  ─────────────────────────────────────────────────────────────────`);
console.log(`  5. PER-PLATEAU TAG COVERAGE`);
console.log(`  ─────────────────────────────────────────────────────────────────`);
console.log(`  ${"plateau".padEnd(8)}  ${"gestures".padStart(8)}  ${"words".padStart(6)}  ${"voice%".padStart(6)}  ${"kind%".padStart(6)}  ${"cap%".padStart(5)}  ${"con%".padStart(5)}  ${"per%".padStart(5)}  ${"pla%".padStart(5)}  ${"yr%".padStart(4)}`);
for (const pid of Object.keys(plateauStats).sort()) {
  const p = plateauStats[pid];
  console.log(`  ${pid.padEnd(8)}  ${String(p.total).padStart(8)}  ${String(p.words).padStart(6)}  ${pct(p.byNs.voice, p.total).padStart(6)}  ${pct(p.byNs.kind, p.total).padStart(6)}  ${pct(p.byNs.capacity, p.total).padStart(5)}  ${pct(p.byNs.concept, p.total).padStart(5)}  ${pct(p.byNs.person, p.total).padStart(5)}  ${pct(p.byNs.place, p.total).padStart(5)}  ${pct(p.byNs.year, p.total).padStart(4)}`);
}

console.log();
