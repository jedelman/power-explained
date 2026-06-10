# CLAUDE.md — power-explained

## Purpose
Power Explained is an educational resource examining power structures, capitalism,
and commons-based alternatives. It is the conceptual source for Jason's other
applied projects (Ghent Streets, Mithlond).

---

## Non-hallucination & anti-slop rules

### Content guardrails
- **Never invent thinker profiles, case studies, or analytical claims.** All content
  must come from Jason or cited sources — never inferred or filled in plausibly.
- **No placeholder text.** Use `<!-- TODO: ... -->` and flag what's needed.
- **No fabricated citations, quotes, or statistics.**
- **No invented connections** between thinkers or movements that Jason hasn't made.

### Code/copy quality guardrails
- **No unnecessary frameworks.** Justify any build tool or dependency addition.
- **No unused dependencies.**
- **No boilerplate dumps.**
- **No emoji unless Jason explicitly requests them.**
- **No marketing language / buzzwords.**

### Process guardrails
- Before writing any analytical copy, confirm the argument with Jason.
- When in doubt about a claim, add a `<!-- VERIFY: ... -->` comment.
- Do not commit fabricated or placeholder content.

---

## Project facts
- Live site: https://power-explained.jason-edelman.org/
- Repo: https://github.com/jedelman/power-explained
- Author: Jason Edelman

---

## Intellectual through-line across Jason's projects

Power Explained is the **source** of the commons framework that drives Jason's other
projects. Understanding it is essential context for any work here.

### The commons framework
- Systemic problems are design features, not failures. They serve someone.
- Meaningful change comes from building alternatives, not from electoral politics alone.
- The commons — resources governed collectively for shared benefit — is the
  practical alternative to both state control and private enclosure.

### Applied projects that extend this framework

**Ghent Streets** (`ghent-zoning-reform.jason-edelman.org` / `github.com/jedelman/ghent-zoning-reform`)
Urban space as commons. The HC-G2 zoning campaign in Norfolk, VA argues that
street-level commercial activity is a form of shared infrastructure enclosed behind
permitting costs. Restoring it by-right is a commons restoration argument.

**Mithlond** (`mithlond.jason-edelman.org` / `github.com/jedelman/mithlond`)
Compute as commons. AI-era data center infrastructure arriving in Hampton Roads —
who owns it, who bears the environmental costs, whether local communities receive
structural economic benefit — analyzed through the commons lens.

### Development implications
- This site should remain the clearest, most rigorous expression of the framework.
- Ghent and Mithlond should be linkable from here as applied examples when relevant.
- Do not soften or hedge the framework's core claims to seem more palatable.

---

## Build & dev

**Always run the build from the project root:**

```bash
cd /home/user/power-explained
./node_modules/.bin/astro build
```

**Do NOT use `npx astro build`** — it finds the wrong cached Astro install and
throws `Could not resolve entry module 'astro/entrypoints/prerender'`.

Other useful commands (run from project root):
- `npm run analyze` — corpus metrics (word count, FK grade, per-plateau stats)
- `npm run test:metrics` — same as analyze, test-runner format
- `npm run lint:tags` — tag linting (run `npm install` first if deps missing)

---

## Book / gesture architecture

The book is composed from gesture files assembled at build time by
`src/lib/composePlateauBody.mjs`. Each chapter has:

**Gesture files (flat layout):** `src/content/gestures/G-<PLATEAU>-<NNN>[letter]-<slug>.md`
- All gestures live in the single `src/content/gestures/` directory; the plateau
  is metadata (`plateau:` in frontmatter), not a storage location. The
  per-`P-NN/` layout was retired 2026-05-24 during the chapter restructure.
- YAML frontmatter: `id`, `plateau`, `title`, `slug`, `tags`, `notes`
- IDs are permanent: `G-<PLATEAU>-<NNN>` format
- For inserts between existing numbered gestures, use letter suffix:
  `G-RE-033a`, `G-RE-034a` — file name must match: `G-RE-033a-<slug>.md`
- Voice tags: `voice/jason` (first-person/experiential), `voice/narrator` (analytical)
- Status tags: `status/draft`, `status/final`

**Chapter manifest:** `src/content/book/<chapter-slug>.md`
- `gestures:` array — render order, one entry per gesture ID
- `separators:` array — exactly one fewer entry than gestures
  - `paragraph` = blank line between gestures
  - `section` = visual section break
- When inserting N gestures, add N separators in the correct positions

