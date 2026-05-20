// apply-merges.mjs
//
// Applies merges to the gesture corpus from a list of pairs. Resolves chains
// (A→B, B→C) into merge-groups so a run of adjacent gestures collapses into a
// single gesture (the lowest-ordinal one absorbs the rest, in book order).
//
// SAFETY:
//   - Dry-run by default. Pass --apply to write.
//   - Only merges PARAGRAPH-adjacent gestures (refuses if a section separator
//     sits between two members of a group — that should never happen for
//     STRONG pairs, but we assert it).
//   - Byte-preserving: after applying, every touched plateau is re-verified
//     against its pre-gesture snapshot. Any mismatch aborts the whole run
//     (and, with --apply, leaves a report; use git to revert).
//   - Retired gesture IDs are recorded to analysis/retired-ids.json.
//
//   node scripts/apply-merges.mjs --band STRONG            # dry-run, STRONG only
//   node scripts/apply-merges.mjs --band STRONG --apply    # write
//   node scripts/apply-merges.mjs --plateau P-16 --apply   # one plateau
//
// Reads proposals from analysis/merge-map.json (run `npm run merge-map` first).

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import yaml from "js-yaml";
import { execFileSync } from "node:child_process";
import { loadCorpus } from "../src/lib/load-corpus.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const GROOT = path.join(REPO_ROOT, "src", "content", "gestures");
const BROOT = path.join(REPO_ROOT, "src", "content", "book");
const SNAP = path.join(REPO_ROOT, "for-agents", "snapshots");

const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const band = argVal("--band") || "STRONG";
const onlyPlateau = argVal("--plateau");
function argVal(flag) {
  const i = args.indexOf(flag);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : null;
}

const map = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, "analysis", "merge-map.json"), "utf8"));
let pairs = map.pairs.filter(p => p.band === band);
if (onlyPlateau) pairs = pairs.filter(p => p.plateau === onlyPlateau);

if (pairs.length === 0) {
  console.log(`No ${band} pairs${onlyPlateau ? " in " + onlyPlateau : ""} to apply.`);
  process.exit(0);
}

// ── Resolve chains into merge-groups, per plateau ────────────────────────────
// Build, per plateau, a union-find over gesture ids connected by a merge pair.
const plateauPairs = {};
for (const p of pairs) (plateauPairs[p.plateau] ||= []).push(p);

function orderNum(id) { return parseInt(id.split("-").pop(), 10); }

const groupsByPlateau = {}; // pid -> [ [id, id, ...] sorted by ordinal ]
for (const [pid, prs] of Object.entries(plateauPairs)) {
  const parent = new Map();
  const find = x => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
  const union = (a, b) => { parent.set(find(a), find(b)); };
  for (const pr of prs) { if (!parent.has(pr.from)) parent.set(pr.from, pr.from); if (!parent.has(pr.to)) parent.set(pr.to, pr.to); }
  for (const pr of prs) union(pr.from, pr.to);
  const groups = new Map();
  for (const id of parent.keys()) {
    const root = find(id);
    (groups.get(root) || groups.set(root, []).get(root)).push(id);
  }
  groupsByPlateau[pid] = [...groups.values()].map(g => g.sort((a, b) => orderNum(a) - orderNum(b)));
}

// ── Plan ─────────────────────────────────────────────────────────────────────
const { gestures, plateaus } = loadCorpus(REPO_ROOT);
const plateauBySlugId = {};
for (const p of plateaus) if (p.id) plateauBySlugId[p.id] = p;

let totalRetired = 0, totalGroups = 0;
const plan = []; // { pid, slug, keep, absorb: [ids], contiguous: bool }

