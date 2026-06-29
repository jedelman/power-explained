# Move 1 — the wizard-spine re-cut (APPLIED 2026-06-29)

**Status:** all six Parts re-spined and applied (chapters renamed + drift fixed).
Chapter **order** is untouched in Move 1; this is framing only. Names confirmed by
Jason on PR #12 line comments ("replace all six in this register").

## The spine (provenance: prologue G-PR-026–031)

The prologue already names the book's structure as the tracker's six body-movements.
Jason's register casts each Part as the **reader's lived experience** of the movement —
something the reader *does* — so the spine reads as their own becoming (principle C in
the labels themselves). His three comments seeded II/IV/VI; I/III/V extend the same
voice, each anchored to its prologue gesture. Recombination, not invention.

| Part | old label | → name | source |
|---|---|---|---|
| I  | The Feeling Is Right | **The Feeling** | G-PR-026: "the felt sense — the tension in the gut or the shoulders before any thought arrives… *this is a pattern.*" |
| II | The Proof | **Learning to See** | Jason (PR #12); G-PR-027: "what the body does next: vigilance… observation, the gathering of context." |
| III| Why the System Is the Way It Is | **Taking It Apart** | G-PR-028: "the close work… grasping, taking apart, sorting." |
| IV | Why the Obvious Fixes Failed | **Learning from Those Who Walked Before** | Jason (PR #12); G-PR-029: "you learn from the ones who walked this ground before you." |
| V  | The World the Framework Missed | **Seeing What You Missed** | G-PR-030: "sends you back to the spot to see what you didn't see the first time." |
| VI | What to Build | **When You Wake** | Jason (PR #12); G-PR-031: "the return: the next sunrise, when you wake with the memories coming back." |

Part IV carries principle B in the prologue's own words: *"you learn from the ones
who walked this ground before you."* That movement is inheritance by definition.

Frontmatter standardizes on `part: 'Part N: <Name>'` (the index converts the colon to
an em-dash for display: `Part N — <Name>`).

## Drift to fix in the same rollout (separate from the rename)

The current `part:` metadata is inconsistent and, in two places, wrong:

- **`reenchanting` is mislabeled `Part V — The World the Framework Missed`** but sits
  at river position 21, deep inside the Part VI chapters. (Its real home is decided
  in Move 2, where it gets pulled forward — see below.)
- **`orgone-accumulator` carries `Part III — The Body`** — a subtitle that exists
  nowhere else; it should read as Part III's movement (**The Hands**).
- **Separator drift:** `Part II: The Proof` (colon) vs `Part II — The Proof`
  (em-dash, on `goetia`); `Part VI: What to Build` vs `Part VI — What to Build`
  (on `angel-faces-backward`, `wizards-walk`). Normalize all to the colon form.
- The "Initiation"/"Interlude" wizard chapters inherit their Part from the preceding
  chapter in the index grouping (index.astro treats them as interludes). Their
  explicit `part:` fields are normalized for consistency even though the index
  derives the heading from the analytical chapters around them.

## Move 2 preview — method chapters open each Part (proposal only; you move order)

Not applied in Move 1. Recorded here so the spine and the eventual reorder are read
together. Principle A: each wizard chapter moves to the **head** of a Part to frame
it; the analytical chapters then read as wisdom unearthed. **Re-Enchanting pulls
forward** (resolving its own drift) so the world reads re-enchanted from there on.

Opening bid (a proposal, not a decision — exact assignment is yours in Move 2):

- **Overture + Prologue** frame the whole and open **The Feeling**.
- **Becoming Wizards in the Woods** opens **The Watching** — the method is *named*
  here; the proof chapters then practice it.
- **The Speaking of Names (Goetia)** opens **The Hands** — naming as the close work.
- **The Orgone Accumulator** within **The Hands** / hinge to **The Telling**.
- **Re-Enchanting** pulls forward to open **The Telling** or **The Question**,
  flipping every chapter after it into inherited-wisdom register.
- **The Angel Faces Backward** opens **The Question**.
- End cluster — **The Wizard's Walk → The Djinn → The Doves** — holds **The Return**
  and the confirmation-reveal.

## Applied

- **Part I** (proof): `chapter-1`, `chapter-2` → `Part I: The Feeling`.
- **Parts II–VI** (this rollout): all 22 chapter manifests in Parts II–VI re-spined to
  the names above, with the drift fixed in the same pass — `goetia`/`angel-faces`/
  `wizards-walk` em-dash→colon, `orgone`'s stray "The Body" → Taking It Apart, and
  `reenchanting` corrected from the mislabeled Part V to Part VI where it currently
  sits (it gets pulled forward in Move 2).
- Index now groups into six clean Parts; interludes inherit correctly; build green.
- Rendered chapters regenerated for review.
