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
