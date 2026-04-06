import { useState } from 'react'
import Layout from '../components/Layout'

const MEM_PROMPT = `You are helping me set up a persistent memory system for AI-assisted writing and development.
The goal: a GitHub repo that stores project context in plain text files,
cloned and read by Claude at the start of each session so it has consistent
knowledge of my project, editorial standards, and prior decisions.

My project: [BRIEF DESCRIPTION OF YOUR PROJECT]
My GitHub username: [USERNAME]

Please do the following:

1. REPO STRUCTURE
Create a GitHub repo named "claude-memory" with this file structure:
  context/
    user.md       — my name, working style, communication preferences
    projects.md   — active projects, their status, key decisions made
  protocols/
    (empty to start — I'll add fact-checking and other protocols here)
  conversations/
    (empty to start — session logs go here)
  README.md       — explains the system and how to use it

2. POPULATE THE FILES
For context/user.md: ask me 3–5 questions about my working style and preferences,
then write the file based on my answers.

For context/projects.md: ask me to describe my current project in plain terms —
what it is, what's been built, what's next — then write the file in a structured
format with sections for status, key decisions, and outstanding tasks.

For README.md: write a short explanation of the memory system, including the
session startup instructions Claude should follow (clone the repo, read context/
files, write a session log to conversations/ before the context fills up).

3. SESSION STARTUP SNIPPET
After creating the repo, write a short snippet I can paste into Claude's user
preferences that instructs it to clone and read the memory repo at the start of
every conversation. Include placeholder text for my GitHub token.

4. FIRST SESSION LOG
Write a starter entry in conversations/ dated today that records: what the project
is, what the initial context files contain, and the date the system was initialized.

Ask me any clarifying questions you need before starting. Confirm each file before
writing it.`

export default function HowThisWasDone() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(MEM_PROMPT).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Layout
      title="How This Was Done — Power Explained"
      description="Power Explained was built by one person with AI assistance, using free tools, in about two weeks. Here's exactly how — and how you can build something like it for your city or movement."
      seriesTag="Tools"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="body-text">
