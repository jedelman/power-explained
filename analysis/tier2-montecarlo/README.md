# analysis/tier2-montecarlo/

Tier-2 tagging research: the book's **imagery, motifs, affect, and consciousness
practices**, surfaced by Monte-Carlo multi-pass agreement rather than a single
read. Where `corpus-metrics.json` measures *form* (readability, entropy), this
measures *figurative content* — the recurring images and the verbs the book
teaches — so the lyrical and analytical registers can later be bound by a shared
image-set.

Status: `vocab.yml` is the controlled vocabulary, distilled from stratified
samples (the Monte-Carlo runs below). The **full-book application run has now
happened** — all 911 gestures are tagged in `gesture-tags.json`. Nothing here
has been wired into `for-agents/tag-ontology.yml` yet, and the 5 `proposed/`
tags the full run surfaced are not yet promoted into `vocab.yml`.

## Method

For each sampled gesture, **three independent blind passes** (separate agents,
no shared state) propose open-vocabulary tags with a short quoted evidence
snippet. We then cluster near-synonym coinages, score each cluster by
recurrence (distinct gestures / plateaus / registers) and by **cross-pass
agreement** (how often independent passes land the same tag on the same
gesture), and distil the survivors into a controlled vocabulary. Agreement is
the signal Monte-Carlo buys us: a tag three blind passes all reach is real;
one only a single pass coins is a candidate.

Two runs:

| run | sample | passes | agents | tag instances |
|---|---|---|---|---|
| image / motif / affect | 285 gestures, ~10 per plateau, all 29 plateaus | 3 | 18 (6 shards × 3) | 3,596 |
| practice | 225 gestures, wizard-register-weighted | 3 | 15 (5 shards × 3) | 840 |

The practice run used the 15 candidate practices as a seed palette but instructed
each pass to **coin new ones**, so it is discovery as well as validation.

### Full-book application run

Once the vocabulary was validated, a single classification pass tagged **all 911
gestures** against it (20 shards, agents reading `vocab.yml` as the source of
truth). 2,613 tags, 97% of gestures tagged, avg 2.9 tags/gesture. Only 2 tags
fell outside scope (both Tier-1 `place/`), and the agents surfaced 5 `proposed/`
candidates for vocabulary growth: `practice/reciprocating` (×2, the
boomerang-bottle gift economy), `practice/guesting` and `practice/conditioning`
(both already on the watch-list — confirmed), `image/the-cooperative-bank`
(Mondragón, distinct from the credit-union), and `image/the-muskrat`.

## Files

- `vocab.yml` — the distilled controlled vocabulary (DRAFT). 101 canonical tags
  across four families: image (54), motif (15), affect (12), practice (20). Each
  tag carries a gloss, a `binding: true` flag if it crosses ≥3 of the book's four
  registers, and the raw variant strings the passes coined (the swarm's match
  aliases).
- `gesture-tags.json` — **the deliverable**: all 911 gestures in reading order,
  each with its Tier-2 tags and a quoted evidence snippet per tag. Produced by the
  full-book application run.
- `binding-map.json` — every image/motif that recurs across ≥2 plateaus, with the
  plateau list and gesture count: the book's cross-chapter binding structure.
- `fullbook-tag-map.html` — full-book heatmap (affect / practice / image / motif
  × plateau). The headline visualization.
- `aggregated-image-motif-affect.json` — clustered results for the first sample run.
- `aggregated-practice.json` — clustered results for the practice run, with
  in-palette vs. newly-coined flags and per-tag agreement.
- `recurrence-heatmap.html` — visual: affect × register, then image and motif
  recurrence across plateaus in reading order.
- `raw/samples/` — the stratified samples and per-shard input lists.
- `raw/passes/` — all 33 sample-run pass files (`shard-N-pass-X.json` for the first
  run, `pr-shard-N-pass-X.json` for practice). Preserved because re-running costs
  real agent time.
- `raw/swarm/` — the full-book run: 20 raw shard outputs (`passes/out-N.json`) and
  the shard inputs + `all-gestures.json` (`samples/`).
- `scripts/` — the aggregation + heatmap scripts. NOTE: these were run in-session
  against `/tmp/mc/`; the paths inside are hard-coded to that working dir. To
  reproduce, point them at `raw/` or stage the inputs back into `/tmp/mc/`.

## Headline findings

- **Affect is the book's connective tissue.** Across the full book `clear-eyed`
  appears in all 29 chapters and `indictment` in 26; `disciplined-hope` (27
  chapters) and `grief` (24) span the whole arc. The book modulates register
  constantly but holds one emotional key. (Note: `clear-eyed` at 232 gestures may
  be slightly over-applied as the default analytic affect — worth a spot-check.)
- **The practice curriculum has a spine: attending → naming → building.**
  `attending` is the master practice (128 of 911 gestures, 24 of 29 chapters),
  then `naming` (92g), then the constructive verbs `building` (60g) and
  `self-governing` (51g). Notice clearly → name it truly → build and govern.
- **The most recurrent single image is `the-restaurant`** (41 gestures, 16
  chapters) — Jason's restaurant as the book's master metaphor — followed by
  `the-machine` (38g) and `songbirds` (26g). The top motifs are epistemic:
  `knowing-in-the-body` (63g, 20 chapters) and `cannot-verify-from-inside` (45g).
- **Binding images** (recur across ≥3 registers): night-herons, the-redcedar,
  the-highway, the-restaurant, water-tribunal, zuccotti-park, the-thread,
  the-angel.

## Open reconciliation (for the wiring step, not yet done)

`for-agents/tag-ontology.yml` already declares `emotion:` and `action:`
namespaces that overlap this work's `affect/` and `practice/`. Before promoting
any of this into the ontology, decide: reuse `emotion`/`action`, or add
`affect`/`practice` as distinct axes. `image/` and `motif/` appear to be genuinely
new namespaces. Per the ontology's own evolution policy, a new namespace is an
architectural decision and must be declared deliberately.
