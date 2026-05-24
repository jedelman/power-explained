# src/content/gestures/

Gesture files — flat layout. One file per gesture. See `for-agents/gestures-architecture.md` for the full architecture.

## Layout

```
src/content/gestures/
  G-04-001-<slug>.md
  G-04-002-<slug>.md
  ...
  G-RE-033a-<slug>.md
  G-16b-001-<slug>.md
```

All gestures live in this single directory. The plateau is metadata on the gesture (`plateau:` in frontmatter), not a storage location. This is the post-flatten layout; before 2026-05-24 gestures were grouped by `P-NN/` subdirectories.

## File naming

`<gesture-id>-<slug>.md` — `gesture-id` is `G-<plateau>-<NNN>[letter]` (zero-padded, room to grow; letter suffix for inserts between numbered gestures). `slug` is human-readable, kebab-case.

## ID stability

The gesture's `id` (e.g. `G-04-007`) is **permanent**. Never rename. The slug can change; the file location can change; the home plateau can change; the id never changes. This is what makes the door/reference graph stable across refactors.

## Round-trip discipline

Each plateau had a pre-refactor snapshot at `for-agents/snapshots/<chapter>-pre-gestures.md`. The whole-book river snapshot is at `for-agents/snapshots/the-river-pre-flatten.md`. The compile steps (`scripts/compile-plateau.mjs verify <chapter> <snapshot>` and `scripts/compose-river.mjs verify <snapshot>`) must succeed byte-equivalently after any refactor that doesn't intentionally edit prose. If you edit prose intentionally, regenerate the relevant snapshot in the same commit.

## Manifests

The default linear order of a plateau is declared in the plateau file's `gestures:` list (`src/content/book/<chapter-slug>.md`). The whole-book manifest is at `src/content/manifests/the-river.manifest.yml`. Other manifests (zines, pitches, capacity-filtered views) live at `src/content/manifests/*.manifest.yml`.
