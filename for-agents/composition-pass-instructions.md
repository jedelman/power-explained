# Composition pass — instructions

Written 2026-06-06. The successor to `autonomous-pass-instructions.md`. That
pass was bounded to **parsing-by-naming** (label what is already at work, never
add). This pass crosses into **composition** — assembling new connective prose
and a new reading *form* — without losing the safety that made the last one
trustworthy.

Read order: CLAUDE.md → `for-agents/wizard-lexicon.md` → this file →
`analysis/sequencing-pass-notes.md` (the 2026-06-05 section) →
`analysis/composition-pass-notes.md` (resume point) →
`for-agents/compositions/composition-ledger.md` (what's drafted, with sources).

---

## The three decisions that shaped this plan (Jason, 2026-06-06)

1. **Stage everything.** The agent composes nothing into the book on its own.
   The canonical river — `src/content/manifests/the-river.manifest.yml` and the
   live chapter manifests under `src/content/book/` — is **sacred**. Only Jason
   moves it. Every session produces a workbench of review-ready drafts on the
   branch; Jason decides what crosses into the river.
2. **The captured-commons work is a live session** (move C1), not autonomous.
   The agent *prepares* it and composes with Jason present.
3. **The composable river is the centerpiece** (move D / the Spine). Making the
   form enact the thesis is the headline; the prose moves are its organs.

---

## The reframe: the form becomes a commons

The book argues that the commons — self-governing, multiply-entered, composed by
its participants — is the alternative to the single enclosed line. It currently
delivers that argument as a single enclosed line: one canonical order, one
authored path. **This pass makes the river's *form* enact its *thesis*.**

The gesture architecture is already a rhizome in hiding: 961 atomic singularities
in `src/content/gestures/`, assembled into the river by one manifest. A *thread*
through them is structurally identical to the river — a different ordering of the
same gestures. The motif/concept/person tags in every gesture's frontmatter are
the lateral edges. So the rhizome is a set of **new manifests over existing
gestures**, plus a way to walk them.

The canonical river is **not** replaced. It remains the front door and the
default — one privileged path through the rhizome. The composable layer is
*added alongside*: the line still exists; the reader is now also free to compose.

The prose moves below stop being six parallel tasks. They become the **organs of
the form**:

- the **grimoire-as-system** gesture is the reader's *legend* — it teaches the
  schools so a reader can choose to follow "the illusion thread" or "the pact
  thread";
- the **chords** (pact in code/land/money; evocation in music/song/land) become
  *traversable edges*, not just rhymes named in prose;
- the **You→We seam** becomes a *navigational threshold* — the pronoun hinge as
  an event you pass through.

---

## The composition system — how new prose stays honest

Composition is generation, and generation is where the averaging machine lies.
These five mechanisms port the last pass's safety ("verify, don't generate")
into composing.

### 1. The provenance ledger — the central safety

**No composed sentence ships without a source.** Every new or edited gesture, and
every path invocation, records in `for-agents/compositions/composition-ledger.md`
the corpus lines (gesture IDs), lexicon entries, cited sources, or explicit Jason
directives it draws from. Composition is **recombination + crystallization of
material already in the book** — never invention. The overture is the proof of
concept: "composed from existing wizard prose (G-WW-002, G-RE-001/004/005…), not
invented."

If a sentence cannot cite provenance, it is a **claim** — and claims need Jason,
not the agent. Route it to the live session (C1) or a `<!-- VERIFY: … -->` flag.

### 2. The COMPOSE → CRITIQUE → REVISE/KILL loop — reflexive iteration

Each composition unit is:

1. **Composed** from its provenance sources.
2. **Critiqued** in a *fresh-context sub-agent* (use the Explore or
   general-purpose agent) against the fixed checklist below — not the same head
   that drafted it, so it can actually see the slop.
3. **Revised or killed.** Kill after 3 failed iterations. Silence stays valid.

**Critique checklist (the fixed standard):**
- *Provenance:* does every sentence trace to a cited source? (Fail → kill or flag.)
- *New-claim audit:* any named person / quote / date / figure / organization not
  in the sources? (Fail → Tier 3; route to Jason.)
- *Register:* Gandalf standard for wizard gestures (economy, gravity, three-beat,
  chiasm, no hedges, no exclaim, show-don't-explain); the emotional-cadence
  template for analytical gestures.
- *Pronoun contract:* Silent We / We / You / They used correctly; the lonely
  "You" not flattened to "We."
- *Anti-slop:* no buzzwords, marketing, boilerplate, emoji, definition-sentences,
  "Here's…" transitions, or 4+ item lists.
- *Drift:* sentence-length varies (not the AI 14–18-word plateau). Cross-check
  with `npm run analyze` FK-grade/variance per plateau.

### 3. The workbench — staging before the river

Drafts never touch the live book. They live as:
- new prose drafts and the ledger under `for-agents/compositions/`;
- new `status/draft` gestures in `src/content/gestures/` that are **not added to
  any live chapter manifest**;
- new path manifests under `src/content/manifests/paths/` and a path route that
  is **not linked from main nav** (reachable by direct URL for review only).

The manifest is the membrane. Crossing it is Jason's act alone.

### 4. Risk tiers — what the agent may attempt autonomously

Gating is uniform (stage everything), but the tiers govern *what the agent can
draft without Jason in the room*:
- **Tier 0** — orderings of existing gestures (path manifests). No new prose.
- **Tier 1** — composition-by-assembly from existing prose + lexicon (the
  grimoire-legend, chord beats, path invocations). Provenance-bound.
- **Tier 2** — voice/emotional editing of existing experiential prose (the
  You→We seam, 16b deepening). Draft into workbench; flag every judgment call.
- **Tier 3** — new claims/examples/cases. The agent **does not compose these.**
  It builds the slot (placement + frame + the questions to ask) and routes to the
  live session.

### 5. The reflexive logbook + metrics

`analysis/composition-pass-notes.md` records every attempt, kill, reason, and
pending-Jason item — continuity that lets iteration compound across sessions.
`npm run analyze` is the drift-detector. And the deep turn: **the ledger and the
log are themselves material for the Centaur chapter** — the method documenting
its own centaur-authorship. Keep them readable as evidence, not just as process.

---

## The Spine (centerpiece): the composable river

A **path** is a manifest: an ordered list of gesture IDs (cross-chapter), with a
slug, title, description, and a short wizard-register **invocation** (why this
path exists, ≤ 3 sentences, provenance-bound). It is to a thread what
`the-river.manifest.yml` is to the canonical line.

**Before building anything, read** `scripts/compose-river.mjs`,
`src/lib/composePlateauBody.mjs`, `src/lib/book-meta.mjs`, and
`src/pages/book/river.astro`. Reuse the existing composer; do not reinvent it.
Justify any new dependency (there should be none).

**Build order for the Spine:**

1. **One path, end to end, as proof of concept: the Pact thread.** The chords
   already name its members — GPL (G-16-053), the Champlain covenant (G-14-008),
   the Caja Laboral (G-13-026/028), credit-as-social-fact (G-13-011). Author
   `src/content/manifests/paths/the-pact-thread.manifest.yml` as an ordering of
   those gesture IDs. Render it through a staged route
   (`src/pages/book/path/[slug].astro`), reusing `composePlateauBody`. Build green.
2. **The edges.** At build time, compute from gesture tags which other threads
   pass through each gesture, and offer a "follow this thread instead" jump.
   First slice is static (no client JS). The tag graph already exists in
   frontmatter (motif/*, image/*, concept/*, person/*).
3. **The atlas.** A staged `/book/atlas` view of the gesture-field — the 961
   singularities grouped by thread, navigable. The map of the rhizome.
4. **Seed the canonical threads.** Lexicon threads (one per school/technique with
   ≥ 3 gestures — pact, divination, prefiguration, necromancy, illusion,
   evocation…) and concept-spine threads from `npm run analyze` (Norfolk,
   Federici, the heron). Each is a manifest + an invocation.

Provenance note: paths are orderings of existing prose (Tier 0). The only
composed text is each invocation (Tier 1, ledgered) and the legend (below).

---

## The organs (prose moves serving the Spine)

### A1 — The grimoire-as-system gesture (the legend) · Tier 1

One wizard-register interlude that hands the reader the field-of-forces: the
schools and techniques as an asymmetric system, not a glossary (grimoire, not
curriculum — show the field, don't define the terms). It is the navigation
ontology: after it, a reader can choose a thread by name. Provenance: the lexicon
doc + existing wizard gestures (overture, P-WW, P-RE, P-GC). Placement candidate:
early, after the overture/prologue, so later namings land as recognition. Draft
into the workbench as a `status/draft` gesture; do not wire into a manifest.

### A2 — The chords (edges made legible) · Tier 1, connection gated

Connective beats naming the rhyme across existing gestures — "the same pact, cast
in code, in land, in money"; "evocation in music, in song, in the land's own
voice." These become the *visible* form of the path edges. **Gate:** the chord
asserts a connection, and CLAUDE.md forbids connections Jason hasn't made — so
confirm each chord is his before drafting the prose. The Pact and Evocation
chords are implied by the lexicon doc; confirm and then compose.

### B1 — The You→We seam (the threshold) · Tier 2

Draft the dramatized pronoun hinge: the stranded, isolating "You" becoming the
audible "We" of shared reckoning, felt on the page as a seam the reader crosses.
This is the book's emotional thesis and its highest voice-risk. Find the existing
beat where the turn already wants to happen (audit the "you"-openers per the
voice contract); compose the threshold *there*, from the surrounding prose. Stage
only. Every word is Jason's to approve.

### B2 — Intensify 16b (the frontier) · Tier 2

Deepen the training-corpus / subjectivity-as-enclosed-commons material from the
existing 16b prose (G-16b-021 onward: the mycorrhizal network, the corpus, "the
commons went in but it…"). This is where the book can say what ATP and
Commonwealth could not — real subsumption after the averaging machine became
literal. Compose only from what is already there; flag any new claim for Jason.

---

## The live session (C1): the captured commons

The Commonwealth move — the corruption of the common, the failed and captured
commons — needs real examples the agent **cannot invent** (fact-checking
protocol). Autonomous prep only:

1. Identify the sites where the book's relentless hope wants the counter-pressure
   (the success-example chapters: Mondragón, Kerala, the zanjera, Champlain,
   Cooperation Jackson).
2. For each, draft the *frame* and the *questions* to bring to the session — what
   captured? captured how? by enclosure-from-without or corruption-from-within?
   The deterritorialize-then-reterritorialize discipline is the seam.
3. Stage a `for-agents/compositions/captured-commons-session-prep.md`.

Then stop and convene the live session. Compose with Jason supplying the cases.

---

## Safety rails

1. **Stage everything.** Never edit `the-river.manifest.yml` or a live chapter
   manifest. Never add a draft gesture to a live manifest. The book the reader
   sees is frozen until Jason moves the membrane.
2. **Provenance or it doesn't ship.** Every composed sentence is ledgered to a
   source. No source → it's a claim → route to Jason.
3. **No new thinkers, citations, quotes, dates, statistics, or connections Jason
   hasn't made.** (CLAUDE.md non-hallucination rules; fact-checking protocol.)
4. **Voice register holds.** Gandalf for wizard plateaus; cadence template for
   analytical. Pronoun contract governs all editing.
5. **Beauty-locked gestures are nearly untouchable.** Many gestures carry
   `beauty_check: passed`. Do not edit their interiors. If a move requires it,
   stage the proposal and route to Jason.
6. **Always Read before editing. Build green after every unit**
   (`./node_modules/.bin/astro build`, never `npx`). Restore the build cache
   before each commit: `git checkout -- .astro/content-assets.mjs`.
7. **Run the critique loop on every composed unit.** Kill at 3 iterations.
   **Zero compositions is a valid session** — report what was considered and why
   it was killed, in the log and the commit body.

---

## Workbench layout

```
for-agents/compositions/
  composition-ledger.md              # provenance: per draft, its sources
  captured-commons-session-prep.md   # C1 prep for the live session
  <draft-name>.md                    # workbench prose drafts
src/content/gestures/
  G-...-draft-<slug>.md              # status/draft, NOT in any manifest
src/content/manifests/paths/
  the-pact-thread.manifest.yml       # path = ordering of existing gestures
  ...
src/pages/book/path/[slug].astro     # staged route, not in main nav
analysis/composition-pass-notes.md   # the reflexive log (resume here)
```

---

## Commit format (per unit or per coherent group)

```
Composition (Tier N): <one-line summary>

<what was composed, with provenance>
- <draft/path>: sources G-XX-NNN, G-YY-MMM, lexicon §<n>

<critique outcome: passed / revised N times / units killed and why>
<what is staged for Jason; what is pending the live session>
```

Per-unit commits, pushed to the branch. The branch is left for Jason's review —
never self-merged, never the river touched.

---

## Stopping criteria

Stop a unit (and log why) if: the build fails twice and won't resolve; the only
honest version requires a claim not in the sources; no form lands in the
gesture's register inside 3 critique iterations; or the move requires editing a
beauty-locked interior. A killed unit is a result, not a failure.

## First steps for the next session

1. Read the read-order files. Confirm resume point in the log.
2. Build the Pact thread end to end (Spine step 1) — the safest, highest-signal
   proof that the form can carry the thesis. Stage it.
3. Draft the grimoire-as-system gesture (A1) into the workbench; run the critique
   loop; ledger the provenance.
4. Prep the captured-commons session (C1) and convene Jason.

Carry it as you walk. The river is becoming a commons; do not enclose it on the
way.
