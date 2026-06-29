# Move 1 — the wizard-spine re-cut (proposal for Jason's nod)

**Status:** Part I cut as the proof in this push (chapters 1–2). Parts II–VI below
are *proposed*, not yet applied — they ship when you nod. Chapter **order** is
untouched in Move 1; this is framing only.

## The spine (provenance: prologue G-PR-026–031)

The prologue already names the book's structure as the tracker's six body-movements.
Each Part is renamed from its analytical label to the movement the prologue gives it.
Every name below is the prologue's own word for that stage — recombination, not invention.

| Part | current label | → proposed | prologue source (verbatim) |
|---|---|---|---|
| I  | The Feeling Is Right | **The Feeling** | G-PR-026: "the felt sense — the tension in the gut or the shoulders before any thought arrives… *this is a pattern.*" |
| II | The Proof | **The Watching** | G-PR-027: "what the body does next: vigilance… observation, the gathering of context. Not argument — evidence." |
| III| Why the System Is the Way It Is | **The Hands** | G-PR-028: "the close work — muscular, active, the hands in the thing: grasping, taking apart, sorting." |
| IV | Why the Obvious Fixes Failed | **The Telling** | G-PR-029: "the fourth is social… You learn from the ones who walked this ground before you; storytelling is the oldest part of the practice." |
| V  | The World the Framework Missed | **The Question** | G-PR-030: "the elder's question… sends you back to the spot to see what you didn't see the first time." |
| VI | What to Build | **The Return** | G-PR-031: "the return: the next sunrise, when you wake with the memories coming back to you, and rise to use them." |

Note **The Telling** (Part IV) already carries principle B in the prologue's own
words: *"you learn from the ones who walked this ground before you."* The content
of that movement is inheritance by definition.

Frontmatter format standardizes on `part: 'Part N: <Movement>'` (the index converts
the colon to an em-dash for display: `Part N — <Movement>`).

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

## What's applied in this push

- `chapter-1.md`, `chapter-2.md`: `part:` → `Part I: The Feeling`.
- Rendered baseline of all 28 chapters committed under
  `for-agents/enchantment/rendered/` so subsequent per-chapter prose changes show as
  clean per-commit diffs for line-targeted review.
