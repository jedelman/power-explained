#!/usr/bin/env node
/**
 * Harvest vocabulary candidates — find proper nouns and recurring terms
 * in gesture prose that are NOT yet in the ontology, so we can decide
 * what to promote before a book-wide Tier-1 tag pass.
 *
 * Focuses on high-precision signals:
 *   - Capitalized tokens appearing mid-sentence (not sentence-initial),
 *     or capitalized multi-word phrases (proper-noun phrases), counted
 *     across the corpus.
 *   - Cross-referenced against existing person / place / voice / concept
 *     terms (and their known aliases) so only genuinely-missing terms show.
 *
 * It does NOT try to harvest lowercase concepts — those need the
 * Monte Carlo / manual judgment pass. This is for proper nouns mainly.
 *
 * Usage:
 *   node scripts/harvest-vocab.mjs                 # whole corpus
 *   node scripts/harvest-vocab.mjs P-05 P-06 ...   # specific plateaus
 *   node scripts/harvest-vocab.mjs --min 3         # frequency floor (default 2)
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

const args = process.argv.slice(2);
const minIdx = args.indexOf("--min");
const MIN = minIdx !== -1 ? parseInt(args[minIdx + 1], 10) : 2;
const plateauFilter = args.filter(a => /^P-/.test(a));

// Common sentence-initial / function words to ignore even when capitalized.
const STOP = new Set([
  "The","A","An","And","But","Or","So","For","Yet","Nor","If","When","While",
  "Then","Now","Here","There","This","That","These","Those","It","I","We","You",
  "He","She","They","His","Her","Their","Our","My","Your","Its","To","In","On",
  "At","By","Of","As","Is","Was","Were","Be","Been","Not","No","Yes","Why","How",
  "What","Who","Where","Which","Whose","Because","After","Before","Even","Still",
  "Each","Every","All","Some","Most","Both","One","Two","Three","Their","Whether",
  "Like","Just","Only","Also","Once","Out","Up","Down","Over","Under","Through",
  "From","With","Without","Into","About","Against","Between","During","Until",
  "His","Her","Maybe","Perhaps","Sometimes","Often","Always","Never","Nothing",
  "Something","Someone","Everyone","Nobody","Part","Chapter","Or",
]);

function loadOntologyTerms() {
  const doc = yaml.load(fs.readFileSync(ONTOLOGY_PATH, "utf8"));
  const known = new Set();
  for (const def of Object.values(doc.namespaces || {})) {
    for (const t of def.terms || []) {
      // normalize: term and its space-form, lowercased, last word
      known.add(t.toLowerCase());
      known.add(t.replace(/-/g, " ").toLowerCase());
      const parts = t.split("-");
      known.add(parts[parts.length - 1].toLowerCase()); // surname-ish
    }
  }
  return known;
}

function loadBodies() {
  const out = [];
  for (const f of fs.readdirSync(GROOT)) {
    if (!f.endsWith(".md") || f === "README.md") continue;
    if (!f.startsWith("G-")) continue;
    const text = fs.readFileSync(path.join(GROOT, f), "utf8");
    const end = text.indexOf("\n---\n", 4);
    if (end === -1) continue;
    const fm = yaml.load(text.slice(4, end)) || {};
    if (plateauFilter.length && !plateauFilter.includes(fm.plateau)) continue;
    out.push({ plateau: fm.plateau, body: text.slice(end + 5) });
  }
  return out;
}

const known = loadOntologyTerms();
const bodies = loadBodies();

// Extract capitalized proper-noun phrases. A phrase is 1+ consecutive
// Capitalized words. We record whether it ever appeared mid-sentence.
const phraseCount = {};       // phrase -> count
const phrasePlateaus = {};    // phrase -> Set(plateau)
const phraseMidSentence = {}; // phrase -> bool (seen not-sentence-initial)

for (const { plateau, body } of bodies) {
  // Split into sentences (rough) to know sentence-initial position.
  const sentences = body.replace(/\n+/g, " ").split(/(?<=[.!?])\s+/);
  for (const sent of sentences) {
    const tokens = sent.match(/[A-Za-z][A-Za-z'’.-]*/g) || [];
    let i = 0;
    while (i < tokens.length) {
      const tok = tokens[i].replace(/[.'’-]+$/, "");
      const isCap = /^[A-Z][a-z]+/.test(tok);
      if (isCap) {
        // accumulate consecutive capitalized words
        const phraseToks = [tok];
        let j = i + 1;
        while (j < tokens.length) {
          const nt = tokens[j].replace(/[.'’-]+$/, "");
          if (/^[A-Z][a-z]+/.test(nt)) { phraseToks.push(nt); j++; }
          else break;
        }
        const phrase = phraseToks.join(" ");
        const midSentence = i > 0; // not the first token of the sentence
        const single = phraseToks.length === 1;
        // Skip pure stopwords for single-word phrases
        if (!(single && STOP.has(phraseToks[0]))) {
          phraseCount[phrase] = (phraseCount[phrase] || 0) + 1;
          (phrasePlateaus[phrase] ||= new Set()).add(plateau);
          if (midSentence) phraseMidSentence[phrase] = true;
        }
        i = j;
      } else {
        i++;
      }
    }
  }
}

// Filter: must recur >= MIN, must be mid-sentence at least once (proper-noun
// signal), and the head word must not already be a known ontology term.
function lastWord(p) { return p.split(" ").pop().toLowerCase(); }
function headKnown(p) {
  return p.split(" ").some(w => known.has(w.toLowerCase()));
}

const candidates = Object.entries(phraseCount)
  .filter(([p, c]) => c >= MIN)
  .filter(([p]) => phraseMidSentence[p])         // appeared mid-sentence
  .filter(([p]) => !headKnown(p))                // not already covered
  .map(([p, c]) => ({ phrase: p, count: c, plateaus: [...phrasePlateaus[p]].sort() }))
  .sort((a, b) => b.count - a.count || b.plateaus.length - a.plateaus.length);

console.log(`\n  VOCAB HARVEST — ${bodies.length} gestures${plateauFilter.length ? " (" + plateauFilter.join(",") + ")" : " (whole corpus)"}, min freq ${MIN}`);
console.log(`  Capitalized proper-noun phrases not yet covered by the ontology.\n`);
console.log(`  ${"candidate".padEnd(34)}  ${"freq".padStart(4)}  ${"plateaus"}`);
console.log(`  ${"-".repeat(34)}  ${"-".repeat(4)}  ${"-".repeat(20)}`);
for (const c of candidates) {
  const ps = c.plateaus.length <= 5 ? c.plateaus.join(",") : `${c.plateaus.slice(0,5).join(",")} +${c.plateaus.length-5}`;
  console.log(`  ${c.phrase.padEnd(34)}  ${String(c.count).padStart(4)}  ${ps}`);
}
console.log(`\n  ${candidates.length} candidate(s). Cross-check before promoting — proper-noun`);
console.log(`  detection is heuristic (titles, sentence starts may leak through).`);
