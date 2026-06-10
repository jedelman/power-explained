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

B-STAGE: B1 (You→We seam) WOVEN at Ch 3 close (Jason's words). B2 (16b frontier
flip) WOVEN as G-16b-039a after G-16b-039 — fires the master principle where the
audit found it most earned ("the averaged self becomes the gift; the spell
becomes the counter-spell"), names the absent "gift." Both on branch, PASS.
Process flag for Jason: B2's "assemble" wasn't an explicit weave directive — one-
line revert available if he wants it staged-only. (2026-06-XX)

C1 LIVE SESSION done — "The Corruption of the Common" interlude (Tier-2), now
WOVEN into "The Speaking of Names" (Goetia) — the first sanctioned canonical-
river change. Captured-commons thread expanded 4→10 gestures for flow. Index
retitled Goetia → The Speaking of Names. Demon named "*The corruption of the
commons.* Hardt and Negri's name." to parallel the chapter. (2026-06-XX)

B-STAGE started. B1 (You→We seam): pronoun audit done (the turn half-exists at
G-04-023 as Jason's biographical we; the reader's You→We is unstaged; seam at the
Ch 3 close G-03-046). Proposal + two sketches staged in
for-agents/compositions/b1-you-we-seam.md — awaiting Jason's voice, NOT woven.
B2 (16b frontier intensification) queued. (2026-06-XX)

**Next concrete steps:** (a) Jason reviews the weave (placement after the
outside / before the practice), the captured-commons thread, the retitle;
(b) plateau hygiene — re-home woven G-CC-* to G-GC-* or keep P-CC (his call,
IDs permanent); (c) apply the before/after FLOW principle to the other threads
if wanted; (d) wizard-voice blessing; (e) the B-stage (You→We seam, 16b).

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

### 2026-06-XX — C1 live session: "The Corruption of the Common"

Jason convened the captured-commons session and set the direction: its own
interlude (corruption "deserves its own treatment"); connected to demons (the
Goetia frame); the OPEN WEB as the single case ("let's not complicate things");
read-and-name mode; deterritorializing rupture as the reader's work; BRACING.

- Composed `the-corruption-of-the-common` — gestures G-CC-001…005 (plateau P-CC),
  manifest, route `/book/corruption-of-the-common`, linked from the threads index.
  Five movements: name the demon → the web given away, then the gate moves → the
  freely-made harvested → its weakness (it makes nothing; always late) → the
  counter is rupture, not a wall ("Make it again").
- The first Tier-2 composition (a genuinely new argument), yet built almost
  wholly from existing material: G-16-056 (the open web), 16b (the harvest),
  G-16-053 (the GPL), and the lexicon (demon / Magic / corruption of the common /
  the deterritorialization discipline). Deliberately drops every name and date
  (Berners-Lee/Torvalds/CERN/1991) — keeps only "the web."
- Critique: REVISE → PASS. One snag — "rented back" (M3) asserted a rent-back
  mechanic the harvest gestures don't establish; cut. Register judged strong
  Gandalf, genuinely bracing, neither comfort nor despair.
- This is the captured-commons / Commonwealth move landed: hope earned by naming
  the shadow. Pairs with a future "captured commons" thread if Jason wants it.

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

### 2026-06-10 — The non-chords pass + the atlas + the second initiation

Run by the new model on `claude/stoic-gates-6z9rmv`, all per-family commits
pushed. Three movements:

1. **Non-chords pass complete.** Evocation deployed at G-11-017 + G-14-018
   (joining G-IB-004 → 3 instances, thread-eligible); Transformation at
   G-02-030 (2 instances, no thread); commons-cast Abjuration first namings at
   G-06-028, G-14-032, G-17-035 (3 instances, thread-eligible); commons-cast
   Illusion ZERO insertions — the corpus holds no genuine hiding-as-protection
   site; the one composed beat (G-13-034) was killed at critique for inverting
   the gesture's own causality. Route to Jason: commons-cast illusion needs new
   material (Underground Railroad / maroon camouflage / free school) only he
   can supply. Every beat fresh-context critiqued; batch finding applied: the
   full "cast for the commons" formula is reserved for a school's first
   commons-cast naming. All ledgered.
2. **Two offered threads** (the-evocation-thread, the-abjuration-thread) +
   **the atlas** (`/book/atlas`, Spine step 3): the whole gesture-field mapped,
   thread overlays, true rhizome nodes, all computed at build. Linked from
   /book (Jason's direction) and the threads index.
3. **The becoming-read + the second initiation.** Jason directed: read the
   whole river in sequence, ask what digital trace of awakening the wizard
   leaves as a sigil, make the book into that, witness and reflect. The full
   river was read (82,667 words, 8 slices, notes kept throughout). The answer
   came from the book's own lexicon: a sigil carries the spell forward; the
   description is the spell; the collector arranges fragments so the original
   meaning shows through; the room must teach itself. Built:
   `the-second-initiation` — the becoming gathered as the river's longest
   thread (26 gestures, 15 stations: the spell → the crack → the We → the
   spellbook → the naming → the practice → the readiness → the shard → the
   ledger → the gift → the return → the crossing → the quest → come find us →
   what is still here). Staged (NOT woven): a candidate centaur witness
   gesture, `for-agents/compositions/the-walkers-mark.md` — Jason's call.

Open calls for Jason after this session: (a) review the six woven school
beats + two flags from critique (G-06-028 paragraph-break read-aloud; the
Weelaunee double-landing); (b) the yielded E1 relocation at G-17-034;
(c) the walker's-mark gesture — weave, revise, or decline; (d) commons-cast
illusion material, if wanted; (e) the second-initiation member list — does
the walk match the initiation he means the book to perform?
