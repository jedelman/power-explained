// test-corpus-metrics.mjs — assertions for the metrics library.
// Run: node scripts/test-corpus-metrics.mjs   (exit 1 on any failure)

import {
  countSyllables, words, sentences, textStats, readability,
  shannon, shannonNormalized, jaccardDistance, typeTokenRatio, percentile,
} from "../src/lib/corpus-metrics.mjs";

let failures = 0;
function assert(cond, msg) {
  if (!cond) { console.error("FAIL:", msg); failures++; }
}
function approx(a, b, eps, msg) {
  if (a == null || Math.abs(a - b) > eps) { console.error(`FAIL: ${msg} (got ${a}, want ~${b})`); failures++; }
}

// — tokenization —
assert(words("The commons, re-enchanted!").length === 4, "words() basic count");
assert(sentences("One. Two! Three?").length === 3, "sentences() splits terminals");
assert(sentences("No terminal punctuation here").length === 1, "sentences() fragment = 1");

// — syllables (the cases the heuristic gets right) —
assert(countSyllables("table") === 2, "syllables: table");
assert(countSyllables("make") === 1, "syllables: make");
assert(countSyllables("revolution") === 4, "syllables: revolution");
assert(countSyllables("hegemony") === 4, "syllables: hegemony");
assert(countSyllables("a") === 1, "syllables: a");

// — entropy —
approx(shannon(["a","a","a","a"]), 0, 1e-9, "shannon of uniform-single = 0");
approx(shannon(["a","b"]), 1, 1e-9, "shannon of 2 equal = 1 bit");
approx(shannonNormalized(["a","b","c","d"]), 1, 1e-9, "normalized uniform = 1");
assert(shannonNormalized(["a"]) === 0, "normalized single = 0");

// — jaccard —
assert(jaccardDistance([], []) === null, "jaccard both empty = null");
approx(jaccardDistance(["a","b"], ["a","b"]), 0, 1e-9, "jaccard identical = 0");
approx(jaccardDistance(["a"], ["b"]), 1, 1e-9, "jaccard disjoint = 1");
approx(jaccardDistance(["a","b"], ["b","c"]), 1 - 1/3, 1e-9, "jaccard half overlap");

// — ttr —
approx(typeTokenRatio("a a a a"), 0.25, 1e-9, "ttr all-same = 1/4");
approx(typeTokenRatio("a b c d"), 1, 1e-9, "ttr all-distinct = 1");

// — percentile —
assert(percentile([1,2,3,4,5], 0.5) === 3, "percentile median");
assert(percentile([], 0.5) === null, "percentile empty = null");

// — readability sanity: simple text should be easy, dense text hard —
const easy = readability("The dog ran. The cat sat. We saw it. It was fun.");
const hard = readability("The epistemological ramifications of decontextualized hegemonic superstructures necessitate interdisciplinary reconceptualization throughout contemporary theoretical frameworks.");
assert(easy.fleschReadingEase > hard.fleschReadingEase, "easy text scores higher Flesch ease than hard");
assert(easy.fleschKincaidGrade < hard.fleschKincaidGrade, "easy text scores lower grade than hard");
assert(easy.colemanLiau < hard.colemanLiau, "easy text lower Coleman-Liau than hard");

// — textStats internal consistency —
const s = textStats("Hello world. This is a test.");
assert(s.wordCount === 6, "textStats word count");
assert(s.sentenceCount === 2, "textStats sentence count");
assert(s.syllableCount >= s.wordCount, "syllables >= words");

if (failures === 0) {
  console.log("corpus-metrics: all assertions passed");
  process.exit(0);
} else {
  console.error(`corpus-metrics: ${failures} assertion(s) failed`);
  process.exit(1);
}
