# The Overture — BUILT 2026-05-26

Built as gestures `G-OV-001…005` + `src/content/book/overture.md` + route
`src/pages/book/overture.astro`; slotted first in `the-river.manifest.yml` and
the HIGHWAY. `P-OV` registered in the tag ontology. This file is the record of
how it was made.

A short wizard-register invocation that opens the book **before the prologue**.
Decided during the sequencing pass: the title *How to Become a Wizard and Save
the World* withheld the wizard frame for ~30 pages (first body use of "wizard"
was G-04-025). The overture front-loads the register so the analytical chapters
read as the disenchanted world the wizard learns to see and name.

Composed from existing wizard prose — **not invented**:
- beat 1 figure ← G-WW-002 (opening, pitched forward as promise)
- beat 2 the knowing / the witch / enclosure ← G-RE-001, and the market's
  hegemonic-access role per Jason
- beat 3 disenchantment + Simondon's enclosed self + hegemony ← G-RE-004
- beat 4 naming / the grimoire ← G-GC-001/002
- beat 5 re-enchantment + initiation + hand-off ← G-RE-005

Bookend: beat 1 states "a wizard is…" as a promise; **G-WW-002** (Wizard's Walk,
near the end) restates it as fulfillment. The definition shows up again — the
form enacts the content.

## Current draft

A wizard is someone who has walked the terrain long enough to know it the moment it rises again. To feel its weather turn before the sky does. And, knowing it, to reach for a way to be useful. That is the whole job description. Not the robe, not the tower, not a knowledge held above the room like a lamp no one may carry. A wizard's knowing stays low, in the hands.

The terrain is the world itself, thick with a knowing no single head can hold. It lives between us — between people who care for each other, between a person and a place. The witch knew what the market could not sell: plants, illness, birth, grief. Such knowing passed between people who kept each other, priced by no one, owned by no one. The market could not buy it. So it did what it does: it stood in the doorway, until what people once reached through each other could be reached only through a price — and what would not pass through the door, it burned. That is enclosure: not the theft of a thing, but the capture of the way to it.

The disenchantment of the world is the enclosure of that knowing — and of you, fenced like a commons into a single self that believes it stands alone. You were born able to see; the blindness came later, an incantation repeated until you mistook it for your nature. They call the spell common sense. But the angle on the world that is yours alone — the one thing the averaging could never reach — you were trained to feel as a defect. It is your magic.

Getting it back begins with naming. Name a thing truly and you can see it coming; you can say *that is what this is*, and the room changes. That is the counter-spell. After it comes the slower work — to read the terrain you're in, to build rooms others can stand in, to hold what most bodies flinch from. The old grimoires were working lists of what acts on you, drawn so you could act back. This book is one too.

The re-enchantment of the world is its recovery — the connections were always there; the work is to feel them again, the way feeling comes back into a hand that has gone numb. It is not a thing you study but an initiation, and an initiation has no graduation — it only changes what you can bear to look at. It will not feel like magic at first. It will feel like a bill that you refuse to pay — because it is.

## Open calls (Jason)

- **`<NEW>` connective lines** still need his blessing (centaur protocol — wizard-present
  first-person is his): *"You were born able to see. The blindness came later…"*;
  *"This book is one too."*; the beat-5 hand-off (*"It will not feel like magic at
  first. It will feel like the rent. Look up."*).
- **Knead "magic"** — now the lexicon's keystone (#3: the transformative capacity of
  singularities acting on each other). Beat 2 is already a magic-scene (singularities
  acting on each other); beat 5's "it will not feel like magic at first" now resonates
  with the defined term (the rent IS the average that killed the magic). Decide whether
  to name magic in earnest in the overture or let it bloom in the chapters.
- **The gift / the secret ways** kneads were proposed for beats 3–4 then held for
  saturation; revisit now that they're unified under *magic*.
- **Title** for the overture; confirm it sits before the prologue and hands into "Look Up."

## Build plan (when text is final)

1. Gesture files `G-OV-001..00N` in `src/content/gestures/` (one per beat), wizard voice tags.
2. Chapter manifest `src/content/book/overture.md` (gestures + separators).
3. Insert `overture` as the FIRST source in `src/content/manifests/the-river.manifest.yml`.
4. Astro route in `src/pages/book/`.