<p>Power Explained is an open-source editorial project. Everything here was built in public, using tools that are either free or cheap, by one person working with an AI collaborator. The goal was always to make the process as reproducible as the content — if the framework is right, more people should be able to apply it to their own context, not just read this version of it.</p>
<p>This page explains exactly how it was built, what the editorial standards are, and how you can fork it, contribute to it, or build something similar from scratch.</p>
<h2>The stack</h2>
<p>Everything runs on infrastructure that's either free or well under $20/month. No CMS, no database, no backend. Static HTML and CSS, deployed via GitHub Pages. The design system is inlined per file — it's verbose but makes each file standalone and portable.</p>
<table class="stack-table">
<thead>
<tr>
<th>Layer</th>
<th>Tool</th>
<th>Why</th>
</tr>
</thead>
<tbody>
<tr>
<td>Writing &amp; editing</td>
<td>Claude (Anthropic)</td>
<td>Primary AI collaborator — drafts, revisions, research synthesis, code. The author directs; Claude executes and pushes back when something's wrong.</td>
</tr>
<tr>
<td>Version control</td>
<td>Git + GitHub</td>
<td>Every change tracked. Full history available. Enables collaboration and contribution without requiring trust.</td>
</tr>
<tr>
<td>Hosting</td>
<td>GitHub Pages</td>
<td>Free static site hosting. No server, no deployment pipeline. Push to main, site updates.</td>
</tr>
<tr>
<td>Design</td>
<td>Custom CSS (no framework)</td>
<td>Full control, no dependencies. Design tokens in CSS custom properties — consistent across 60+ files without an external stylesheet.</td>
</tr>
<tr>
<td>News pipeline</td>
<td>commons-wire (Python + GitHub Actions)</td>
<td>Daily RSS aggregation + Claude-based scoring against the framework. Posts scored 0–10 for relevance. Open source, forkable. <a class="xl" href="https://jedelman.github.io/commons-wire">Live at commons-wire</a>.</td>
</tr>
<tr>
<td>Memory / continuity</td>
<td>GitHub (claude-memory repo)</td>
<td>Claude doesn't have persistent memory across sessions. The memory repo stores context files that get read at the start of each session — project state, editorial standards, decisions made.</td>
</tr>
</tbody>
</table>
<h2>The process</h2>
<div class="process-steps">
<div class="step">
<span class="step-num">1</span>
<div class="step-content">
<h3>Framework first</h3>
<p>The framework came before the site. A structured reading sequence — <a class=\"xl\" href=\"kropotkin.html\">Kropotkin</a> → <a class=\"xl\" href=\"gramsci.html\">Gramsci</a> → Benjamin → Debord → <a class=\"xl\" href=\"baudrillard.html\">Baudrillard</a> → <a class=\"xl\" href=\"deleuze-guattari.html\">Deleuze &amp; Guattari</a> → <a class=\"xl\" href=\"hardt-negri.html\">Hardt &amp; Negri</a> — produced a working theory about power, capture, and the commons. That theory is the backbone. Everything on this site is either an application of the framework to a specific domain, or evidence for a claim the framework makes.</p>
<p>If you're building something similar: start with the framework. The site is an artifact of having a coherent argument. Without the argument, you just have content.</p>
<p>One thinker not in that original reading sequence who should have been: <a class="xl" href="freire.html">Paulo Freire</a>. His question — what does it take for people to understand their situation as a situation rather than as fate, so that they can act on it? — is the pedagogical question this entire project is trying to answer at the level of content. Every editorial choice about what to name, how to pose a problem, when to use "you" and when to use "we," is a Freirean choice. The framework explains what is happening. Freire explains what it takes for that explanation to become action rather than just understanding.</p>
</div>
</div>
<div class="step">
<span class="step-num">2</span>
<div class="step-content">
<h3>Editorial voice before the first piece</h3>
<p>Before writing anything, we established the editorial standards: eighth-grade reading level, concrete before abstract, no jargon (or jargon always defined inline), no false balance, link density high. The voice was defined by negation as much as aspiration — not academic, not activist-coded, not dumbed down.</p>
<p>The standards got codified in a <code>prompts.md</code> file in the memory repo. Every new piece references them. Consistency across fifty pieces required having written them down before piece one.</p>
</div>
</div>
<div class="step">
<span class="step-num">3</span>
<div class="step-content">
<h3>Build in series, not one-offs</h3>
<p>Every piece was commissioned as part of a series with a defined arc — not as a standalone article. The series structure forces coherence: each piece has to do work in relation to the others, not just be interesting on its own. Series I covers structural failure. Series II covers capture. Series III covers the commons in practice. Series IV covers the world the framework initially missed. The case studies are a fifth layer.</p>
<p>This also made cross-linking natural rather than forced. When pieces are designed to connect, the links feel like navigation rather than SEO.</p>
</div>
</div>
<div class="step">
<span class="step-num">4</span>
<div class="step-content">
<h3>Fact-check before publishing</h3>
<p>Any specific date, paper title, statistic, or empirical claim gets verified before a piece goes live. We caught several errors in early drafts — a Hardin recantation that was actually a three-stage process, not a single 1994 paper; a Törbel commons that dated to 1224, not 1483. The fact-checking protocol is codified and lives in the project's memory files. Gaps are flagged rather than papered over.</p>
</div>
</div>
<div class="step">
<span class="step-num">5</span>
<div class="step-content">
<h3>Ship, then iterate</h3>
<p>Every piece went live as soon as it was solid enough to be useful, not when it was perfect. The site has been substantially revised multiple times — cross-linking passes, design updates, additional entry points, corrections. Treating it as a living document rather than a publication means it gets better rather than staler over time.</p>
<p>TASKS.md in the repo tracks what's next. It's public — if you want to see what's in progress, that's the place to look.</p>
</div>
</div>
</div>
<div class="honest-box">
<span class="honest-label">On AI's role — honestly</span>
<h3>What Claude did and didn't do</h3>
<p>Every piece on this site was directed, shaped, and reviewed by a human author. Claude drafted — sometimes extensively — and the author edited, pushed back, fact-checked, redirected, and took responsibility for the final product. The distinction matters: the framework, the editorial judgments, the choice of what to include and what to cut — those are human decisions. The velocity of production, the consistency of the design system, the code — Claude contributed substantially to all of those.</p>
<p>AI writing assistance produces slop at the default settings. Getting something useful requires: a coherent framework to constrain it, editorial standards to measure against, pushback when it drifts toward the generic, and a human who can tell the difference between a good sentence and a plausible one. Claude is good at plausible. The author's job is to enforce good.</p>
<p>We're also using Claude as an agent — <a class="xl" href="https://github.com/jedelman/commons-wire" rel="noopener" target="_blank">commons-wire</a> runs a daily pipeline that scores news against the framework and generates short analysis posts. The agent is more autonomous there, with human review before anything gets highlighted. The approach is to use AI to extend what one person can do, not to replace the judgment that makes the output worth reading.</p>
<p>If you're building something similar and want to use AI effectively: the memory repo pattern matters. Claude doesn't remember between sessions. Codifying your editorial standards, project state, and decisions in files that get read at session start is what makes multi-session AI collaboration coherent rather than repetitive.</p>
</div>
<h2>How to fork this for your city or movement</h2>
<div class="theory-note">
<span class="theory-note-label">The point</span>
<p>The goal was never for this to be <em>the</em> application of the framework — just an example of what applying it looks like. A version of this for Detroit's auto industry history, for Appalachian energy extraction, for Indigenous land governance, for a specific labor union's organizing context — each of those would be more useful to its audience than this general version is. Fork it.</p>
</div>
<ul class="fork-step-list">
<li>
<span class="fork-num">01</span>
<span><strong>Fork the GitHub repo.</strong> <a class="xl" href="https://github.com/jedelman/power-explained" rel="noopener" target="_blank">github.com/jedelman/power-explained</a>. All the HTML, CSS, and content is there. Enable GitHub Pages on your fork (Settings → Pages → Branch: main, root). Your site is live in about two minutes, at <code>yourusername.github.io/power-explained</code>.</span>
</li>
<li>
<span class="fork-num">02</span>
<span><strong>Replace the framework with yours.</strong> The articles are applications of a specific political framework. Your fork should apply your framework — or none at all, if you're building a straightforward local guide. The design system is reusable regardless of content.</span>
</li>
<li>
<span class="fork-num">03</span>
<span><strong>Write your editorial standards before you start.</strong> What reading level? What voice? What's in scope and out? What are you willing to say that most publications won't? Write it down. It's the most important thing you'll do before the first piece.</span>
</li>
<li>
<span class="fork-num">04</span>
<span><strong>If you're using AI: set up a memory repo.</strong> Claude doesn't remember between sessions. The solution is a simple GitHub repo that stores your editorial standards, project state, and decisions in plain text files — and gets cloned and read at the start of each session. The prompt below will walk an agent through setting yours up.</span>
</li>
</ul>
<div style="background:#1a1714;color:#f0e8d8;padding:2rem;margin:1.5rem 0;position:relative;">
<span style="font-family:var(--mono);font-size:0.55rem;letter-spacing:0.14em;text-transform:uppercase;color:rgba(240,232,216,0.4);display:block;margin-bottom:1rem;">Agent prompt — memory repo setup</span>

