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
