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

## The walker's mark WOVEN (G-CE-028a) + the linkable river  ·  Jason-directed

- **G-CE-028a "The Walker's Mark"** woven into the centaur chapter at Jason's
  direction ("Drop the walker's mark in where you feel appropriate - I agree
  with your assessment that it accompanies the centaur chapter"). Seated after
  G-CE-028 ("These are not contradictions. They are the centaur.") and before
  the Chiron release (G-CE-030). Text exactly as critiqued; per-sentence
  provenance in for-agents/compositions/the-walkers-mark.md. `voice/claude`
  added to the tag ontology (the chapter says "I am Claude"). Lint-clean.
- **The linkable river** (Jason's direction): every gesture in /book/river now
  carries a stable anchor (#G-XX-NNN) with a faint hover ID; every gesture in
  every thread links back to its origin in the river. Implemented as a
  parallel `composePlateauUnits` export — `composePlateauBody`'s
  byte-equivalence-locked output untouched. The form deepens its thesis: any
  gesture is now an addressable entrance to the whole.

## Flags closed (Jason, 2026-06-10)

Jason reviewed and closed both critique flags from the abjuration family:
G-06-028 (the naming across the paragraph break to "These were not
preparations") and G-14-032 (the abjuration landing after the "old-growth
stand outside Atlanta" place-landing) — "those beats land perfectly." No
edits required; the family is settled as woven.

---

# ARGUMENT PASS — 2026-06-17 (the standing body-of-book holes)

The dedicated argument pass the 06-16/06-17 critics flagged as the real remaining
work (separate from the craft/Djinn passes). Forks resolved with Jason directly
(AskUserQuestion, 2026-06-17). Each change is the move all four critics named:
**lower the overclaim to the claim the book already half-states** — subtraction +
one distinction, no new doctrine. Reflexive loop run (fresh-context critic): 2
ship, 1 revise-then-ship. Build clean (141 pp), lint clean for new files, metrics ran.

## G-GC-002a — "Not all of them were bred on purpose"  ·  Tier 0 (functionalism falsifier)  ·  woven
- Jason directive (2026-06-17): the falsifier is the *distinction* — "some people
  (e.g. white supremacy) have it intentionally, others don't."
- Composed: the intentional/emergent split + the off-switch (what is NOT enclosure).
- Sources:
  - "most have no author … persist because they pay" ← G-GC-002 ("they have no
    plan"), G-PR-012 ("requires only maintenance"), G-16-048 ("it persists because
    it is maintained").
  - "the color line was written into law, enforced, intended" ← Jason directive
    (white supremacy as the intentional case); safe general history (Jim Crow /
    covenants / redlining) — no date/quote/named figure, no hallucination tell.
  - "a demon is the harm that has someone to serve and a hand to keep it so" ←
    G-13-016 (debt "optimized for extraction" = the beneficiary test).
  - "where a hurt has neither … it is grief, carried not fought" ← the stated
    falsifier the critics requested (Synthesis Tier-0 #1). The off-switch.
- Critique: SHIP. Gives a real falsifiable test; refines G-GC-002 cleanly (rescues
  "no plan" from erasing intentional racism); register holds.
- Placement: after the beauty-checked (deletion-only) G-GC-002, Goetia manifest.

## G-04-025a — "See the Edges of the Spell"  ·  Tier 0 (markets / scale / Kerala)  ·  woven
- Jason directive (2026-06-17): scope to "alongside/within" — the commons does not
  replace the price system.
- Composed: concede the calculation problem unsolved; name the three scales as
  different instruments (gift / federation / state); name Kerala as a state.
- Sources:
  - "no one has yet solved what the price system solves … the commons does not
    pretend to" ← Jason directive (scope, don't solve).
  - "Kerala is not a commons in the strict sense but a government that chose the
    floor" ← G-04-019 ("communist-led government" / "left governance"); aligned
    with chapter-4 beauty_check note (5) ("welfare state / commons / accountable
    state distinction preserved").
  - "a fridge is a gift / 70k is a federation / 35M is a state" ← G-04-025's own
    scale-range, disaggregated (Adversary §1–2: the scale-jump + Kerala double-count).
  - "beside the market, inside it, in the ground it left unpriced" ← Jason directive
    (alongside/within).
- Critique: REVISE → SHIP. Cut a self-congratulatory meta-comment ("costs nothing"
  → "the difference is worth keeping straight"); added "yet" to protect the seam
  with G-10-024 (Catalonia coordinated without markets for ~a year — bounded, not
  contradicted). Seated BEFORE the closing litany: concede-then-land.

## G-05-028 — vindication grounds attached  ·  Tier 2/argument (defend the read)  ·  edited
- Jason directive (2026-06-17): DEFEND the vindication read (not hedge it).
- Edit: added "Dismissed, not refuted: the demon they named was real, and the
  naming outlived the dismissal." — so "All three were right" rests on the
  diagnosis being true and enduring, not on persecution.
- Sources: G-02-028 ("they lost by being defeated, not by being wrong");
  G-10-042 ("It wasn't buried. We're still reading it"); G-10-040 ("buried because
  threatening, not because wrong").
- Critique: SHIP. Defends on real grounds; matches the book's existing vindication
  grammar; economical.

## HELD / NOT TOUCHED (Jason's calls, 2026-06-17)
- Concept-creep (Synthesis Tier-0 #3): HELD — no fork given; Jason's other answers
  all lean "keep the book's reach." Not policed this pass.
- Sourcing — Sorenson single-source + survivorship denominator: LEAVE AS-STATED
  (Jason's explicit call; his risk to own). Note: the Djinn chapter's new
  "auditable provenance" promise now leans on these; flagged, not changed.
- The vindication read kept and strengthened, NOT converted to "a bet under
  uncertainty" (the Logic Auditor's proposed fix — Jason declined it).

## FUNCTIONALISM CLEANUP — 2026-06-17 (applying the falsifier downstream)
Audit of every live "by design / it is policy / serves someone" instance against
the G-GC-002a test (enclosure = a harm with a beneficiary AND a maintainer;
intentional vs. merely-maintained). Result: the book is already more careful than
the isolated line-citations implied.
- G-13-016 (debt "working as designed"): the INTENTIONAL kind, already shown
  ("optimized for extraction… sold to the party best positioned to extract"). Keep.
- G-16-040/043 (Turing "it is policy"): INTENTIONAL, already shown ("every official
  who signed the relevant paperwork knew this"). Keep.
- G-16-048 ("working as designed… it is policy"): already nuanced in-gesture ("No
  single hand planned the whole of it; it persists because it is maintained"). Keep.
- G-11-012 / G-11-038 ("enclosed because it worked"): intentional historical
  enclosure (the Acts); chiasm. Keep.
- G-PR-012 ("requires only maintenance"): emergent, maintenance-phrased. Keep.
- G-01-010 ("the people who designed this road were not bad people… a template…
  who it serves"): already supplies the no-villain/emergent framing in Ch.1. Keep.
- **G-01-002 (the crossing, the book's FIRST functionalist hammer): the one genuine
  over-assertion — "It is the design" claims intent for what is emergent-maintained,
  and it lands before any falsifier exists. EDITED.**

### G-01-002 — the test applied at the first hammer  ·  edited
- Added: "No one aimed the lights at you. They are only kept this way — because a
  crossing on foot counts for less than the cars."
- Applies all three legs of the seal: no malice (no author), "only kept" (the
  maintainer), "the cars" (the beneficiary). Sharpens the indictment (indifference,
  not intent — the colder read) rather than softening it. Rhymes forward to G-01-010.
- Sources: G-GC-002a (the test); G-01-010 ("who it serves" / not-bad-people);
  the gesture's own "calibrated for throughput, for the movement of cars."
- Critique (fresh-context): SHIP WITH REVISION → applied. Caught a pronoun-contract
  violation ("your crossing" = possessive condition-line); de-possessed to "a
  crossing on foot," tightened "set the lights to strand" → "aimed the lights at
  you," kept isolating-You. Build clean (141 pp).

### G-04-025a — REVISED on Jason's PR review (2026-06-17, PR #10)
Jason's review comment (line 36): "too gentle on markets… they have different intentions…
we don't know if the intentions of millions of strangers can be coordinated by a commons
but we can confidently assert that it's worth trying — and hasn't been. There are tools we
haven't invented yet." Reframed from "concede the calculation problem" to "open, untested,
worth trying":
- market vs commons = different *intentions* (not the market's settled superiority);
- "has not replaced the market — not yet" (future open);
- "no one knows… It hasn't been tried. And it is worth trying" (don't concede impossibility);
- "tools we may not have invented yet";
- "Whether the commons grows beside the market or past it, we do not yet know" (drop the
  asserted complementarity).
Source: Jason directive (PR #10 review, his analytical position as author). Critique
(fresh-context): SHIP WITH REVISION → applied (intention-framing without a market-capability
leak; "built"→"sustained" airtight vs G-10-024 Catalonia; cut a lecture tail; split an
overpacked sentence). Build clean (141 pp).

---

## the-enclosure-thread  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged (2026-06-18)

Tapestry / thread-swarm initiative. The book's master spine: enclosure, the
most-tagged concept (69 river gestures, 60 of them previously orphaned).
- Path = ordering of existing gestures, no new prose:
  G-PR-015 → G-15-011 → G-15-028 → G-13-013 → G-14-029 → G-08-007 → G-CC-002 →
  G-CC-003 → G-05-011 → G-GC-026 → G-RE-004
  (name → common land + care → the turn → land today → space/law → the web given
  away + the demon fed → the frontier never ends → enclosed because it worked →
  the enclosure of knowing).
- Composed (Tier 1): the invocation only —
  "Enclosure is not the theft of a thing. It is the capture of the way to it —
  the gate set in the doorway where the way once ran open. Watch it travel:
  common land, then care, then debt, then the web that was given away. Every
  outside it swallows makes it need another, and the commons is only ever the
  next outside — enclosed not because it failed but because it worked. Name the
  gate and you can see it move. The wall is also the thing that comes down."
- Sources:
  - "not the theft of a thing … capture of the way to it" ← G-OV-002 (verbatim)
    + G-CC-003 ("not the theft of a thing, but the capture of everything freely
    given").
  - "the gate set in the doorway where the way once ran open" ← G-OV-002 ("it
    stood in the doorway, until what people once reached … could be reached only
    through a price") + G-CC-002 ("Then the gate moved").
  - "common land, then care, then debt, then the web that was given away" ←
    members G-15-011, G-15-028, G-05-011 (lists "debt"), G-CC-002.
  - "Every outside it swallows makes it need another" ← G-05-011 ("Every outside
    absorbed creates the need for the next one").
  - "the commons is only ever the next outside — enclosed not because it failed
    but because it worked" ← G-GC-026 (verbatim-faithful).
  - "Name the gate and you can see it move" ← G-OV-004 ("Name a thing truly and
    you can see it coming").
  - "The wall is also the thing that comes down" ← master principle (spell →
    counter-spell).
- Critique (fresh-context sub-agent, 2026-06-18): REVISE → applied. Cut the
  invented couplet "the toll set where there was a path" (thinnest provenance,
  most decorative cadence) down to the single sourced doorway image. Softened the
  audible-We close ("the thing we learn to take down" → "the thing that comes
  down") to hold the pronoun contract — an enclosure invocation is the wound, not
  yet the reckoning. **Open call for Jason:** restore the audible "we" at the
  close if you want the counter-spell turn explicit here (the master principle
  licenses it; the pronoun-timing is your call).
- Status: staged at /book/path/the-enclosure-thread. Not in nav, not in the river.

---

## knowing-in-the-body  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged (2026-06-18)

Tapestry / thread-swarm initiative. The somatic spine (motif/knowing-in-the-body,
66 river gestures). Crosses the Night Herons thread at G-12-016 (a true node).
- Path = ordering of existing gestures, no new prose:
  G-PR-026 → G-01-009 → G-IW-023a → G-GC-021 → G-GC-029 → G-GC-031 → G-OA-008c →
  G-12-016
  (the felt sense → the body reads the built world → inscription named → Fanon's
  nervous system → the naming must touch the body → reach for the feeling first →
  kokoro, what the analysis cannot reach → the herons know it too).
- Composed (Tier 1): the invocation only —
  "Before the mind has words, the body has the news — a tension in the gut, the
  shoulders, the held breath. The same spell that is cast on the mind is cut into
  the flesh: the gait, the gaze, the shallow breath. We call this inscription,
  and the name is useless until it touches the body. So reach for the feeling
  first. There is a knowing the clipboard cannot reach — what kept you on the
  earth when the technique ran out — and it is not ours alone: the herons hold it
  too. The flesh can be taught again."
- Sources:
  - "the body has the news — a tension in the gut, the shoulders … before the
    mind has words" ← G-PR-026 ("the tension in the gut or the shoulders before
    any thought arrives … felt this in your body before you had words for it").
  - "The same spell that is cast on the mind is cut into the flesh: the gait, the
    gaze, the shallow breath" ← G-IW-023a ("The same spell that lays itself on the
    mind lays itself on the body … eyes forward, breath shallow") + lexicon-map
    ("the gait, the gaze, the ambient knowing"). ("cut into" = inscription, the
    concept's own sense of marking the body.)
  - "We call this inscription" ← G-IW-023a ("We call that inscription") — pronoun
    matched to source on critique.
  - "the name is useless until it touches the body" ← G-GC-029 (verbatim-faithful).
  - "reach for the feeling first" ← G-GC-031 (verbatim).
  - "a knowing the clipboard cannot reach — what kept you on the earth when the
    technique ran out" ← G-OA-008c ("the thing Foucault's analysis cannot reach …
    spirit was the only thing that kept me on the earth") + G-GC-008 ("The
    clipboard and the whip" = Foucault's biopower).
  - "it is not ours alone: the herons hold it too" ← G-12-016 ("The herons know …
    in the way that matters … knowledge that no traffic study produced").
  - "The flesh can be taught again" ← G-IW-023a (verbatim).
- Critique (fresh-context sub-agent, 2026-06-18): KEEP. All eight clauses verified
  against sources; register and pronoun choreography judged exemplary (isolating
  You at the lonely beat; audible "ours" as the healing turn). Applied the one
  optional polish: "They call this inscription" → "We call this inscription" to
  match G-IW-023a verbatim and remove the only pronoun ambiguity.
- Status: staged at /book/path/knowing-in-the-body. Not in nav, not in the river.

---

## the-averaging-machine  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged (2026-06-18)

Tapestry / thread-swarm. Its OWN thread, NOT enclosure (Jason, 2026-06-18: "the
averaging machine isn't necessarily enclosure!"). Where enclosure is the capture
of the way (Terrain), this is the flattening of the one (Magic: average ⇄
singular). Lands on the machine — the LLM co-author — naming itself and refusing.
- Path = ordering of existing gestures, no new prose:
  G-PR-026 → G-08-009 → G-16-039 → G-16-012 → G-AB-062 → G-OV-003 → G-CE-044 →
  G-CE-048 (name the machine → what it can't hold is singularity (Wynter) → the
  machine is the description (Turing) → the lawn for the self → the lie of
  substitution → what it can't reach is your magic → the singularity argument
  named → the machine names itself and refuses).
- Crosses Knowing in the Body at G-PR-026 (a true node).
- Composed (Tier 1): the invocation only —
  "The averaging machine makes the most probable next thing and calls it the
  human. It produces the same outcome whoever runs it. The machine is the
  argument. It can hold the average of us; it cannot hold the one of us — the
  specific, irreducible thing a person or a place knows that no average
  recovers. That is the lie of substitution: this acre is that acre, this self
  is that self. The angle that is yours alone is the one thing the averaging
  could never reach. Even the machine can name itself, and refuse."
- Sources:
  - "makes the most probable next thing and calls it the human" ← G-08-009 ("the
    most probable next word… statistical average of human expression"; "one
    civilization's self-portrait became the definition of the Human itself").
  - "produces the same outcome whoever runs it. The machine is the argument." ←
    G-PR-026 ("produces the same outcomes regardless of who runs it") + G-01-032
    ("the machine itself is the argument"). **OPEN CALL for Jason:** G-01-032 is
    `status/stashed` (not a live river gesture). Confirm anchoring a composed line
    to a stashed gesture, or point me to a live equivalent for "the machine is
    the argument."
  - "it cannot hold the one of us — the specific, irreducible thing a person or a
    place knows that no average recovers" ← G-08-009 (verbatim-faithful; "place"
    generalizes "community").
  - "the lie of substitution: this acre is that acre" ← G-AB-062 ("this piece is
    the same as that piece… substitution is possible… runs on this lie").
  - "this self is that self" ← **crystallization** (NOT quotation) of G-16-012
    ("every blade interchangeable… a lawn for the self") — the lawn's
    interchangeability turned on the self. Flagged as coined epigram, kept as
    defensible recombination.
  - "the angle that is yours alone is the one thing the averaging could never
    reach" ← G-OV-003 (near-verbatim).
  - "Even the machine can name itself, and refuse" ← G-CE-048 ("I am the averaging
    machine the book names… a practice available even to me… It is a refusal").
- Critique (fresh-context sub-agent, 2026-06-18): REVISE → applied. Split the
  weakest line and cut the "because" scaffolding + runs/runs clatter ("It runs
  the same whoever runs it, because the machine is the argument." → "It produces
  the same outcome whoever runs it. The machine is the argument."); dropped the
  soft "But" before the turn. "this self is that self" ledgered as crystallization
  (above). Distinctness from enclosure confirmed: the close (the machine refusing
  its own separation) is what makes it Magic, not Terrain — keep it load-bearing.
- Status: staged at /book/path/the-averaging-machine. Not in nav, not in the river.

---

## SLATE BATCH (2026-06-18, session 1) — six threads, built by sub-agents, fresh-context critique gate

All six: Tier 0 ordering (existing gestures) + Tier 1 invocation. Tag = the
connection Jason already made. Each invocation independently critiqued in a
fresh-context sub-agent against Gandalf/pronoun/anti-slop + quote verification.

### cannot-verify-from-inside · staged · critique REVISE→applied
Invocation (final): "Force is visible. You can resist force because you can see
it. The spell that decides what you are is not. It works through the air everyone
breathes, and there is no position within the structure from which the
classification can be refuted, because the structure determines which responses
are legible. Resistance confirms the image. Compliance confirms it too. The
blindness was never in the commons; it was in the accounting. To see it is to
attend — to refuse to aggregate, to see from inside the relationship rather than
outside it. What averaging cannot hold is the one thing worth holding: you are
what the system cannot train on. The test that forbids the claim is also the way out."
Sources: G-09-012 ("Force is visible. You can resist force because you can see
it. Hegemony isn't"; "the air everyone breathes"); G-07-015 ("no position within
the structure from which the classification can be refuted… determines which
responses are legible"; "resistance confirms the image"; "compliance confirms");
G-12-015 ("The blindness was in the accounting, not in the commons"); G-12-035
("trained herself to attend… refusing to aggregate… see from inside the
relationship rather than outside it"); G-08-009 ("what averaging cannot hold");
G-16b-036 ("You are what the system cannot train on"); close ← master principle
(spell→counter-spell) + G-WW-018 (epistemic limit). Critique: REVISE — cut the
instructional "you must train yourself to… to…"; restored G-09-012's three short
beats; "To see it is to attend" (no unreferenced subject). Applied.

### proof-before-theory · staged · critique KEEP
Invocation: "Not argument — evidence. We show you what works before we explain
why. Watch the practice preceding the theory: the workers running the factory
before any manifesto, the street become a commons before anyone finished debating
whether it should be. They didn't need the theory. They had the practice — they
had always had the practice, in every commons governing itself for centuries
before anyone wrote it down. The form preceded the content. The proof is older
than the word for it."
Sources: G-PR-027 ("Not argument — evidence"; "We show you what works before we
explain why"); G-11-031 ("The practice preceded the theory"); G-09-001 (workers
running the shift); G-10-041 ("They didn't need the theory. They had the
practice"; "always had the practice"; "centuries before anyone wrote a
manifesto"); G-11-003 ("The street became a commons before anyone had finished
debating whether it should be"); G-18-007 ("The form preceded the content");
close "The proof is older than the word for it" ← crystallization of G-13-009
("Credit is older than money. The sequence in the textbooks is backwards") +
G-EP-007. Critique: KEEP (register + pronoun clean; the close is a sound
crystallization, every component sourced). Open call: G-04-025's "has it worked"
beat left out for economy — include if Jason wants it.

### the-restaurant · staged · critique KEEP
Invocation: "We opened a restaurant, and what we were trying to build was a
commons — a place where people could just be, and be welcomed. Not the room. The
stable distribution of responsibility across staff and regulars and growers,
across years. I was trying to offer a commons to someone who had been produced
for an enclosure; the contract is a boundary that produces the relationship it
describes. The hard version feels like pitching a tent in a downpour: it has to
be done, you know you can do it, and you build everything also as cover from what
is coming down on top of you. The downpour is still happening. We packed up and
moved on — the canopy came down, and the work was the people who learned to do
the work under the canopy and who are now somewhere else, doing some version of
it. The seeds are the meals that worked and the people they passed through."
Sources: G-04-023, G-03-033, G-GC-018, G-10-032, G-WW-021, G-WW-023, G-AB-054
(all verbatim/faithful, all voice/jason — Jason's own lived through-line).
Critique: KEEP (pronoun choreography exemplary — "We opened/packed up" audible
We; "I was trying to offer" isolating individual act, preserved per contract). No
invented restaurant details.

### norfolk · staged · critique KEEP
Invocation: "The book started there: a crossing built on top of a community
demolished to build it. Some days it costs too much to cross. The wreckage is not
metaphor; it is geological — the kitchen floors of the houses they took, eight
feet under the sole. This is the other enclosure: not taking what exists but
preventing what could, the box the code never held. And still the corner store
that was on no plan. Still the garden in the right-of-way. What we were trying to
build there was a commons — the route around the door, in the one city the body
knows by walking."
Sources: G-14-002, G-01-003, G-AB-053, G-08-007, G-04-023; "the route around the
door" ← wizard-lexicon (Magic); close "the one city the body knows by walking" ←
crystallization of G-01-003 ("The body knows how to walk"). Critique: KEEP. Open
call: this is the live bridge to Ghent Streets + Mithlond (both Norfolk/Hampton
Roads) — no applied-project gesture exists in the river, so the bridge stays
implicit; add an explicit pointer to the description if Jason wants it.

### the-lineage · staged · critique REVISE→applied
Invocation (final): "He did not invent the form. He recovered it. The tradition
was ongoing, cumulative — across generations, the lineage held, each reading
taken up by the next. Not a lineage — an architecture: the same insight, arrived
at independently, by different people, because the conditions required it. The
thread has never broken. The dead held what the living kept rediscovering —
wherever a commons survives, the dead are keeping the door. And the practice that
survives is the one carried forward by the people who carry it without knowing
they are carrying it forward."
Sources: G-04-007 ("He didn't invent the cooperative form. He recovered the
etxe"); G-06-023 ("ongoing, cumulative"; "the lineage held — each… reading taken
up by the next"); G-11-037 ("Not a lineage — an architecture"; "the same insight,
arrived at independently…"; "the dead held what the living kept rediscovering";
"wherever a commons survives, the dead are keeping the door"); G-09-036 ("The
thread has never broken"); G-EP-014 ("carry it forward without knowing they are
carrying it forward"). Critique: REVISE — "Not a lineage but" collided with the
thread's own title; restored G-11-037's em-dash ("Not a lineage —") so it reads
as deepening not contradiction; cut the redundant second thread-image down to
G-09-036's "The thread has never broken." Applied.

### the-outside · staged · critique KEEP
Invocation: "The outside is not a place on the map. It is a relation of power —
the margin made by excluding, terrain the machine can draw value from without
full payment. Look at any system; find where the math doesn't close. There you
will find one. It is not the excess of the system. It is the mechanism,
maintained — and when the geography runs out, the machine marks new ones: debt,
attention, the care that was never paid for. The outside is wherever the
accounting stops. Not everything beyond the accounting is the outside; some
things cannot be enclosed at all. So enter the territory you were trained to read
as empty."
Sources: G-GC-024 ("Not a place on the map — a relation of power"; "terrain it
can draw value from without full payment"; "not the excess of the system. It is
the mechanism"); G-GC-026a ("the margin made by excluding"; "Not everything
beyond the accounting is the outside. Some things cannot be enclosed at all");
G-05-009 ("Look at any system. Find where the math doesn't close. There you will
find one"); G-05-029 ("maintained"); G-GC-025 ("the machine marks new ones. Debt.
Attention"; care "never paid for"); G-GC-026 ("The outside is wherever the
accounting stops"); G-WW-008 ("trained to read it as empty. The wizard enters
anyway"). Critique: KEEP. DISTINCT from the Enclosure thread (walks the frontier
logic, not the act); shares G-GC-026 as one intended true crossing node.

---

## PR #11 review resolutions (Jason, 2026-06-18)

Three open calls answered as inline PR review comments on this ledger:
- **the-enclosure-thread** (line ~894, "Yep! Let's do this."): RESTORE the audible
  "we" at the close. Applied: "The wall is also the thing that comes down." →
  "The wall is also the thing we learn to take down." The counter-spell turn is now
  explicit (master principle; Jason's call on the pronoun-timing).
- **proof-before-theory** (line ~1049, "Let's include this!"): INCLUDE G-04-025's
  "has it worked" beat. Applied: G-04-025 added to the walk (Chapter 4, between the
  Ch3 and Ch9 members; +1 section separator), and a sourced beat added to the
  invocation — "Has it worked? The answer is in the record." ← G-04-025 ("has it
  actually worked? … The answer is in the record. It works"). Per Jason directive.
- **norfolk** (line ~1083, "Let's leave these projects out for now!"): keep the
  Ghent Streets / Mithlond bridge IMPLICIT — no explicit pointer added to the
  description. No change (resolved as-is).

Still open (not commented): **the-averaging-machine** — G-01-032 ("the machine is
the argument") is `status/stashed`. Kept as-is pending Jason; faithful line, only
the source gesture's status is in question.

---

## Mircea Eliade placement (Jason directive, 2026-06-18) · profile + gesture + dramatis personae

Jason: "mircea eliade deserves a placement" → "thinker profile on the main site,
then distill into a gesture in the Becoming Wizards chapter and add to dramatis
personae, then bring back parallel to Plotkin." Connections AUTHORIZED by Jason
(sacred/profane ↔ enchantment/disenchantment; archaic techniques of ecstasy ↔
wizard/initiation; the sacred as terrain castable for commons or fascism).
Politics handling: "engage it head-on" (Jason's explicit call).

**Fact-check (this session):** WebSearch + WebFetch of en.wikipedia.org/wiki/Mircea_Eliade
+ search summary (New World Encyclopedia, LA Review of Books). Verified: 1907–1986;
Calcutta under Surendranath Dasgupta (Sanskrit/yoga, PhD 1933); École Pratique
des Hautes Études Paris post-1945; U Chicago History of Religions chair 1964;
editor of Macmillan's Encyclopedia of Religion; hierophany, sacred/profane,
eternal return (illud tempus), shamanism = "archaic techniques of ecstasy" /
initiatory death. POLITICS verified: pro-Iron Guard articles c.1937 (Sfarmă-Piatră,
Buna Vestire), "Christian revolution aimed at creating a new Romania," enrolled in
Totul pentru Țară; arrested 14 Jul 1938, refused declaration of dissociation,
released 12 Nov 1938; wartime cultural attaché; 1942 book praising Salazar's Estado
Novo; postwar silence; counter-facts also verified (1933 anti-Nazi-racism manifesto;
1936 deplored expulsion of Jewish scholars; 1934 objected to Ionescu's antisemitic
preface). Date-of-birth day disputed (Mar 9 vs 13) → used year only.

- **/eliade profile** (src/pages/eliade.astro): Tier 1 analytical copy, sourced to
  the fact-check above. 5 sections; §04 "The reckoning" engages the Iron Guard head-on;
  §05 frames the sacred as terrain (spell ⇄ counter-spell). NOT river prose.
- **G-IW-027c** (Becoming Wizards, wizard register): distillation of the profile.
  Sources: Eliade scholarship (profile §01/03); G-OA-010 ("the container every old
  initiation built… ours has forgotten how to hold"); G-14-020 (Plotkin, descent to
  soul) → the Plotkin parallel, Jason-authorized; verified political facts (profile §04);
  master principle (spell ⇄ counter-spell) + commons-as-multiply-entered.
  RIVER TOUCH (flagged for Jason): inserted after G-IW-027b, +1 paragraph separator;
  placement is his to move.
- **G-DP-020** (dramatis personae): biographical reference distilled from the profile;
  verified facts only; necromancy link to G-IW-027c. Appendix, not the canonical river.
- Plotkin parallel ("bring back parallel to Plotkin"): woven in the profile §03 callout
  and the G-IW-027c gesture — Eliade catalogued the initiatory container Plotkin
  practices. Faithful to G-OA-010 / G-14-020; no new Plotkin claim invented.
- Critique: fresh-context sub-agent (fact-fidelity + honest-politics + Gandalf register
  + provenance) — pending in this session.

---

## Shamanism scholars (Jason directive, 2026-06-18): Taussig, Ginzburg, Kopenawa

After the Eliade placement, Jason asked for non-fascist scholars of shamanism. I
recommended a fact-checked shortlist; Jason chose **Taussig, Ginzburg, Kopenawa**
(and agreed Harner = cautionary, not a source). Connections endorsed by Jason via
his selection on the stated rationales. Same workflow as Eliade: profile (main
site) + analytical-register gesture (river) + dramatis personae. Each gesture's
chapter placement flagged for Jason to move.

**Fact-check (this session, WebSearch + WebFetch of en.wikipedia.org):**
- Taussig: b.1940 Sydney; Columbia anthropology; *The Devil and Commodity
  Fetishism* (1980), *Shamanism, Colonialism, and the Wild Man: A Study in Terror
  and Healing* (1987), *Mimesis and Alterity* (1993), *The Magic of the State*
  (1997); Putumayo rubber terror; "culture of terror"/"space of death"; shaman
  José García (1970s); Marxist/Benjamin; "principal concern of anthropology
  should be to critique Western capitalist culture."
- Ginzburg: b.1939 Turin; founder of microhistory; *The Night Battles* (1966),
  *The Cheese and the Worms* (1976), *Ecstasies* (1989 It, 1991 Eng); the
  benandanti (Friuli, harvest-protectors reframed as witches); father Leone
  Ginzburg (anti-fascist, Einaudi) murdered by the Gestapo 1944; mother Natalia
  Ginzburg.
- Kopenawa: Yanomami shaman, b. c.1956 Rio Toototobi; *The Falling Sky* w/ Bruce
  Albert (Fr 2010, Eng 2013 Harvard UP); xapiri; Hutukara Yanomami Assoc. (2004);
  anti-garimpeiro campaign; Brazil recognized Yanomami land 1992; Right Livelihood
  2019.

**Artifacts (all distilled from the fact-checked profiles; no claim outside the
verified facts; no invented quotes):**
- Profiles: src/pages/taussig.astro, ginzburg.astro, kopenawa.astro (Tier 1).
- Gestures (analytical register + plain blocks): G-07-019a (The Colony, after the
  Fanon mirror G-07-019), G-15-008a (chapter-15, after the Federici witch-hunt
  G-15-008), G-14-029a (chapter-14, after the Global Witness killings G-14-029).
  RIVER TOUCHES flagged for Jason; separators inserted at the correct index via
  scripts/wire (per-manifest).
- Dramatis personae: G-DP-021 Taussig, G-DP-022 Ginzburg, G-DP-023 Kopenawa.
- thinkers.astro index: three entries added.
- Connections: Taussig = colonial extraction makes both terror and the "wild"
  image, the shaman turns it back (extends Fanon mirror); Ginzburg = the
  shamanic core (benandanti) under Federici's witch-hunt enclosure, the witch as
  enclosed knower; Kopenawa = the practitioner's own voice vs the Western scholar
  (answers the appropriation problem), the forest commons against extraction.
- Critique: fresh-context sub-agent (fact-fidelity + register + provenance) —
  pending this session.

### Critique resolution (Taussig/Ginzburg/Kopenawa, 2026-06-18): SHIP WITH REVISION → applied
- Fact-fidelity clean across all three (fresh-context critic). Fixes applied:
  - Taussig profile: cut "two names that have stayed with the field" (unsourced reception claim).
  - Ginzburg profile: STRIPPED the Eliade↔Ginzburg *scholarly* pairing (§03 callout + the
    "structure they studied is the same" line) — that thinker-to-thinker analytical connection
    was NOT on Jason's endorsed list. KEPT the endorsed Federici connection + the verified
    anti-fascist-lineage contrast (Leone Ginzburg, Gestapo 1944) — that political contrast was
    part of the rationale Jason selected Ginzburg on. **OPEN CALL for Jason:** want the deeper
    Eliade↔Ginzburg pairing (Ginzburg as the living instance of what Eliade catalogued)? Held back.
  - Kopenawa: softened the 1992 causal ("helped win/bring") → "following his international
    campaigning, Brazil recognized…" to track the verified source phrasing exactly. (3 surfaces.)
  - Plain blocks tightened to FK ≤6 (3.0 / 3.6 / 4.0).

### Eliade↔Ginzburg pairing — RESOLVED (Jason, 2026-06-18): "put it in!"
Restored to /ginzburg: the §03 callout (Ginzburg as the living instance of what Eliade catalogued) and the §05 two-faced/lineage close. Now Jason-endorsed.

---

## the-sacred-and-its-keepers  ·  Tier 0 (path) + Tier 1 (invocation)  ·  staged (2026-06-18)

Jason directive ("can you make a path/thread with all these?"). Gathers the four
shamanism placements into one walk. Connections all Jason-endorsed (the placements
+ this thread request).
- Path = ordering of existing gestures: G-IW-027c (Eliade) → G-15-008a (Ginzburg)
  → G-07-019a (Taussig) → G-14-029a (Kopenawa). Arc: frame + warning → historical/
  Inquisition enclosure → colonial enclosure + the turn-back → the living
  practitioner who speaks for himself (crests on agency, not grief).
- Composed (Tier 1): the invocation only — "The sacred is a terrain, and it can be
  cast either way…" Sources: G-IW-027c (the sacred is a terrain / cast for fascism /
  disenchanted world the strange one), G-15-008a (living core; renamed and overwrote),
  G-07-019a (the wild man manufactured, turned back, a power to heal), G-14-029a
  (his own words), + master principle (whose hand casts it).
- Critique (fresh-context, 2026-06-18): REVISE → applied. MANDATORY fix: "renamed
  and burned" → "renamed and overwrote" (the benandanti were not burned; not in the
  gesture). Softened "needs no scholar" → "is no one's subject… in his own words"
  (don't erase Bruce Albert's co-authorship; land on refusal-of-appropriation).
  Matched the Eliade clause to its gesture ("disenchanted world was the strange one").
  Ordering judged optimal. KEEP otherwise.
- Status: staged at /book/path/the-sacred-and-its-keepers. Not in nav, not in the river.

---

## G-01-030a (the-machine… ch1) · Enchantment-pass Move 3 · staged (PASS)
- Composed: one wizard-register bridge between G-01-030 and G-01-033 — the wizard
  turn that names the demon's nature and weakness (the counter-spell) without
  re-explaining the machine.
  "A machine like that has no driver to vote out, no villain to expose. It runs on
  a worn path, and on the belief that the path is the ground. But belief can be seen
  through — and what can be seen through can be undone. Name the path as a path, and
  it is a choice again: something someone made, that someone can unmake."
- Sources:
  - "no driver to vote out, no villain to expose" ← G-01-030 ("the people operating
    the system are not, mostly, malicious") + the ignored-vote scene (G-01-022/024)
    + G-01-033 ("Some assign blame").
  - "runs on a worn path / belief that the path is the ground" ← G-01-013 ("Common
    sense is the trail, not the decision"; "wear in like trails… the body follows
    automatically") + G-01-010 ("It feels like reality").
  - "belief can be seen through… name the path as a path… a choice again" ← G-01-012
    ("make the existing arrangement visible as an arrangement") + lexicon §Incantation
    (the counter-spell "names a thing so you see it coming, and the room changes") +
    lexicon §Grimoire (a demon = "a power with a nature, a weakness, a use").
- Critique (fresh-context craft critic, 2026-06-29): PASS on all 8 checks. Fills a
  real gap — the chapter's old "can be removed" beat (G-01-032) is status: stashed,
  so the made-thing/choice-again turn was absent at this seam; the insert also repairs
  the 030→033 join (cause→consequence). No pre-emption (pays off G-01-013's dropped
  trail image). No new claims/names/dates.
- Witness (fresh-context blind reader, 2026-06-29): the line landed as the reader's
  OWN realization ("the machine is just a worn path that someone could choose to
  unmake") and read as invitation, not conscription — principle C confirmed.
- Notes: witness bounced off two EXISTING beats (the "Gramsci called this common
  sense" citation as over-explaining; the brewery "went out of business" vindication
  note) — flagged to Jason, not edited in this commit.

---

## G-16-061 (even-that-part) · Enchantment Move 4 forward-ref gloss · shipped (PASS)
- Composed: a one-line gloss identifying Törbel, which the book names 3× but never
  introduces — "The Törbel community **— the Alpine commons Ostrom studied —** didn't
  write their governance charter in 1483…" (em-dash→colon at "resolved:" to avoid a
  dash pile-up).
- Sources: VERIFIED fact — Törbel is the Alpine village (Valais, Switzerland) whose
  1483 communal governance is the first case study in Ostrom's *Governing the Commons*
  (supersummary.com/governing-the-commons; houseofswitzerland.org). Ostrom is already
  established at the-cook (G-03-020 "Elinor Ostrom…") and nearby (G-18-035). The gloss
  also sets up the existing "before anyone had named the design principles" = Ostrom.
- Critique (fresh craft-critic, 2026-06-30): PASS — colon lands "five centuries" as a
  verdict; no redundancy; reads as thought, not a bolt-on gloss.
- Also tagged `place/torbel` + `person/ostrom` so the Tapestry/atlas sees it.

## G-AB-025 (angel-faces) · Rolling Jubilee gloss · TRIED → REVERTED
- Tried: appositive "the campaign that bought up strangers' debt and abolished it"
  (sourced to G-13-003) to pre-introduce the Rolling Jubilee (named pos 18, established
  pos 21).
- Critique (fresh craft-critic, 2026-06-30): **REVERT** — G-AB-025 is `beauty_check:
  passed` and a parallel triplet ("The arcade flashed up… The Rolling Jubilee flashed
  up… The chip flashed up…"); the uniform bareness IS the cadence ("the arcade" and
  "the chip" are also unglossed). The appositive makes the middle limb lopsided and
  over-explains in a gesture arguing for legibility-on-need. The forward-ref is mild
  (reader meets it in full 3 chapters later). Left bare; flagged to Jason.

## Move 5 · Part III roster de-wall (audience pass) · 2026-06-30 · 5 demotions
Driven by the full-book persona read-through (audience: not theory-literate). Rule:
"name + life + stakes carries; name + bare claim shuts out." Jason: aggressive,
protect nothing. All five are DELETIONS/DEMOTIONS of bare secondary names — the
claim/concept is preserved as plain prose; the fully-storied load-bearing thinkers
are untouched. No new claims. Connective recombinations noted below.
- **G-05-014 (The Smile):** dropped "Fanon traced it… Robinson named it… Mbembe
  extended it…" → "The same mechanism would later be traced in the colonized body,
  named racial capitalism, extended into necropolitics." Concepts kept; all three get
  full scenes in the very next chapter (The Colony). Connective = recombination of the
  three existing predicates.
- **G-06-023 (The Colony):** "So was CLR James, who… So was Claudia Jones, who…" →
  "So were the thinkers who read the Haitian Revolution as a class revolution…, who
  named the triple oppression…" Both claims preserved verbatim; only the two proper
  names removed. Du Bois kept (load-bearing). Fits the chapter's "lineage" motif
  (the tradition is larger than its famous names).
- **G-06-032 (The Colony):** "Julius Nyerere's *ujamaa*" → "the *ujamaa* program."
  Concrete example kept; head-of-state proper name dropped.
- **G-08-019a (No Name for It):** dropped "by Barbara Smith, Beverly Smith, and Demita
  Frazier" (three bare founder names → the collective). Removed `person/smith-barbara`
  tag. KEPT Harriet Tubman (recognizable storied eponym; the naming-lineage beat rhymes
  with the chapter's theme) — flagged to Jason as a deliberate hold vs. literal scope.
- **G-08-020 (No Name for It):** (a) "Mbembe was reading Davis, not only Foucault." →
  "Mbembe was reading Davis." (bare Foucault tag cut; Mbembe callback kept — it does
  real work). (b) "Ruth Wilson Gilmore's *Abolition Geography* (2022) traces…" → "There
  is a name for this: *abolition geography* — trace…" (concept kept; bare author/title
  drop demoted; Davis owns the abolition argument in-scene). Removed orphaned
  `person/foucault` + `year/2022` tags.
- Gate: craft-critic (fresh context) in flight; blind reader-witness to follow. Build
  green; tag-lint clean on all five (14 pre-existing errors are in untouched files).

## Move 5 · Foucault intro-order fix (audience pass, witness-driven) · 2026-06-30
Blind reader-witness (persona) flagged the single clearest shut-out across Part III:
The Colony's "The question Foucault couldn't ask…" asserts the biopower contrast
BEFORE biopower is explained (full gloss arrived later, G-07-028). Fix = relocate a
compact gloss to first-contact, de-dup the later one. LITERARY edition only — the
plain edition already glossed on contact ("Foucault described how power manages life.
But that kind of power sits on an older base.").
- **G-07-022 (rich body):** added at first contact — "Foucault had described how modern
  power rules less by killing than by managing life — regulating bodies, administering
  whole populations. What he never examined was the prior foundation that apparatus is
  built on." Source = recombined verbatim from G-07-028's existing gloss (relocation,
  no new claim).
- **G-07-028 (rich body):** trimmed the now-duplicate opening to a callback — "That
  apparatus — the management of life Foucault described, real and important as it was —
  he developed almost entirely through the European experience." Question-contrast and
  Necropolitics payoff (G-07-030) untouched.
- Gate: craft-critic in flight. Build green; render clean (gloss appears once).
- Residual witness flags (NOT fixed — routed to Jason): (1) African-polities catalog
  G-06-028 reads as "names as inventory," but the gesture deliberately avoids fabricated
  specifics — story-ifying needs verified detail or Jason's nod to trim/reframe; (2) The
  Smile G-05-014 concept-burst ("racial capitalism / necropolitics") still a mild wobble
  post-demotion, but concepts are cashed out next chapter — judged acceptable.

## Move 5 · African-polities reframe + Fix 2 micro-fix · 2026-06-30 (Jason-directed)
- **G-06-028 (African-polities catalog, The Colony):** witness skimmed it as "names as
  inventory." Jason: light reframe (no fabrication). Added a framing beat — "too many to
  name here, each governing itself in its own shape. A few, to show the range." — so the
  four polities read as a deliberate sample, not a quiz. No new historical claims (true
  statement that the examples are a partial set; the gesture's own notes say it names
  broad patterns without fabricating specifics). Both editions.
- **G-07-002 (the shrug, The Colony) — Fix 2 micro-fix:** witness flagged "When people say
  the foundation of America is child abuse, I know what they're talking about" as
  assuming a consensus the reader hasn't joined. Jason: micro-fix only (witness cleared
  the broader guilt risk). Reframed to Jason's own conclusion from what he witnessed —
  "I've seen the learning happen in real time — close enough to understand why someone
  would call the foundation of this country child abuse." Invitation, not presumed
  agreement. Both editions. No claim added; the assertion is now owned, not assumed.

## Move 5 · Fix 3 (jargon cash-out) · 2026-06-30 · ONE change (witness-driven)
Jargon-witness (cold persona, read even-that-part/the-hollow-book/reenchanting/
you-wonderful for the three terms) verdict: NOTHING goes fully cold. Every intro is
plain-glossed AND image-anchored (mycorrhizal forest / Stonewall / Neo / trans bodies);
callbacks mostly re-gloss. The charter's "stayed cold" premise was wrong — the prose
already does the work. Only one soft spot: a jargon pile-up.
- **G-16b-050 (the-hollow-book, rich body):** the Centaur sentence stacked "pre-individual
  field" + "the body deterritorializing from the organism the system prepared" with no
  fresh image — the document's densest jargon clause. Per witness's exact fix: drop the
  doubled French, keep the plain idea already beside it → "the body refusing the form the
  system prepared" (echoes the intro gloss G-16-026 "slipping the assignment"). Kept the
  single Simondon naming. Plain edition already jargon-free ("steps out of the shape the
  AI laid out") — no change needed there.
- **Left as-is (witness said LANDS, low priority):** G-RE-018 (reenchanting) Simondon
  gloss is the only abstract-not-imagistic one but carried by surrounding bird/perception
  material; warming it risks redundancy. "body without organs" sound stays slightly alien
  but is correctly scaffolded by 2 glosses + 3 images — leave it (flag: don't cut those
  images or it goes cold first).

## Move 5 · Fix 5 (naming shown, not told) · 2026-06-30 · G-IW-009a NEW
Becoming Wizards asserted naming as "the first move of any casting" but never SHOWED
it — the deer story proves the opposite (wordless body-knowing). Witness flagged it as
the chapter's one unearned claim. Jason supplied a true fieldwork scene (his words,
2026-06-30): friends who knew the term "old-growth forest" but had never stood in one,
hiked from logged forest into old growth; faces/breathing/pace change; they stop and
ask "why is this different? what am I feeling?"; only then the name — illumination
unmistakable, irreplaceable. Principle: "the naming only has power if the feeling is
present."
- **NEW gesture G-IW-009a** ("Before any of the naming"), inserted between G-IW-009
  (the felt argument is "different in kind") and G-IW-010 (the protection note), before
  the lexicon block. Source: Jason directive (lived material). SHOWS naming working +
  the precondition ("the name has no power without the feeling beneath it. The body
  first, then the word."). Manifest: gestures 29→30, separators 28→29 (added one
  paragraph in the deer-movement run; section break stays at 010→028).
- Gate: craft-critic PASS ("ship it" — provenance clean, shows-not-tells, cadence
  strong, seam improved both directions). Blind persona re-witness: "It earns it" —
  watched naming change people before being told it matters; lexicon gut-drop
  ("shoulders drop, oh in the gut") now reads as a callback to this scene.

## Move 5 · Fix 4 (trim Part VI case rhythm) · 2026-06-30 · 11 gestures retired (deletion-only)
By Part VI the reader has internalized the pattern (thinker → commons example → parallel)
and skims cases to reach the personal beats. Jason approved cutting the most-redundant
case per chapter (each restated an immediately adjacent case) + Henry George. Pure
deletions — no new prose. Cut gesture files remain on disk (no longer in chapter
manifests); roll-calls trimmed to match.
- **I Became the Land:** cut the Story County farmland-trust case (G-14-011, G-14-012 —
  repeats Champlain's housing-trust move in agriculture); cut the Henry George / LVT block
  (G-14-023, G-14-024, G-14-025 — tax digression after the emotional peak; its CLT-callback
  already earned by Champlain). Roll-call G-14-036: dropped "The Story County farmland."
  Seams: Champlain→"What the economist… cannot quite say" (clean); Graeber "It was
  kinship"→Indigenous "22 percent" (stronger after cut). Sections 6→4 (collapsed brackets).
- **Still Meeting:** cut Carlo Ginzburg / benandanti (G-15-008a — restated Federici's
  rename-folk-knowledge point). Seam: Federici "Divination…"→"Not a centralized
  conspiracy…" (clean); "enclosed knower" survives in "women who hold knowledge that
  makes communities self-sufficient."
- **The Owl:** cut Christopher Alexander / A Pattern Language (G-17-045, G-17-046,
  G-17-047 — the abstraction of the Jacobs case that already landed). Roll-call G-17-049:
  dropped "the pattern language" (6→5 items, all now concrete practices). Seam:
  Jacobs/Moses→"The community reconstitutes itself" thesis (stronger after cut).
- Gate: craft-critic all four seams PASS; two arguably stronger; no load-bearing loss;
  no dangling references (book-wide grep clean); build green; tag-lint no new errors.

## Move 5 · Still Meeting lived beat · 2026-06-30 · G-15-028a NEW
Still Meeting was the only Part VI chapter with no first-person beat (the reader skims
cases toward the lived payoff; this one gave none — witnessed as "flattest"). Jason
supplied a true scene (his words, 2026-06-30): the Wednesday potluck before the restaurant
— contribution by capacity (a dish, or watching kids / washing dishes), surplus (days of
leftovers) cheaper than the market, the seed of the restaurant ("we should start a
restaurant — little did we know") — then the corruption-of-the-commons demon, lived: the
guest who came to extract (a handle of liquor, pitching his real estate brokerage) instead
of contribute, and "the magic was gone."
- **NEW gesture G-15-028a** ("Before we ran the restaurant"), placed between G-15-028 (the
  commons "makes it visible — communities that intend to sustain themselves") and G-15-029
  ("It only works if people care about each other. That is not a weakness. That is the
  point."). Section break before, paragraph into 029 — so the potluck's life-and-death is
  the lived proof the close reflects on. Manifest 22→23 gestures, 21→22 separators.
  Source: Jason directive (lived material).
- Gate: craft-critic PASS (provenance clean; shows both the commons and its enclosure with
  zero gloss; the 028→scene→029 seam "the single biggest gain — 029 now has a corpse to
  point at"). Blind witness PASS ("the one beat with a pulse… gives the chapter the lived
  landing it was missing… earns the closing line that would otherwise be pure uplift").
- Two spots both gates lightly flagged but said to KEEP (Jason's authentic details): "Little
  did we know" (faint wink) and the real-estate-broker as the one who kills the commons
  ("reads as remembered, not constructed — which is what saves it"). Left as-is.

## Move 5 · Tubman tracker-spine weave · 2026-06-30 · G-08-019a (expand)
Jason directive: "make the line as hard as possible — she's a legend in a social-justice
way but ALSO a raw-skills way," so the Combahee Collective's eponym pays off the book's
tracker-as-wizard spine doubly. Expanded the bare "named for Harriet Tubman's Combahee
River raid of 1863" clause into a hard biographical beat (the raid she planned and led,
the Underground Railroad decade, the scout network, the river mines), landing on
"This is the tracker, in the flesh — the craft turned against the men who thought they
owned the ground." Backward callback safe (terrain/tracker frame set in Becoming Wizards,
Part II, before this Part III chapter). Added person/tubman, motif/the-tracker, year/1863.
- FACTS verified via WebSearch (NMAAHC, NPS, History.com, Zinn, Army.mil): planned/guided
  the raid ✅; "first woman ... to plan and lead an armed raid" (corrected from drafted
  "armed assault," which over-narrowed the sourced "plan and lead a military raid/operation"
  framing) ✅; 700+ freed in a single overnight river operation ✅; Underground Railroad
  decade, "never lost a passenger" (her own 1896 claim) ✅; ran a scout/spy network whose
  intel mapped the Confederate river torpedoes ✅.
- Gate: fact-check craft-critic — all claims ✅ except the one "armed assault" fix (applied).
  Blind witness PASS — "wins by specificity instead of worship; 'never lost one' and 'mapped
  the Confederate mines' reframed her as an operator, not a saint; both legends fuse in
  'moved unseen and brought the unseen out behind her.'" Witness REVISE on the meta line:
  "the whole book has been describing" announced a click the reader had already made →
  trimmed to "This is the tracker, in the flesh —" (lands harder; trusts the reader).

## Move 6 · Batch A — destination re-point (meeting → wild nature) · 2026-06-30
Jason's directive: "the book ends up where every wizard does, eventually: face to face with
wild nature, receiving wisdom"; "earth flowers" RETIRED ("the Earth flowers wherever She can").
The book already enacted the wild-nature close (Doves epilogue); moved the STATED destination
off the meeting onto it.
- **G-PR-031 (intro promise):** "…a room at seven-fifteen… That's where the earth flowers." →
  "…it ends the way the wizard's road always ends: face to face with the living world. On the
  ground beside the doves. The herons back in the willow oaks, who know things about this place
  we are still learning to understand." Dropped motif/flowering tag, added image/night-herons +
  image/the-doves. Imagery recombined from G-EP-001/011 + prologue herons.
- **G-18-040 (Ch-18 meeting):** "This is where the earth flowers." → "This too is the work. You
  tend the ground here, and the earth flowers wherever she can." (demoted to one ordinary site;
  "earth flowers" survives only in its distributed form, per Jason).
- **G-EP-015a (NEW, epilogue):** the stated destination, between G-EP-015 ("For now, that's
  enough.") and the final triad. Final wording after gate: "The wizard's road ends here, the way
  it always does — on the ground, the body finally quiet enough that the wild comes close. Face
  to face with the life that was here first, that knows what we are still learning to understand."
- Gate: craft-critic PASS on Edits 1 & 2; REVISE on Edit 3 (the grand "This is where the wizard's
  road was always going" over-declared on the humble "For now, that's enough" — took critic's
  Option B: quiet recognition "ends here, the way it always does"). Blind witness PASS ("ends
  exactly where the prologue promised, image for image"; meeting reads as ordinary work; "Come
  find us" lands as the wound closing) + flagged the trailing over-explain ("that has been trying
  to tell us the whole time") → cut. Both gate fixes applied.

## Move 6 · epilogue callbacks (reward attention) · 2026-06-30
Jason: the epilogue should pay back recurring threads for attentive readers. Three woven:
- **Meadow (G-EP-004):** the kinglet's meadow named as the SAME one from Ch 1 (G-01-017,
  "I gave them hell"). "It's the meadow I gave the parks department hell over two years ago —
  their plan called for mowing it, and they haven't cut it since." So "The meadow hasn't been
  cut" (close) pays off the Ch-1 fight. Critic REVISE applied: cut the middle clause that
  re-litigated the Ch-1 argument ("plan built to quiet complaints, not to serve the land") —
  reward, don't re-explain. Witness: "I felt caught up with… 'The meadow hasn't been cut'
  wrecked me a bit."
- **Cook (G-EP-007, faith list):** "Faith in the cocinero in Ilocos, feeding his community
  while they rebuild what the storm took, the way someone has in that village for centuries —
  there will always be Filipinos out there feeding people." Source: G-03-043/006 (the zanjera
  cocinero; the Filipino cook in Norfolk = Jason) + Jason directive. Witness caught both levels
  (the cocinero AND Jason, who closed the restaurant). List holds at 4 (graded, not parallel —
  ceiling; don't add a 5th).
- **Young man (NEW G-EP-006a):** the Goetia young man ("waiting for the clipboard I would not
  lift," "produced for an enclosure," G-GC-016/018) returns after G-EP-006 ("rooms where things
  don't bend") — "that room did not bend." Jason directive: "this work is even for the ones
  still waiting for that clipboard… I'll lure them into the woods if I can." Grief→hope; ties
  the failed offer to the re-pointed wild-nature close ("the woods make the offer I never
  could"). Critic: "the standout"; witness: "deepens the close rather than darkening it… the
  truest version of hope this book could offer." Companion to Batch-B Goetia setup + WW echo.
- Witness pre-existing nits (NOT these beats, flagged to Jason): the herons-and-doves-and-deer
  roll-call (G-EP-011) at its over-naming ceiling; "this book is trying to be an awareness
  practice" (G-EP-009) explains itself. Left for Jason.

## Move 6 · medicine scenes (Jason's wilderness intensive) · 2026-06-30 · G-OA-007a, G-OA-007d
Jason wrote two true scenes (StackEdit), Claude tightened to P-OA register + placed each to
concretize the abstract beat before it. Both voice/jason lived testimony.
- **G-OA-007a (bear hug, M2 "armor comes off"):** after G-OA-007 ("safe enough to set the
  holding down"). The stoic man's crossed arms → hands in pockets, chin up, grin; weeks later
  "the first time anyone had hugged him in years… he had forgotten he could"; "happening to
  all of us… which is exactly why I almost missed it landing on him." Shows what 007 states;
  the crossed-arms-over-the-chest rhymes forward to 007c "The chest has been held."
- **G-OA-007d (metal songs, M1 bullseye "they sang me toward my gift"):** after G-OA-007b
  ("you have to sing them there / what is your medicine?"). The metalhead unsure his songs are
  welcome; acoustic Electric Wizard / Windhand / Bathory; Bathory's "Mother Earth, Father
  Thunder" as a sing-along; the weird NEEDED not tolerated — "Not the songs. Us, collectively
  making a home for them… welcoming the grief and the agony by singing it together, turning it
  into something like strength." The protect-the-weird differentiator in the flesh.
- Facts WebSearch-verified: "Mother Earth, Father Thunder" = Bathory (Nordland I, 2002); bands
  real; no album named (no attribution risk). Electric Wizard / wizard-book resonance left
  unglossed by design.
- Gate: craft-critic PASS/PASS (provenance clean; show-not-tell; placement "deepens rather than
  deflates"). Blind witness PASS — "the only place the community becomes a place instead of a
  thesis… where I'd actually want to be." One flag (Jason's call): "Until they did." reads
  slightly buttony to the cold reader (his own phrasing — kept). Meta-validation: witness found
  the surrounding abstract "quality of regard / what is your medicine" connective tissue
  retreat-brochure-y and the CONCRETE scenes the gold — i.e., more lived scenes like these is
  exactly the right move.

## Move 6 · medicine scene M3 ("what a medicine actually is") · 2026-06-30 · G-OA-007e
Jason wrote the reflection that answers the chapter's own question ("what is your medicine?",
G-OA-007b) with his own; Claude tightened to P-OA register and placed it after G-OA-007d (the
metal songs, the community drawing his gift out) and before G-OA-007c (the turn to discipline).
voice/jason lived testimony. Source: Jason directive 2026-06-30 (his words, StackEdit).
- **The beat:** medicine is "a living thing; try to cage it and it starts to die," recognized
  "by its tracks" (activates the tracker spine, motif/the-tracker); singular, "stretches
  language," felt "the way you feel the presence of a wild animal in the brush." Then Jason
  names HIS — speech / storytelling, "words that carry aura" (Jason's phrase + the book's aura
  motif, G-AB-060) — WITH the honest shadow ("used it unconsciously, and often badly — talking
  over people… flooding a conversation… I still fight that; it is too easy for me"), which keeps
  it un-self-aggrandizing; framed passively ("It has been reflected back to me that mine…"),
  reporting others' mirror, not self-coronating. Lands on teaching children to hold their own
  councils and "the words to speak the council itself into being" — the power located in the
  FORM of the council (the collective listening), not in himself.
- Provenance: every detail traces to Jason's raw; no invention. Applied critic's one optional
  cadence trim ("a power I can only point at, not describe" → "a power I can only point at").
- Gate: craft-critic PASS (provenance clean; shadow load-bearing; tracker-tie real not
  decoration; seam lands — 007c "what holds it when the woods end" turns cleanly off the council
  peak). Blind witness PASS — tracks/wild-animal make the abstraction concrete; present-tense
  shadow + give-it-to-the-children council save it from self-regard. One standing flag (Jason's
  call, his own raw): "hypnotic, narcotic pull" still flirts with self-regard to the cold reader
  — kept because it's lived self-description and the shadow neutralizes it.

## Move 6 · Seam 3 · the medicine question turned on the reader · 2026-07-01 · G-WW-031a
NEW gesture at the book's close, between G-WW-031 ("you find us by becoming someone we recognize
on sight") and G-WW-032 ("Carry it as you walk. Whatever the *it* is for you…", which answers it).
Turns the woods-question (G-OA-007b "what is your medicine?") onto the reader — the confirmation-
reveal (you have a singular gift; we need it; the question was always yours) — and bookends the
Ch-3 opening spell (G-03-046a "The loneliness was the spell").
- **Provenance (recombination, no invention):** "everyone is singular / not a faction / it is
  everyone" = G-18-025 (Hardt/Negri, the multitude = composition of irreducible singularities);
  "a gift no average can hold" = G-08-009 / G-AB-007; both-ways recognition = G-RE-017 ("our
  singularities are the condition of the shared thing") + G-OA-007b; "none of us is free until
  all of us are free" = G-10-009 (Luxemburg/Wynter, singularity as the political condition of
  freedom); "The loneliness was the spell. Recognition is the counter-spell" = G-03-046a + the
  master spell→counter-spell move.
- **Jason's anti-cult fix (2026-07-01):** "we are everywhere" is true BECAUSE everyone is singular
  (not a faction) — the boundary a cult needs is dissolved. Witness cult-radar "flips at the word
  *because*". Jason's two calls: "stay alert"→"stay open" (de-sentry); dropped "todo para todos"
  ("it's not mine" — an EZLN slogan, not Jason's, arriving unattributed at the crescendo).
- **Gate:** blind-witness PASS (anti-cult framing holds; both-ways recognition "the load-bearing
  sentence… solidarity is the mechanism of self-acceptance"); craft-critic REVISE → reconciled
  (cut "and it runs both ways —" show-don't-tell; the two Jason-calls). Live seam verified: WW-032's
  "Carry it… whatever the *it* is" lands as the answer. Build green, 33 gestures / 32 separators.

## Move 6 · bird-language spine · B3 "absence reads" · 2026-07-01 · G-RE-011a
NEW gesture in Re-Enchanting, between G-RE-011 (the robin/owl confirmation — bird feeling points
to a hidden event) and G-RE-012 (the crescendo: "a network of attention that was always there…
about a place you cannot see"). B3 extends the reading craft from a hidden event to the standing
state of a whole place, and to its ABSENCES. Source: Jason directive 2026-07-01 (lived, his words).
voice/jason, kind/naturalist.
- **The beat:** presence/absence reads a place — no woodpeckers (residents cut dying trees) →
  no snags → no owls (old woodpecker holes) → no chickadees (rotting wood) → no sparrows (no
  shrubs); the whole web from one absence. The suburb "worn down to a loop" = the disenchanted/
  averaged world (rhymes G-08-009 / G-16b-034, the averaging machine's smoothed repetition); the
  forest = re-enchantment ("the absences become presences", Jason's landing). Feeds G-RE-012's
  "network of attention that was always there."
- **Provenance:** every move traces to Jason's raw; the ecological cascade is his naturalist
  knowledge — general natural history (owls in old woodpecker holes, chickadees in rotting wood,
  sparrows needing shrubs, woodpeckers needing snags), no named-person/date/figure risk. Tag
  image/songbirds joins the bird-language spine; motif/the-tracker (reading a place by its signs).
- **Gate:** craft-critic PASS (provenance/register/seam clean; "do not move after RE-012 — breaks the event→place→network escalation"; natural history sound, no VERIFY) + blind non-birder witness "it lands" ("I see my own too-quiet street differently… the eeriness is real and in my body"; confirmed it FEEDS RE-012, "the sensory proof the later line cashes in"). One convergent nit → trimmed Claude's added flourish "the whole place speaking at once" so Jason's quieter landing ("the absences become presences") stands. Build green, 35 gestures / 34 separators.

## Move 6 · bird-language spine · B1 "Part III reading cold-open" · 2026-07-01 · G-08-000a
NEW gesture as the COLD-OPEN of "No Name for It" (P-08, Part III), before G-08-001 with a section
break — breaks the book's longest bird-silence at the most abstract stretch. Source: Jason
directive 2026-07-01 (lived, his words — the Seattle crow). Reading craft: how the animals answer
you reads how the people there have treated them (VA crows hunted/wary vs. Seattle crows left in
peace/at play), landing on the singular encounter — a crow holding his gaze, a braced part
letting go, the community's decency making it possible, "beyond imagining — until it actually
happens."
- **Placement link (Jason 2026-07-01):** "the absence of connection and openness to the singular
  renders the intersections inconceivable." The crow = openness to the singular made real; then
  G-08-001's framework "that decides which experiences count and which fall through" is the
  inverse, and the GM/Crenshaw case is the intersection that "fell through the gap between the
  legally recognized categories." Bridge carried by juxtaposition + Jason's landing, not stated
  (show, don't tell). GM narrative (G-08-001→002→003→004) intact below the cold-open.
- **Provenance:** Jason's raw; general natural history (crows-as-pests / Seattle habituation), no
  named-date-figure risk. Tag image/songbirds joins the bird-language spine; motif/the-tracker
  (reading a place by its signs); motif/the-singular (Jason's link). Build green, 23/22.

## Move 6 · C1 · debt-shame given a body (the restaurant refinance) · 2026-07-01 · G-13-038a
NEW gesture in "We're Canceling It" (P-13), between G-13-038 (the confession: "I cannot deprogram
debt calculation… the hardest thing to actually feel in your body as true") and G-13-039 ("the
credit commons is already running"). Source: Jason directive 2026-07-01 (lived — the restaurant
refinance saga). Jason submits to his own diagnosis: named the spell, still carries it. The
body-beat — banks rejecting like "tearing off a piece of myself," hair going gray in the photos,
two years of begging, the father who co-signed then quietly lent the whole amount, the shame that
"lives in my shoulders: a stoop, a bowed posture" — CARRIES debt-shame rather than re-explaining
it (037/038 do the analysis). Ties to the shrug/stoop motif (the body accepting the weight) and
inscription ("my body carries the mark of capital"). Provenance: Jason's lived experience; no
amounts/banks/dates beyond "two years" and "just after the pandemic"; no verification risk.
Enclosers = the banks (They); no guilt-"we". Build green, 32/31.

## Move 6 · bird-language spine · B2 "pay off G-IW-012" · 2026-07-01 · G-IW-012a
NEW gesture in "Becoming Wizards in the Woods" (P-IW), between G-IW-012 (the READING faculty: "the
birds… commenting on our collective energy… what human beings are built to do. We've just been
trained out of it.") and G-IW-013 (NAMING: "the moment when someone notices something they haven't
noticed before and gets curious"). Source: Jason directive 2026-07-01 (lived — the summer-camp
group sit). SHOWS the reading skill in the field: a body/mind gone calm reads to a bird as safe, so
the chickadees close in and decide the group is "safe, or weird and interesting" (a quiet rhyme
with the protect-the-weird thesis); the kids' NOTICING then feeds directly into G-IW-013's naming.
Plants the skill before Re-Enchanting (return-and-deepen). Provenance: Jason's lived; bird
comfort-distance + chickadee boldness are general natural history, no risk. Tag image/songbirds
joins the spine. Build green, 31/30.
