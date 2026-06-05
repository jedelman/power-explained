# Autonomous pass — instructions

Written 2026-06-05 by the agent that completed the structural sequencing
pass. The next agent picks up here. Read CLAUDE.md first; then this file;
then the most recent section of `analysis/sequencing-pass-notes.md`.

## Where the book is

Structural and lexicon work through 2026-06-05 is complete:

- Chapter 6 and 7 merged into "The Colony" (P-06 retained).
- Combahee River Collective + Audre Lorde added to Ch 8.
- 9-school + 6-technique wizard lexicon established in
  `for-agents/wizard-lexicon.md`.
- Lexicon deployed where it earns the line across every chapter that
  has work for it (see the "lexicon coverage map" near the end of
  `analysis/sequencing-pass-notes.md`).
- All in-body `[FLAG]` and `[CORRECTION]` annotations resolved.
- Front-half and back-half chapter transitions tightened with
  forward-link beats.
- Part III arc articulated explicitly at the hinges (Ch 5 close,
  Colony close, Ch 8 open).

The book reads as one whole. Voice glows. Motif threads land.

## Your scope

Four bounded passes. Take them in any order. Each produces its own
commit so the diff per pass is reviewable.

### Pass 1 — Deploy Illusion school

The Illusion school (manufactured ignorance, hide-the-structure, the
polished surface) lives in the lexicon doc but never lands in body
text. The book casts illusion implicitly all over the place.

Candidate sites (evaluate each; deploy where it lands cleanly):

