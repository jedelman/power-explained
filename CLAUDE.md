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
