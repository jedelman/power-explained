# Composition ledger — provenance for every composed unit

The central safety of the composition pass. **No composed sentence ships without
a source.** Each entry records what corpus material, lexicon entry, cited source,
or explicit Jason directive a draft draws from. Composition is recombination +
crystallization of material already in the book — never invention. If a sentence
cannot be traced here, it is a claim, and claims go to Jason.

Format per entry:

```
## <draft id / path slug>  ·  Tier N  ·  <status: drafted / critiqued / staged / approved>
- Sources: G-XX-NNN ("<the line drawn from>"), lexicon §<n>, <cited source>
- Composed: <one-line description of what was assembled>
- Critique: <passed / revised N× / killed — why>
- Notes: <pending Jason, open calls>
```

---

## the-pact-thread  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged

- Path = ordering of existing gestures, no new prose:
  G-13-011 → G-13-026 → G-13-028 → G-14-008 → G-16-053
  (money → land → code; ends on the GPL, which the book already calls "the
  counter-spell in its most precise form").
- Composed (Tier 1): the invocation only —
  "A pact binds the future to the present — a promise made now that some later
  hand must keep. Cast to enclose, it is the debt that outlives the debtor.
  Cast for the commons, it is the architecture that holds a thing open after
  we are gone: the same spell, turned."
- Sources:
  - "binds the future / a later hand must keep" ← lexicon §2 Pact ("binding
    agreement across time") + G-14-008 ("the covenant binds the future").
  - "the debt that outlives the debtor" ← lexicon enclosure-cast pact
    (sovereign debt binding the unborn).
  - "architecture that holds a thing open after we are gone" ← G-13-028
    ("not as charity — as architecture") + G-14-008 ("persists… built into
    every deed," across generations) + lexicon Terrain ("hold it open").
  - "the same spell, turned" ← master principle ("the spell becomes the
    counter-spell") + G-16-053 ("the same pact, cast for the commons").
- Critique (fresh-context sub-agent, 2026-06-06): PASS. No unsourced material;
  no names/dates/figures imported; Gandalf register holds. Optional tightening
  noted and declined (the opener "A pact binds the future to the present" was
  judged an invocation naming its subject, not a banned definition-sentence).
- Member labels (chapter refs in the manifest `members:`) are factual pointers
  to each gesture's home chapter — not claims.
- Status: staged at /book/path/the-pact-thread, not linked from nav, not in
  the canonical river. Awaiting Jason's review.

---

## the-divination-thread  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged

- Path: G-08-005 (Crenshaw) → G-06-023 (Robinson) → G-15-017 (Federici) →
  G-12-020 (Freire). Every member already names the school in-body
  ("Divination in act," "Divination across generations," "Divination at the
  scale of a literacy class") — strongest possible provenance for membership.
- Invocation: "Divination is the reading that reveals: the structure was always
  there, hidden, doing its work unseen. To name it is to make it speakable —
  and a thing once spoken can be answered. Each of these read the same field,
  and handed the reading to the next."
- Sources: lexicon Divination ("reveal… the structure is real and hidden");
  G-08-005 ("the name made it speakable"); G-12-020 ("name what is hidden…");
  G-06-023 ("each wizard's reading taken up by the next").
- Critique (fresh-context sub-agent): PASS. Note: invocation under-serves
  Federici (G-15-017) — supported by the lexicon, not fabricated, but the
  thread-read shows it as the least-named member. Left for Jason.

## the-night-herons  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged

- Path: G-PR-006 → G-PR-009 → G-01-037 → G-12-016 → G-EP-011 → G-EP-017.
  The motif from first nest to last blessing.
- Invocation: "Every spring the night herons come back to Norfolk and nest in
  the willow oaks, on the far side of the road that tried to cut them from the
  water. They know the place in the way that matters — a knowledge no traffic
  study produced. Follow them: the commons does not need our vocabulary to
  live; it needs the conditions, and someone to bless the nests."
- Sources: G-PR-006, G-01-037 (willow oaks / the crossing); G-12-016 ("a
  knowledge no traffic study produced"; "the commons doesn't require our
  vocabulary to function. It requires the conditions"); G-EP-011 ("bless the
  nests").
- Critique: PASS, fully provenanced.

## atlantic-city  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged

- Path: G-14-001 → G-02-013 → G-02-014 → G-14-034 → G-14-033. One enclosure,
  followed down: neighborhood → manufactured slum → demolition → aftermath →
  the road still there.
- Invocation (REVISED): "Atlantic City was a neighborhood before it was a
  highway. They let it rot, then razed it on the evidence of the rot they had
  made — and built on the ground the institutions that made the land too dear
  for its people to return. Hampton Boulevard is still there; follow one
  enclosure all the way down."
- Sources: G-14-001 (verbatim opener); G-02-013 (deterioration "cited as
  evidence… the slum was manufactured"); G-14-034 (anchor institutions / land
  too expensive / cannot return); G-14-033 ("Hampton Boulevard is still there").
- Critique: caught a real defect — the first draft used "named the rot blight,"
  and "blight" appears in NONE of the five source gestures (they say
  "deteriorated / slum"). Accuracy is not the test; provenance is. Revised to
  the sourced "evidence of the rot they had made." Now PASS. (This is the
  provenance ledger earning its place.)

## Edges (the-pact-thread / divination / herons / atlantic-city)

- `src/lib/threads.mjs` computes true crossings: shared gesture (strong), else
  shared significant tag (image/place/person/motif/concept, minus ubiquitous
  ones), else shared chapter. The "via" label names the crossing.
- Live graph (a chain, Atlantic City the hub):
  - Atlantic City ⇄ Night Herons · "the highway" (both carry image/the-highway —
    the herons routed around the road that erased the neighborhood).
  - Atlantic City ⇄ The Pact · "enclosure" (shared concept/enclosure).
  - Night Herons ⇄ Divination · "Chapter 12" (both have a P-12 gesture —
    the herons "know about the road" beside Freire's conscientização).
- No forced overlaps: Pact↔Herons and Pact↔Divination correctly show no edge.

---

## the-grimoire (A1 — the grimoire-as-system legend)  ·  Tier 1 (COMPOSED interlude)  ·  staged

- The most substantial composition so far: a six-movement wizard-register
  interlude that teaches the GRAMMAR of casting (kinds + two directions + the
  turn to wielding) rather than listing the lexicon's 15 terms. Grimoire, not
  curriculum. The legend for the threads.
- Gestures G-GR-001…006 (plateau P-GR, status/draft); manifest
  src/content/book/the-grimoire.md; route /book/grimoire; linked from the
  threads index. NOT in the canonical river.
- Provenance per movement (full notes in each gesture file):
  - M1 grimoire ← lexicon §3 + overture G-OV-004.
  - M2 the field ← lexicon Terrain (door/gate).
  - M3 magic ← lexicon Magic + overture G-OV-003.
  - M4 kinds ← the 9 schools shown as actions, unnamed (hide/reveal/break/
    gather/cast out/bind to dead/act-as-if-future) — Illusion, Divination,
    Deterritorialization, Conjuration, Abjuration, Necromancy, Prefiguration.
  - M5 the turn ← master principle + deterritorialization discipline; seeds C1.
  - M6 reader turn ← composable-river thesis + the three live threads + naming.
- Critique (fresh-context sub-agent): overall REVISE → resolved to PASS. The
  critic flagged M6's "the road and the birds that route around it" as
  unverifiable FROM THE LEXICON/OVERTURE ALONE. Verified against the gesture
  corpus: G-01-037 ("routed around it… refused to let it sever the
  relationship"), G-12-016 ("they navigate around it"), and the built
  the-night-herons thread. The image recurs and is a live thread — the critic's
  own condition for PASS. Provenance note in G-GR-006 updated to cite the IDs.
- DESIGN CALLS for Jason: (a) M4 deliberately withholds the 15 term-names —
  revise if you want the schools named outright; (b) M3 is the closest echo of
  the overture's magic beat (mitigated by distance — the grimoire's intended
  home is Part VI, ~70k words after the overture); (c) wizard-present voice =
  centaur protocol, needs your blessing; (d) placement: its own interlude
  adjacent to Part VI.

## the-singularity  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged

- Path (escalating scale): G-16-007 (the field, in a person) → G-RE-018 (the
  commons of perception) → G-18-010 (the field made visible, at city scale).
  All three name Simondon's pre-individual field; all self-contained.
- Invocation: "You are not a finished object but an ongoing event, drawn from a
  field that exceeds you and is never used up. Simondon called it the
  pre-individual field — the charged excess from which singularities emerge
  without exhausting it; the collective is the condition of the individual, not
  the other way around. Follow it from one person to a shared act of perception
  to a city in the street: the field, fast enough to see."
- Sources: G-16-007 (verbatim "not a finished object… ongoing event"; "the
  collective is the condition of the individual"); G-18-010 ("the field, fast
  enough to see"; "charged generative excess… without exhausting it"); G-RE-018
  ("the commons of perception"). Simondon licensed by the gestures.
- Critique: PASS. Two non-blocking nits ("drawn from" vs "in relation to"; "a
  city in the street") judged defensible crystallizations.
- Candidate extensions (for growth, not added now): overture G-OV-003, the
  centaur G-16b-050, Wynter G-08-009, Luxemburg G-10-009, G-16b singularity
  argument.

## the-shrug  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged

- Path (witnessed → meaning → forms → the body): G-01-023 (the board did
  nothing) → G-06-040 (what the shrug meant) → G-07-002 (the many forms, passed
  down) → G-OA-009 (where the shrug lives; the weight thrown off every morning).
- Invocation: "The shrug is the body accepting the weight of oppression — the
  posture of diminished expectation, learned before the child can name it. Not
  helplessness: a decision about whose conditions are worth managing. It does
  not heal; you throw it off, every morning, and again."
- Sources: G-OA-009 (verbatim "the body accepting the weight of oppression";
  "posture of diminished expectation"; "every morning"; "throw it off… again");
  G-06-040 ("Not helplessness. A decision about whose conditions warranted
  management").
- Critique: PASS, fully provenanced ("every morning" confirmed verbatim, not an
  overstatement). G-OA-009 is beauty-locked — used as a thread member, not
  edited.

## Edges after the two new threads (now 6 threads)

The rhizome thickened, all crossings auto-computed and true:
- the-shrug ⇄ Divination · "Du Bois" (G-OA-009 and G-06-023 both person/du-bois)
- the-shrug ⇄ Atlantic City / Night Herons · "Norfolk"
- the-singularity ⇄ The Pact / Atlantic City · "enclosure"
- the-singularity ⇄ Night Herons · "flowering" (motif/flowering)
- threads.mjs humanizeTag now drops trailing state codes (norfolk-va → Norfolk).
