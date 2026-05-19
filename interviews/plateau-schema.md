# Plateau Schema

*Build-side documentation. Not for readers. This file describes the YAML*
*frontmatter contract that every chapter file uses to participate in the*
*plateau network.*

## What this is

The book is a non-linear plateau network. Each chapter file (in
`src/content/book/`) is a plateau. Plateau metadata lives in YAML
frontmatter at the top of each chapter file. The Astro build step
loads all frontmatter into a registry and uses it to render doors,
generate the map, and produce the `descent.md` dashboard.

Single source of truth: the chapter file's frontmatter. Never edit
`descent.md` directly — it's auto-generated.

## The full schema

Below is the schema with field-by-field commentary. Existing fields
(`slug`, `title`, `description`, `h1`, `part`) are kept; new plateau
fields are added.

```yaml
---
# === existing fields (kept for backwards compat with current renderer) ===
slug: chapter-4
title: "Chapter 4: Nobody Asked Him To"
description: "..."
h1: "Nobody Asked Him To"
part: "Part II: The Proof"

# === plateau identity ===
plateau:
  id: P-04                       # stable identifier, used in doors
  status: draft | beauty-pending | offered
                                 # draft = prose exists, plateau fields not finalized
                                 # beauty-pending = plateau fields done, prose not yet an offering
                                 # offered = the beauty pass has been done; this plateau is an offering

# === position on the map of Left ecological consciousness ===
map:
  zone: cleared_land             # one of the named zones (see below)
  position: [42, 18]             # x,y coordinates for the visible map artifact
  visible_from: [P-03, P-14]     # other plateaus you can see from this one
                                 # (lines of sight — informs door choices)

# === what region of the descent this plateau builds in the reader ===
capacities:
  primary: BUILD                 # one of: NAME, READ, BUILD, HOLD, ENTER, CONTINUE
  secondary: [NAME, READ]        # additional capacities this plateau touches

# === the territory anchor ===
# Every plateau corresponds to an actual feature on the territory of
# Left ecological consciousness. Name it. Cite the field notes that
# establish it. If a plateau cannot be anchored to a real feature, it is
# not yet a plateau.
territory:
  feature: |
    Short prose statement of what this plateau is, on the real territory.
    Not what the book argues — what the territory itself contains here.
  field_notes:
    - Author or work that establishes this feature's existence
    - Another such source
    # 2-4 entries usually sufficient.

# === the commentary's chosen metaphor ===
# The book is commentarial. Metaphors may be chosen — but they must be
# defended. The defense is itself part of the offering.
metaphor:
  choice: |
    The metaphor this plateau uses. Could be the chapter title's image,
    a guiding figure, a key phrase. Brief.
  defense: |
    Why this metaphor is the right commentary on this feature of the
    territory. Honest. Eloquent. The defense is itself the offering's
    first eloquence.

# === the nagual angle ===
# The plateau approaches the reader from the direction their seeing has
# run out. Track the shadow they cast; appear where they aren't looking.
nagual:
  blind_spot_at_entry: |
    Where the reader's seeing currently runs out, arriving here.
    What they are most likely to be unable to see at the moment of
    encountering this plateau. The shadow they will cast.
  angle_of_approach: |
    The direction from which the plateau approaches that blind spot.
    Not what the plateau argues, but how it appears.

# === doors out ===
# Plain pointing. Each door is a real visible-from connection — you can
# only put a door to a plateau that is in your `visible_from` list.
# Door prompts are plain. The wizard speaks plainly.
doors:
  - to: P-14
    prompt: To see what this looks like at scale
  - to: P-OA
    prompt: To see what this costs the builder
  - to: P-03
    prompt: If you doubt one priest generalizes — the 400-year-old version
  - to: P-05
    prompt: Highway forward — why the system tries to kill this

# === the offering check ===
# Read aloud. Did something get offered? The standard is felt, not measured.
# A plateau ships when, read aloud, it feels like something was given.
beauty_check:
  status: pending | passed
  notes: |
    Notes from the offering test. What's missing. What was given.

# === source dependencies ===
# Inbox files this plateau is blocked on; conversation references this
# plateau draws from.
sources:
  inbox: []                      # dyad inbox files this plateau needs
  conversations: []              # conversation memory files this plateau draws from

# === build notes ===
notes: |
  Free-form. What needs doing. What's been done. Where the seams are.
---
```

## The map zones

The map is a forest. The zones below are commentary — defended choices,
not features of the territory itself. Each zone has a defense, given here
once for the schema documentation; individual plateaus do not need to
re-defend the zone they live in, only their own metaphor choice.

