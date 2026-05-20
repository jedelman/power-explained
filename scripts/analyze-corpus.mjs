// analyze-corpus.mjs
//
// Reads the book corpus and computes readability + entropy metrics at three
// scales (gesture, plateau, corpus). Prints a human-readable summary and
// writes a machine-readable JSON artifact to
// analysis/corpus-metrics.json for downstream agent use.
//
// Run standalone:   node scripts/analyze-corpus.mjs
// Quiet (CI):       node scripts/analyze-corpus.mjs --quiet
// JSON path only:   node scripts/analyze-corpus.mjs --json-only
//
// Exit code is always 0 unless the corpus fails to load; this is a reporting
// tool, not a gate. (A future lint could threshold on these numbers.)

import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import { loadCorpus } from "../src/lib/load-corpus.mjs";
import {
  readability, textStats, lexicalEntropy, typeTokenRatio,
  shannon, shannonNormalized, words, sentences,
  jaccardDistance, percentile, mean, std,
} from "../src/lib/corpus-metrics.mjs";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const args = process.argv.slice(2);
const QUIET = args.includes("--quiet");
const BRIEF = args.includes("--brief");
const JSON_ONLY = args.includes("--json-only");
const log = (...a) => { if (!QUIET && !BRIEF && !JSON_ONLY) console.log(...a); };
const brief = (...a) => { if (BRIEF && !QUIET) console.log(...a); };

const { gestures, plateaus } = loadCorpus(REPO_ROOT);
const migrated = plateaus.filter(p => p.gestureObjs.length > 0);
const allGestures = Object.values(gestures);

if (allGestures.length === 0) {
  console.error("No gestures found — has the corpus been split?");
  process.exit(1);
}

// ── Word-count bucket for structural entropy ────────────────────────────────
function wcBucket(wc) {
  if (wc < 10) return "tiny";
  if (wc < 30) return "landing";
  if (wc < 60) return "short";
  if (wc < 100) return "medium";
  if (wc < 150) return "long";
  if (wc < 250) return "arc";
  return "epic";
}

// ── Per-gesture metrics ──────────────────────────────────────────────────────
for (const g of allGestures) {
  const s = textStats(g.body);
  g.wc = s.wordCount;
  g.lexH = lexicalEntropy(g.body);
  g.ttr = typeTokenRatio(g.body);
  g.sentences = s.sentenceCount;
}

// ── 1. CORPUS-SCALE READABILITY (the headline numbers) ──────────────────────
// Concatenate all gesture bodies in book order for a single corpus reading.
const corpusText = migrated
  .flatMap(p => p.gestureObjs.map(g => g.body))
  .join("\n\n");
const corpusReadability = readability(corpusText);

// ── 2. PER-PLATEAU READABILITY + ENTROPY ─────────────────────────────────────
const plateauMetrics = [];
for (const p of plateaus) {
  if (!p.id) continue;
  const r = readability(p.bodyText);
  const gs = p.gestureObjs;
  const wcs = gs.map(g => g.wc);
  const structBuckets = gs.map(g => wcBucket(g.wc));
  plateauMetrics.push({
    id: p.id, slug: p.slug, title: p.title,
    gestureCount: gs.length,
    words: r.wordCount,
    sentences: r.sentenceCount,
    avgWordsPerSentence: round(r.avgWordsPerSentence),
    avgSyllablesPerWord: round(r.avgSyllablesPerWord),
    fleschReadingEase: round(r.fleschReadingEase),
    fleschKincaidGrade: round(r.fleschKincaidGrade),
    gunningFog: round(r.gunningFog),
    colemanLiau: round(r.colemanLiau),
    automatedReadabilityIndex: round(r.automatedReadabilityIndex),
    smog: r.sentenceCount >= 30 ? round(r.smog) : null, // SMOG invalid < 30 sentences
    smogReliable: r.sentenceCount >= 30,
    lexicalEntropy: round(lexicalEntropy(p.bodyText)),
    typeTokenRatio: round(typeTokenRatio(p.bodyText)),
    meanGestureWords: round(mean(wcs)),
    stdGestureWords: round(std(wcs)),
    structuralEntropyNorm: round(shannonNormalized(structBuckets)),
  });
}

// ── 3. GESTURE-SCALE DISTRIBUTIONS (noisy individually; report as dist) ──────
const lexHs = allGestures.map(g => g.lexH);
const ttrs = allGestures.map(g => g.ttr);
const wcs = allGestures.map(g => g.wc);

