# Composition Pass — Working Notes

Started 2026-06-06. Successor to the sequencing/parsing work logged in
`sequencing-pass-notes.md`. This pass crosses from parsing-by-naming into
composition: new connective prose and a new reading *form* (the composable
river), under the "stage everything" gating contract.

Read `for-agents/composition-pass-instructions.md` first. Resume here.

---

## Current position

Spine step 1 DONE and staged (2026-06-06): the Pact thread proof-of-concept.
The membrane is intact — no river or chapter manifest touched; the canonical
book is unchanged.

**Next concrete steps:** (a) the edges (Spine step 2) — at build time, surface
from gesture tags which other threads pass through each gesture; (b) seed more
canonical threads (lexicon + concept-spine); (c) draft the grimoire-as-system
gesture (A1) into the workbench — see placement decision below; (d) prep the
captured-commons live session (C1).

## Decisions locked (Jason, 2026-06-06)

- **Stage everything.** Agent composes nothing into the book; only Jason moves
  the manifest.
- **Captured commons (C1) is a live session**, not autonomous — prep only.
- **The composable river is the centerpiece**; the prose moves are its organs.
- **Chords (A2) greenlit** for composition — Pact and Evocation are not fully
  fleshed out yet, but good enough to compose; refine downriver.
- **The grimoire-as-system gesture (A1) gets its OWN space, adjacent to the
  "what to build" chapters** (the reclamation chapters — Ch 14 Land, 15 Care,
  16 Love, 17 Tracking, 18). Not folded into the overture/prologue; a distinct
  interlude near where the book turns to building. (Jason, 2026-06-06.)

## Session log

### 2026-06-06 — Plan + scaffold

Designed the composition system (provenance ledger, compose/critique/revise
loop, workbench, risk tiers, reflexive log/metrics) and the staged plan
(Spine + organs A1/A2/B1/B2 + live session C1). Verified the manifest
architecture: a path is structurally a manifest over existing gestures, so the
centerpiece is Tier-0 safe except for invocations (Tier 1). Created the
instructions file, the ledger, and this log. No prose composed.

### 2026-06-06 — Spine step 1: the Pact thread (staged)

Built the centerpiece proof-of-concept.
- `src/content/manifests/paths/the-pact-thread.md` — a path manifest:
  chapter-shaped (`gestures:` + `separators:`) over G-13-011, G-13-026,
  G-13-028, G-14-008, G-16-053. Money → land → code, ending on the GPL.
- `src/pages/book/path/[slug].astro` — a staged route that renders any path
  manifest through the existing `composePlateauBody` + `md()`. NOT linked from
  main nav; NOT in the river. Shows the invocation, a members list (which
  chapter each gesture comes from), and the assembled cross-chapter prose.
- The only composed prose is the invocation (Tier 1) — drafted, then critiqued
  by a fresh-context sub-agent against the Gandalf + provenance checklist:
  PASS. Ledgered in `for-agents/compositions/composition-ledger.md`.
- Build: clean, 127 pages (was 126 — the new path route). Verified the output
  HTML assembles all five gestures across chapters with correct section breaks.

What this proves: the rhizome needs no new infrastructure. A thread is a
manifest over the gestures the book already holds, rendered by the river's own
composer. The form can carry the thesis. The reflexive loop (compose →
fresh-context critique → verdict) ran for real and passed.

## Open calls for Jason

- **Review the Pact thread** at `/book/path/the-pact-thread`. Does the form
  earn its place? Is the order (money → land → code) right? Is the invocation's
  voice yours? If yes, this is the template for every other thread.
- Resolved 2026-06-06: chords greenlit (refine downriver); grimoire-as-system
  gets its own space adjacent to the build chapters; CLAUDE.md pointer added.
