// merge-map.mjs
//
// Proposes which adjacent gesture pairs in the first-pass split are likely
// ONE continuous arc that was mechanically over-split, and which are
// genuinely distinct moves to keep apart. Output is advisory: a ranked merge
// map for Jason to act on during plateau-level revision. It does NOT mutate
// any files.
//
//   node scripts/merge-map.mjs            full report, all plateaus
//   node scripts/merge-map.mjs P-11       single plateau, with prose previews
//   node scripts/merge-map.mjs --json     write analysis/merge-map.json
//
// Scoring model — only PARAGRAPH-separated adjacent pairs are scoreable;
// SECTION-separated pairs are never merge candidates (the --- is authorial
// intent to hold apart). For each scoreable pair we compute a merge score in
// roughly [-3, +5]; higher = more likely a single arc. Signals:
//
//   PRO-merge:
//     +2  shared proper noun across the boundary (topical continuation)
//     +2  second gesture starts with a bare pronoun/demonstrative and adds no
//         new proper noun (anaphoric — depends on the first for its referent)
//     +1  second gesture starts with a continuation conjunction (And/But/So…)
//     +1  combined word count <= 140 (within P-04's authored arc sizes)
//     +1  second gesture introduces NO proper noun of its own
//   ANTI-merge:
//     -3  second gesture is a <= 4-word landing (deliberate punch — keep)
//     -2  second gesture opens a brand-new proper-noun cluster (2+ new names)
//     -1  first gesture ends on a question mark (a turn — keep the beat)
//     -1  first gesture ends on a bare em-dash / colon landing
//
// Pairs scoring >= +3 are "strong merge", +1..+2 "consider", <= 0 "keep".

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { loadCorpus } from "../src/lib/load-corpus.mjs";
import { words } from "../src/lib/corpus-metrics.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const WRITE_JSON = args.includes("--json");
const onlyPlateau = args.find(a => /^P-/.test(a)) || null;

const { gestures, plateaus } = loadCorpus(REPO_ROOT);

// Proper-noun extractor (curated noise list, mirrors analyze-corpus).
const NOISE = new Set([
  "The","And","But","She","He","They","We","You","This","That","These","Those","Then","There","Here","When","Where","Why","How","What","Who","Now","So","Of","In","On","At","To","For","From","With","If","Or","As","By","Is","Are","Was","Were","Be","Been","Being","I","It","Its","Their","His","Her","Our","Us","All","Some","Many","Each","Most","More","Less","Only","Even","Not","No","Yes","One","Two","Three","Four","Five","Other","Another","Same","First","Last","After","Before","During","While","Because","Since","Until","Just","Like","Such","Way","Day","Year","Time","Part","Page","People","Person","Thing","Things","Place","World","Life","Work","Words","Word","Question","Questions","Answer","Body","Mind","Heart","Hand","Hands","Eye","Eyes","Face","Voice","Story","Stories","Book","Chapter","Section","Earth","God","City","Street","Road","House","Home","Room","Door","Window","Money","Today","Yesterday","Tomorrow","Tonight","Morning","Evening","Night","Power","Capital","System","State","Government","Public","Private","Community","Group","Family","Friend","Friends","Children","Child","Woman","Women","Man","Men","Right","Left","High","Low","Big","Small","Long","Short","New","Old","Young","Free","Real","True","False","Every","Everything","Nothing","Something","Anything","Someone","Anyone","Nobody","Land","Both","Within","Among","Above","Below","Across","Around","Through","Outside","Inside","Upon","About",
  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
  "January","February","March","April","May","June","July","August","September","October","November","December",
  "None","Your","Verify","Six","Lights","Once","Water","Hospital","River","Bank","Foundation","Department","Council","Board","Office","School","Hall","Center","Building","Plant","Plants","Trees","Birds","Animals","Park",
  "Carolina","English","Spanish","French","Italian","German","Russian","African","European","American","Indian","Asian","British","Chinese","Japanese","Mexican","Dutch","Greek","Latin","Western","Eastern","Northern","Southern",
  "North","South","East","West","Hard","Soft","Loud","Quiet","Open","Close","Closed","Fast","Slow",
]);
function propers(body) {
  return [...new Set((body.match(/\b[A-Z][a-záéíóúñü]{2,}\b/g) || []).filter(w => !NOISE.has(w)))];
}

const PRONOUN_START = /^[*_]*(He|She|It|They|This|That|These|Those|Their|His|Her|Its|Them|Such|Here|There)\b/;
// Pivot conjunctions open a turn (anti-merge when B is short — they break a beat).
const PIVOT_START = /^[*_]*(But|Yet|Still|And|So|Then|Now|Except|Instead|Nor)\b/;
// Continuation conjunctions extend the same thought (mild pro-merge).
const CONT_START = /^[*_]*(Because|Thus|Hence|Which|For|Therefore|Meaning|That is)\b/;
const YEAR = /\b(1[89]\d\d|20\d\d)\b/g;

