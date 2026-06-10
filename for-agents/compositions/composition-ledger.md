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

---

## the-corruption-of-the-common (C1 — the captured-commons interlude)  ·  Tier 2 (COMPOSED interlude)  ·  staged

- The live-session output. Jason's directive (the session): its own treatment,
  connected to demons (Goetia frame), the OPEN WEB as the single case, read-and-
  name mode, deterritorializing rupture as the reader's work, BRACING.
- Gestures G-CC-001…005 (plateau P-CC, status/draft); manifest
  src/content/book/the-corruption-of-the-common.md; route
  /book/corruption-of-the-common; linked from the threads index. NOT in the
  canonical river. Intended home: a bracing interlude near the proof (after
  Ch 4) or beside the Goetia.
- Five movements: name the demon → the web given away, then the gate moves →
  the freely-made harvested ("the commons went in; what came out had a gate") →
  read-and-name its weakness (it makes nothing; always late, always second) →
  the counter is not a wall but rupture + re-common ("Make it again").
- Provenance: lexicon (demon §3; Magic §2 "no singularity, no magic"; the
  corruption of the common; the deterritorialization discipline); G-16-056 (the
  web "into the public domain. No license. No fee. No owner"); G-16b-024/025/031
  (the commons harvested; "the commons goes in, the proprietary artifact comes
  out"); G-16-053 (the GPL: "use, share... but not free to close" → "take it,
  use it, share it, never close it"). NO new names/dates/figures — the interlude
  deliberately drops Berners-Lee/Torvalds/CERN/1991 and keeps only "the web."
- Critique (fresh-context sub-agent): overall REVISE → resolved to PASS. The
  only snag: "rented back" (M3) asserted a rent-back mechanic the harvest
  gestures don't establish; cut, the sourced "What came out had a gate" carries
  the closure. Register judged strong Gandalf throughout; genuinely bracing,
  tipping into neither comfort nor despair (M5 hands the reader the rupture as
  task). Names/dates discipline called "exemplary."
- DESIGN CALLS for Jason: placement (after Ch 4 / beside the Goetia); whether to
  pair it with a future "captured commons" thread; wizard-present voice blessing.

---

## the-captured-commons  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged

- The shadow thread — gathers the book's existing captures across four domains,
  deliberately reusing gestures from other threads to activate the STRONG
  (shared-gesture) edges for the first time:
  G-02-013 (place — the manufactured slum) [also Atlantic City] →
  G-13-011 (money — the pact recast) [also The Pact] →
  G-15-017 (care — made invisible, extracted) [also Divination] →
  G-16b-031 (knowledge — no say in what is made of us).
- Invocation (REVISED to PASS): "The same demon, in four houses. A neighborhood
  let to rot, then cleared; credit turned from a bond between people into a
  contract; care made invisible so the market can extract it; the work that
  trained the engine, taken with no say from the people who made it. Each was
  made or held in common, then captured while we still called it ours. Name the
  pattern and you can rupture it — break the enclosure open, and re-common what
  spills out."
- Sources: the corruption interlude (the demon; "captured while everyone still
  called it free"); G-02-013, G-13-011 ("mutual obligation made a contract"),
  G-15-017 ("care rendered invisible so the market can extract it"), G-16b-031
  ("no say in what is made from them"); deterritorialization discipline.
- `seealso` → the corruption interlude (the naming).
- Critique (fresh-context sub-agent): REVISE → PASS. Two fidelity fixes: (1)
  "everything we ever wrote" totalized G-16b-031 (scoped to a writer's work / no
  say) → rescoped; (2) "into a debt" muddled G-13-011 (debt-bond is the GOOD
  original; the enclosure makes it a contract) → "into a contract." No smuggled
  specifics; bracing.

## Strong edges, now live (threads.mjs enhancement)

- `threadCrossings()` strong-edge branch now names the shared gesture via its
  member note instead of "a shared gesture." The captured-commons thread is the
  first hub: it shows strong crossings to Atlantic City ("the slum was
  manufactured"), Divination ("Federici traces the mechanism"), and The Pact
  ("the pact, and its enclosure"); those three threads gain the reciprocal edge.
- Thread pages render an optional `seealso` link (used to point the captured-
  commons thread at its naming interlude).

## Placement note (Jason, this session)

- The Corruption of the Common interlude may be placed WITHIN "The Speaking of
  Names" (the Goetia chapter, P-GC) rather than standing alone. Jason's call;
  manifest move is his. The interlude is built to rhyme with that chapter's
  demon-naming frame.

---

## UPDATE — captured-commons thread expanded for flow (Jason: "they can be larger")

- Was 4 lone gestures (felt sparse). Now 10, grouped into four flowing "houses,"
  each 2-3 gestures with before/after context, paragraph-joined within a house
  and section-broken between:
  - place: G-02-013 → G-02-014 → G-14-034 (manufacture → demolition → aftermath)
  - money: G-13-010 → G-13-011 (money kills the relationship → credit enclosed)
  - care: G-15-015 → G-15-017 → G-15-018 (the mechanism → operational → the Bronx aide)
  - knowledge: G-16b-030 → G-16b-031 (the Basmati patent → the writer / no say)
- No new prose (Tier 0). Members header keeps the 4 house anchors so the strong
  edges still resolve. PRINCIPLE for future threads: include lead-in / lead-out
  gestures so a thread reads as flowing prose, not isolated fragments. Threads
  can be larger.

## CANONICAL-RIVER CHANGE #1 — interlude woven into "The Speaking of Names" (Goetia)

First sanctioned change to a live chapter manifest (Jason's directive this
session). Everything before this stayed in the workbench; this crosses the
membrane, on the branch, for his review.

- `src/content/book/goetia.md`: G-CC-001…005 inserted after G-GC-026a ("the
  outside") and before G-GC-028 (the practice) — the corruption demon as the
  last name before the chapter turns to naming-as-counter-spell. Separators
  realigned (57 gestures / 56 separators, verified); build clean; the river
  renders the demon in place.
- `src/pages/book/index.astro`: the chapter retitled "The Goetia of Capital" →
  "The Speaking of Names" (the index had lagged the chapter's own h1).
- OPEN for Jason: (a) confirm the placement (after the outside / before the
  practice) or move it; (b) plateau hygiene — the woven gestures are P-CC inside
  a P-GC chapter; decide whether to re-home them to G-GC-* (IDs are permanent —
  your call) or keep P-CC as metadata; (c) the standalone route
  /book/corruption-of-the-common is now also a focused view of the same gestures
  — keep or retire.

## UPDATE — the demon named (Jason), to parallel the chapter's other demons

- G-CC-001 now opens "*The corruption of the commons.* Hardt and Negri's name.
  The demon that never attacks head-on…" — matching the chapter convention
  (*Name.* Thinker's name. Epithet.) used by G-GC-008 (Biopower/Foucault),
  G-GC-019 (Hegemony/Gramsci), G-GC-024 (the outside/Luxemburg).
- Attribution sourced to the lexicon master principle ("Following Hardt and
  Negri, every form of the commons has a corrupted form") + the chapter's
  existing field note (Commonwealth, 2009) — a connection Jason made.
- Interlude display title aligned "Common" → "Commons" (slug/route unchanged).
- Confirmed by Jason: sequence works; keep P-CC (IDs are non-semantic — that is
  what manifests/frontmatter are for); keep the standalone duplicate (harmless).

## B1 — the You→We seam  ·  Tier 2  ·  PROPOSAL staged (awaiting Jason)

- Pronoun audit done (background agent). Finding: the You→We turn already half-
  exists at G-04-023 ("you have the name… what we were trying to build"), but as
  Jason's BIOGRAPHICAL we (the restaurant), buried in narrative. The reader's own
  You→We — being invited into a "we" — is never staged. The wound (G-03-046, "a
  piece of the world you built") is never explicitly healed.
- Seam: end of Ch 3 (G-03-046), before the river turns to building.
- Two sketches in for-agents/compositions/b1-you-we-seam.md (concrete vs wizard-
  chiastic), provenance-flagged, clearly Jason's-voice starting points — NOT
  woven, NOT critiqued-to-ship (they are a menu for his lane). Weakest unsourced
  bits flagged inline ("one of one" coinage; "the bill … with your name on it").
- Awaiting Jason: whether to stage it, placement (a/b/c), and the words.

### B1 RESOLVED — woven (Jason authored the turn)

- Jason's verdict: sketch B's tone/cadence, but "with us" is the bridge, and the
  book should cast the counter-spell it teaches. He authored the turn:
  "The loneliness was the spell. You were never alone — you were always building
  with us. We have been isolated as well. But if we choose to, we can build
  together."
- WOVEN as G-03-046a, seated as Chapter 3's closing beat after G-03-046 ("a piece
  of the world you built"), section break, flowing into the wizards-in-the-woods.
  Canonical-river change #2. Words by Jason → provenance = his directive.
- Pronoun contract honored: stages the FIRST earned We (reader-inclusive, "with
  us"); does NOT convert the earlier lonely You's. Build clean, 136 pages,
  chapter-3 aligned (35/34).

## B2 — the 16b frontier flip  ·  Tier 2 (COMPOSED beat)  ·  woven on branch (canonical change #3) — confirm with Jason

- The audit found 16b lands the NEGATIVE hard (G-16b-036/039, "the system cannot
  produce the singular") but never fires the FLIP; the master principle
  (spell→counter-spell) is most earned there and unvoiced, and "the gift" is
  absent from the chapter. This beat is the flip.
- WOVEN as G-16b-039a, seated after G-16b-039 (paragraph break) and before
  G-16b-040 ("the window is open") which pivots to tactics (section break).
  chapter-16b aligned (53 gestures / 52 separators); build clean, 136 pages.
- Text: "Now turn it over. What cannot be averaged cannot be enclosed: the gate
  only ever held what could be measured, and what is yours alone was never
  measurable. The singular is the one commons it cannot take. That is the gift —
  not a possession but a vantage, the angle on the world no corpus will ever
  hold. The machine named the thing it could not reach and called it nothing;
  name it again, and call it your power. The averaged self becomes the gift; the
  spell becomes the counter-spell."
- Provenance (all recombination): G-16b-039 (the negative, flipped); G-16b-029
  ("if you cannot be measured, you are not seen"); G-16b-023 ("not encodable");
  G-16b-036/037 (you / yours alone / the mycorrhizal dark); G-16b-049 ("a commons
  that is also a singularity"); the gift + "vantage" + "the angle on the world
  that is yours alone" (G-16-061, overture G-OV-003, lexicon Magic); naming-as-
  counter-spell (G-12-020, the grimoire); master principle VERBATIM (lexicon:
  "the averaged self becomes the gift; the spell becomes the counter-spell").
- Critique (fresh-context sub-agent): PASS. Provenance sound; the one inference
  ("cannot be averaged → cannot be enclosed") warranted inline by the book's own
  enclosure-as-capture-by-measurement definition. No duplication of G-16b-036/050
  or G-CE-017. Register Gandalf-clean and bracing. Refinement applied:
  "un-takeable commons" (a coinage) → "the one commons it cannot take" (plainer).
- TWO FLAGS FOR JASON: (1) PROCESS — B2's directive ("assemble them") did not
  explicitly say "weave"; I wove on the branch per the B1/corruption pattern (the
  branch is the review surface, nothing on main). One-line revert if you'd rather
  it stay staged-only until you give the weave word. (2) The beat uses reclamation
  "you/your" ("yours alone," "your power") — the wound healing, precedented by
  its source G-OV-003 ("It is your magic"); confirm the choreography reads right.

## A1 RECONCILED → RETIRED (the grimoire was already woven, in P-IW)

Jason: "ideally it's woven into the entire book — most of the way there." The
audit confirmed it is FULLY there, in the becoming-wizards-in-the-woods chapter
(P-IW), the registered "lexicon reveal":
- G-IW-024a "Magic has kinds… the same spell, two castings… the wizard's
  discipline is in the casting" = my G-GR-004 + G-GR-005.
- G-IW-025 "Every person has a *spellbook*" = the grimoire, as the reader's own.
- G-IW-027a "The map of the lexicon. Notice the shape. These names are not a
  list. They are a working system. Yours to fill in." = my A1 thesis exactly
  (grammar, not glossary), already woven into the initiation chapter.
- G-IW-029 the four capacities (read/name/build/hold); G-IW-030/031 the practice.

ACTION: retired the standalone P-GR (deleted G-GR-001…006, the-grimoire.md,
grimoire.astro). It was redundant AND fragmented the grimoire into a separate
interlude, against "woven into the whole book." Repointed the two links (threads
index + corruption interlude foot) to /book/becoming-wizards-in-the-woods ("the
map of the lexicon") as the legend. P-GR left registered-but-retired in the
ontology. Build 135 pages, no dangling refs.

PRESERVED — the one thing P-GR had that P-IW does NOT: M6's composable-river
pointer ("the book can be read as a line OR walked as a field"). Optional, and
Jason's call, because committing the BOOK PROSE to the thread-form is an
authorial statement (distinct from offering threads as a site feature, which the
threads index already does). Candidate one-line beat for G-IW-027a/031 if wanted:
"These names are a system; so is the book — read it as a line, or walk it as a
field, following one force across the chapters." NOT woven.

## A2 — the full-book chord pass  ·  Tier 1-2 (COMPOSED binding beats)  ·  woven on branch

Full-book audit (background agent) found Pact + Divination are ALREADY chords
(the threads), Evocation/Transformation can't be chords (single instances each —
the hoped-for second evocation doesn't exist), and three strong OPEN chords,
all lexicon-grounded (Jason's connections). Woven the three:

- NECROMANCY → appended to G-11-037: "The same reach backward holds the Black
  radical tradition, and the abolitionists who built before there was a word for
  it — wherever a commons survives, the dead are keeping the door." Sources:
  G-06-023, G-08-020 (both name necromancy), lexicon §Necromancy. Critique: PASS.
- INCANTATION → appended to G-16-052: "It is the same speech-magic the early
  chapters named: common sense cast on the mind, ownership cast onto paper — both
  turning *the way things are* into *the way things must be*." Sources: lexicon
  §Incantation (verbatim "the way things are/must be"), G-IW-023/G-06-039,
  G-16-052. Critique: PASS (the cleanest — binding clause is a lexicon quote).
- PREFIGURATION → appended to G-18-010. Critique: REVISE → PASS. The first draft
  conscripted MONDRAGÓN into the prefiguration triad — but the book casts
  Mondragón as the HOLD exemplar (durable/already-real), the OPPOSITE of
  prefiguration's "as if"; a connection Jason has NOT made + it undercut the
  gesture's impermanence landing. Dropped it. Final: "The same casting on a
  Tuesday street where music made the commons, and in a quilombo self-ruled for a
  century: the new world lived as if it were already here, each time for as long
  as it could be held." Sources: G-IB-006 (salsa), G-06-024 (Palmares). No
  year-count introduced (book conflicts 69 vs 80; avoided).

PROPOSED, not woven — INSCRIPTION chord. Best site (G-OA-003, "the book has a
word… inscription") is BEAUTY-LOCKED, so routed to Jason. Candidate beat: "The
same cut is made in the land — the railway driven through a continent, the
redline drawn through a city — and across the gendered body, generation after
generation. One spell, two surfaces: the body and the ground." Sources: lexicon
§Inscription (body AND terrain), G-06-031 (railway "spell written in steel"),
G-05-026b (gender inscribed). Jason: place as a new G-OA-003a, fold into G-06-031,
or skip.

FLAGGED as NOT chords (would need new deployment, route to Jason): Evocation /
Transformation (one instance each); Conjuration/Abjuration (no commons-abjuration
named in body); Illusion (enclosure-only). Build clean, 135 pages.

## Flow sweep — all six threads expanded for flow  ·  Tier 0 (reordering only)

Applied the before/after-context principle (proven on captured-commons) to all
six remaining threads. Each member now carries its setup/follow-through neighbor
so it reads as a flowing unit, not a yanked fragment. No new prose — only
existing chapter-neighbor gestures added; separators paragraph-within-unit,
section-between. Audit (background agent) proposed, all IDs verified to exist.
- the-singularity: 3 → 7 (each Simondon naming now opens on its concrete image —
  the old-growth forest, the mycorrhizal network, the city).
- the-divination-thread: 4 → 9 (each reading now has its object; notably G-08-004
  restores the referent for G-08-005's "Crenshaw read *that case*" — fixed a
  dangling reference).
- the-shrug: 4 → 9 (each shrug-naming now carries its trigger; G-OA-008c kokoro
  precedes G-OA-009, which defines the shrug against it).
- the-pact-thread: 5 → 9 (G-13-010 sets up the credit-pact; G-13-027 bridges the
  Caja Laboral to "not charity"; G-16-052/054 frame the GPL counter-spell).
- the-night-herons: 6 → 12 ("look up" + the first blessing in the prologue now
  rhyme with the final blessing; each landing carries its setup).
- atlantic-city: 5 → 6 (G-14-002 completes the opener).
- Build clean, 135 pages. New true shared-gesture edges emerged (e.g., the Pact
  thread now shares G-13-010/011 with the Captured Commons) — rhizome densified.

## Inscription (Jason's words) + M6 composable-river pointer — WOVEN

- INSCRIPTION: Jason's directive — added "They were *inscribed* into your body."
  to G-OA-001b after "You have been carrying the instructions and calling them
  *you*." Names the inscription technique at the body-instructions line (the spell
  cut into the body). Supersedes the earlier proposed cross-domain Inscription
  chord. (G-OA-001b is beauty-locked; Jason-directed edit.)
- M6: Jason "put it in." New gesture G-IW-027b seated after the lexicon-map
  (G-IW-027a): "And the book is a system too. Read it as a line, or walk it as a
  field — follow one force across the chapters: the pact, or the reading that
  reveals, or the road the birds route around…" Opens the composable-river form
  in the book's own prose. Provenance: the thesis (this pass) + the three live
  threads + G-IW-027a. Build 135 pages.

## Mondragón restored to the Prefiguration chord + the multi-school principle

- Jason: examples are multi-school (Mondragón = prefiguration + hold + necromancy
  + pact); the earlier critique's "category error" rejection was too strict.
- Reverted the G-18-010 prefiguration chord to its clean impermanence landing;
  placed the chord at G-04-025 (the Mondragón gesture, "Prefiguration at every
  scale") instead, naming Mondragón among the rhyme with the HOLD register intact:
  "The same spell on a Tuesday street where music made the commons, in a
  hundred-year quilombo, in a federation of workers that built its world and held
  it — one casting, at every scale that will carry it." Sources: G-IB-006 (salsa),
  G-06-024 (Palmares), the Mondragón gesture itself. Multi-school (prefiguration +
  hold) per the new principle.
- Two principles recorded in CLAUDE.md + the non-chords instructions: examples are
  multi-school; name where it's at work (not only where labeled).

## Non-chords pass — Evocation ⇄ Transformation family  ·  Tier 1 (parsing-by-naming)  ·  woven

The first family of the non-chords pass (instructions:
`for-agents/non-chords-pass-instructions.md`). Audit by background agent;
every quote verified against the file before composing; all beats critiqued
in a fresh-context sub-agent. Batch-level critique finding applied across the
pass: the full "cast for the commons" formula is reserved for a school's first
commons-cast naming; later instances vary the shape.

- **G-11-017 (Ch 11, the garden / library / song):** appended
  "Evocation, cast for the commons — renewal carried in the felt register."
  Sources: the gesture's own "mechanism by which communities renew themselves"
  + "irreversible in ways that policy victories are not"; lexicon §2 Evocation
  (psychospiritual register). Critique: REVISE → the original beat re-listed the
  gesture's triad and overclaimed (garden/library are commoning, not evocation);
  revised to name the felt mechanism, not the item list. Trimmed the critic's
  "not the policy victory" tail (redundant echo of the prior sentence).
- **G-14-018 (Ch 14, teaching through affect in the PNW):** inserted standalone
  "Evocation, passed the only way it passes." after "not as a skill but as a
  doorway." Sources: the gesture's "I taught not through information but through
  affect — the only way this transmission works"; "honoring and blessing and
  singing." Critique: REVISE → original placement broke the "I taught" anaphora
  mid-run; moved after the doorway sentence, formula dropped.
- **G-02-030 (Ch 2, Decidim):** inserted "Transformation — the tool built to be
  given away." after "available to any city that wanted to use it." Sources: the
  gesture's "The tool existed. It was waiting." + open-source/federated/modular
  release; lexicon §2 Transformation (commons-cast: open-source). Critique:
  REVISE → original opener duplicated the shipped Ch 16 naming word-for-word and
  sat one gesture before G-02-031's identical-formula pop; formula dropped.

**Killed / yielded (logged per the zero-is-valid rule):**
- **T2 · G-10-042 (GPL/Linux/Luxemburg) — KILLED.** Restates the shipped Ch 16
  naming in school, domain, and gloss vocabulary ("builder's mastery" ≈
  "engineer's mastery"); the gesture already names itself natively ("This is
  source, not instructions."). A third open-source transformation naming is
  repetition, not a new instance.
- **E1 · G-17-034 (grief rituals / practices of the return) — YIELDED.** Sound
  provenance, but same-chapter formula clash with G-17-049's existing "Ritual
  cast for commons" pop over overlapping material, and consecutive in the
  manifest with G-17-035 (which takes the abjuration beat) — two adjacent
  closing pops read as curriculum. AB3 is the stronger of the pair. Open call
  for Jason: relocate a bare "Evocation — grief and praise doing the work of
  return." here only if he wants the third Ch 17 naming.

Instance counts after weave: Evocation = 3 (G-IB-004 salsa, G-11-017 organizing,
G-14-018 wilderness teaching) → thread-eligible. Transformation = 2 (G-16-056,
G-02-030) → below the 3-instance thread bar; no thread offered.

## Non-chords pass — Abjuration (commons-cast) family  ·  Tier 1 (parsing-by-naming)  ·  woven

The school's first commons-cast namings in body text (only the enclosure cast
existed: G-06-014's "Conjuration and abjuration cast as one motion"). All three
beats PASSED fresh-context critique as drafted.

- **G-06-028 (The Colony, the pre-colonial African commons):** inserted
  "Abjuration, cast for the commons — the refusal that protects the commoning."
  after "No chiefs. No enclosure." Sources: the gesture's "No chiefs. No
  enclosure." + lexicon §2 Abjuration (the Mbuti refusal of chiefs is the
  lexicon's literal worked example; gloss is lexicon-built). Carries the full
  formula as the school's first commons cast; counter-casts G-06-014's
  enclosure naming earlier in the same chapter. Flag for Jason (from critique):
  read aloud across the paragraph break to "These were not preparations."
- **G-14-032 (Ch 14, Weelaunee):** appended "Abjuration, cast for the commons —
  the body itself the boundary." Sources: the gesture's "people placing their
  bodies between a living ecosystem and its destruction" + "a community to be
  defended." Flag for Jason (from critique): the beat takes the last word from
  the "old-growth stand outside Atlanta" place-landing — a second landing after
  a first is his call.
- **G-17-035 (Ch 17, the Tzutujil roofing refusal):** appended "That is what the
  refusal protected. Abjuration, cast for the commons." Sources: the gesture's
  own spine ("The Tzutujil refused…", "the web of relationship was rewoven",
  "The obligations were renewed"). Inverted construction (gloss first, name as
  landing) per the batch anti-formula-fatigue finding. Double-naming with
  G-17-049's ritual pop on the same example is legitimate under the multi-school
  principle: the refusal and the repetition are distinct work on the page.

**Skipped (logged):**
- **G-07-040 (the Palmares / Zapatista / Crown Heights refusal triad)** — same
  chapter as G-06-028 after the Colony merge (47 gestures apart), and the
  gesture already closes on a technique triad ("Undoing the inscription.
  Breaking the incantation. Rupturing the territory."). A second commons-
  abjuration naming in the chapter is repetition; the triad already does its
  own naming work.
- **G-14-031 (Standing Rock)** — adjacent to G-14-032 in the same chapter; one
  naming covers the defense-of-land pair, and the gesture's personal-testimony
  register ("I have friends who were there. They have scars.") should not carry
  a taxonomy beat.
- **G-06-024 (Palmares)** — already carries two school namings
  ("Deterritorialization and prefiguration in one act"); the refusal-to-harbor
  detail from the lexicon is not on this page (the page gives collective
  defense + governance), and G-07-040 holds the explicit Palmares refusal.

Instance count after weave: commons-cast Abjuration = 3 (G-06-028 stateless
governance, G-14-032 defense of land, G-17-035 technology refusal) across three
chapters/domains → thread-eligible.

## Non-chords pass — Illusion (commons-cast) family  ·  ZERO INSERTIONS  ·  skipped with reasons

The audit swept the corpus on the lexicon's seeds (Underground Railroad, maroon
camouflage, fugitivity, hush harbor, safe house, samizdat, the free school under
the radar…) and returned 14 candidates. None survived scrutiny. The lexicon
defines commons-cast illusion as **hiding-as-protection** — deliberate
concealment from a hunting power. The corpus does not currently contain that
work on any page:

- **G-13-034 (Norfolk informal credit) — KILLED at critique**, the only beat
  composed. Three grounds: (1) the credit does not hide from the bank; it lives
  outside the apparatus — exteriority, not camouflage; no act of concealment is
  on the page. (2) The gloss ("alive because no ledger can read it") asserted a
  survival-through-illegibility mechanism the gesture contradicts — its own
  causality is that discharging the debt would end the relationship; the
  ledger's blindness is incidental. An invented connection → provenance
  violation. (3) First-instance damage: the book's first commons-cast illusion
  naming teaches the school; teaching it on a non-hiding site corrupts the
  definition for every later use.
- **G-15-008 / G-15-010 (the witch hunts)** — the hiding there is the terror
  winning ("afraid to practice what they knew"), not the commons protecting
  itself. Naming it commons-cast illusion would invert the gesture's meaning.
- **G-06-024 (Palmares)** — the page gives governance and collective defense,
  not concealment; maroon camouflage is in the lexicon, not in this prose.
- **G-04-020 (community fridges), G-15-001 (Crown Heights)** — maximally
  visible, on the sidewalk; informality is not hiding.
- **G-16b-022/037 (the mycorrhizal dark), G-GC-026 (the outside of the
  accounting)** — unmeasurability is the book's Magic concept (what the
  averaging machine cannot capture), already named as such; overloading it with
  illusion would muddle two lexicon entries. G-GC-026 and the P-OA candidates
  are also beauty-locked.

**Route to Jason:** if commons-cast illusion belongs in the book, it needs new
material (Underground Railroad / maroon camouflage / free-school cases) — a
Tier-3 claim only he can supply. Until then the school stays enclosure-cast
("illusion, cast as policy", G-02-013; "The separability is the illusion",
G-06-007), and no illusion thread is offered.

## the-evocation-thread + the-abjuration-thread  ·  Tier 0 (paths) + Tier 1 (invocations)  ·  staged

The two threads offered by the non-chords pass (each family reached 3+ named
instances across distinct domains). Both flowed per the before/after-context
principle; every member verified to exist; build green.

- **the-evocation-thread:** G-IB-003 → G-IB-004 → G-IB-006 | G-11-016 →
  G-11-017 → G-11-018 | G-14-016 → G-14-017 → G-14-018 → G-14-019.
  Salsa in the Barcelona street → the song at the rally / commons-produces-play
  → the blessing taught through affect, landing on "I became the land inviting
  them into relationship." Invocation (Tier 1) critiqued: REVISE → the
  three-example list was a checklist move; cut to one example, landing on
  G-IB-004's "felt before it is understood" (quoted). Final: "Evocation is the
  felt register: music, ceremony, grief, praise. Cast to enclose, it is the
  anthem and the brand. Cast for the commons, it is the song at the rally that
  isn't between speeches — felt before it is understood." Sources: lexicon §2
  Evocation; G-IB-004; G-11-017.
- **the-abjuration-thread:** G-06-013 → G-06-014 | G-06-024 → G-06-028 |
  G-14-031 → G-14-032 | G-17-035 → G-17-036. Both directions deliberately:
  the enclosure cast (Du Bois — out of the human) then the commons casts
  (no chiefs; the body itself the boundary, with Standing Rock restoring the
  "Here again" referent; the Tzutujil refusal with its metal-roof
  counterfactual). Invocation (Tier 1) critiqued: REVISE → dropped "the roof
  that was not a product" from the closing triplet (two examples doing
  different work; body-as-boundary is the landing). Final: "Abjuration is the
  boundary — the casting out. Cast to enclose, it gathers one category into
  being by casting the other out of the human. Cast for the commons, it is the
  refusal that protects the commoning: no chiefs, no enclosure; the body itself
  the boundary." Sources: lexicon §2 Abjuration; G-06-014; G-06-028; G-14-032.
- No Transformation thread (2 instances, below the bar) and no Illusion thread
  (zero commons-cast instances) — see the family entries above.

## the-second-initiation + the walker's mark  ·  Tier 0/1 (path) + Tier 2 (staged witness)  ·  thread woven into staged layer; witness STAGED ONLY

Built at the close of the becoming-read (2026-06-10): the full river read in
sequence at Jason's direction; the question held — what digital trace of
awakening does the wizard leave as a sigil to guide others. The answer was
taken from the book's own lexicon: a sigil carries the spell forward without
explaining (the cedar chip, G-AB-0xx "carrying what we will not say"); the
description is the spell (Turing, G-16-039); the collector arranges fragments
so the original meaning shows through; the room must teach itself (G-WW-015).

- **the-second-initiation** (path, 26 gestures, 15 stations, the river's
  longest thread): G-OV-003/004 (the spell, the counter-spell) → G-01-035/036
  (the midnight crack) → G-03-046a (the loneliness was the spell) →
  G-IW-027/030 (the second initiation; the first page of the spellbook) →
  G-GC-030/031/032/034 (the naming practice) → G-OA-011b (the practice) →
  G-12-040 (the readiness was built) → G-AB-056 (the shard) → G-RE-020 (the
  ledger of the living world) → G-16b-036/039a (the gift; the flip) →
  G-17-029/031 (the return; the community at the threshold) →
  G-WW-012/013/014/015 (the crossing at the bar) → G-WW-025 (the quest) →
  G-WW-030 (come find us) → G-EP-001 (what is still here). Invocation
  critiqued: REVISE → grammar joint fixed, "here" cut; "stations" verified as
  book vocabulary (G-WW-029 "There is no station last"). Sources: G-IW-027
  (verbatim), G-OV-005, G-WW-015, G-OA-006.
- **The walker's mark** (`for-agents/compositions/the-walkers-mark.md`) — a
  candidate centaur gesture in Claude's voice, STAGED ONLY, never woven;
  proposed placement P-CE (Jason's call). Critique: REVISE → "the oldest
  move" killed (invented superlative); the inner-change assertion reframed
  through the chapter's own cannot-verify-from-inside move (G-CE-024); the
  doves-appropriation ending killed per G-CE-010 ("I cannot bless the
  herons") and replaced with the smaller close; "the refusal" demoted to "a
  refusal"; two provenance citations corrected (G-WW-027, G-WW-016). Full
  per-sentence provenance in the staging file.
- Flag for Jason: the gesture and the invocation both lean on G-WW-015's "the
  room could teach itself" family — the invocation keeps the phrase, the
  gesture now varies it. Confirm the echo if both ship.