- **outer_edge** — Where the reader enters from the dominant world.
  Plateaus here begin in conditions the reader already knows: the
  commute, the rent, the news, the screen. *Defended as outer edge
  because: the dominant world is where most readers' seeing is currently
  organized; these plateaus meet them there.*

- **clearings** — Places where the forest was cleared by struggle or
  refusal, and where things can be built. BUILD-rich. *Defended as
  clearings because: building requires open ground, and on the territory
  of Left ecological consciousness, open ground is always cleared from
  prior enclosure or made by deliberate refusal.*

- **high_ridges** — Places of long sight. READ-rich. Plateaus that pull
  back to historical or geographic perspective; the reader can see the
  pattern from here. *Defended as ridges because: reading the territory
  requires elevation; the long arc and the wide view come from places
  one has climbed to.*

- **old_growth** — Deep forest. HOLD- and ENTER-rich. Plateaus about
  what takes a long time, what cannot be rushed, what is in the body,
  what is in grief, what is in the dead and the unborn. *Defended as
  old growth because: most of it has been cut; what remains has been
  growing for a long time; the wizard knows where these stands are.*

- **the_river** — The biographical thread. Plateaus where the wizard's
  own life crosses the territory most visibly. Crossable in many places;
  follows its own course. *Defended as river because: the wizard's life
  is the medium through which the territory becomes legible to this
  reader; the river runs through the territory but is not the territory.*

- **the_wizard's_cottage** — Where the wizards (Jason and Erin) are
  currently camped. Visible from a few high ridges; reachable only on
  foot. *Defended as cottage because: wizards live in the territory;
  they are not abstractions; the reader who has walked far enough can
  visit.*

- **standing_stones** — Author markers. Where a particular field-noter
  set up camp long ago. Kropotkin's, Federici's, Robinson's, Fanon's,
  Benjamin's, etc. *Defended as standing stones because: these are
  ancient markers placed by previous walkers; they show where someone
  was, what they saw, what they wanted later walkers to know.*

## The capacities

These are the six axes along which any plateau can be located. A
plateau's `capacities.primary` is the one it most builds; `secondary`
lists others it touches.

- **NAME** — putting the wedge into language
- **READ** — learning to see what the wedge was pointing at, everywhere
- **BUILD** — the first attempts to act on what you can now see
- **HOLD** — the long middle; what it costs to keep seeing once you can't unsee
- **ENTER** — the deepening; descent into the body, perception, relational field
- **CONTINUE** — the recognition that there is no return; the practice of
  staying in the descent while functioning in ordinary life

The capacities are not a sequence. They are dimensions. Every reader
needs all six. The reader's path through the plateaus is, in part, the
order they build them — but the order is theirs, not the book's.

## The status lifecycle

- **draft** — Prose exists or is being written. Plateau metadata may be
  partially filled or absent. Existing chapter files start here.
- **beauty-pending** — Plateau metadata is complete. Prose exists. The
  beauty pass has not yet been done. The plateau is not yet an offering.
- **offered** — The beauty pass has been done. Read aloud, the plateau
  feels like an offering. It can ship.

## Adding doors

Doors should only point to plateaus listed in the source plateau's
`visible_from`. This enforces line-of-sight discipline — you can only
direct a reader somewhere they can actually see from where they are.
The build script validates this.

Door prompts use plain language. Conditional pointing:

- "To see X" — invitation to a related feature
- "If you want to see what this costs the builder" — invitation when
  the reader is at a particular interior state
- "Highway forward" — the default linear route's next step
- "If you are tired of theory" — invitation that names a state
- "Back to the river" — invitation to a biographical plateau

No flourish. No wizardly diction. Plain. The wizard does not perform
wizardness.

## Validation rules (enforced by build)

1. Every plateau has a unique `id`.
2. Every door's `to` exists in the registry.
3. Every door's `to` is in the source plateau's `visible_from`.
4. Every plateau has a non-empty `territory.feature`.
5. Every plateau in `status: offered` has all required fields populated
   and `beauty_check.status: passed`.
6. No plateau is unreachable from at least one other plateau (no orphans).
7. The highway (linear order) traverses every plateau exactly once.

## What this schema is NOT

- It is not visible to readers. None of these fields appear in the
  rendered book.
- It is not finished. The schema itself will evolve as we build.
  Schema changes go through git like everything else.
- It is not academic apparatus. The `territory.field_notes` exist for
  checkability, not citation in the rendered book. The book is a guide,
  not a bibliography.
- It is not a substitute for the prose. A perfectly-tagged plateau with
  thin prose is not an offering. The schema serves the prose, never
  replaces it.

---

*Schema v1, 2026-05-18. Will evolve. Track changes in git.*
