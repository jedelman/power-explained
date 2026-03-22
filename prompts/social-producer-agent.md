# Build: Power Explained — Social Media Content Producer

## What you're building

A Python CLI agent that takes a source piece from Power Explained and produces
platform-specific social media posts using the commons framework as the analytical
lens. Built with the Anthropic SDK.

This is a new repo. Do not clone power-explained into it.

---

## Repository setup

- Repo name: `the-lockout` (repo already created at `github.com/jedelman/the-lockout`)
- Stack: Python 3.11+, `anthropic` SDK, `httpx` for fetching source HTML, `pyyaml`
  for the queue
- No framework. No ORM. No database. Three files and a queue.
- `requirements.txt` only — no pyproject.toml unless you have a specific reason

---

## Architecture

```
cli.py          — entry point
producer.py     — the agent logic
queue.yaml      — pieces to process (title, url, platforms, status)
output/         — generated posts, one file per piece per run
```

### cli.py interface

```
python cli.py --source URL_OR_PATH \
              --platform [bluesky|linkedin|all] \
              [--piece "Title for output filename"]
              [--queue]   # process all pending items in queue.yaml
```

If `--queue` is passed, iterate over `queue.yaml` and process each `status: pending`
item. Mark processed items `status: done` and write the output file path.

### producer.py — two-step generation

**Step 1: extract_argument(source_text, framework_context) → dict**

Force the model to articulate the argument before writing posts. Output:
```json
{
  "title": "...",
  "thesis": "one sentence — the core claim",
  "enclosure_move": "what is being enclosed, by whom, at whose expense",
  "commons_alternative": "what the alternative is, where it already exists",
  "key_moves": ["move 1", "move 2", "move 3"],
  "risks": ["any claims that need verification before posting"]
}
```

**Step 2: generate_posts(argument, platform, framework_context) → list[str]**

Given the extracted argument structure, write for the platform.
Two steps prevents the model from drifting into paraphrase mode.

---

## Commons framework context

Load this as the system context for both steps. Fetch it once at the start of a run
from the live URL, or fall back to the inline string below if offline.

Live URL: `https://power-explained.jason-edelman.org/agent-context.html`

When fetching: strip HTML tags, keep only the text content of `#context-content`.

Inline fallback (paste the full text content of agent-context.html `#context-content`
div here — available at that URL or in the power-explained repo).

---

## Platform specs

### Bluesky thread

- Post 1: the hook. One claim, stated plainly. No "Did you know." No "Thread 🧵."
  No rhetorical questions. Assert the argument.
- Posts 2–5: the argument, one move at a time. Each post must stand alone if
  read out of context.
- Final post: the commons alternative. Where is it being built right now?
  Link to the source piece.
- Tone: analytical, not activist. The precision is the politics.
- Hard limit: 300 characters per post
- Output format: numbered list of post strings

### LinkedIn post

- Opening line: a claim, not a question, not a hook teaser.
- 3–4 short paragraphs. No bullet points. No em-dash lists.
- Third paragraph: the commons alternative — what's already being built.
- Closing line: link to the source piece.
- Tone: rigorous. Not academic, not promotional.
- Output format: single string, paragraphs separated by blank lines

---

## System prompt for Step 1 (argument extraction)

```
You are reading a piece from Power Explained, a site that analyzes power structures,
capitalism, and commons-based alternatives through a specific analytical framework
(provided in context).

Your job is to extract the argument structure from the source text. Do not summarize.
Do not describe what the piece does. Identify:
- The core claim (thesis)
- The enclosure move: what resource is being enclosed, by whom, at whose expense
- The commons alternative: what collective governance looks like here, and where it
  is already being built
- The key analytical moves the piece makes to get from thesis to alternative
- Any specific claims (names, statistics, organizations) that require verification
  before being repeated in social media posts

Output as JSON. No commentary outside the JSON object.
```

## System prompt for Step 2 (post generation)

```
You are a social media content producer working from the commons framework
(provided in context). You have been given the extracted argument structure
from a Power Explained piece. Your job is to write [PLATFORM]-format posts
that are analytically precise, not promotional.

Rules:
- Every post must make an argument, not describe one.
- The hook is a claim, not a teaser.
- Do not soften the framework's core claims to seem balanced.
- Do not add claims not present in the argument structure provided.
- The commons alternative must appear. That is the point of the whole piece.
- If a claim in the argument structure is flagged as a verification risk,
  do not include it in the posts. Cut it rather than hedge it.
- No emoji. No buzzwords. No marketing language.
- Write in the register of the source site: analytical, direct, not preachy.
```

---

## Queue format

```yaml
# queue.yaml
pieces:

  - id: why-your-city-doesnt-work
    status: pending
    url: https://power-explained.jason-edelman.org/why-your-city-doesnt-work.html
    title: "Why Your City Doesn't Work (and Why It's Not an Accident)"
    platforms: [bluesky, linkedin]
    output_path: output/why-your-city-doesnt-work.md

  - id: hardin-was-wrong
    status: pending
    url: https://power-explained.jason-edelman.org/hardin-was-wrong.html
    title: "Hardin Was Wrong"
    platforms: [bluesky, linkedin]
    output_path: output/hardin-was-wrong.md
```

---

## Output format

Each run writes a markdown file to `output/`. Format:

```markdown
# [Piece Title] — Generated [YYYY-MM-DD]

## Argument extraction

[JSON block from step 1]

## Bluesky thread

1. [post 1]
2. [post 2]
...

## LinkedIn post

[full post text]

---
*Review before posting. Verify any flagged claims.*
```

---

## Editorial guardrails — non-negotiable

These match the source site's fact-checking protocol.

- Never fabricate quotes, statistics, or named claims not present in the source HTML.
- Never soften the framework's core claims to seem balanced or palatable.
- No buzzwords: "game-changer," "innovative," "powerful," "transformative," etc.
- No emoji unless explicitly requested.
- No marketing language.
- If the source does not support a specific claim, do not make it.
- Flag with `<!-- VERIFY -->` any claim the model cannot confirm from the source
  text alone. Do not rewrite flagged claims vague — cut them.

---

## First thing to build

Start with `producer.py` and get Step 1 working end-to-end on the first queue item
(`why-your-city-doesnt-work.html`). Print the extracted JSON. Confirm the argument
structure is accurate before touching post generation.

Then Step 2 (Bluesky first, LinkedIn second). Then the queue runner. Then cli.py.
