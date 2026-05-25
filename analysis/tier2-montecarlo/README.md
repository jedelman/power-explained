# analysis/tier2-montecarlo/

Tier-2 tagging research: the book's **imagery, motifs, affect, and consciousness
practices**, surfaced by Monte-Carlo multi-pass agreement rather than a single
read. Where `corpus-metrics.json` measures *form* (readability, entropy), this
measures *figurative content* — the recurring images and the verbs the book
teaches — so the lyrical and analytical registers can later be bound by a shared
image-set.

Status: **the controlled vocabulary in `vocab.yml` is a DRAFT.** It is distilled
from stratified samples, not the full corpus. The full-book swarm (tag all ~911
gestures against this vocabulary) has **not** run yet. Nothing here has been
wired into `for-agents/tag-ontology.yml`.

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

## Files

- `vocab.yml` — the distilled controlled vocabulary (DRAFT). 101 canonical tags
  across four families: image (54), motif (15), affect (12), practice (20). Each
  tag carries a gloss, a `binding: true` flag if it crosses ≥3 of the book's four
  registers, and the raw variant strings the passes coined (the swarm's match
  aliases).
- `aggregated-image-motif-affect.json` — clustered results for the first run.
- `aggregated-practice.json` — clustered results for the practice run, with
  in-palette vs. newly-coined flags and per-tag agreement.
- `recurrence-heatmap.html` — visual: affect × register, then image and motif
  recurrence across plateaus in reading order.
- `raw/samples/` — the stratified samples and per-shard input lists.
- `raw/passes/` — all 33 raw pass files (`shard-N-pass-X.json` for the first run,
  `pr-shard-N-pass-X.json` for practice). Preserved because re-running costs real
  agent time.
- `scripts/` — the aggregation + heatmap scripts. NOTE: these were run in-session
  against `/tmp/mc/`; the paths inside are hard-coded to that working dir. To
  reproduce, point them at `raw/` or stage the inputs back into `/tmp/mc/`.

## Headline findings

- **Affect is the book's connective tissue.** Five affects span all four
  registers (spine / theory / constructive / lyrical): indictment, reverence,
  disciplined-hope, defiance, grief. The book modulates register constantly but
  holds one emotional key.
- **The practice curriculum has a spine: attending → naming → tending.**
  `attending` is the master practice (77 of 225 sampled gestures, 20 of 29
  chapters). Notice clearly → call it by its true name → care for it over time.
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
