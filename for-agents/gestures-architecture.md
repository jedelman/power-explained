# Gesture Architecture

The book is a graph of plateaus. A plateau is a graph of gestures. A gesture is the smallest authored unit.

## Definition

> **A gesture is the smallest unit that is (a) authorially indivisible within its native plateau, AND (b) liftable into another manifest without dragging non-gesture context with it.**

Two tests, both must pass:

- **(a) Indivisibility.** A gesture is one act of intent. The Lumumba death sequence — call complaining of tightness in his chest, drove him to St. Dominic, the transfusion, lost consciousness, the coroner refused the autopsy, the cause has never been settled — is one continuous arc. Splitting it kills it. The author's hand never lifted from the page; the file should reflect that.
- **(b) Liftability.** Rukia at the memorial is its own gesture, even though it sits inside the Cooperation Jackson section, because her witness is reusable in other manifests (a zine about Black women's organizing, a pitch about generational political work) without needing the death scene as preamble. If something can be cited or curated separately, it deserves its own file.

The two tests prevent the opposite failure modes: over-splitting (paragraph-shaped atomization that fragments continuous moves) and under-splitting (welding distinct portable objects into one un-liftable lump).

## What this gives us

- **Beauty check at unit-of-meaning.** Each gesture carries its own `beauty_check`.
- **Fact-checking surface.** `claims` live with the prose that makes them.
- **Swarm parallelism.** N instances can work on disjoint gestures with no merge conflicts.
- **Manifests as first-class objects.** A chapter is one manifest. A zine is another. A pitch is another. Print edition is a frozen manifest. The book is a graph of plateaus *and* a library of curations.
- **Voice and capacity queries.** `voice=coyote AND status=passed` returns the Coyote shadow-book. `capacities=BUILD AND kind=landing` returns the BUILD landings across the book.
- **Granular doors.** A door can land on `B-04-007`, not just `P-04`. The map is sharper.
- **Liftable B-sides.** A gesture removed from all manifests can live in `_outtakes/` — still queryable, still ID-stable, still resurfaceable.

## Schema

### Gesture file (`src/content/gestures/<P-NN>/<NNN>-<slug>.md`)

```yaml
---
id: G-04-007
plateau: P-04
title: "He Recovered Not Invented"  # authorial label; never rendered
slug: he-recovered-not-invented

tags:
  - plateau/P-04
  - voice/jason
  - kind/argument
  - kind/naming
  - capacity/read
  - capacity/name
  - status/draft
  - place/basque-country
  - person/arizmendiarrieta
  - concept/auzolan
  - concept/cooperative
  - concept/federation
  - zone/clearings
  - direction/s

beauty_check:
  passed: false
  notes: |
    What survived. What hasn't.

claims:
  - text: "Mondragón had 81 cooperatives and 70,085 workers in 2024"
    citation: "MCC Corporate Profile 2024"
    verified: 2026-05-19

references:                     # other gesture IDs this points at
  - G-04-001

neighbors:
  default_prev: G-04-006
  default_next: G-04-008

notes: |
  Internal scratch.
---

The prose. As long as the gesture needs to be. Single-line gestures
welcome. Multi-paragraph gestures welcome. Length is rhetorical, not
schematic.
```

Required: `id`, `plateau`, `title`, `slug`. Everything else optional at the schema level; the lint script enforces tag-ontology rules.

## Tag ontology

Classification lives in a flat `tags:` list using `<namespace>/<term>` format. The authoritative ontology is in `for-agents/tag-ontology.yml`, with cardinality and openness declared per namespace:

- `cardinality`: `exactly-one`, `one-or-more`, `zero-or-one`, `zero-or-more`
- `open: true`: terms can be added freely in gesture files; the linter warns but passes. Promote to the ontology in batches.
- `open: false` (default): only declared terms allowed; unknown terms are errors.

Namespaces in the current ontology: `plateau`, `voice`, `kind`, `capacity`, `status` (closed); `place`, `person`, `concept`, `year`, `zone`, `direction` (open).

**Why tags instead of structured fields:**

- A gesture can carry multiple voices, multiple kinds, multiple capacities without the schema needing to know which combinations are valid. The restaurant gesture is honestly `kind/turn` AND `kind/scene`.
- New dimensions of attention can be added without a schema migration. The `place/*` namespace was added with the ontology shift; future namespaces (`movement/*`? `tradition/*`?) cost only an ontology entry.
- The lint script's hybrid validation gives both safety (unknown namespaces error) and flexibility (unknown terms in open namespaces warn).

**What this costs (known):**

- New contributors learn the ontology convention rather than discovering field names. Mitigation: namespaced tags are self-documenting, the ontology file IS the documentation.
- Query syntax is uniform but slightly more verbose (`tags INCLUDES capacity/build` vs. the old `capacities INCLUDES BUILD`). Net win for extensibility.
- Schema-level validation of allowed values is now soft (lint-time, not parse-time). Mitigation: `npm run lint:tags` runs fast and can be wired into CI.

### Plateau file (`src/content/book/<chapter>.md`)

The plateau file keeps all existing frontmatter (map position, capacities, direction, territory, metaphor, nagual, doors, beauty_check) and adds:

```yaml
gestures:
  - G-04-001
  - G-04-002
  # ...
separators:
  - paragraph      # 001 -> 002
  - section        # 002 -> 003   (--- between gestures)
  # ...
```

`separators.length` is `gestures.length - 1`. Each is `paragraph` (blank line) or `section` (`---` between blank lines).

The plateau body can hold optional framing prose (rendered after the last gesture). Most plateau files will have empty bodies; the gestures carry everything.

## Compile contract

`scripts/compile-plateau.mjs`:

- `compile <slug>` — concatenate gesture bodies with declared separators, output the prose
- `verify <slug> <snapshot.md>` — assert byte-equivalence against a snapshot

**The byte-equivalence test is the architectural lock.** A refactor only commits when round-trip produces exactly what the author wrote. If a separator gets mis-typed or a gesture goes missing, the test fails loudly.

Page-time rendering in `src/pages/book/<chapter>.astro` reads the same manifest and reconstructs the body for HTML output. Same logic, two callers.

## Migration policy

- One plateau at a time. Migrate, byte-verify, commit, deploy.
- Existing chapter files (not yet refactored) continue rendering from inline body — the schema marks `gestures` as optional. Migration is incremental.
- Snapshots live in `for-agents/snapshots/<chapter>-pre-gestures.md`. Don't delete them. They are the lockstep proof.

## Manifests beyond the chapter (future work)

A chapter manifest is one curation. Other manifests will live at `src/content/manifests/*.manifest.yml`:

- `the-highway.manifest.yml` — the default linear book, in chapter order
- `build-only.manifest.yml` — every gesture with capacity BUILD
- `claude-pitch-cityhall.manifest.yml` — a curated 30-minute read for Norfolk Council
- `arizmendi-trail.manifest.yml` — gestures threading the Arizmendi argument across plateaus

Each compiles into its own renderable artifact. Not in pass one; named here so the schema doesn't drift away from supporting them.

## Open questions deferred to later passes

1. **Print edition snapshotting.** A printed book is a manifest plus a frozen gesture set. Lock by git tag at print time, or lock by emitting a `print-edition-vN.manifest.yml` that names gesture IDs and their content-hashes? Probably content-hash; protects against silent in-place edits to printed prose.
2. **Outtakes garbage collection.** A gesture in no manifest goes to `_outtakes/`. Policy on permanent deletion: never delete; tag with `archived: true` if explicitly retired. ID is permanent; the bytes are part of the record.
3. **Cross-plateau gesture loans.** A gesture's `plateau:` field declares its home, but a manifest can include any gesture. Do we tag "borrowed" gestures in some way? Probably not — manifests are explicit; the home plateau is meta. Re-evaluate if it gets confusing.
4. **Coyote and Nasruddin asides.** When they interject mid-plateau, they're their own gestures (`kind: aside`, `voice: coyote`). Queryable and removable. Chapter 4 has none — when they appear elsewhere, this is the form.

## Worked example

Chapter 4 (P-04, "Nobody Asked Him To") is the first plateau migrated. 25 gestures at `src/content/gestures/P-04/`. Pre-refactor snapshot at `for-agents/snapshots/chapter-4-pre-gestures.md`. Round-trip verified byte-equivalent (26,160 bytes).