**Whole-book manifest:** `src/content/manifests/the-river.manifest.yml`
- Composite manifest listing chapter slugs in canonical book order.
- Compose with `node scripts/compose-river.mjs compose | write | verify`.
- Snapshot lock: `for-agents/snapshots/the-river-pre-flatten.md`.

---

## Wizard book voice register (P-* chapters)

The wizard book plateaus (P-RE, P-WW, P-EP, etc.) use a different register
than the analytical commons chapters. Named internally: **Gandalf voice.**

**The standard:**
- Economy over explanation. Cut every word that doesn't earn its place.
- Gravity over enthusiasm. The wizard does not exclaim.
- Three-beat sentences. Chiastic structures. Trust the reader.
- Show the knowing; do not explain the knowing.
- Ceremony register: grimoire, not curriculum.

**Specific moves:**
- Short sentence after a long one. Weight / landing.
- Chiasm: "The silliness was the armor. The armor was the wisdom."
- Cut hedges ("perhaps," "in a sense") — commit or don't say it.
- Reader agency always: endings belong to the reader, not the author.
- Tonal pops allowed ("frankly adorable," "a triumph") — they earn the serious parts.

**Contrast:** The analytical chapters follow the emotional cadence template
below. Wizard chapters follow the Gandalf register instead. Different tools
for different plateaus.

---

## Sequencing pass (ACTIVE — started 2026-05-25)

A straight-through final read of the whole river in canonical order, gesture
by gesture: every transition deliberate, every introduction earned, rhyme
without repeating, voice consistent, prose not tired. Live working notes
(cross-cutting patterns, per-chapter log, current position, pending proposals):
**`analysis/sequencing-pass-notes.md`** — read that first to resume.

### Voice contract — pronoun choreography (governs ALL editing, every chapter)

Set by Jason at the book's opening line. The pronouns move with the
experience; do not flatten them to a single voice:

- **Silent We** — the shared *condition*. No possessive. "Rent went up again
  this year" (not "Your rent" / "Our rent"). The collective is felt, unspoken.
- **We** (audible) — the shared *reckoning*. "We did the math."
- **You** — the *isolating individual act*. "You called the landlord." The
  system strands you alone the moment you try to act. Keep the You exactly at
  the lonely beats — it is the wound the book later heals. Do NOT convert it to We.
- **They / Them** — the *enclosers*, named not addressed. "They said there's
  nothing they can do." (Landlord, insurer, averaging machine, the city.)

Worked example: G-PR-001 (done). Second-pass sweep: audit every "you"-opener
and every "your X" condition line in the book against this.

### Wizard lexicon — core concepts in wizard register (governs voice consistency)

The book's vocabulary, consolidated to six with Jason: **`for-agents/wizard-lexicon.md`**.
The engine: the field is *enclosure ⇄ commons* (the Terrain); *incantation* casts
subjectivity along it (enchantment / disenchantment); *magic* is the transformative
capacity of singularities acting on each other (your gift, the land's secret ways) —
what the averaging machine can't capture. Then the grimoire (tool), the wizard (who
wields it), initiation (the becoming). Master principle: every concept is a tool
turned against us that can be taken back — the spell becomes the counter-spell.
Hold the same register for the same idea in every chapter.

### Front-loaded overture (in draft)

Decision: the book opens with a short wizard-register **overture** before the
prologue, so the title's promise is alive from page one and the analytical
chapters read as the disenchanted world the wizard learns to see. Composed from
existing wizard prose (G-WW-002, G-RE-001/004/005, G-GC-001/002), not invented.
Current draft + build plan + open calls: **`for-agents/overture-draft.md`**.

---

## Composition pass (ACTIVE — started 2026-06-06)

The successor to the parsing/sequencing work. Where the prior pass was bounded
to **parsing-by-naming** (label what is already at work, never add), this pass
crosses into **composition** — new connective prose and a new reading *form* —
without losing that safety.

**Read first to resume:** `for-agents/composition-pass-instructions.md` (the
full system + staged plan), then `analysis/composition-pass-notes.md` (live
position), then `for-agents/compositions/composition-ledger.md` (what's drafted,
with sources).

**The contract (set with Jason 2026-06-06):**
- **Stage everything.** The agent composes nothing into the book on its own.
  The canonical river (`src/content/manifests/the-river.manifest.yml` and the
  live chapter manifests) is **sacred** — only Jason moves it. Each session
  leaves a workbench of review-ready drafts on the branch.
