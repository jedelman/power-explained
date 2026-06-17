# The Tightening pass — instructions

**Set by Jason, 2026-06-17**, out of the kintsugi whole-river critic pass (the reader-critic's
"single most important next"). Distinct from Finish-the-Sentence: this pass removes *flab and
scaffolding*, it does not finish overclaims.

## The standard (from the project's own emotional-cadence doc)
The book's arguments hold and the close earns itself. The weakness is a **mid-book trough where
the FORM becomes legible** — the prose stops reading like thought and starts reading like a
syllabus. Target a 15–30% cut on the offending stretches **through tightening + scaffolding
removal alone** — no structural change, no argument lost, no facts/citations dropped.

## The three named offenders (critic, whole-river read 2026-06-17)
1. **Barcelona (ch 2) middle third** — "the single most lectured stretch in the book." The
   1978-Constitution / autonomous-communities institutional history runs in the AI-plateau
   cadence (steady 14–18-word declaratives, proof before the reader asks). Rescued late by the
   Naples contrast. Trim the institutional lecture; keep the salsa-in-the-street opening and the
   Naples turn.
2. **Thinker-CV scaffolding (≈ ch 7–11, racial capitalism → council communism)** — nearly every
   thinker enters on the same template: born-in / educated-at / fled-to → argument → death-coda.
   The death-codas (Luxemburg's canal, etc.) are individually powerful and **collectively
   numbing**; the reader braces rather than grieves by the fourth. FIX: vary the *entry* into
   each thinker (Reich's floor and Federici's "start with what they burned" already do this);
   cut ~⅓ of CV detail; **ration the death-beats** — they are more powerful spaced.
3. **Concept-density chapter (ch 8, Wynter/Crenshaw/Combahee/Lorde/Davis)** — theory stacked with
   too little body. Lead stays (the DeGraffenreid gap); thin the abstraction; let the
   shrug-in-the-meeting-room material carry more.

## Method (same gates as the rest of the kintsugi work)
- **Deletion + tightening only.** No new claims. Preserve every fact, name, date, citation, and
  Jason's first-person beats. beauty_check gestures: deletion-only, itemized in the commit.
- Vary sentence length (kill the 14–18-word plateau). Cut "Here's…" transitions, definition
  sentences, preemptive both-sides hedges.
- **Per-chapter:** propose cuts (before/after) → fresh-context critic (does it read as thought
  now? anything lost?) → apply survivors → build → commit per chapter. Jason reviews diffs.
- Chapter-level river order stays sacred. IDs retired, never reused.

## Render (Jason chose appendix + typeset PDF, 2026-06-17)
- **Typeset PDF + true page count — DONE.** Tools: `scripts/emit-river-chapters.mjs` (chapter-
  delimited text) → `scripts/render-book-pdf.py` (ReportLab, Liberation Serif 11/14.5, justified).
  **Body-only page count (no front/back matter, TOC, or part dividers): 5.5×8.5 = 303 pp;
  6×9 = 254 pp; 85,862 words, 28 chapters.** Finished trade pb ≈ +30–60 pp of apparatus.
  (ReportLab is a local Python tool, not a project JS dependency. Regenerate:
  `node scripts/emit-river-chapters.mjs && python3 scripts/render-book-pdf.py`.)
- **Thinkers' appendix / dramatis personae — NEXT.** The destination that lets the river shed
  the born/educated/fled CV costume entirely (extract bio detail → appendix; cut hard in-river).
  Per-chapter, Jason reviews diffs. Model on the existing path machinery (manifests/paths/).

## Status
- 2026-06-17: pass opened. Barcelona proof tranche shipped (G-02-029, G-02-036). Typeset-PDF
  render done (page count above). Next: thinkers' appendix build + the per-chapter bio surgery,
  pending Jason's read of the Barcelona proof + appendix model.
