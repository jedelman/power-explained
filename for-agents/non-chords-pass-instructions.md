# Non-chords pass — instructions

Written 2026-06-08, at the close of the composition pass. The next agent picks up
here. Read CLAUDE.md first; then `for-agents/wizard-lexicon.md`; then
`for-agents/composition-pass-instructions.md` (the system you'll reuse); then the
"chord audit" + "A2" entries in `for-agents/compositions/composition-ledger.md`.

## Why this pass

The chord pass (A2) bound the schools that already had instances across the book
(Necromancy, Incantation, Prefiguration; Pact + Divination as threads). The audit
found three families that are **underrepresented** — at work in the book but
barely or never named — so they have no chord to bind yet. This pass deploys them.

- **Evocation ⇄ Transformation** — Evocation is named once (the salsa, G-IB-004);
  Transformation once (Linux/web, G-16-056). The lexicon's commons examples that
  almost certainly recur unnamed: Evocation = the blues, the freedom song, the
  street mural, the block party, prayer-as-commons; Transformation = the seed
  library, community solar, ham radio, seed sovereignty (AFSA), the open web.
- **Abjuration cast for the commons** — never named in body. The lexicon: the
  boundary that protects the commoning — Palmares refusing to harbor slave-
  catchers (G-06-024), the Mbuti refusal of chiefs, the community refusing the
  police. (Only enclosure-cast conjuration/abjuration is named so far: G-02-009,
  G-06-014.)
- **Illusion cast for the commons** — never named in body. The lexicon:
  hiding-as-protection — the Underground Railroad, maroon camouflage, the free
  school under the radar. (Only enclosure-cast illusion is named: G-06-007,
  G-02-013.)

## The two governing principles (set by Jason, 2026-06-08)

1. **Examples are multi-school.** A single example casts several schools at once
   (Mondragón = prefiguration AND hold AND necromancy AND pact; Palmares =
   prefiguration AND abjuration AND deterritorialization). **A gesture may carry
   more than one school-naming in its body where each genuinely lands.** Economy
   still governs — name the ones that earn the line, not all of them by rote.
2. **Name where it's at work, not only where it's already labeled.** This pass
   extends parsing-by-naming to *implicit* sites: name a school wherever the
   gesture is genuinely doing that school's work, even if the term isn't there
   yet. This is still "name what is already at work, never invent" — the work
   must already be on the page; you are labeling it, not adding it.

## The method (reuse the composition-pass system)

For each family: **audit → compose → critique → ledger → weave (on the branch,
for Jason's review).**

1. **Audit** the corpus for sites where the school is at work but unnamed
   (background sub-agent; return gesture IDs + verbatim quotes + the natural beat
   site). Use the lexicon's example list as the search seed.
2. **Compose** the naming as a tonal pop — one beat, on weight, in the gesture's
   register (the lexicon-deployment style: "evocation, the oldest magic, felt
   before it is understood"). Multi-school where it earns it.
3. **Critique** every composed beat in a fresh-context sub-agent against the
   provenance + Gandalf/cadence + pronoun checklist. The provenance test is the
   gate: the school's *work* must already be in the gesture; you supply only the
   *name*. Any new claim/figure/connection → route to Jason.
4. **Ledger** each to `for-agents/compositions/composition-ledger.md`.
5. **Weave** on the branch. The canonical river is sacred — but per the
   established working pattern, Jason directs and reviews weaves on the branch;
   when in doubt, stage and ask.

## Toward threads

Once a family has **3+ named instances across distinct domains**, it can become a
thread (a path manifest), exactly like the-pact-thread and the-divination-thread —
and the flow principle applies (include lead-in/lead-out gestures; threads can be
larger). Candidate new threads after this pass: an Evocation thread, an
Abjuration thread.

## Safety rails (unchanged from the composition pass)

1. **Provenance or it doesn't ship.** The school's work is already in the gesture;
   you add the name. No source for the *work* → it's a claim → Jason.
2. **No new thinkers, citations, quotes, dates, figures.** (CLAUDE.md.)
3. **Voice register holds.** Wizard register for wizard plateaus; cadence for
   analytical. The naming lands as a tonal pop, never exposition.
4. **Beauty-locked gestures (`beauty_check: passed`) route to Jason** unless he
   directs the edit.
5. **Build green after each unit** (`./node_modules/.bin/astro build`, never
   `npx`); restore `.astro/content-assets.mjs` before each commit.
6. **Critique every composed beat.** Zero insertions for a family is a valid
   result — better silence than a forced naming.

## Stopping / done

When each family has been swept (named where it earns the line, or explicitly
skipped with a reason in the ledger), and any family that reached 3+ instances has
an offered thread. Per-family commits; branch left for Jason's review.
