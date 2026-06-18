# Parallel River & Tapestry — two initiatives (started 2026-06-18)

Two parallel artifacts, neither of which alters the canonical river. The river
is sacred (same contract as the composition/alchemical passes): only Jason moves
chapter order or canonical prose.

1. **The Parallel River** — a plain-language edition of every gesture, written
   at a 5th-grade reading level. The Oprah edition. A faithful *translation*,
   never a separate argument.
2. **The Tapestry (thread swarm)** — weave every gesture into at least one
   thread, filling out the atlas, and read the weave as an X-ray of the book.

---

## 1 · The Parallel River (plain edition)

### Decisions (Jason, 2026-06-18)
- **Storage:** a `plain:` block in each gesture's own frontmatter (single source
  of truth, sits beside the prose it translates). Plus `plain_meta: { source,
  status }`.
- **Register:** *fully literal plain* — maximize readability / FK grade. Flatten
  the cadence and the pronoun choreography to whatever reads simplest. (This is
  the deliberate opposite of the Gandalf register, and that is fine: it is a
  parallel artifact, not an edit. The wizard register stays untouched in the
  river.)

### The provenance rule (non-negotiable, from CLAUDE.md)
Every `plain:` block is a **translation of one named source gesture** — its own
body. No invention, no new claims, no new examples. `plain_meta.source` records
the gesture ID. The meaning must already be on the page. Where the canonical
prose is metaphorical, translate the *meaning* plainly; do not over-explain past
what the gesture says.

### How it is built (no new dependencies)
- `src/lib/composePlainBody.mjs` — parallel composer. Reads the same chapter
  manifest (order + separators) but substitutes each gesture's `plain:` block.
  The byte-locked river composer (`composePlateauBody.mjs`) is never touched.
- `src/pages/book/plain/[chapter].astro` — staged route, `/book/plain/<chapter>`.
  NOT in main nav. Untranslated gestures render a visible "Not yet translated"
  marker (never a fabricated fill). Each translated unit carries a `<details>
  Original` for side-by-side review and an origin link to the river.
- `scripts/plain-fk.mjs` — the gate. Reports coverage and the Flesch–Kincaid
  grade of every `plain:` block, FAILs any above target (default 6.0). Reuses
  `readability()` from `src/lib/corpus-metrics.mjs`. Run: `node scripts/plain-fk.mjs`.

### Status
- **Pilot: the Overture (5 gestures), complete.** FK 2.6–4.6, mean 3.73, all
  under target. Build green; `/book/plain/overture` renders.
- Coverage: **5 / 943** river gestures.

### To resume
Translate chapter by chapter in canonical river order. After each chapter:
`node scripts/plain-fk.mjs` (must stay ≤ target), then build, then commit.
Open question for Jason: a `/book/plain` index, and whether to surface the plain
edition in nav once coverage crosses some threshold.

---

## 2 · The Tapestry (thread swarm)

### Decision (Jason, 2026-06-18)
- **Curated interpretive first** — hand-author rich thematic threads, then
  mechanize. Each thread *asserts a connection*, and CLAUDE.md forbids
  connections Jason hasn't made, so the workflow is:
  **propose → Jason confirms → author the invocation (Tier 1, ledgered).**
  Orderings of existing gestures are Tier 0; the invocation is the only composed
  prose and must be ledgered in `for-agents/compositions/composition-ledger.md`.

### The X-ray (the "what does it tell us" deliverable)
`scripts/atlas-xray.mjs` → `analysis/atlas-xray.md`. Computed only from the
river manifests, Jason's existing gesture tags, and the thread manifests — no
invention, no asserted connection. Findings (2026-06-18):

- **10.6% woven.** 100 / 943 river gestures sit on a thread; **843 orphans**;
  11 threads; 8 multi-thread nodes. The atlas is mostly white space.
- **The strongest unrealized thread spines are Jason's own tags** (the
  connection is therefore already his — safe to thread):

  | spine (tag) | gestures | still unthreaded |
  | --- | ---: | ---: |
  | `concept/enclosure` | 69 | 60 |
  | `motif/knowing-in-the-body` | 66 | 53 |
  | `motif/cannot-verify-from-inside` | 42 | 36 |
  | `image/the-restaurant` | 40 | 34 |
  | `image/the-machine` (the averaging machine) | 36 | 35 |
  | `motif/proof-before-theory` | 33 | 32 |
  | `motif/the-lineage` | 30 | 26 |
  | `concept/the-outside` | 30 | 26 |
  | `place/norfolk-va` | 27 | 22 |

  The headline finding: **the book's most central concept — enclosure — is not
  yet a thread at all.** 60 of its 69 gestures are orphans.

### Candidate thread slate — FOR JASON TO CONFIRM (no invocations authored yet)
Each is a tag Jason already assigned; the proposal is to curate ~8–12 of its
members into a walkable thread and author one invocation. None built yet.

1. **The Enclosure thread** (`concept/enclosure`) — the master spine: one
   technique followed across rent, land, knowledge, code. The atlas's missing
   backbone. *Recommended first POC* (mirrors how the Pact thread proved the form).
2. **Knowing in the Body** (`motif/knowing-in-the-body`) — the somatic thread;
   pairs with the lexicon-map's "the body knows before the mind."
3. **The Averaging Machine** (`image/the-machine`) — what the machine cannot
   reach; the counterpart to *the singularity* thread that already exists.
4. **Cannot Verify From Inside** (`motif/cannot-verify-from-inside`) — the
   epistemic thread; the spell you can't see while inside it.
5. **Proof Before Theory** (`motif/proof-before-theory`) — the method thread
   (Kerala before the definition); rhymes with the cadence template.
6. **Norfolk / home ground** (`place/norfolk-va`) — the local thread; the live
   bridge to Ghent Streets and Mithlond.

After Jason picks, the loop per thread: curate ordering → author invocation →
critique in a fresh-context sub-agent (Gandalf/cadence/anti-slop) → ledger →
build. Then mechanize the long tail (auto-thread the remaining tag clusters) to
drive orphans toward zero.

### To resume
Re-run `node scripts/atlas-xray.mjs` for current coverage. Build the confirmed
threads as manifests in `src/content/manifests/paths/`; they render at
`/book/path/<slug>` and appear in the atlas automatically.
