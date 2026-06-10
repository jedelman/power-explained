# The Alchemical Pass — instructions

Started 2026-06-10, set with Jason in live session. This is the fixed bar:
every editing session and every critic receives this document verbatim. Read
it whole before touching a chapter. Resume position lives in
`analysis/alchemical-pass-notes.md`; protected material lives in
`analysis/alchemical-protected-beats.md`.

## The directive

The prior passes made the book's form enact its thesis (threads, atlas,
linkable river). This pass reterritorializes on the linear text — the river
itself — and refines it to its essence. **Alchemy in the Jungian sense:** not
compaction. Removal that qualitatively transforms the substrate — removing
what weakens or corrupts — and restructuring that reveals and expresses its
essence. Two motions, solve et coagula. The test of every chapter is not "is
it shorter" but "is it more itself." And the Philosopher's Stone test: the
book intends to be an object that transforms by its presence, continuing the
transformation without the alchemist — so every chapter is also tested blind,
on a willing reader, against what it invokes. The title is the promise:
*How to Become a Wizard and Save the World.*

**Re-gating (Jason, 2026-06-10, supersedes the composition-pass "stage
everything" contract FOR THIS PASS):** (1) essence over arithmetic — no
word-count target; (2) weave everything — the critique loop is the only gate,
Jason reviews per-chapter diffs after; (3) full alchemical license —
gesture-level cuts, merges, and reordering (within gestures and within
chapter manifests) under the critique loop; per-chapter commits; IDs retired
properly, never reused. Chapter-level order in the river is untouched.

## The standard, by register

- **Analytical chapters:** CLAUDE.md "Prose style & emotional cadence" —
  concrete before abstract, discovery not instruction, varied sentence
  length, the anti-patterns list (hedges, "Here's…" transitions, definition
  sentences, reassurance, preemptive defenses, 4+ bullet runs).
- **Wizard plateaus (P-OV, P-PR, P-IW, P-OA, P-GC, P-AB, P-WW, P-CE, P-EP,
  P-RE):** the Gandalf register — economy, gravity, no exclaiming,
  three-beats and chiasm earned not ticced, show the knowing, tonal pops
  earn the serious parts.
- **P-RE additionally:** `for-agents/writing-naturalist.md` — senses lead,
  feeling before identification, the living world attends back.
- **Everywhere — the pronoun choreography (inviolable):**
  - *Silent We* — the shared condition. No possessive. "Rent went up again
    this year" (not "Your rent" / "Our rent").
  - *We* (audible) — the shared reckoning. "We did the math."
  - *You* — the isolating individual act. The system strands you alone the
    moment you try to act. The lonely You is the wound the book later heals.
    Do NOT convert it to We; do NOT delete a You-beat at an isolation moment.
  - *They / Them* — the enclosers, named not addressed.
  - Exception: wizard-register direct address (e.g. G-OV-003) is
    wizard-to-apprentice You and is correct.

## What is removed (the corruptions — not verbosity)

- Hedges and preemptive defenses — fear corroding commitment.
- Scaffolding, definition sentences, the labeled-back category — explanation
  corroding discovery.
- Reassurance language and soft landings — comfort corroding stakes.
- The explained-twice insight — repetition corroding the reader's own arrival.
- Diluting repetition — overuse corroding a motif's power (two sets the
  pattern; the third identical close is a tic).

## What is recomposed (coagula — only existing sentences, never new prose)

- Surface the buried image to the landing position.
- Lead with the concrete shock the abstract opener was hiding.
- Resequence gestures within a chapter where a movement lands harder
  elsewhere (manifest `gestures:`/`separators:` reorder; both seams re-read).
- Merge-join stitches of a few words are the only permitted additions, and
  they must pass the loss check.

## Exemplars (from the sequencing pass — the proven bar)

1. **Hedge/preemption cut (G-PR-011):** dropped the preemptive "not a
   conspiracy" opening; "built into the rules of the game" → "emerges under
   specific conditions — conditions we can name."