// Readability per gesture is unstable below ~3 sentences; compute only for
// gestures with >= 3 sentences and report the distribution.
const readableGestures = allGestures.filter(g => g.sentences >= 3);
const fkGrades = readableGestures.map(g => readability(g.body).fleschKincaidGrade).filter(x => x != null);
const fleschEases = readableGestures.map(g => readability(g.body).fleschReadingEase).filter(x => x != null);

const gestureDist = {
  count: allGestures.length,
  readableCount: readableGestures.length,
  wordCount: dist(wcs),
  lexicalEntropy: dist(lexHs),
  typeTokenRatio: dist(ttrs),
  fleschKincaidGrade_3plusSentences: dist(fkGrades),
  fleschReadingEase_3plusSentences: dist(fleschEases),
};

// ── 4. TRANSITIONAL ENTROPY (proper-noun Jaccard across boundaries) ──────────
// Reuse a light proper-noun extractor with the curated noise list.
const NOISE = new Set(loadNoise());
function propers(body) {
  return (body.match(/\b[A-Z][a-záéíóúñü]{2,}\b/g) || []).filter(w => !NOISE.has(w));
}
const transitions = [];
for (const p of migrated) {
  for (let i = 0; i < p.gestures.length - 1; i++) {
    const a = gestures[p.gestures[i]], b = gestures[p.gestures[i + 1]];
    if (!a || !b) continue;
    const pa = propers(a.body), pb = propers(b.body);
    const d = jaccardDistance(pa, pb);
    transitions.push({
      plateau: p.id, from: a.id, to: b.id,
      separator: p.separators[i] || "paragraph",
      dist: d, reliable: pa.length >= 2 && pb.length >= 2,
    });
  }
}
const reliableT = transitions.filter(t => t.reliable && t.dist != null);
const transStats = {
  total: transitions.length,
  reliable: reliableT.length,
  paragraphMeanDist: round(mean(reliableT.filter(t => t.separator === "paragraph").map(t => t.dist))),
  sectionMeanDist: round(mean(reliableT.filter(t => t.separator === "section").map(t => t.dist))),
};

// ── 5. CROSS-PLATEAU CONCEPT DISPERSION ──────────────────────────────────────
const conceptDist = {};
for (const g of allGestures) {
  for (const w of propers(g.body)) {
    (conceptDist[w] ||= {})[g.plateau] = ((conceptDist[w] || {})[g.plateau] || 0) + 1;
  }
}
const concepts = Object.entries(conceptDist).map(([w, d]) => {
  const occ = [];
  for (const [pl, n] of Object.entries(d)) for (let i = 0; i < n; i++) occ.push(pl);
  return { term: w, total: occ.length, plateaus: Object.keys(d).length, dispersionNorm: round(shannonNormalized(occ)) };
}).filter(c => c.total >= 5);
const spine = concepts
  .filter(c => c.plateaus >= 5 && c.dispersionNorm >= 0.85)
  .sort((a, b) => b.plateaus - a.plateaus || b.total - a.total);
const localIntensities = concepts
  .filter(c => c.total >= 10 && c.dispersionNorm <= 0.6)
  .sort((a, b) => a.dispersionNorm - b.dispersionNorm);

// ── Assemble the JSON artifact ───────────────────────────────────────────────
const artifact = {
  generatedAt: new Date().toISOString(),
  corpus: {
    plateaus: plateaus.length,
    migratedPlateaus: migrated.length,
    gestures: allGestures.length,
    words: corpusReadability.wordCount,
    sentences: corpusReadability.sentenceCount,
  },
  corpusReadability: {
    fleschReadingEase: round(corpusReadability.fleschReadingEase),
    fleschKincaidGrade: round(corpusReadability.fleschKincaidGrade),
    gunningFog: round(corpusReadability.gunningFog),
    smog: round(corpusReadability.smog),
    colemanLiau: round(corpusReadability.colemanLiau),
    automatedReadabilityIndex: round(corpusReadability.automatedReadabilityIndex),
    avgWordsPerSentence: round(corpusReadability.avgWordsPerSentence),
    avgSyllablesPerWord: round(corpusReadability.avgSyllablesPerWord),
  },
  plateauMetrics,
  gestureDistributions: gestureDist,
  transitionalEntropy: transStats,
  conceptSpine: spine,
  localIntensities,
  notes: [
    "Syllable counts are heuristic (~16/26 on an adversarial test set), biased toward slight under-counting; syllable-based scores (Flesch, Fog, SMOG) run marginally optimistic. Coleman-Liau and ARI are syllable-free cross-checks.",
    "Per-gesture readability is only computed for gestures with >= 3 sentences and reported as a distribution; individual gesture grades are unstable.",
    "SMOG requires >= 30 sentences to be valid; per-plateau SMOG is null below that and flagged via smogReliable.",
    "Proper-noun extraction uses a hand-curated noise list and is an approximation for true NER; transitional/dispersion metrics only count gesture pairs with >= 2 proper nouns each as reliable.",
    "Structural entropy on this corpus partly reflects the first-pass paragraph split, not authorial intent; expect it to drop as continuous arcs are merged at plateau-level revision.",
  ],
};