- **Provenance or it doesn't ship.** Every composed sentence is ledgered to a
  source (a gesture, the lexicon, a cited source, or a Jason directive).
  Composition is recombination + crystallization, never invention. No source →
  it's a claim → route to Jason. (Reinforces the non-hallucination rules above.)
- **Reflexive loop.** Compose → critique in a fresh-context sub-agent against
  the Gandalf/cadence/pronoun/anti-slop checklist → revise or kill. Zero
  compositions is a valid session.

**The centerpiece — the composable river.** The book argues for the commons
(self-governing, multiply-entered) but delivers as a single enclosed line. This
pass makes the *form* enact the *thesis*: a **path** is a manifest over existing
gestures (a thread through the rhizome), rendered by the river's own composer.
Paths live in `src/content/manifests/paths/` and render at `/book/path/<slug>`
(linked from `/book` → "Walk the threads"). The lexicon-map in Becoming Wizards
in the Woods (G-IW-027a) is their legend; G-IW-027b opens the form in the prose.

**What shipped (2026-06-08):** 7 threads (each flowed with before/after context)
woven into an edge graph with true crossings; the corruption-of-the-commons demon
named + woven into *The Speaking of Names*; the You→We counter-spell at Ch 3's
close (B1); the 16b frontier flip (B2); the chord pass (Necromancy, Incantation,
Prefiguration bound across domains); inscription named at the body-instructions
line; the standalone grimoire retired (it was already woven in P-IW). Every
composed sentence is ledgered in `for-agents/compositions/composition-ledger.md`.

**Two governing principles (set with Jason 2026-06-08):**
- **Examples are multi-school.** One example casts several schools at once
  (Mondragón = prefiguration + hold + necromancy + pact). A gesture may carry
  more than one school-naming where each genuinely lands; economy still governs.
- **Name where it's at work, not only where it's labeled.** Parsing-by-naming
  extends to implicit sites — name a school wherever the gesture is genuinely
  doing that work. Still never invent; the work must already be on the page.

**Next pass: `for-agents/non-chords-pass-instructions.md`** — deploy the
underrepresented schools (Evocation/Transformation, commons-cast Abjuration,
commons-cast Illusion), then thread them when each reaches 3+ instances.
(COMPLETE 2026-06-10 — Evocation + Abjuration deployed and threaded;
Transformation at 2 instances; Illusion zero-by-design, routed to Jason.)

---

## Alchemical pass (ACTIVE — started 2026-06-10)

The river refined to its essence — alchemy in the Jungian sense: removal that
qualitatively transforms (dissolving what weakens or corrupts) and
restructuring that reveals (recomposing so the gold is where the reader meets
it). Solve et coagula. The Stone test: the book intends to transform by its
presence — every chapter is tested blind on a reader-witness against what it
invokes; the whole refined river gets a final blind walk at wrap-up.

**Read first to resume:** `for-agents/alchemical-pass-instructions.md` (the
fixed bar: standard, frozen critic + reader-witness prompts, retirement
checklist, Rulings), then `analysis/alchemical-pass-notes.md` (Current
position), then the chapter's section of
`analysis/alchemical-protected-beats.md`.

**Re-gating (Jason, 2026-06-10, FOR THIS PASS — supersedes the
composition-pass "stage everything" contract):** essence over arithmetic ·
weave everything (the critique loop is the only gate; Jason reviews
per-chapter diffs) · full alchemical license (gesture cuts/merges/reorders
within chapters; per-chapter commits; IDs retired, never reused). Chapter-level
river order stays sacred. beauty_check gestures: deletion-only, itemized in
commit headers.

---

## Session start instructions

**At the start of every session in this repo, load the memory substrate:**

```bash
git clone https://github.com/jedelman/claude-memory.git /tmp/claude-memory 2>/dev/null \
  || git -C /tmp/claude-memory pull
```

Then read:
- `/tmp/claude-memory/context/user.md` — who Jason is, working style
- `/tmp/claude-memory/context/projects.md` — active projects and status
- The most recent file in `/tmp/claude-memory/conversations/` — last session context

**At the end of every session**, write a log to
`/tmp/claude-memory/conversations/YYYY-MM-DD-<slug>.md` and push.
This prevents bootstrapping from scratch next session.

---

## Prose style & emotional cadence (2025-05-01)

**All pieces on this site should read like *thought*, not instruction.**

The original prose was argument-shaped but emotionally flat — each claim followed by
justification, all angles preempted, every transition signposted. It read like being
lectured *about* power, not having power structures become visible.

