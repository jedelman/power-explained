# Depth Pass: Agent Swarm Operation

## What This Is

A two-phase agent swarm that runs a **correctness pass** then a **readability pass** on every chapter. Each chapter gets its own branch. Agents commit their edits plus a structured reasoning file. You and Jason review all branches before merging.

## File Structure

```
depth-pass/
├── README.md                  # This file
├── ORCHESTRATOR.md            # Drop this into Claude Code
├── prompts/
│   ├── correctness-agent.md   # Prompt template for Phase 1
│   └── readability-agent.md   # Prompt template for Phase 2
├── review/
│   └── (generated per chapter: chapter-N-changes.md)
└── MERGE-LOG.md               # Auto-updated by orchestrator
```

## How It Works

### Phase 1: Correctness Agent
Runs first on every chapter. Checks:
- Factual accuracy of proper nouns, dates, book titles, biographical details
- Theoretical attributions (who actually argued what)
- Internal consistency (claims that contradict other chapters)
- Logical gaps or unsupported leaps

**Does not touch prose style.** Flags rather than silently fixes anything uncertain.

### Phase 2: Readability Agent
Runs second, on the Phase 1 output. Checks:
- Sentence clarity and rhythm
- Redundancy and word economy
- Transitions and connective tissue
- Nothing that changes meaning or theoretical content

### Branch Convention
Each chapter gets: `depth/<slug>` (e.g., `depth/chapter-7`)

### Output Per Chapter
Each branch contains:
1. The edited `.md` file
2. `depth-pass/review/<slug>-changes.md` — every change listed with rationale

### Merge Protocol
The orchestrator auto-merges branches to `main` in sequence if:
- No git conflicts arise
- The changes file exists and is non-empty

Chapters flagged for manual review (see SKIP list below) are never auto-merged.

## Chapters Requiring Manual Review (No Auto-Merge)

These are skipped by the orchestrator and must be reviewed by Jason before merge:

- **chapter-6**: Robinson/Black Marxism — theoretical claims require source verification
- **the-centaur-chapter**: Contains Jason's [placeholder] section — do not alter
- **prologue**: Beauty pass status unclear — hold for explicit confirmation

The orchestrator will still run the depth pass on these and commit to their branches; it just won't auto-merge them.

## Running the Swarm

See `ORCHESTRATOR.md` for the exact prompt to drop into Claude Code.

## Reviewing the Results

After the swarm completes:

```bash
# See all depth branches
git branch -a | grep depth/

# Review a specific chapter's changes
cat depth-pass/review/chapter-7-changes.md

# See the diff
git diff main depth/chapter-7 -- src/content/book/chapter-7.md
```

Then merge what you approve:
```bash
git checkout main
git merge depth/chapter-7
```

Or reject a branch by simply deleting it:
```bash
git branch -d depth/chapter-7
```
