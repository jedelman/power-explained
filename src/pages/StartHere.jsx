import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function StartHere() {
  return (
    <Layout
      title="Start Here — Power Explained"
      description="What this project is, what it argues, and where to begin. A five-minute introduction to the whole thing."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span className="hero-eyebrow">Start Here — Five Minutes — The Whole Argument</span>
          <h1 dangerouslySetInnerHTML={{ __html: `What This Is<br />and <em>Why It Matters</em>` }} />
          <p className="hero-dek">Something is wrong with how the world works. Not wrong like bad luck, and not wrong like a villain. Wrong like a pattern — one that keeps producing the same outcomes for the same reasons. This project is about naming that pattern, tracing where it came from, and making visible the alternatives that already exist.</p>
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<div class="section-kicker"><span class="section-num">01</span><div class="section-rule"></div></div>
<h2>The one-sentence version</h2>
<p>Every system that extracts value from communities depends on a productive substrate — shared resources, shared labor, shared knowledge, shared trust — that it cannot produce itself. That substrate is <strong>the common</strong>. And the excess it generates beyond what any extraction system can contain is where every alternative begins.</p>
<p>That's it. Everything else on this site is either evidence for that claim, an exploration of what it means in practice, or an argument about what to do with it.</p>
<div class="section-kicker"><span class="section-num">02</span><div class="section-rule"></div></div>
<h2>What that actually means</h2>
<p>Your city functions because people know their neighbors' names, look out for each other, share informal knowledge about what works and what doesn't. None of that shows up on a balance sheet. All of it is required for the city to work at all.</p>
<p>The economy functions because someone is raising the next generation of workers, caring for the sick, maintaining the social fabric that makes cooperation possible. That labor — almost entirely performed by women, often unpaid or underpaid — is the hidden engine of everything else.</p>
<p>The internet functions because of accumulated shared knowledge: open source software, public protocols, decades of freely shared code that private companies now build profitable products on top of.</p>
<p>In each case: a community builds something shared. A system of extraction routes value from that shared thing through private ownership or state control before it reaches the people who built it. And the extraction is justified by a story — about efficiency, about nature, about how things have to be — that makes the arrangement seem inevitable rather than chosen.</p>
<p><a class="xl" href="glossary.html#alibi">That justification story is called an alibi.</a> <a class="xl" href="gramsci.html">The process that makes it feel like common sense is called hegemony.</a> The shared thing being extracted from is the common. And the question this site keeps asking is: what happens when communities stop routing through the extraction system and govern the common themselves?</p>
<div class="pull">
        The commons isn't a relic.<br/>It's <strong>what's already keeping things running</strong><br/>while the system takes credit.
      </div>
<div class="section-kicker"><span class="section-num">03</span><div class="section-rule"></div></div>
<h2>What the evidence shows</h2>
<p><a class="xl" href="kropotkin.html">Cooperation is the dominant survival strategy</a> in the evolutionary record — not competition. Communities have governed shared resources collectively for centuries without collapse — <a class="xl" href="hardin-was-wrong.html">the "tragedy of the commons" was never describing commons governance, it was describing the absence of it.</a> The commons are being built right now, in hundreds of cities: community land trusts, credit unions, worker cooperatives, mutual aid networks, federated digital infrastructure.</p>
<p>This isn't ideology. It's an empirical record. <a class="xl" href="ostrom.html">Elinor Ostrom won the Nobel Prize in Economics for documenting it.</a> The case studies — <a class="xl" href="case-study-zapatistas.html">Zapatistas</a>, <a class="xl" href="case-study-rojava.html">Rojava</a>, <a class="xl" href="case-study-india.html">India's cooperatives</a>, <a class="xl" href="case-study-occupy.html">Occupy</a> — are not inspiration. They're data.</p>
<div class="section-kicker"><span class="section-num">04</span><div class="section-rule"></div></div>
<h2>What this project is not</h2>
<p>It's not a party platform. It's not advocating for any specific electoral strategy or revolutionary program. It doesn't tell you who to vote for or whether to vote.</p>
<p>It's not nostalgic. The commons that existed before enclosure were real, but going back is not the point. What's being built now is different, adapted to different conditions, and more interesting.</p>
<p>It's not utopian. Every case study here includes the failures, the contradictions, the ways things went wrong. The argument is not that alternatives are perfect. It's that they're real, that they work well enough to matter, and that the main barrier to building more of them is not human nature or economic law — it's a set of institutional arrangements and the stories told to make them seem permanent.</p>
<div class="section-kicker"><span class="section-num">05</span><div class="section-rule"></div></div>
<h2>Where to go from here</h2>
<p>Depends on where you're coming from. Pick the door that fits.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="" />
      </ArticleWrap>
    </Layout>
  )
}
