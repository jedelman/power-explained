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

**Surfaced for review (2026-06-06):** a threads index at `/book/path`
(`src/pages/book/path/index.astro`) auto-lists every path manifest, and the book
index (`/book`) now carries a third CTA, "Walk the threads," + an honest
"staged / experimental" pitch line. So threads are visible rendered on the
preview server, not just as `.md`. New threads appear in the index automatically.

Spine steps 2–4 advanced (2026-06-06): three more threads (Divination, Night
Herons, Atlantic City) and the edge system are staged. Four threads now form a
small rhizome (Pact — Atlantic City — Night Herons — Divination), with true,
auto-computed crossings rendered on each thread page and counted on the index.

A1 (the grimoire legend) drafted + staged; two more threads (Singularity,
Shrug) spun — six threads total, all woven by the edge graph. (2026-06-06)

**Next concrete steps:** (a) the captured-commons LIVE SESSION (C1) — Jason to
convene; prep doc still to write; (b) gesture-level inline "also on" edges once
threads share a gesture; (c) more threads if wanted (the cook, the chip, the
mask); (d) Jason's reviews/decisions on the grimoire (placement, M4 naming, the
wizard-voice blessing).

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

### 2026-06-06 — Three more threads + the edges

- Added threads: Divination (school), Night Herons (motif), Atlantic City
  (place) — one of each type, to prove the rhizome across thread kinds.
- `src/lib/threads.mjs` — computes true crossings (shared gesture → shared
  significant tag → shared chapter) with a named "via." Rendered as a "Crosses"
  block on each thread page and a count on the index. The graph is a real chain
  with Atlantic City as the hub; Pact↔Herons correctly shows no edge (the
  rhizome has structure, not universal connection).
- Reflexive loop ran on all three invocations (one fresh-context sub-agent).
  Divination + Herons PASS. Atlantic City REVISE → the critique caught "blight,"
  a plausible policy term in NONE of the source gestures. Fixed to sourced
  language. The provenance ledger earned its place on its second use.
- Build clean, 131 pages.

### 2026-06-06 — The grimoire legend (A1) + two more threads

- **A1, the grimoire-as-system legend** — drafted and staged. Six wizard-register
  movements (G-GR-001…006, plateau P-GR), rendered at `/book/grimoire`, linked
  from the threads index as "the legend." Teaches the *grammar* of casting (kinds
  + two directions + the turn to wielding); deliberately withholds the 15
  term-names (grimoire, not curriculum). Its own space, intended adjacent to
  Part VI (Jason's placement call). The most substantial composition yet — the
  fresh-context critique returned REVISE on an M6 image it couldn't source from
  lexicon/overture; verified against the gesture corpus (the herons routing the
  road = the live Night Herons thread) and resolved to PASS. Wizard-present voice
  awaits Jason's blessing (centaur protocol).
- **Two more threads:** the-singularity (Simondon's pre-individual field, three
  gestures across scales — self → perception → city) and the-shrug (four gestures
  — witnessed → meaning → forms → the body). Both invocations PASS.
- **Edge graph thickened to six threads,** all crossings auto-computed and true:
  Shrug⇄Divination ("Du Bois"), Shrug⇄Atlantic City/Herons ("Norfolk"),
  Singularity⇄Pact/Atlantic City ("enclosure"), Singularity⇄Herons ("flowering").
- Build clean, 134 pages.

### New form of critique (Jason's insight, 2026-06-06) — logged for the system

Reading a thread end to end is an **editorial X-ray**, not just a reader feature.
A thread isolates one concept across all its instances, so it exposes:
- which member is weakest or least earned (the Divination invocation visibly
  under-serves Federici — the thread-read makes that legible at a glance);
- whether a concept actually coheres across the book or just recurs by accident;
- whether the voice holds when like is placed beside like;
- where a rhyme is doing real work vs. where it is repetition.
This turns the composable river into an **audit instrument**: walk a thread to
critique the spine it follows. Folded into the instructions as a standing use of
the form. (Candidate next audit: walk the Pact thread and judge whether G-13-011
— the weakest of the original insertions — still earns its place beside the GPL.)

## Open calls for Jason

- **Review the Pact thread** at `/book/path/the-pact-thread`. Does the form
  earn its place? Is the order (money → land → code) right? Is the invocation's
  voice yours? If yes, this is the template for every other thread.
- Resolved 2026-06-06: chords greenlit (refine downriver); grimoire-as-system
  gets its own space adjacent to the build chapters; CLAUDE.md pointer added.