const outPath = path.join(REPO_ROOT, "analysis", "corpus-metrics.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(artifact, null, 2) + "\n");

if (JSON_ONLY) {
  console.log(path.relative(REPO_ROOT, outPath));
  process.exit(0);
}

// ── Human-readable summary ───────────────────────────────────────────────────
const D = "─".repeat(64);
log(`\n${D}`);
log("  CORPUS METRICS — readability & entropy");
log(D);
log(`  Plateaus: ${artifact.corpus.plateaus} (${artifact.corpus.migratedPlateaus} split into gestures)`);
log(`  Gestures: ${artifact.corpus.gestures}   Words: ${artifact.corpus.words.toLocaleString()}   Sentences: ${artifact.corpus.sentences.toLocaleString()}`);

log(`\n  CORPUS READABILITY (whole-book, the trustworthy scale)`);
const cr = artifact.corpusReadability;
log(`    Flesch Reading Ease   : ${cr.fleschReadingEase}   (0=hard … 100=easy; ~60-70 = plain English)`);
log(`    Flesch-Kincaid Grade  : ${cr.fleschKincaidGrade}   (US school grade)`);
log(`    Gunning Fog           : ${cr.gunningFog}   (years of education)`);
log(`    SMOG                  : ${cr.smog}`);
log(`    Coleman-Liau          : ${cr.colemanLiau}   (syllable-free)`);
log(`    ARI                   : ${cr.automatedReadabilityIndex}   (syllable-free)`);
log(`    avg words/sentence    : ${cr.avgWordsPerSentence}`);
log(`    avg syllables/word    : ${cr.avgSyllablesPerWord}`);

log(`\n  PER-PLATEAU (Flesch-Kincaid grade, sorted hardest → easiest)`);
log(`    plateau | FK grade | Fog  | Flesch ease | CL   | ARI  | words/sent | gestures`);
for (const m of [...plateauMetrics].sort((a, b) => (b.fleschKincaidGrade ?? 0) - (a.fleschKincaidGrade ?? 0))) {
  log(`    ${m.id.padEnd(7)} | ${fmt(m.fleschKincaidGrade, 8)} | ${fmt(m.gunningFog, 4)} | ${fmt(m.fleschReadingEase, 11)} | ${fmt(m.colemanLiau, 4)} | ${fmt(m.automatedReadabilityIndex, 4)} | ${fmt(m.avgWordsPerSentence, 10)} | ${m.gestureCount}`);
}

log(`\n  GESTURE-SCALE DISTRIBUTIONS (individual gestures are noisy; this is the spread)`);
log(`    word count        p10/50/90 : ${gestureDist.wordCount.p10} / ${gestureDist.wordCount.p50} / ${gestureDist.wordCount.p90}`);
log(`    lexical entropy   p10/50/90 : ${gestureDist.lexicalEntropy.p10} / ${gestureDist.lexicalEntropy.p50} / ${gestureDist.lexicalEntropy.p90} bits`);
log(`    type-token ratio  p10/50/90 : ${gestureDist.typeTokenRatio.p10} / ${gestureDist.typeTokenRatio.p50} / ${gestureDist.typeTokenRatio.p90}`);
log(`    FK grade (3+ sent) p10/50/90: ${gestureDist.fleschKincaidGrade_3plusSentences.p10} / ${gestureDist.fleschKincaidGrade_3plusSentences.p50} / ${gestureDist.fleschKincaidGrade_3plusSentences.p90}  (n=${gestureDist.readableCount})`);

log(`\n  TRANSITIONAL ENTROPY (proper-noun Jaccard distance across boundaries)`);
log(`    reliable transitions      : ${transStats.reliable} / ${transStats.total}`);
log(`    mean dist at paragraph    : ${transStats.paragraphMeanDist}`);
log(`    mean dist at section break: ${transStats.sectionMeanDist}   (higher = breaks track topic pivots)`);

log(`\n  CONCEPT SPINE (>= 5 plateaus, evenly threaded) — the book's through-lines`);
for (const c of spine.slice(0, 12)) {
  log(`    ${c.term.padEnd(14)} | ${c.plateaus} plateaus | ${c.total} occ | dispersion ${c.dispersionNorm}`);
}
log(`\n  LOCAL INTENSITIES (>= 10 occ, concentrated) — single-plateau deep dives`);
for (const c of localIntensities.slice(0, 8)) {
  log(`    ${c.term.padEnd(14)} | ${c.plateaus} plateaus | ${c.total} occ | dispersion ${c.dispersionNorm}`);
}

log(`\n  → wrote ${path.relative(REPO_ROOT, outPath)}`);
log(D + "\n");

// Brief mode (build chain): one compact block.
brief(`\n${"─".repeat(50)}`);
brief("  CORPUS METRICS (full report: npm run analyze)");
brief("─".repeat(50));
brief(`  Gestures      : ${artifact.corpus.gestures}   Words: ${artifact.corpus.words.toLocaleString()}`);
brief(`  FK grade      : ${cr.fleschKincaidGrade}   Fog: ${cr.gunningFog}   Flesch ease: ${cr.fleschReadingEase}`);
brief(`  Coleman-Liau  : ${cr.colemanLiau}   ARI: ${cr.automatedReadabilityIndex}   (syllable-free)`);
brief(`  Concept spine : ${spine.slice(0, 5).map(c => c.term).join(", ")}`);
brief(`  → analysis/corpus-metrics.json`);
brief("─".repeat(50));

// ── helpers ──────────────────────────────────────────────────────────────────
function round(x) { return x == null ? null : Math.round(x * 100) / 100; }
function dist(xs) {
  return {
    n: xs.length,
    p10: round(percentile(xs, 0.10)),
    p25: round(percentile(xs, 0.25)),
    p50: round(percentile(xs, 0.50)),
    p75: round(percentile(xs, 0.75)),
    p90: round(percentile(xs, 0.90)),
    mean: round(mean(xs)),
  };
}
function fmt(x, w) { return (x == null ? "—" : String(x)).padStart(w); }

function loadNoise() {
  // Curated stop list for proper-noun extraction (sentence-initial caps,
  // weekdays, months, directions, demonyms, generic nouns).
  return [
    "The","And","But","She","He","They","We","You","This","That","These","Those","Then","There","Here","When","Where","Why","How","What","Who","Now","So","Of","In","On","At","To","For","From","With","If","Or","As","By","Is","Are","Was","Were","Be","Been","Being","I","It","Its","Their","His","Her","Our","Us","All","Some","Many","Each","Most","More","Less","Only","Even","Not","No","Yes","One","Two","Three","Four","Five","Other","Another","Same","First","Last","After","Before","During","While","Because","Since","Until","Just","Like","Such","Way","Day","Year","Time","Part","Page","People","Person","Thing","Things","Place","World","Life","Work","Words","Word","Question","Questions","Answer","Body","Mind","Heart","Hand","Hands","Eye","Eyes","Face","Voice","Story","Stories","Book","Chapter","Section","Earth","God","City","Street","Road","House","Home","Room","Door","Window","Money","Today","Yesterday","Tomorrow","Tonight","Morning","Evening","Night","Power","Capital","System","State","Government","Public","Private","Community","Group","Family","Friend","Friends","Children","Child","Woman","Women","Man","Men","Right","Left","High","Low","Big","Small","Long","Short","New","Old","Young","Free","Real","True","False","Every","Everything","Nothing","Something","Anything","Someone","Anyone","Nobody","Land","Both","Within","Among","Above","Below","Across","Around","Through","Outside","Inside","Upon","About",
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    "January","February","March","April","May","June","July","August","September","October","November","December",
    "None","Your","Verify","Six","Lights","Once","Water","Hospital","River","Bank","Foundation","Department","Council","Board","Office","School","Hall","Center","Building","Plant","Plants","Trees","Birds","Animals","Park",
    "Carolina","English","Spanish","French","Italian","German","Russian","African","European","American","Indian","Asian","British","Chinese","Japanese","Mexican","Dutch","Greek","Latin","Western","Eastern","Northern","Southern",
    "North","South","East","West","Hard","Soft","Loud","Quiet","Open","Close","Closed","Fast","Slow",
  ];
}