### The core principle: Emotional cadence matters as much as logical structure

Good argument has **shape**. Movement. A recognizable sequence of gestures that doesn't
announce itself.

### The rewrite template (proven on ForNormies)

Every piece should follow this emotional arc, not necessarily this *structure*:

1. **Opening: Shock of Recognition** (short)
   - Reader sees themselves in a specific moment, not an abstraction
   - Creates immediate tension: "Yes that's my life. Wait, why is it like this?"
   - Lead with *concrete*, not proof

2. **Development: The Question Emerges** (medium)
   - Reader *asks* before you answer
   - Answer comes as discovery, not instruction
   - Anchor abstractions to their experience

3. **Turn: The Pattern Becomes Visible** (longer)
   - This is where the concept (commons, enclosure, extraction) lands
   - But concept comes *as the answer to their question*, not a definition
   - "Then it stopped" is more powerful than "Starting in 1980, policy changed"

4. **Evidence: "I See It Everywhere Now"** (medium)
   - 2-3 cases that show the pattern *in motion*
   - Not a list. A sequence with momentum.
   - Kerala before defining "commons" — proof before definition

5. **Reclamation: What Actually Works** (medium)
   - Present tense. Operative. Real examples operating now.
   - "Here's how people are doing it" not "Here's the solution framework"

6. **Close: The Lever** (short)
   - One clear thing they can *do*
   - Not three. One.
   - If they do that, the logic becomes clear to them

### Tactical moves that create this shape

**Remove explanatory scaffolding:**
- Cut "Here's the short version"
- Cut "What X actually means" headers — show it first
- Cut "These aren't separate problems with separate causes" — let reader see it

**Tighten every sentence:**
- "has enormous power" → "has power"
- "not whatever it costs to provide" → "not what it costs to provide"
- Vary sentence length: short/medium/long/short (not the AI plateau of 14-18 words steady)

**Show, don't explain:**
- "Your rent went up $400" beats "Housing costs have risen"
- Kerala example beats "definition of commons"
- "Then it stopped" beats "Starting around 1980, policy shifted"

**Let stakes do the work:**
- Replace reassurance sentences ("It wasn't paradise — ") with material consequence
- Remove defensive preemptions ("This is not a conspiracy")
- Constrain instead ("Whether you're skeptical of government or capital...")

**Trust the reader:**
- Cut 30% of words without losing argument
- Trust them to fill gaps
- One good example beats six bullet points

### Word count targets

The ForNormies rewrite cut 34% of words (1,550 → 1,020) without losing substance.
This is typical. Aim for 25-35% cuts on existing pieces through prose tightening alone
(no structural change needed).

### How to apply this in practice

**For every section:**

1. What is the reader's emotional state right now?
2. What do they *need to discover* in this section (not: what do they need to know)?
3. What's the shortest path to that discovery?
4. Read it aloud. Does pacing match the emotional moment?

**Anti-patterns to kill:**
- Bullet lists of 4+ items (max 3, embedded in prose, or convert to narrative)
- Definition sentences ("X means...")
- "Here's..." transitions
- Three ways / five reasons / six steps (pick 2-3, show them in motion)
- Reassurance language (cut it)

**See:** `ForNormies-DIFF.md` for detailed before/after on every section.
Test case proved 2025-05-01. Ready to roll out.

---

## Fact-checking protocol

All specific claims in content produced for this repo require verification.
Full protocol: `github.com/jedelman/claude-memory/protocols/fact-checking.md`

### The core distinction
Framework analysis is relatively safe from hallucination. Specific claims —
named people, quotes, dates, figures, organizations — are high hallucination
risk. Check them separately, every time.

### Claim grades
| Grade | Meaning | Action |
|---|---|---|
| ✅ Verified | Live URL, detail confirmed in page text | Keep, cite correctly |
| ⚠️ Plausible, unverified | No URL, directionally consistent | Rewrite as uncertain or cut |
| ❌ Wrong | Detail incorrect | Correct or cut |
| 🚫 Unverifiable | Paywalled or unavailable | Cut the specific detail |
| ☠️ Fabricated | Generated without source | Cut entirely — do not rewrite vague |

### Hallucination tells — trigger immediate verification
- Named person + quote + outlet + date all in one sentence
- "According to [prestigious institution]"
- Suspiciously precise figures
- Quotes that perfectly illustrate the analytical point
- Any detail not retrieved in the current session

### Attribution rule
Always attribute to the originating outlet, not a secondary one.
