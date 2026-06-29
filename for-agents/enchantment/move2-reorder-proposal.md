# Move 2 — reorder so each method chapter OPENS its Part (APPLIED 2026-06-29)

**Status:** applied. The canonical `sources:` order in
`src/content/manifests/the-river.manifest.yml` is reordered; every relocation was
nodded by Jason via AskUserQuestion. `index.astro` was taught to let a wizard
initiation OPEN a Part (carry its own `part:`) instead of always inheriting the
previous chapter's Part. Build green; index + river both group into six clean Parts.

Final placements (last two confirmed by Jason): **Angel opens Part V**; **ch16 + ch16b
lead into Goetia** at the end of Part II ("the demons are simulacra"), so Goetia still
opens Part III.

## The principle (your deepening, 2026-06-29)

Principle A: each method (wizard) chapter moves to the **head** of a Part, where it
**frames** the movement first — so the analytical chapters that follow read as
*wisdom unearthed from those who walked here before*, not a lesson delivered.
Re-Enchanting **pulls forward** (the collapse): from there on the world reads
re-enchanted, and the chapters after it become inheritance, not grief. The end
cluster holds the Return and the confirmation-reveal.

## Your decisions (2026-06-29, AskUserQuestion)

- Re-Enchanting opens **Part IV** (the bigger collapse — re-enchanted register from IV on).
- **Goetia opens III; Orgone stays mid-III** (body-beat).
- Also **bring Even That Part (ch16) and The Hollow Book (ch16b) forward.**

These displace the Angel from Part IV and pull ch16/16b out of the Part VI tail.
Reconciled order below; the two placements they force are marked **TO CONFIRM**.

## Proposed order (relocations marked ▸; reconciled with your decisions)

```
   overture
   prologue
── Part I — The Feeling ──            (prologue frames it; no interior move)
   chapter-1
   chapter-2
── Part II — Learning to See ──
 ▸ becoming-wizards-in-the-woods      taken into the woods to learn to see — body knowing before mind
   chapter-3
   chapter-4
── Part III — Taking It Apart ──
 ▸ goetia (The Speaking of Names)     name the demons of the maintenance system — naming IS taking it apart
   chapter-5
   the-colony
   chapter-8
   orgone-accumulator                 body-beat inside the Part (your call: stays mid-III)
── Part IV — Learning from Those Who Walked Before ──
 ▸ reenchanting (PULLED FORWARD)      recovering legibility frames the buried tradition (Gramsci, Luxemburg, Kropotkin) as inheritance recovered, not loss — principle B
   chapter-9
   chapter-10
   chapter-11
── Part V — Seeing What You Missed ──
 ▸ angel-faces-backward  ★TO CONFIRM  the Angel sees the wreckage history made — "seeing what you missed"; rehomed here now that Re-Enchanting took IV
   chapter-12
 ▸ chapter-16  (Even That Part) ★TO CONFIRM   brought forward: even the captured part, seen
 ▸ chapter-16b (The Hollow Book) ★TO CONFIRM  brought forward: the singular is the one commons it cannot take (G-16b-039a)
── Part VI — When You Wake ──
 ▸ wizards-walk                       "Enter the Territory That Was Supposed to Be Empty" — waking, walking back to build
   chapter-13
   chapter-14
   chapter-15
   chapter-17
   chapter-18
   the-centaur-chapter (The Djinn)    closes — the confirmation-reveal
   epilogue (The Doves)               closes
```

## Relocations (each needs your nod)

| chapter | from | → to | status |
|---|---|---|---|
| becoming-wizards | II, pos 2 | head of II | nodded |
| goetia | end of II | head of III | nodded |
| reenchanting | VI (pos 21) | head of IV | nodded (the collapse) |
| wizards-walk | late VI | head of VI | nodded |
| angel-faces-backward | VI (after ch13) | head of V | ★ forced by RE→IV — confirm |
| chapter-16 (Even That Part) | VI | into V | ★ your "bring forward" — confirm slot |
| chapter-16b (The Hollow Book) | VI | into V | ★ your "bring forward" — confirm slot |

The Djinn and the Epilogue do not move — the reveal stays at the very end (principle C).

## On your nod

I apply the agreed relocations by editing `sources:` in the river manifest, re-cut any
Part-membership that changes, re-render, build, and commit — one commit per agreed
move so each is a clean reviewable diff. Then Move 3 (the weave) proceeds Part by Part
into the settled structure.
