import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function WhoPaysForTheNextShift() {
  return (
    <Layout
      title="Who Pays for the Next Shift — Power Explained"
      description="Alexandra Kollontai asked the question no one on the left wanted to answer: who does the work that makes all other work possible? And why doesn't it show up in any ledger?"
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Who Pays for the Next Shift` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Someone has to feed you every day. Someone has to take care of you when you're sick. Someone has to raise your children so the next generation of workers can exist. Someone has to make the home a place where you can recover enough from one day's work to show up for the next.</p>
<p>In 1909, Alexandra Kollontai asked: what if we called that work what it is?</p>
<p>Not natural. Not love. Not a woman's duty. Labor. Stolen labor.</p>
<p>The cooking, cleaning, childcare, elder care that women performed every day — capitalism ran on it. Got it for free. And the profit margins on everything else depended on that theft.</p>
<h2>The calculation that requires theft</h2>
<p>Here's what the system needs to hide: if every act of cooking, childcare, and elder care had to be purchased on the market at market rates, the profit margin on almost everything else would collapse. The system doesn't just ignore this labor. It depends on ignoring it.</p>
<p>It depends on calling it love instead of work. Natural instead of labor. A woman's nature instead of a stolen surplus.</p>
<p>Once you see this, you see the theft everywhere. Every paid worker is only affordable because someone else — almost always a woman — is working for free to make that worker exist and function. The profit isn't just on the worker's labor. It's on the invisible labor that makes that worker possible.</p>
<div class="pull">
Every profit calculation<br/><strong>assumes</strong> care work is free.<br/>That's not natural. That's theft.
</div>
<h2>A different way to route it</h2>
<p>Kollontai didn't ask for wages for housework. She asked for something bigger: reorganize how reproductive labor gets done.</p>
<p>Communal kitchens. Collective childcare. Public laundries. Shared care for the elderly and sick. Route that labor through collective institutions. Make it social, visible, shared, and compensated.</p>
<p>This changes several things at once. The labor becomes countable and valued. Women get freed from the double shift — the paid work and the unpaid work on top of it. And the social architecture changes in ways that ripple outward. When people eat together, raise children together, care for each other's elderly together, the relationships that result are different from what the isolated nuclear family produces.</p>
<p>The isolated family is a production unit. The commune is a form of life with different possibilities.</p>
<h2>What happened when she tried</h2>
<p>Kollontai was part of the Russian Revolution of 1917. She held senior positions in the early Soviet government — the only woman to do so. She watched the revolution consume itself from the inside.</p>
<p>Before 1917, revolutionary energy ran through the soviets — workers' councils that coordinated action at the local level. Distributed. Local. Intelligent.</p>
<p>After 1917, the party progressively absorbed the soviets. Decisions that had been made at the factory level were routed through party hierarchy. Local councils became administrative units executing central directives instead of decision-making bodies expressing local knowledge.</p>
<p>In 1921, Kollontai published <em>The Workers' Opposition</em> — a report written at personal risk on what had gone wrong. The distributed intelligence of the revolutionary moment was replaced by centralized command. The soviets were the revolutionary form. The party that claimed to act in their name became the capture mechanism.</p>
<p>This is the template. Every subsequent attempt to route a revolutionary movement through a centralized party structure has repeated this pattern. Not because anyone was evil. Because the architecture of centralization produces this outcome regardless of intention.</p>
<h2>The question she left</h2>
<p>Kollontai saw the revolution betray itself. She documented the mechanism. But she didn't fully ask: what if the state-managed care she envisioned becomes another capture mechanism? What if communal kitchens run by the state are still run by the state?</p>
<p>She knew the party could betray you. She lived it. She didn't fully theorize why state-managed anything was structurally prone to the same failure.</p>
<p>That question — how do you build collective reproductive infrastructure that doesn't get captured — is one the next pieces in this series take further.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="the-outside-capital-needs.html">← Previous</a>
          <a href="the-other-and-the-outside.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
