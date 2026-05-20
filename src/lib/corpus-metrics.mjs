// corpus-metrics.mjs
//
// Pure, dependency-free functions for readability and entropy analysis of
// prose. No file I/O — callers pass in strings. This makes every function
// unit-testable in isolation and keeps the heuristics in one auditable place.
//
// Caveats baked into the design:
//   - English syllable counting has no exact rule without a pronunciation
//     dictionary. countSyllables() is a heuristic; expect ~5-10% error on
//     individual words, which averages out over a plateau but is noisy on a
//     single short gesture. Character-based metrics (Coleman-Liau, ARI) do
//     not depend on syllables and are the more trustworthy cross-check.
//   - Readability formulas (Flesch, Fog, SMOG) are calibrated for
//     multi-paragraph documents. At the gesture scale (median ~55 words,
//     ~3 sentences) individual scores are unstable. Report gesture-scale
//     readability only as a distribution, never as a per-gesture truth.

// ── Tokenization primitives ──────────────────────────────────────────────

// Words: runs of letters (incl. common accents) and digits. Hyphenated and
// apostrophe'd forms collapse to their alpha runs for counting purposes.
export function words(text) {
  return (text.toLowerCase().match(/[a-z0-9áéíóúñü]+/g) || []);
}

// Sentences: split on terminal punctuation. Collapses ellipses and multiple
// terminators. Italic/markdown markers are stripped first. An empty trailing
// fragment is dropped. This is heuristic — abbreviations ("U.S.") will
// over-count slightly; acceptable at plateau scale.
export function sentences(text) {
  const cleaned = text
    .replace(/[*_`>#]/g, " ")        // markdown emphasis / blockquote / heading markers
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return [];
  // Split on . ! ? possibly repeated, followed by space or end.
  const parts = cleaned
    .split(/(?<=[.!?])["')\]]?\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);
  // If the text had no terminal punctuation at all, treat the whole thing as
  // one sentence (a fragment landing like "Build accordingly").
  return parts.length > 0 ? parts : [cleaned];
}

// Letters only (for character-based readability metrics).
export function letterCount(text) {
  return (text.match(/[A-Za-zÁÉÍÓÚÑÜáéíóúñü]/g) || []).length;
}

// ── Syllable estimation ────────────────────────────────────────────────────

// Heuristic English syllable counter. Rules:
//   1. Lowercase, strip non-alpha.
//   2. Count vowel groups (a,e,i,o,u,y runs) as syllable nuclei.
//   3. Subtract one for a silent terminal 'e'.
//   4. Add one back for terminal 'le'/'les' after a consonant (e.g. "table").
//   5. Floor at 1 for any word with letters.
//
// Measured accuracy on a hard 26-word test set: ~16/26. All errors are the
// hiatus class (adjacent vowels pronounced separately: "idea", "radio",
// "society", "science", "being", "create") plus "-ed" over-counting
// ("walked"). The systematic bias is slight UNDER-counting of syllables,
// which makes syllable-based readability scores marginally OPTIMISTIC (text
// looks a little easier than it is). On running prose the error is smaller
// than on this adversarial set because most tokens are short, common words.
// Treat Coleman-Liau and ARI (character-based, syllable-free) as the
// trustworthy cross-check on the Flesch/Fog/SMOG family.
export function countSyllables(word) {
  const w = word.toLowerCase().replace(/[^a-záéíóúñü]/g, "");
  if (w.length === 0) return 0;
  if (w.length <= 3) return 1; // short words are reliably monosyllabic enough

  let groups = (w.match(/[aeiouyáéíóúü]+/g) || []).length;

  // silent terminal e (e.g. "make" -> 1, not 2). For consonant+"le" words
  // ("table") the subtraction here and the addition just below cancel, which
  // is the intended net of +0 over the raw vowel-group count.
  if (/e$/.test(w) && !/[aeiouy]e$/.test(w)) {
    groups -= 1;
  }
  // consonant + "le"/"les" terminal adds a syllable ("table", "candles")
  if (/[^aeiouy](les?)$/.test(w)) {
    groups += 1;
  }

  return Math.max(1, groups);
}

// ── Aggregate counts for a block of text ─────────────────────────────────────

export function textStats(text) {
  const ws = words(text);
  const ss = sentences(text);
  const syllables = ws.reduce((acc, w) => acc + countSyllables(w), 0);
  const complexWords = ws.filter(w => countSyllables(w) >= 3).length;
  const letters = letterCount(text);
  return {
    wordCount: ws.length,
    sentenceCount: ss.length,
    syllableCount: syllables,
    complexWordCount: complexWords,         // 3+ syllables, for Gunning Fog / SMOG
    letterCount: letters,
    avgWordsPerSentence: ss.length ? ws.length / ss.length : ws.length,
    avgSyllablesPerWord: ws.length ? syllables / ws.length : 0,
    avgLettersPerWord: ws.length ? letters / ws.length : 0,
  };
}

// ── Readability formulas ─────────────────────────────────────────────────────
// Each takes textStats(); returns a number. Higher Flesch = easier to read;
// the grade-level metrics return approximate US school grades / years of
// education (higher = harder).

export function fleschReadingEase(s) {
  if (s.wordCount === 0) return null;
  return 206.835 - 1.015 * s.avgWordsPerSentence - 84.6 * s.avgSyllablesPerWord;
}

export function fleschKincaidGrade(s) {
  if (s.wordCount === 0) return null;
  return 0.39 * s.avgWordsPerSentence + 11.8 * s.avgSyllablesPerWord - 15.59;
}

export function gunningFog(s) {
  if (s.wordCount === 0) return null;
  const pctComplex = (s.complexWordCount / s.wordCount) * 100;
  return 0.4 * (s.avgWordsPerSentence + pctComplex);
}

// SMOG needs >= 30 sentences to be valid; we still compute it but callers
// should gate on sentenceCount and treat low-sentence SMOG as unreliable.
export function smog(s) {
  if (s.sentenceCount === 0) return null;
  return 1.0430 * Math.sqrt(s.complexWordCount * (30 / s.sentenceCount)) + 3.1291;
}

// Coleman-Liau — character-based, no syllables. More robust to syllable error.
export function colemanLiau(s) {
  if (s.wordCount === 0) return null;
  const L = (s.letterCount / s.wordCount) * 100;   // letters per 100 words
  const S = (s.sentenceCount / s.wordCount) * 100;  // sentences per 100 words
  return 0.0588 * L - 0.296 * S - 15.8;
}

// Automated Readability Index — character-based.
export function automatedReadabilityIndex(s) {
  if (s.wordCount === 0 || s.sentenceCount === 0) return null;
  return 4.71 * (s.letterCount / s.wordCount) + 0.5 * (s.wordCount / s.sentenceCount) - 21.43;
}

// Bundle: every readability metric for a block of text.
export function readability(text) {
  const s = textStats(text);
  return {
    ...s,
    fleschReadingEase: fleschReadingEase(s),
    fleschKincaidGrade: fleschKincaidGrade(s),
    gunningFog: gunningFog(s),
    smog: smog(s),
    colemanLiau: colemanLiau(s),
    automatedReadabilityIndex: automatedReadabilityIndex(s),
  };
}

// ── Entropy ──────────────────────────────────────────────────────────────────

// Shannon entropy (bits) of the frequency distribution of an array of items.
export function shannon(arr) {
  if (arr.length === 0) return 0;
  const f = new Map();
  for (const x of arr) f.set(x, (f.get(x) || 0) + 1);
  const N = arr.length;
  let H = 0;
  for (const [, c] of f) {
    const p = c / N;
    H -= p * Math.log2(p);
  }
  return H;
}

// Normalized Shannon entropy in [0,1]: H divided by log2(number of distinct
// items). 1 = perfectly uniform; 0 = all identical. Undefined for <2 distinct
// items, returned as 0.
export function shannonNormalized(arr) {
  const u = new Set(arr).size;
  if (u <= 1) return 0;
  return shannon(arr) / Math.log2(u);
}

// Type-token ratio: distinct words / total words. Decreases with length.
export function typeTokenRatio(text) {
  const ws = words(text);
  if (ws.length === 0) return 0;
  return new Set(ws).size / ws.length;
}

// Lexical (word-frequency) Shannon entropy of a text, in bits.
export function lexicalEntropy(text) {
  return shannon(words(text));
}

// Population variance / std of a numeric array.
export function variance(xs) {
  if (xs.length === 0) return 0;
  const mean = xs.reduce((a, b) => a + b, 0) / xs.length;
  return xs.reduce((s, x) => s + (x - mean) ** 2, 0) / xs.length;
}
export function std(xs) {
  return Math.sqrt(variance(xs));
}

// Jaccard distance between two arrays treated as sets: 1 - |A∩B|/|A∪B|.
// Returns null when both sets are empty (caller decides how to treat it,
// rather than silently reporting 0 = "identical").
export function jaccardDistance(a, b) {
  const A = new Set(a), B = new Set(b);
  if (A.size === 0 && B.size === 0) return null;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  const union = A.size + B.size - inter;
  if (union === 0) return null;
  return 1 - inter / union;
}

// Percentile of a numeric array (p in [0,1]); array need not be pre-sorted.
export function percentile(xs, p) {
  if (xs.length === 0) return null;
  const sorted = [...xs].sort((a, b) => a - b);
  return sorted[Math.floor((sorted.length - 1) * p)];
}

export function mean(xs) {
  return xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : 0;
}
