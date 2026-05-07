# Depth Pass Orchestrator

You are orchestrating a two-phase editing swarm on the manuscript `src/content/book/`. Read this entire document before doing anything.

## Your Role

You are the orchestrator. You will:
1. Spawn one subagent per chapter, all in parallel
2. Each subagent owns its chapter end-to-end: branch → correctness pass → readability pass → commit → push
3. Wait for all subagents to complete
4. Run the merge phase: merge all completed branches to main in sequence
5. Write the final summary

Parallelism is the goal. Every chapter's editing work runs simultaneously. Only the final merge phase is sequential (git merges must be serial).

## Git Setup

Each subagent must run this before touching git:
```bash
git config user.email edelmanja@gmail.com
git config user.name Jason
```

## Chapter List

```
prologue
chapter-1
chapter-2
chapter-3
chapter-4
chapter-5
chapter-6
chapter-7
chapter-8
chapter-9
chapter-10
chapter-11
chapter-12
chapter-13
chapter-14
chapter-15
chapter-16
chapter-16b
chapter-17
chapter-18
interlude-barcelona
interlude-washington
epilogue
the-centaur-chapter
```

## Skip List (no auto-merge — subagent still runs full pass, just does not merge)

```
chapter-6            # Robinson/Black Marxism: theoretical claims need source verification
the-centaur-chapter  # Contains Jason's [placeholder] section — do not alter it
prologue             # Hold for manual review
```

---

## Phase 1: Parallel Subagent Dispatch

Spawn one subagent per chapter simultaneously. Each subagent receives the following instruction with `<slug>` filled in:

---
**SUBAGENT INSTRUCTION FOR `<slug>`:**

You are responsible for the depth pass on one chapter of *Power Explained*. Execute these steps in order.

### Setup
```bash
git config user.email edelmanja@gmail.com
git config user.name Jason
git checkout main
git pull origin main
git checkout -b depth/<slug>
```

### Step 1: Correctness Pass

Read `depth-pass/prompts/correctness-agent.md` in full. This is your instruction set — do not paraphrase it, follow it.

Read `src/content/book/<slug>.md`.

Apply the correctness pass. Use web search to verify any uncertain factual claim: names, dates, book titles, publication years, biographical details, historical events. Do not guess — search. When in doubt, flag rather than fix.

Write outputs:
1. Overwrite `src/content/book/<slug>.md` with corrections and inline flags applied
2. Write `depth-pass/review/<slug>-correctness.md` with the structured changes log (use the format defined in the prompt)

### Step 2: Readability Pass

Read `depth-pass/prompts/readability-agent.md` in full.

Read `src/content/book/<slug>.md` as left by the correctness pass.

Apply the readability pass. Leave all `[CORRECTION:...]` and `[FLAG:...]` markers from Step 1 untouched.

Write outputs:
1. Overwrite `src/content/book/<slug>.md` with readability improvements applied
2. Write `depth-pass/review/<slug>-readability.md` with the structured changes log

### Step 3: Commit and Push

```bash
git add src/content/book/<slug>.md
git add depth-pass/review/<slug>-correctness.md
git add depth-pass/review/<slug>-readability.md
git commit -m "depth-pass(<slug>): correctness + readability agents"
git push origin depth/<slug>
```

### Step 4: Report back to orchestrator

Return a structured report:
```
SLUG: <slug>
BRANCH: depth/<slug>
STATUS: COMPLETE | FAILED
CORRECTNESS: <N> corrections, <M> flags
READABILITY: <N> changes
SUMMARY: <one line>
ERROR: <if failed, what went wrong>
```

**Constraints:**
- Never alter frontmatter
- Never alter any `[placeholder]` text
- Never remove content — only flag or correct
- The correctness pass always runs before the readability pass
- If anything goes wrong, report STATUS: FAILED with the error — do not try to recover silently
---

Dispatch all 24 subagents simultaneously. Wait for all to return their reports.

---

## Phase 2: Merge (sequential — run after all subagents complete)

Collect all reports. For each chapter that returned `STATUS: COMPLETE` and is **not on the skip list**, attempt to merge in the order below. Merge order matches chapter order to keep the log readable.

```
chapter-1
chapter-2
chapter-3
chapter-4
chapter-5
chapter-7
chapter-8
chapter-9
chapter-10
chapter-11
chapter-12
chapter-13
chapter-14
chapter-15
chapter-16
chapter-16b
chapter-17
chapter-18
interlude-barcelona
interlude-washington
epilogue
```

For each:
```bash
git checkout main
git pull origin main
git merge depth/<slug> --no-ff -m "auto-merge: depth/<slug>"
```

If merge succeeds:
```bash
git push origin main
```

If merge has conflicts:
```bash
git merge --abort
```
Log as CONFLICT — do not attempt to resolve. Add to manual review list.

---

## Phase 3: Write Merge Log and Final Summary

After all merges complete, write `depth-pass/MERGE-LOG.md`:

```markdown
# Depth Pass Merge Log

## Results

| Chapter | Corrections | Flags | Readability Changes | Merge Status |
|---------|------------|-------|--------------------|----|
| chapter-1 | N | M | N | AUTO-MERGED |
| chapter-6 | N | M | N | SKIP (Robinson) |
| ... | | | | |

## Manual Review Required
[List chapters that need Jason's eyes before merging]

## Failed Subagents
[List any that returned STATUS: FAILED]
```

Commit and push:
```bash
git add depth-pass/MERGE-LOG.md
git commit -m "depth-pass: merge log complete"
git push origin main
```

---

## Final Output to User

```
DEPTH PASS COMPLETE
===================
Chapters processed:        N / 24
Auto-merged to main:       N
Manual review needed:      [list]
Failed:                    [list]

Total corrections:         N
Total flags:               N
Total readability changes: N

To review held branches:
  git branch -a | grep depth/
  cat depth-pass/MERGE-LOG.md
  cat depth-pass/review/<slug>-correctness.md
```

---

## Error Handling

- Subagent returns FAILED: do not merge that branch. Log it. Continue with the rest.
- Push fails: retry once. If it fails again, log and skip merge for that chapter.
- Merge conflict: abort, log, add to manual review list. Do not attempt resolution.
- Missing file: log and skip that chapter entirely.

## Immutable Constraints

- Never alter frontmatter in any file
- Never alter `[placeholder]` text in the-centaur-chapter
- Never remove content from any chapter
- Correctness pass always precedes readability pass within each subagent
- Merge phase never runs until all subagents have reported
- Skip list chapters are never auto-merged regardless of clean merge status
