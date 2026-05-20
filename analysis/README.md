# analysis/

Machine-readable corpus metrics, regenerated on every build by
`scripts/analyze-corpus.mjs`. Committed (not gitignored) so readability /
entropy drift is visible in git history — a revision that pushes a chapter's
grade level up shows up in the diff.

## corpus-metrics.json

Readability and entropy at three scales (gesture, plateau, corpus).

Regenerate: `npm run analyze` (full stdout report) or `node
scripts/analyze-corpus.mjs --json-only` (artifact only).

### Reading the numbers

**Readability** (whole-book and per-plateau):

- `fleschReadingEase` — 0 (hard) … 100 (easy). ~60-70 is plain English.
- `fleschKincaidGrade`, `gunningFog`, `smog` — US grade / years of education.
  Syllable-based; run marginally optimistic (see caveat below).
- `colemanLiau`, `automatedReadabilityIndex` — character-based, syllable-free.
  Trust these as the cross-check on the syllable family.
- `avgWordsPerSentence`, `avgSyllablesPerWord` — the raw inputs.

**Entropy**:

- `gestureDistributions.lexicalEntropy` — Shannon bits over word frequencies.
  Low (relative to length-bucket) flags anaphora / deliberate repetition.
- `plateauMetrics[].structuralEntropyNorm` — variation of gesture lengths in a
  plateau (0=uniform, 1=maximally varied). On the first-pass corpus this partly
  reflects the mechanical paragraph split; expect it to fall as continuous arcs
  are merged at plateau-level revision.
- `transitionalEntropy` — mean proper-noun Jaccard distance across gesture
  boundaries, split by separator type. Section breaks at higher distance than
  paragraph breaks = the `---` markers track topic pivots.

**Concept maps**:

- `conceptSpine` — proper nouns evenly threaded across ≥5 plateaus. The book's
  through-lines.
- `localIntensities` — proper nouns concentrated in 1-2 plateaus at high count.
  Single-plateau deep dives (e.g. Lumumba in P-04).

### Caveats (also in the JSON `notes` array)

1. Syllable counting is heuristic (~16/26 on an adversarial test set), biased
   toward slight under-counting → syllable-based scores run marginally
   optimistic. Coleman-Liau and ARI don't use syllables.
2. Per-gesture readability is only computed for gestures with ≥3 sentences and
   reported as a distribution; individual short-gesture grades are unstable.
3. SMOG needs ≥30 sentences; per-plateau SMOG is null below that
   (`smogReliable: false`).
4. Proper-noun extraction uses a hand-curated noise list, not real NER.
   Transitional/dispersion metrics only count gesture pairs with ≥2 proper
   nouns each as reliable (`transitionalEntropy.reliable` vs `.total`).
5. Structural entropy reflects the first-pass split as much as authorial intent.

## merge-map.json / merge-map.md

Advisory merge proposals for plateau-level revision — which paragraph-adjacent
gestures are likely one continuous arc the mechanical split fragmented.
Section-separated pairs are excluded (the `---` is intent to hold apart).

Regenerate: `npm run merge-map` (writes both the JSON and the readable .md).
NOT in the build chain — it's an authorial working tool, regenerated on demand.

Scoring (see `scripts/merge-map.mjs` header for the full model): each
paragraph adjacency gets a score in roughly [-3, +5]. Pro-merge signals: shared
proper noun, anaphoric pronoun start with no new name, continuation conjunction,
arc-sized combined length, second gesture has no proper noun. Anti-merge: short
deliberate landing, brand-new proper-noun cluster, first ends on a question or
dash/colon. Bands: STRONG (≥3), consider (1-2), keep (≤0).

A merge is **byte-preserving** (verified empirically): it removes a `\n\n` join
that the composer re-adds, so `compile-plateau verify` against the snapshot
still passes after merging. To merge `G-XX-AAA → G-XX-BBB`: append B's body to
A's with a blank line, delete B's file, remove B's id and the paragraph
separator at that index from the manifest; A's id is kept, B's retired.

Validation note: P-04 (the one authored chapter) scores **0 STRONG** merges —
the tool correctly finds nothing to "fix" in the chapter that's already done.
Highest merge pressure: P-16 (19 STRONG), P-06/P-09/P-10/P-17 (~9 each).
