# src/content/gestures/

Gesture files. One file per gesture. See `for-agents/gestures-architecture.md` for the full architecture.

## Layout

```
src/content/gestures/
  P-04/                    # plateau ID
    001-auzolan-etxe-lehen-auzoa.md
    002-1941-suppression-anos-del-hambre.md
    ...
    025-has-it-worked-the-wizard-can-see-it.md
  P-05/
    ...
```

## File naming

`<NNN>-<slug>.md` — `NNN` is the gesture's number within its home plateau (zero-padded to 3 digits, room to grow). `slug` is human-readable, kebab-case.

## ID stability

The gesture's `id` (e.g. `G-04-007`) is **permanent**. Never rename. The slug can change; the file location can change; the home plateau can change; the id never changes. This is what makes the door/reference graph stable across refactors.

## Round-trip discipline

Every plateau has a pre-refactor snapshot at `for-agents/snapshots/<chapter>-pre-gestures.md`. The compile step (`scripts/compile-plateau.mjs verify <chapter> <snapshot>`) must succeed byte-equivalently after any refactor that doesn't intentionally edit prose. If you edit a gesture's prose intentionally, update the snapshot in the same commit.

## Manifests

The default linear order of a plateau is declared in the plateau file's `gestures:` list. Other manifests (zines, pitches, capacity-filtered views) will live at `src/content/manifests/*.manifest.yml`.
