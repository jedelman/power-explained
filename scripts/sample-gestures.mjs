#!/usr/bin/env node
/**
 * Monte Carlo sampler — pull a representative spread of gestures across
 * registers so a tagging-guidance session covers the book's variety,
 * not just one chapter's voice.
 *
 * Seeded RNG so the sample is reproducible (cite the seed in the guide).
 *
 * Usage:
 *   node scripts/sample-gestures.mjs --plateaus P-06,P-09,P-12,P-14,P-IW,P-PR --n 2 --seed 42
 *   node scripts/sample-gestures.mjs --plateaus P-05,P-07 --n 3 --seed 7 --json
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const GROOT = path.join(REPO_ROOT, "src", "content", "gestures");

const args = process.argv.slice(2);
function flag(name, def) {
  const i = args.indexOf("--" + name);
  return i !== -1 ? args[i + 1] : def;
}
const N = parseInt(flag("n", "2"), 10);
const SEED = parseInt(flag("seed", "42"), 10);
const ASJSON = args.includes("--json");
const plateaus = (flag("plateaus", "") || "").split(",").filter(Boolean);

// Mulberry32 seeded RNG
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(SEED);

function loadByPlateau() {
  const map = {};
  for (const f of fs.readdirSync(GROOT)) {
    if (!f.endsWith(".md") || f === "README.md") continue;
    if (!f.startsWith("G-")) continue;
    const text = fs.readFileSync(path.join(GROOT, f), "utf8");
    const end = text.indexOf("\n---\n", 4);
    if (end === -1) continue;
    const fm = yaml.load(text.slice(4, end)) || {};
    const body = text.slice(end + 5).trim();
    (map[fm.plateau] ||= []).push({
      id: fm.id,
      plateau: fm.plateau,
      tags: fm.tags || [],
      words: body.split(/\s+/).filter(Boolean).length,
      body,
    });
  }
  for (const p of Object.keys(map)) map[p].sort((a, b) => a.id.localeCompare(b.id));
  return map;
}

function sample(arr, n) {
  const copy = [...arr];
  const out = [];
  for (let k = 0; k < n && copy.length; k++) {
    const idx = Math.floor(rand() * copy.length);
    out.push(copy.splice(idx, 1)[0]);
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

const byPlateau = loadByPlateau();
const targetPlateaus = plateaus.length ? plateaus : Object.keys(byPlateau).sort();

const picked = [];
for (const p of targetPlateaus) {
  if (!byPlateau[p]) { console.error(`(no gestures for ${p})`); continue; }
  picked.push(...sample(byPlateau[p], N));
}

if (ASJSON) {
  process.stdout.write(JSON.stringify({ seed: SEED, n: N, plateaus: targetPlateaus, sample: picked }, null, 2));
  process.exit(0);
}

console.log(`\n  MONTE CARLO SAMPLE — seed ${SEED}, ${N}/plateau, ${picked.length} gestures\n`);
for (const g of picked) {
  console.log(`  ── ${g.id}  (${g.plateau}, ${g.words}w) ─────────────────────────`);
  console.log(`     existing: ${g.tags.filter(t => !/^(plateau|status)\//.test(t)).join(", ") || "(voice/status only)"}`);
  const text = g.body.replace(/\s+/g, " ");
  // print full body wrapped
  const words = text.split(" ");
  let line = "     ";
  for (const w of words) {
    if ((line + w).length > 92) { console.log(line); line = "     "; }
    line += w + " ";
  }
  if (line.trim()) console.log(line);
  console.log();
}