<pre id="mem-prompt-content" style="font-family:var(--mono);font-size:0.76rem;line-height:1.8;color:rgba(240,232,216,0.88);white-space:pre-wrap;margin:0;">You are helping me set up a persistent memory system for AI-assisted writing and development.
The goal: a GitHub repo that stores project context in plain text files,
cloned and read by Claude at the start of each session so it has consistent
knowledge of my project, editorial standards, and prior decisions.

My project: <span style="color:#d4604f;font-weight:600;">[BRIEF DESCRIPTION OF YOUR PROJECT]</span>
My GitHub username: <span style="color:#d4604f;font-weight:600;">[USERNAME]</span>

Please do the following:

1. REPO STRUCTURE
Create a GitHub repo named "claude-memory" with this file structure:
  context/
    user.md       — my name, working style, communication preferences
    projects.md   — active projects, their status, key decisions made
  protocols/
    (empty to start — I'll add fact-checking and other protocols here)
  conversations/
    (empty to start — session logs go here)
  README.md       — explains the system and how to use it

2. POPULATE THE FILES
For context/user.md: ask me 3–5 questions about my working style and preferences,
then write the file based on my answers.

For context/projects.md: ask me to describe my current project in plain terms —
what it is, what's been built, what's next — then write the file in a structured
format with sections for status, key decisions, and outstanding tasks.

For README.md: write a short explanation of the memory system, including the
session startup instructions Claude should follow (clone the repo, read context/
files, write a session log to conversations/ before the context fills up).

3. SESSION STARTUP SNIPPET
After creating the repo, write a short snippet I can paste into Claude's user
preferences that instructs it to clone and read the memory repo at the start of
every conversation. Include placeholder text for my GitHub token.

4. FIRST SESSION LOG
Write a starter entry in conversations/ dated today that records: what the project
is, what the initial context files contain, and the date the system was initialized.

Ask me any clarifying questions you need before starting. Confirm each file before
writing it.</pre>
</div>
<ul class="fork-step-list" style="margin-top:0;">
<li>
<span class="fork-num">05</span>
<span><strong>Build in series, not one-offs.</strong> Plan at least three pieces before writing any of them. The connections between pieces are often more important than the pieces themselves. A framework explains by accumulation, not by individual article.</span>
</li>
<li>
<span class="fork-num">06</span>
<span><strong>Fork commons-wire for your news pipeline.</strong> <a class="xl" href="https://github.com/jedelman/commons-wire" rel="noopener" target="_blank">github.com/jedelman/commons-wire</a>. Replace the feed list with sources relevant to your context. Replace FRAMEWORK.md with your framework. The scoring pipeline runs daily via GitHub Actions at no cost.</span>
</li>
</ul>
<h2>How to contribute to this site</h2>
<div class="contrib-grid">
<div class="contrib-cell shade">
<span class="contrib-label">Content contributions</span>
<p>Open a GitHub issue with your proposed piece — what argument it makes, how it connects to existing content, what evidence it draws on. If it fits the framework and passes the editorial bar, it can go in.</p>
<p>The editorial bar: eighth-grade reading level, concrete before abstract, every empirical claim sourced, no jargon without inline definition, no false balance, no academic hedging.</p>
</div>
<div class="contrib-cell">
<span class="contrib-label">Case studies</span>
<p>The most useful contributions are local case studies — places where the framework is visible in action. If you have deep knowledge of a city, region, sector, or movement, a case study applying the framework to that context is more valuable than another abstract piece.</p>
<p>See the <a class="xl" href="case-studies.html">existing case studies</a> for the format and approach.</p>
</div>
<div class="contrib-cell">
<span class="contrib-label">Corrections</span>
<p>If you find a factual error — a date, a paper title, a statistic, a claim that doesn't hold up — open a GitHub issue with the correction and your source. We'll fix it and add it to the fact-checking log.</p>
<p>Getting facts right matters more than protecting the site's authority. Corrections are not embarrassments; they're the process working.</p>
</div>
<div class="contrib-cell shade">
<span class="contrib-label">Translations and adaptations</span>
<p>If you want to translate the framework into another language, or adapt specific pieces for a different national context, reach out via GitHub. The goal is wider reach, not protecting this particular version of the argument.</p>
<p>Adaptations that apply the framework to a specific country, region, or sector are especially valuable — and can live in their own repos, linked from here.</p>
</div>
</div>
<p style="margin-top:2.5rem;">The repo is at <a class="xl" href="https://github.com/jedelman/power-explained" rel="noopener" target="_blank">github.com/jedelman/power-explained</a>. Everything is public. Issues and pull requests are open.</p>
</div><!-- /body-text -->
<div class="read-more">
<div class="read-more-inner">
<h3>Start using the tools</h3>
<p>The framework in practice.</p>
<div class="read-links">
<a class="read-link-btn" href="your-city.html">Your city: a power brief</a>
<a class="read-link-btn" href="build-the-commons.html">Build the commons</a>
<a class="read-link-btn" href="start-here.html">Five-minute overview</a>
<a class="read-link-btn" href="glossary.html">Glossary</a>
<a class="read-link-btn" href="case-studies.html">Case studies</a>
<a class="read-link-btn" href="index.html">Back to all pieces</a>
</div>
</div>
</div>
<div class="article-footer">
<a class="back-link" href="index.html">Back to all pieces</a>
</div>` }} />

      {MEM_PROMPT && (
        <div style={{ maxWidth: 'var(--max)', margin: '2rem auto', padding: '0 var(--gutter) 4rem' }}>
          <div style={{ background: '#1a1714', color: '#f0e8d8', padding: '2.5rem', position: 'relative' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,232,216,0.4)', display: 'block', marginBottom: '1.25rem' }}>Memory prompt</span>
            <button
              onClick={copy}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                background: 'none', border: '1px solid rgba(240,232,216,0.25)',
                color: copied ? '#d4604f' : 'rgba(240,232,216,0.5)',
                padding: '0.4rem 0.75rem', cursor: 'pointer',
              }}
            >{copied ? 'Copied' : 'Copy'}</button>
            <pre style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', lineHeight: 1.8, color: 'rgba(240,232,216,0.88)', whiteSpace: 'pre-wrap', margin: 0 }}>{MEM_PROMPT}</pre>
          </div>
        </div>
      )}
    </Layout>
  )
}
