# Depth Pass Orchestrator

You are orchestrating a two-phase editing swarm on the manuscript `src/content/book/`. Read this entire document before doing anything.

## Your Role

You are the orchestrator. You will process each chapter by:
1. Creating a branch
2. Running a correctness subagent
3. Running a readability subagent on the correctness output
4. Committing both the edited file and the review files to the branch
5. Attempting an auto-merge to main if the chapter is not on the skip list and no conflicts arise
6. Logging results

You do this for every chapter in sequence. Do not parallelize — sequential execution prevents branch conflicts and makes the log coherent.

## Git Setup

```bash
git config user.email edelmanja@gmail.com
git config user.name Jason
```

The remote is already configured. Push each branch after committing.

## Chapter List (process in this order)

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

## Skip List (no auto-merge — branch + commit only)

```
chapter-6          # Robinson/Black Marxism: theoretical claims need source verification
the-centaur-chapter  # Contains Jason's [placeholder] — do not alter
prologue           # Beauty pass status unclear — hold for manual review
```

Chapters on the skip list still get the full correctness + readability pass and branch commits. They just do not get auto-merged.

## Per-Chapter Workflow

For each `<slug>` in the chapter list:

### Step 1: Create branch
```bash
git checkout main
git pull origin main
git checkout -b depth/<slug>
```

### Step 2: Run Correctness Agent

Spawn a subagent with the following instruction (fill in `<slug>` and the actual file content):

---
**CORRECTNESS SUBAGENT INSTRUCTION:**

Read the prompt template at `depth-pass/prompts/correctness-agent.md`.

The chapter file is: `src/content/book/<slug>.md`

Read the chapter. Apply the correctness pass per the prompt. Use web search to verify uncertain factual claims — names, dates, book titles, biographical details. Do not guess; search.

Write your outputs:
1. Overwrite `src/content/book/<slug>.md` with the corrected file (inline flags for uncertain items, corrections made for confirmed errors)
2. Write `depth-pass/review/<slug>-correctness.md` with the structured changes log

When done, report: how many corrections made, how many items flagged, and a one-line summary.
---

### Step 3: Run Readability Agent

After the correctness agent completes, spawn a second subagent:

---
**READABILITY SUBAGENT INSTRUCTION:**

Read the prompt template at `depth-pass/prompts/readability-agent.md`.

The chapter file is: `src/content/book/<slug>.md` (already processed by the correctness agent — correctness flags are present, leave them intact)

Read the chapter. Apply the readability pass per the prompt.

Write your outputs:
1. Overwrite `src/content/book/<slug>.md` with the readability-improved file (correctness flags untouched)
2. Write `depth-pass/review/<slug>-readability.md` with the structured changes log

When done, report: how many changes made, and a one-line assessment of the chapter's prose health.
---

### Step 4: Commit

```bash
git add src/content/book/<slug>.md
git add depth-pass/review/<slug>-correctness.md
git add depth-pass/review/<slug>-readability.md
git commit -m "depth-pass(<slug>): correctness + readability agents"
git push origin depth/<slug>
```

### Step 5: Attempt auto-merge (skip list chapters: skip this step)

```bash
git checkout main
git merge depth/<slug> --no-ff -m "auto-merge: depth/<slug>"
```

If the merge has conflicts:
- Abort: `git merge --abort`
- Log the conflict in `depth-pass/MERGE-LOG.md`
- Do not attempt to resolve — flag for manual review

If merge succeeds:
- `git push origin main`
- Log success in `depth-pass/MERGE-LOG.md`

### Step 6: Update merge log

Append to `depth-pass/MERGE-LOG.md`:
```markdown
## <slug>
- Correctness: <N corrections, M flags>
- Readability: <N changes>
- Merge: AUTO-MERGED | CONFLICT (reason) | SKIP (reason)
```

Commit and push the updated log:
```bash
git add depth-pass/MERGE-LOG.md
git commit -m "log: depth-pass/<slug> complete"
git push origin main
```

Then move to the next chapter.

## Error Handling

- If a subagent fails or produces malformed output: log the failure in MERGE-LOG.md, skip to the next chapter, do not attempt to merge the failed branch.
- If git push fails: retry once, then log and continue.
- If a chapter file is missing: log and skip.

## When All Chapters Are Complete

Print a summary:
```
DEPTH PASS COMPLETE
===================
Chapters processed: N
Auto-merged: N
Conflicts (manual review needed): [list]
Skipped (manual review needed): [list]
Total corrections: N
Total flags: N
Total readability changes: N

Review branches:
  git branch -a | grep depth/
  cat depth-pass/MERGE-LOG.md
```

## Important Constraints

- Never alter frontmatter
- Never alter the `[placeholder]` section in the-centaur-chapter
- Never remove content — only flag or correct
- The correctness agent runs before the readability agent, always
- Each subagent reads the prompt template from the file — do not paraphrase the prompt
- Web search is available and should be used by the correctness agent for verification