// A "landing" is a short, self-contained rhetorical beat Jason set apart on
// purpose (e.g. "That's the problem.", "The means are the ends. Every time.").
// The split into gestures preserved these as their own units; merging them
// buries the punch. We treat B as a landing when it is short in words AND
// either very few sentences or ends on a hard stop with no continuation cue.
function isLanding(body, wc) {
  if (wc > 18) return false;            // too long to be a punch
  const t = body.trim();
  // A pronoun/continuation start means it leans on the prior gesture — that's
  // continuation, not a standalone landing, so don't treat it as a landing.
  if (PRONOUN_START.test(t) || CONT_START.test(t)) return false;
  return true;
}

function firstWords(body, n) {
  return words(body).slice(0, n);
}
function wordCount(body) { return words(body).length; }

function scorePair(a, b) {
  const reasons = [];
  let score = 0;

  const pa = propers(a.body);
  const pb = propers(b.body);
  const shared = pa.filter(x => pb.includes(x));
  const newInB = pb.filter(x => !pa.includes(x));

  const bWordCount = wordCount(b.body);
  const combined = wordCount(a.body) + bWordCount;
  const bTrim = b.body.trim();
  const bPivot = PIVOT_START.test(bTrim);

  // ANTI: deliberate landing. Hard punch (<=4w) is the strongest signal; a
  // short standalone beat (<=18w, no continuation cue) is a softer one.
  if (bWordCount <= 4) {
    score -= 3;
    reasons.push(`-3 second is a ${bWordCount}-word landing (keep the punch)`);
  } else if (isLanding(b.body, bWordCount)) {
    score -= 2;
    reasons.push(`-2 second is a ${bWordCount}-word standalone beat (likely a landing)`);
  }

  // ANTI: short pivot — B opens a turn (But/Now/And…) and is short enough to be
  // a beat rather than a continuation. Welding it to A kills the pivot.
  if (bPivot && bWordCount <= 30) {
    score -= 2;
    reasons.push(`-2 second is a short pivot/turn (opens "${firstWords(bTrim,1)[0]||""}…")`);
  }

  // PRO: shared proper noun
  if (shared.length > 0) {
    score += 2;
    reasons.push(`+2 shared: ${shared.slice(0, 3).join(", ")}`);
  }

  // PRO: anaphoric pronoun start with no new name
  if (PRONOUN_START.test(bTrim) && newInB.length === 0) {
    score += 2;
    reasons.push(`+2 anaphoric pronoun start, no new name`);
  }

  // PRO: continuation conjunction (extends the thought, not a pivot)
  if (CONT_START.test(bTrim)) {
    score += 1;
    reasons.push(`+1 continuation-conjunction start`);
  }

  // PRO: short combined arc — but only when B isn't itself a beat/pivot.
  if (combined <= 140 && bWordCount > 4 && !isLanding(b.body, bWordCount) && !(bPivot && bWordCount <= 30)) {
    score += 1;
    reasons.push(`+1 combined ${combined}w (arc-sized)`);
  }

  // PRO: second has no proper noun of its own — leans on antecedent. Suppress
  // when B is a landing/pivot (a punch with no proper noun isn't a continuation).
  if (pb.length === 0 && bWordCount > 4 && !isLanding(b.body, bWordCount) && !(bPivot && bWordCount <= 30)) {
    score += 1;
    reasons.push(`+1 second has no proper noun (leans on antecedent)`);
  }

  // ANTI: brand-new proper-noun cluster
  if (newInB.length >= 2 && shared.length === 0) {
    score -= 2;
    reasons.push(`-2 opens new cluster: ${newInB.slice(0, 3).join(", ")}`);
  }

  // ANTI: first ends on a question (a turn)
  const aTrim = a.body.trim().replace(/[*_"']+$/, "");
  if (/\?$/.test(aTrim)) {
    score -= 1;
    reasons.push(`-1 first ends on a question`);
  }
  // ANTI: first ends on bare em-dash / colon landing
  if (/[—:]$/.test(aTrim)) {
    score -= 1;
    reasons.push(`-1 first ends on dash/colon landing`);
  }

  return { score, reasons, shared, newInB, combined, bWordCount };
}

function band(score) {
  if (score >= 3) return "STRONG";
  if (score >= 1) return "consider";
  return "keep";
}

// Walk every migrated plateau, score paragraph-separated adjacencies.
const results = [];
for (const p of plateaus) {
  if (!p.id || p.gestureObjs.length < 2) continue;
  if (onlyPlateau && p.id !== onlyPlateau) continue;
  for (let i = 0; i < p.gestures.length - 1; i++) {
    const sep = p.separators[i] || "paragraph";
    const a = gestures[p.gestures[i]];
    const b = gestures[p.gestures[i + 1]];
    if (!a || !b) continue;
    if (sep === "section") continue; // never merge across a section break
    const s = scorePair(a, b);
    results.push({
      plateau: p.id, slug: p.slug,
      from: a.id, to: b.id,
      score: s.score, band: band(s.score),
      reasons: s.reasons,
      combined: s.combined,
      aPreview: a.body.replace(/\s+/g, " ").slice(0, 90),
      bPreview: b.body.replace(/\s+/g, " ").slice(0, 90),
    });
  }
}

// ── Output ──────────────────────────────────────────────────────────────────

if (onlyPlateau) {
  // Detailed single-plateau view, in book order, with prose previews.
  const rows = results.filter(r => r.plateau === onlyPlateau);
  console.log(`\nMERGE MAP — ${onlyPlateau} (${rows.length} paragraph adjacencies)\n`);
  for (const r of rows) {
    const tag = r.band === "STRONG" ? "✓✓ STRONG" : r.band === "consider" ? "·  consider" : "   keep   ";
    console.log(`${tag}  ${r.from} → ${r.to}  [score ${r.score >= 0 ? "+" : ""}${r.score}, ${r.combined}w]`);
    console.log(`            A: ${r.aPreview}…`);
    console.log(`            B: ${r.bPreview}…`);
    if (r.reasons.length) console.log(`            ${r.reasons.join("  |  ")}`);
    console.log();
  }
  const strong = rows.filter(r => r.band === "STRONG").length;
  const consider = rows.filter(r => r.band === "consider").length;
  console.log(`Summary: ${strong} strong merges, ${consider} to consider, ${rows.length - strong - consider} keep.`);
  console.log(`If all strong+consider merges are taken: ${rows.length + 1} gestures → ${rows.length + 1 - strong - consider}.`);
} else {
  // Corpus overview: per-plateau merge pressure.
  console.log(`\nMERGE MAP — corpus overview (paragraph adjacencies only; sections never merged)\n`);
  console.log(`  plateau | adj | STRONG | consider | keep | if-strong-merged | if-all-merged`);
  const byP = {};
  for (const r of results) {
    (byP[r.plateau] ||= { adj: 0, strong: 0, consider: 0, keep: 0 });
    byP[r.plateau].adj++;
    byP[r.plateau][r.band === "STRONG" ? "strong" : r.band === "consider" ? "consider" : "keep"]++;
  }
  const plateauOrder = plateaus.filter(p => p.id && byP[p.id]).map(p => p.id);
  let totG = 0, totStrong = 0, totConsider = 0;
  for (const pid of plateauOrder) {
    const d = byP[pid];
    const gCount = d.adj + 1; // gestures = adjacencies + 1
    const ifStrong = gCount - d.strong;
    const ifAll = gCount - d.strong - d.consider;
    totG += gCount; totStrong += d.strong; totConsider += d.consider;
    console.log(`  ${pid.padEnd(7)} | ${String(d.adj).padStart(3)} | ${String(d.strong).padStart(6)} | ${String(d.consider).padStart(8)} | ${String(d.keep).padStart(4)} | ${String(ifStrong).padStart(16)} | ${String(ifAll).padStart(13)}`);
  }
  console.log(`  ${"".padEnd(7)} |     |        |          |      |                  |`);
  console.log(`  TOTALS: ${totG} gestures, ${totStrong} strong + ${totConsider} consider merges available.`);
  console.log(`  → if all STRONG merges taken: ${totG} → ${totG - totStrong} gestures (${pct(totStrong, totG)}% reduction)`);
  console.log(`  → if STRONG+consider taken : ${totG} → ${totG - totStrong - totConsider} gestures (${pct(totStrong + totConsider, totG)}% reduction)`);
  console.log(`\n  Top STRONG merges across the corpus:`);
  const strong = results.filter(r => r.band === "STRONG").sort((a, b) => b.score - a.score);
  for (const r of strong.slice(0, 20)) {
    console.log(`    ${r.from} → ${r.to} [+${r.score}] ${r.reasons[0] || ""}`);
  }
  console.log(`\n  Run  node scripts/merge-map.mjs <P-ID>  for a plateau's full map with prose previews.`);
}

if (WRITE_JSON) {
  const outPath = path.join(REPO_ROOT, "analysis", "merge-map.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    model: "paragraph-adjacency merge scoring; sections excluded; see script header for signals",
    pairs: results,
  }, null, 2) + "\n");
  console.log(`\n  → wrote ${path.relative(REPO_ROOT, outPath)}`);
}

function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