- **G-06-007** (Ch 6 / The Colony, "the standard story of race and
  capitalism… functionally color-blind") — illusion at structural
  scale, the cover story the chapter punctures.
- **G-14-XXX** (Ch 14 / Land, "manufactured slum" passage about
  Atlantic City — search for the Forrest White citation) —
  illusion as policy: deteriorate, declare blighted, justify clearance.
- **G-RE-XXX** (Reenchanting, the disenchantment passage —
  "disenchanted world is not a world without violence")  — could
  name disenchantment as illusion in act.

Deploy at the strongest 1-2 sites. Don't force the term where the
gesture isn't already doing illusion-work.

### Pass 2 — Deploy Evocation ⇄ Transformation pair

The modality-alternative pair: felt mastery (Evocation) and technical
mastery (Transformation) of elements. Both can be cast either
direction. Neither has been named in body text.

Candidate sites for **Evocation (commons-cast)**:

- **G-IB-003 → G-IB-007** (Ch 2 / Two Cities, the salsa moment) —
  music as the chapter's purest commons-magic; you already added
  prefiguration here, evocation pairs naturally.
- **G-17-XXX** (Ch 17 / Tracking, the singing-and-moving wilderness
  community).
- **G-RE-XXX** (Reenchanting, addressing the living world in your
  actual voice).

Candidate sites for **Transformation**:

- **G-16-053 onward** (Ch 16 / Love, the GPL / Linux / web passages
  — Stallman/Berners-Lee/Torvalds) — already named as counter-spell,
  could pair with transformation for completeness.
- **G-16b-XXX** (Ch 16b / Matrix, the open-source AI and data
  cooperative passages near the close).
- **G-15-XXX** (Ch 15 / Care, cooperative home care agencies — the
  technical apparatus of mutual care).

Rule: at most one Evocation naming + one Transformation naming in
the back half. If they pair structurally in a single gesture (music
+ Linux as two modalities of mastering the same field), say so —
that's the asymmetry-as-feature working in the body.

### Pass 3 — Deploy Sigil and Pact techniques

Two of the six techniques never deployed in body. Both have natural
sites already present in the book.

Candidate sites for **Sigil** (symbol or object that carries a spell
forward):

- The Colony — find the Confederate-flag-as-phylactery passage if
  the book introduces it (search the river for "Confederate"). The
  lexicon doc already lists it as the canonical example; the body
  may already implicitly use it.
- **G-14-XXX** (Ch 14 / Land, the cedar chip Jason carries — "witness
  held in the hand"). This is the personal sigil par excellence.
  Naming the technique here is high-payoff.
- **Ch 15 / Reenchanting**, the witch's plant-name knowledge — names
  as sigils that carry capacity forward.

Candidate sites for **Pact** (binding agreement across time):

- **G-16-053** (Ch 16 / Stallman GPL) — you already named the GPL as
  "the counter-spell in its most precise form: the same pact, cast
  for the commons." Pact is already there. Skip — it's deployed.
- **G-13-XXX** (Ch 13 / Debt) — sovereign debt + student loans as
  enclosure-cast pacts; the Mondragón Caja Laboral and credit-union
  bylaws as commons-cast pacts.
- **G-14-XXX** (Ch 14 / Land, the Champlain Housing Trust 99-year
  ground lease + resale covenant) — pact that holds across
  generations. Strong site.

Rule: 1-2 Sigil insertions + 1-2 Pact insertions across the back
half. If GPL is the strongest Pact already (it is), use the slot
elsewhere.

### Pass 4 — Cosmetic: book index word count

`src/pages/book/index.astro` still reads "~47,000 words across 17
chapters + prologue + epilogue." Actual is closer to 83,000 across
28 sections (overture, prologue, 17 numbered chapters + 16b, 6
interludes, centaur chapter, epilogue).

Run `npm run analyze` for the precise count; update the index line
accordingly. Single-edit pass.

## Safety rails

1. **No new analytical claims.** Every insertion names a school or
   technique that is **already at work** in the gesture. You are
   parsing-by-naming, not arguing-by-claiming.

2. **No new thinkers, citations, quotes, dates, or statistics.**
   Period. See CLAUDE.md "Non-hallucination & anti-slop rules" and
   "Fact-checking protocol."

3. **One beat per gesture maximum.** A single sentence (or a short
   clause appended). If the addition is more than one sentence, you
   are forcing it — back off.

4. **If a gesture already deploys the lexicon term you intended to
   add, do not add another.** Check the existing body before editing.

5. **Voice register holds.** Wizard-register gestures (P-OV, P-PR,
   P-IW, P-OA, P-GC, P-AB, P-WW, P-CE, P-EP, P-RE) take wizard
   register. Analytical chapters take their own cadence. The
   lexicon-term insertion should land as a tonal pop — short, on
   weight — never as exposition.

6. **Always Read the gesture file before editing.** The Edit tool
   errors otherwise.

7. **Build after each pass.** From the project root:
   `./node_modules/.bin/astro build`. The build must complete clean
   (126 pages). Never use `npx astro build`.

8. **Restore the build cache before committing.** `.astro/content-assets.mjs`
   is tracked but in `.gitignore` (legacy state). Before each commit:
   `git checkout -- .astro/content-assets.mjs`.

9. **Commit per pass. Push each commit.** Do not batch all four
   passes into one commit. The per-pass diff should be reviewable.

10. **Update `analysis/sequencing-pass-notes.md`** at the end of
    each pass under a new dated section. The next agent reads it
    first.

## Stopping criteria

Stop the current pass and skip ahead (or stop entirely) if:

- The build fails after your insertion and you cannot resolve it in
  two attempts.
- A targeted gesture is already deploying the school you intended
  to add.
- You cannot find a one-sentence form that lands in the gesture's
  existing register.
- You have evaluated every candidate site for a school and none of
  them earn the line.

**A pass that adds zero insertions is a valid result.** Better
silence than forced naming. Report what you considered and why you
skipped, in the commit body and in the notes file.

## Commit format

Per pass:

```
<Pass name>: <one-line summary>

<bullets per gesture edited>
- G-XX-NNN (short description): "<verbatim quoted addition>"
- ...

<short paragraph: candidates considered, candidates skipped, why>
```

## When all four passes are done

1. All four commits pushed.
2. `analysis/sequencing-pass-notes.md` updated with a new section
   dated today summarizing the autonomous pass and what's
   genuinely left.
3. If the branch isn't main, leave it for review — do not
   self-merge.
4. Stop.

That's the pass. Carry it as you walk.