for (const [pid, groups] of Object.entries(groupsByPlateau)) {
  const plat = plateauBySlugId[pid];
  if (!plat) { console.error(`No plateau loaded for ${pid}`); process.exit(1); }
  for (const group of groups) {
    if (group.length < 2) continue;
    // Verify the group is contiguous in the manifest and paragraph-joined.
    const idx = group.map(id => plat.gestures.indexOf(id)).sort((a, b) => a - b);
    let contiguous = true;
    for (let k = 0; k < idx.length - 1; k++) {
      if (idx[k + 1] !== idx[k] + 1) contiguous = false;
      // separator between idx[k] and idx[k]+1 must be paragraph
      if (plat.separators[idx[k]] === "section") {
        console.error(`ABORT: ${pid} group ${group.join(",")} crosses a section break.`);
        process.exit(1);
      }
    }
    if (!contiguous) {
      console.error(`ABORT: ${pid} group ${group.join(",")} is not contiguous (idx ${idx.join(",")}).`);
      process.exit(1);
    }
    const keep = group[0];
    const absorb = group.slice(1);
    plan.push({ pid, slug: plat.slug, keep, absorb });
    totalRetired += absorb.length;
    totalGroups++;
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
console.log(`\nMERGE PLAN — band=${band}${onlyPlateau ? " plateau=" + onlyPlateau : ""}  ${APPLY ? "(APPLYING)" : "(dry-run)"}`);
console.log(`${totalGroups} merge groups, ${totalRetired} gestures retired.\n`);
const byP = {};
for (const g of plan) (byP[g.pid] ||= []).push(g);
for (const [pid, groups] of Object.entries(byP)) {
  const before = plateauBySlugId[pid].gestures.length;
  const retired = groups.reduce((s, g) => s + g.absorb.length, 0);
  console.log(`  ${pid} (${before} → ${before - retired}):`);
  for (const g of groups) console.log(`    keep ${g.keep}  ⟵  ${g.absorb.join(", ")}`);
}

if (!APPLY) {
  console.log(`\nDry-run only. Re-run with --apply to write.`);
  process.exit(0);
}

// ── Apply ────────────────────────────────────────────────────────────────────
function gestureFile(pid, id) {
  const num = id.split("-").pop();
  const dir = path.join(GROOT, pid);
  const f = fs.readdirSync(dir).find(x => x.startsWith(num + "-"));
  return f ? path.join(dir, f) : null;
}
function readGesture(file) {
  const t = fs.readFileSync(file, "utf8");
  const end = t.indexOf("\n---\n", 4);
  return { fm: yaml.load(t.slice(4, end)), body: t.slice(end + 5).trim() };
}

const retiredIds = [];
const touchedPlateaus = new Set();

for (const g of plan) {
  const keepFile = gestureFile(g.pid, g.keep);
  const keepG = readGesture(keepFile);
  // absorb bodies in book order
  let mergedBody = keepG.body;
  for (const aid of g.absorb) {
    const af = gestureFile(g.pid, aid);
    const ag = readGesture(af);
    mergedBody += "\n\n" + ag.body;
    fs.rmSync(af);
    retiredIds.push({ id: aid, mergedInto: g.keep, plateau: g.pid });
  }
  // rewrite keep file with merged body, frontmatter unchanged except a note
  keepG.fm.notes = (keepG.fm.notes ? keepG.fm.notes + " " : "") +
    `[merged ${g.absorb.join(", ")} on ${new Date().toISOString().slice(0,10)}]`;
  fs.writeFileSync(keepFile, `---\n${yaml.dump(keepG.fm, { lineWidth: 100, noRefs: true })}---\n${mergedBody}\n`);
  touchedPlateaus.add(g.pid);
}

// Update each touched plateau manifest: drop absorbed ids and the paragraph
// separator that preceded each absorbed gesture.
for (const pid of touchedPlateaus) {
  const plat = plateauBySlugId[pid];
  const chapPath = path.join(BROOT, plat.slug + ".md");
  const text = fs.readFileSync(chapPath, "utf8");
  const end = text.indexOf("\n---\n", 4);
  const fm = yaml.load(text.slice(4, end));
  const absorbSet = new Set(plan.filter(g => g.pid === pid).flatMap(g => g.absorb));

  const newGestures = [];
  const newSeparators = [];
  for (let i = 0; i < fm.gestures.length; i++) {
    const id = fm.gestures[i];
    if (absorbSet.has(id)) {
      // drop this gesture and the separator that PRECEDES it (index i-1 in seps)
      // by simply not pushing it; we rebuild separators from the kept sequence below.
      continue;
    }
    newGestures.push(id);
  }
  // Rebuild separators by walking original, keeping the separator only when the
  // gesture AFTER it is kept (i.e. it's a real boundary in the new sequence).
  for (let i = 0; i < fm.separators.length; i++) {
    const after = fm.gestures[i + 1];
    if (!absorbSet.has(after)) newSeparators.push(fm.separators[i]);
  }
  fm.gestures = newGestures;
  fm.separators = newSeparators;
  fs.writeFileSync(chapPath, `---\n${yaml.dump(fm, { lineWidth: 100, noRefs: true })}---\n`);
}

// ── Verify byte-equivalence on every touched plateau ────────────────────────
let failures = 0;
for (const pid of touchedPlateaus) {
  const plat = plateauBySlugId[pid];
  const snap = path.join(SNAP, `${plat.slug}-pre-gestures.md`);
  try {
    const out = execFileSync("node", ["scripts/compile-plateau.mjs", "verify", plat.slug, snap], { cwd: REPO_ROOT, encoding: "utf8" });
    if (!/^OK /m.test(out)) { console.error(`VERIFY FAIL ${plat.slug}:\n${out}`); failures++; }
    else console.log(`  ✓ ${plat.slug}: ${out.trim().split("\n").pop()}`);
  } catch (e) {
    console.error(`VERIFY ERROR ${plat.slug}: ${e.stdout || e.message}`);
    failures++;
  }
}

// Record retired ids
const retPath = path.join(REPO_ROOT, "analysis", "retired-ids.json");
let existing = [];
if (fs.existsSync(retPath)) existing = JSON.parse(fs.readFileSync(retPath, "utf8"));
fs.writeFileSync(retPath, JSON.stringify([...existing, ...retiredIds], null, 2) + "\n");

console.log(`\n${failures === 0 ? "✓ all touched plateaus byte-equivalent" : "✗ " + failures + " plateau(s) FAILED verification — use git to revert"}`);
console.log(`Retired ${retiredIds.length} ids → analysis/retired-ids.json`);
process.exit(failures === 0 ? 0 : 1);