2. **Scaffolding cut (G-PR-003):** cut the labeling paragraph ("One is a
   housing problem…") — the reader doesn't need the categories named back
   to them.
3. **Soft-landing cut (G-PR-028):** dropped "It is not incidental. It is the
   point." — "This is the maintenance system." lands harder without it.
4. **Opener compression (G-01-001):** dropped "They are two highways"
   exposition — the tangle tells the reader what they need; the corrective
   ("is not an intersection") lands harder against the colloquial name.
5. **COUNTER-EXEMPLAR — DO NOT:** flattening an earned three-beat into one
   beat (e.g., G-PR-013's care-sentence escalation), or cutting the short
   sentence after a long one — that short sentence is the landing, not
   redundancy. Cutting what breathes is the failure mode. Essence is not
   minimization; the book breathes.

## The per-chapter loop

1. Load: this doc, the chapter's protected-beats section, the logbook
   position, the adjacent chapters' edge gestures (the seams).
2. Name the gold AND the spell (logbook, before any edit): the **essence
   statement** (two sentences — what the chapter IS, its central image and
   turn) and the **invocation** (one or two sentences — what it DOES to a
   willing reader; cross-check the second-initiation stations where the
   chapter carries one). Read out of the chapter, never invented.
3. Snapshot before-state: compiled chapter text + plateau metrics row from
   `analysis/corpus-metrics.json`.
4. Edit gesture bodies in reading order (dissolve + recompose).
   `beauty_check` gestures: **deletion-only** — whole sentences/clauses or
   merge joins; zero rewording, zero internal reordering; itemized in the
   commit header.
5. Cuts/merges per the retirement checklist below.
6. Build (`./node_modules/.bin/astro build`; investigate any page-count
   delta) + `npm run analyze`.
7. Fresh-context craft critique (prompt below). Materials: essence
   statement, the chapter diff, the full AFTER text (plus BEFORE text when
   gestures were resequenced), the protected-beats section, this doc.
8. Resolve: PASS keep · REVISE apply + re-critique revised hunks · REVERT
   restore. Two rounds max; unresolved → revert + flag. Zero surviving
   edits = "passes clean" — valid.
9. The reader-witness (blind; prompt below; contamination rules absolute).
   Compare report to the invocation. Match → log. Craft-side mismatch → one
   targeted round, NEW fresh witness. Invocation-side mismatch (the chapter
   does something other than intended — a finding about the book) → flag
   for Jason, do not chase with edits. One re-witness max.
10. Logbook: essence + invocation + witness summary + entry + metrics row +
    cut counts; advance Current position. Append the witness's FULL report
    verbatim to `analysis/alchemical-witness-reports.md` (the raw testimony
    file Jason reads).
11. Commit + push:

```
Alchemical pass: <Chapter> — <one-line essence of what was refined>

ESSENCE: <two sentences>
INVOCATION: <what it does to a willing reader>
WITNESS: <match | matched after revision | MISMATCH — flagged: …>
BEAUTY-CHECK TOUCHES: <none | G-XX-NNN — deletion of "<first words…>" …>
RETIRED: <none | G-XX-NNN merged into G-XX-MMM; …>
REORDERED: <none | within G-XX-NNN; sequence: G-A moved after G-B …>
Stats: <words before> → <after> (<±n>) · FK <b> → <a> · w/sent <b> → <a>
Cuts: hedges n · scaffolding n · redundancy n · reassurance n ·
definitions n · soft-landings n · explained-twice n · diluting-repetition n
Critique: <n> passed, <n> revised, <n> reverted
```

## The craft critic's prompt (frozen — paste verbatim)

```
You are a fresh-context critic for the alchemical pass. You did not make these
edits. You receive: (1) the chapter's ESSENCE STATEMENT, (2) the chapter's
unified diff, (3) the full AFTER text in reading order (and the BEFORE text
when gestures were resequenced), (4) the chapter's protected-beats inventory,
(5) the alchemical-pass instructions (the standard, including Rulings). For
EACH hunk return PASS / REVISE (exact suggested text) / REVERT (reason); then
a chapter-level verdict. Check in order:

0. TRANSFORMATION CHECK (governs all others). Hold the essence statement.
   Is the essence MORE present in the AFTER text than the BEFORE — more
   immediate, harder to miss, landing earlier or harder? A chapter that is
   merely shorter, not more itself, fails here even if every hunk passes
   below: chapter-level REVISE with what the essence still needs. Removal
   must transform, not just reduce.
1. LOSS CHECK. Read every deleted line. Did it carry an image, fact, claim,
   motif echo, or beat of breath nothing else now carries? REVERT. Cutting
   what dulls is the license; cutting what breathes is the failure mode.
2. PROTECTED BEATS. Every inventoried item survives: school-namings/chords
   (the school word itself must remain), forward-link closes, motif
   appearances, the buried/threatening chiasm. Tightened OK; gone or
   de-named: REVERT.
3. PRONOUN CONTRACT. Silent We (condition, no possessive) · audible We
   (reckoning) · You ONLY at the isolating act — converted or deleted lonely
   You: REVERT · They/Them the enclosers. Wizard-register direct address
   (e.g. G-OV-003) is wizard-to-apprentice You and is correct.
4. REGISTER. Wizard plateaus: Gandalf (economy, gravity, no exclaiming,
   three-beats/chiasm earned not ticced). Analytical: the cadence template —
   concrete before abstract, discovery not instruction, varied sentence
   length. P-RE additionally: senses lead, feeling before identification.
5. CADENCE/BREATH. Read the AFTER text aloud in your head. Sentence lengths
   still vary; tonal pops survive. Reads minimized rather than essential:
   chapter-level REVISE.
6. SEAMS AND RESEQUENCING. First gesture still receives the previous
   chapter's close; last gesture still hands off to the next opening. Any
   edge cut/merge/move: re-read the seam explicitly. For any reorder: verify
   it uses only existing sentences, every antecedent still precedes its
   reference, and the move serves the essence statement — a reorder that
   merely rearranges without revealing is REVERT.
7. BEAUTY_CHECK. Hunks touching beauty_check gestures must be PURE DELETION
   (whole sentences/clauses or merge joins). Any rewording or internal
   reordering: REVERT.
8. MECHANICS. separators == gestures - 1 in every touched manifest; retired
   IDs in retired-ids.json and in no live manifest; no new claims, names,
   dates, or figures anywhere in the diff (merge-join stitches of a few
   words only, and they pass the loss check).
9. ANTI-PATTERNS. No surviving or new hedges, "Here's…" transitions,
   definition sentences, reassurance, preemptive defenses, 4+ bullet runs.

Do not praise. Itemize.
```

## The reader-witness prompt (frozen — paste verbatim, blind)

```
You are reading a chapter of a book. You know nothing about its production.
Read it as a willing reader: someone who knows something is wrong, has felt
it for years, and is willing to see everything differently to understand it.
Read the whole text once, at reading speed, without analyzing craft.

Then report, plainly and in the first person:
1. What happened to you as you read — where you leaned in, where you
   drifted, where something landed in the body before the mind.
2. What you now see that you didn't see before reading, or can no longer
   unsee.
3. What you feel asked to do, or to become — if anything. Is it yours to
   do, or the author's? Did the chapter hand it to you or keep it?
4. What you would say this chapter IS, in one sentence, to a friend.
5. What, if anything, you bounced off — felt lectured by, doubted, or
   wanted to skip.

Do not review. Do not evaluate the writing as writing unless it interfered
with the reading. Witness what the text did, or failed to do, in you.
```

**Contamination rules:** the witness never sees the diff, the essence
statement, the invocation, this document, or any sign an edit occurred. A
re-witness after revision is always a NEW fresh-context agent.

## Gesture retirement checklist (frozen)

```
RETIRING AN ID (cut or merge) — never reuse, never renumber.
1. MERGE: absorb body into the SURVIVING gesture (lowest-ordinal, book
   order), joined per the separator. Survivor notes gains
   "[merged G-XX-NNN on YYYY-MM-DD — alchemical pass]". PURE CUT: go to 2.
2. grep -rn "G-XX-NNN" src/ scripts/ for-agents/ analysis/
   Fix LIVE references:
   a. chapter manifest: remove ID; remove the separator PRECEDING the entry
      (first-in-chapter: remove the one after); re-count separators ==
      gestures - 1.
   b. EVERY path manifest under src/content/manifests/paths/: check
      gestures: AND members:. Merge → substitute surviving ID (dedupe; fix
      separators + member note). Cut → remove the stop, fix separators. If
      removal guts the thread's sense: don't cut — revert and flag.
   Leave RECORDS untouched: composition ledger, pass notes, snapshots,
   merge-map, retired-ids history.
3. Append analysis/retired-ids.json: {"id","mergedInto"(or null),"plateau"}
   (+ note "cut — alchemical pass YYYY-MM-DD" for pure cuts).
4. Delete the gesture file.
5. Build — composePlateauBody throws on any missed reference.
6. beauty_check on a retired/merged gesture: itemize in BEAUTY-CHECK TOUCHES.
DO NOT use scripts/apply-merges.mjs (targets the retired per-plateau layout).
```

## Over-cut tripwires (any one → full re-read of after-text before commit)

- Chapter word cut > 15% (the 25–35% ForNormies arithmetic does NOT govern
  this pass).
- avgWordsPerSentence drops > 2.0, or structuralEntropyNorm drops > 0.05
  (uniform terseness — the flattening failure mode).
- Critic notes the chapter reads minimized.
- Three consecutive gestures reduced to single-sentence landings.

## Stop criteria

- Per chapter: two craft-critique rounds max, one re-witness max; unresolved
  → revert + flag. Zero edits = "passes clean," valid.
- Recalibration: critics revert/revise > 50% of edits in two consecutive
  chapters → stop, write up the drift, add Rulings, restart from the drift
  point.
- Pass kill: unrecoverable build, or a standards contradiction needing
  Jason → commit the logbook with the question, leave the branch pushed.

## Rulings (case law — append as judgment calls generalize)

1. **Section-boundary retirement (2026-06-10, prologue/G-PR-020).** When
   retiring a gesture that sits at a section boundary, keep whichever
   separator preserves the section break — regardless of the checklist's
   default "remove the preceding separator." The section structure outranks
   the mechanical rule.
2. **Instruction chills, image warms (2026-06-10, confirmed across overture,
   prologue, chapter-1).** Blind witnesses consistently cool where the book
   instructs, announces its own method, or stages a reveal, and warm at
   concrete landings. Disposition: an unprotected meta-announcement whose
   content is carried elsewhere is cut by default (G-01-034, G-01-030's
   "There is a word for this"). Protected analytic/lexicon beats stay — the
   witnesses' "placed-on-top" readings of those are logged as data for Jason,
   never edited. New meta-announcements are never added.
