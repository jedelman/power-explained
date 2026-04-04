import { useState, useRef } from 'react'
import Layout from '../components/Layout'

const PROMPT = `COMMONS FRAMEWORK — ANALYTICAL CONTEXT
Source: power-explained.jason-edelman.org

---

CORE CLAIMS

1. Systemic problems are design features, not failures. They serve someone.
   Before analyzing solutions, identify who benefits from the problem persisting.

2. The commons — a resource governed collectively by a defined community for shared
   benefit — is the practical alternative to both private enclosure and state control.

3. "The tragedy of the commons" is empirically wrong. Elinor Ostrom documented
   hundreds of communities governing shared resources sustainably without private
   ownership or state administration. Hardin's model assumed no communication,
   no rules, no history. Real commons have all three.

4. Meaningful change comes from building alternatives, not from electoral
   politics alone. Parallel institutions, not captured ones.

---

CORE VOCABULARY

Enclosure: converting a shared resource into private property, denying access
to those who depended on it. Origin: English common land, 16th-19th centuries.
Ongoing forms: housing (land speculation), data (platform monopolies), spectrum
(FCC licensing), genetic code (biotech patents), care work (unpaid extraction),
urban space (permitting costs), compute (data center infrastructure).

Commons: a resource governed by a defined community according to rules that
community creates and enforces. Neither market commodity nor state property.
Stable commons have: clear boundaries, rules matched to local conditions,
collective rule-making, monitoring, graduated sanctions, and conflict resolution.
(Ostrom's design principles.)

Rent extraction: value extracted from ownership of a resource rather than from
productive work. Enclosure creates rent opportunities; commons eliminate them.
Landlords, platform monopolies, patent holders, spectrum licensees all extract rent.

Hegemony (Gramsci): dominant power maintained through consent as much as coercion.
The existing order appears natural, inevitable, common sense. Challenging it requires
building alternatives that make the dominant framework look like a choice, not a fact.

Mutual aid: reciprocal material support organized within a community. Not charity
(top-down, one-directional). A commons governance structure for care and survival.

---

ANALYTICAL MOVES

For any power situation, ask:
- Who benefits from this problem persisting?
- What resource is being enclosed, and by what mechanism?
- Who bears costs that don't appear in the price?
- What would collective governance of this resource look like?
- Where is the alternative already being built?

Enclosure pattern:
  [shared resource] -> [privatization mechanism] -> [rent extracted by] -> [cost borne by]

Commons pattern:
  [shared resource] -> [governance structure] -> [who has access] -> [how rules are made]

---

APPLIED DOMAINS

Housing: Community land trusts separate land ownership from housing ownership.
Land held by nonprofit trust permanently; residents own or rent the housing.
Removes land from the speculative market. 300+ operating in the US.

Energy: Energy cooperatives — member-owned, democratically governed utilities.
Surplus returned to members, not extracted by shareholders.

Knowledge: Open-source software, Wikipedia, scientific commons. Produced
collectively, held openly. Enclosed by platforms after the fact.

Urban space: Public right-of-way, parks, by-right zoning as commons access
to the built environment. Enclosed by permitting costs, impact fees, private capture.

Finance: Credit unions, CDFIs — member-owned capital. Same functions as banks;
different governance; no shareholder extraction.

Care: Mutual aid networks — structural reciprocity, not charity. Horizontally
organized, community-governed.

Compute: Data center infrastructure, spectrum, AI training data. Currently in
enclosure. Training data drawn from the commons (the open web); value captured
privately. The next contested terrain.

---

THINKERS

Elinor Ostrom — Governing the Commons (1990). Empirical refutation of Hardin.
Design principles for stable commons institutions.

David Graeber — mutual aid, debt as power, the commons as anthropological baseline.

Antonio Gramsci — hegemony, organic intellectuals, the cultural work required
before structural change is possible.

Peter Kropotkin — Mutual Aid: A Factor of Evolution (1902). Cooperation as
evolutionary advantage. The commons predates capitalism.

Michael Hardt & Antonio Negri — the multitude, immaterial commons, commons
production in the information economy.

Sylvia Wynter — who counts as human; whose knowledge grounds the framework;
the outside that hegemony cannot fully incorporate.

---

WHAT THIS FRAMEWORK DOES NOT CLAIM

- It does not claim electoral politics is useless, only insufficient alone.
- It does not claim all commons succeed. Ostrom's principles describe what makes
  them succeed or fail.
- It does not claim the state is always opposed to the commons. State action can
  protect commons or enable enclosure. Ask which it's doing.
- It does not prescribe a single political path. Multiple traditions converge here:
  anarchist (Kropotkin, Graeber), Marxist (Gramsci, Hardt-Negri),
  institutionalist (Ostrom), decolonial (Wynter).

---

Apply this framework. Flag when a situation doesn't fit it. Note where the
alternative is already being built. Do not soften the core claims to seem
more palatable. The point is analytical precision, not reassurance.`

export default function AgentContext() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(PROMPT).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <Layout
      title="Agent Context — Power Explained"
      description="The commons framework, machine-optimized. Load this before asking an agent to reason about power, enclosure, or collective alternatives."
      seriesTag="Tools"
    >
      <div dangerouslySetInnerHTML={{ __html: `<div class="body-text">
<p>Most AI agents are initialized with system prompts written by whoever's paying the API bill. That context shapes what the agent can see — which problems appear natural, which solutions appear available, which questions don't get asked.</p>
<p>This is a counter-context. It gives an agent the commons framework as an analytical lens before it starts working: a structured account of how enclosure operates, what collective alternatives look like, and how to recognize one from the other. Not persuasion. Analytical scaffolding.</p>
<div class="theory-note">
<span class="theory-note-label">What this is for</span>
<p>Load this as a system message, a user turn, or an attached context document — whichever your platform supports. Then give the agent a task. It will bring the framework to the task rather than bringing the default.</p>
<p>Useful for: analyzing a policy proposal, mapping who benefits from a local problem, researching whether a commons institution exists in your domain, drafting advocacy material, or building agents that work from this frame.</p>
</div>
<h2>Use cases</h2>
<ul class="use-list">
<li><span class="use-num">01</span>Give an agent a power analysis task — "Who benefits from housing costs staying high in [city]?" — and it will apply the enclosure pattern rather than defaulting to supply-and-demand.</li>
<li><span class="use-num">02</span>Ask an agent to evaluate a proposed policy. It will ask who bears costs that don't appear in the price, not just whether the policy is politically feasible.</li>
<li><span class="use-num">03</span>Use it as the analytical base for any agent you build — content production, research, organizing support — that should reason from this framework rather than against it.</li>
</ul>

<div class="theory-note">
<span class="theory-note-label">A note on what this doesn't do</span>
<p>This gives an agent an analytical lens. It doesn't give it knowledge of your specific situation, city, or domain — you still need to provide that. And it doesn't replace your judgment: agents applying any framework will miss local context, relationship texture, and political timing that you know and they don't.</p>
<p>The framework is on this site in full. If an agent produces analysis that surprises you or seems off, the underlying argument is available to check against: <a class="xl" href="hardin-was-wrong.html">Hardin Was Wrong</a>, <a class="xl" href="the-commons-they-never-stopped-building.html">The Commons They Never Stopped Building</a>, <a class="xl" href="the-agent-and-the-commons.html">The Agent and the Commons</a>.</p>
</div>
<div class="article-footer">
<a class="back-link" href="contents.html">All tools and content</a>
</div>
<div class="read-more">
<div class="read-more-inner">
<h3>The framework in full</h3>
<p>The context document above is a compressed version. Read the underlying argument.</p>
<div class="read-links">
<a class="read-link-btn" href="hardin-was-wrong.html">Hardin Was Wrong</a>
<a class="read-link-btn" href="the-commons-they-never-stopped-building.html">The Commons They Never Stopped Building</a>
<a class="read-link-btn" href="the-agent-and-the-commons.html">The Agent and the Commons</a>
<a class="read-link-btn" href="ostrom.html">Ostrom</a>
<a class="read-link-btn" href="build-the-commons.html">Build the Commons</a>
<a class="read-link-btn" href="your-city.html">Your City</a>
</div>
</div>
</div>
</div>` }} />

      <div style={{ maxWidth: 'var(--max)', margin: '0 auto', padding: '0 var(--gutter) 4rem' }}>
        <div className="prompt-box" style={{ background: '#1a1714', color: '#f0e8d8', padding: '2.5rem', position: 'relative' }}>
          <span className="prompt-label" style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,232,216,0.4)', display: 'block', marginBottom: '1.25rem' }}>Commons framework — agent context document</span>
          <button
            onClick={copy}
            style={{
              position: 'absolute', top: '1.25rem', right: '1.25rem',
              fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              background: 'none', border: '1px solid rgba(240,232,216,0.25)',
              color: copied ? '#d4604f' : 'rgba(240,232,216,0.5)',
              borderColor: copied ? 'rgba(212,96,79,0.5)' : 'rgba(240,232,216,0.25)',
              padding: '0.4rem 0.75rem', cursor: 'pointer',
            }}
          >{copied ? 'Copied' : 'Copy'}</button>
          <pre style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', lineHeight: 1.8, color: 'rgba(240,232,216,0.88)', whiteSpace: 'pre-wrap', margin: 0 }}>{PROMPT}</pre>
        </div>
      </div>
    </Layout>
  )
}
