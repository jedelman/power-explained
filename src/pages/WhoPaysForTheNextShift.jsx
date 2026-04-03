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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Alexandra Kollontai asked the question that everyone else on the left was avoiding: what about the work that happens inside the house?</p>
<p>In 1909, she published <em>The Social Basis of the Woman Question</em>. The argument was simple and, at the time, radical. The cooking, cleaning, childcare, and care for the sick and elderly that women performed every day — this was not natural. It was not a private matter. It was labor. And it was labor that capitalism ran on, without paying for it.</p>
<p>Think about what it takes to produce a worker. Someone has to feed that person every day. Someone has to take care of them when they're sick. Someone has to raise their children so the next generation of workers can exist. Someone has to make the home a place where a person can recover enough from one day's work to show up for the next. In the capitalist economy of Kollontai's time — and in most economies since — that someone was almost always a woman. And almost always, she was paid nothing for it.</p>
<p>This isn't incidental. It's structural. The entire profit calculation depends on reproductive labor being free. If every act of cooking, childcare, and elder care had to be purchased on the market at market rates, the profit margin on almost everything else would collapse. The system doesn't just ignore this labor. It depends on ignoring it.</p>
<h2>The routing answer</h2>
<p>Kollontai's solution wasn't simply to pay women for housework. It was to reorganize how reproductive labor gets done.</p>
<p>Communal kitchens. Collective childcare. Public laundries. Shared care for the elderly and sick. Instead of each family unit performing reproductive labor in isolation — each household cooking separately, each mother raising children alone — you route that labor through collective institutions. You make it social, visible, shared, and compensated.</p>
<p>This changes several things at once. It makes the labor countable and valued. It frees women from the <a class="xl" href="glossary.html#double-shift">double shift</a> — the paid work and the unpaid work on top of it. And it changes the social architecture in ways that ripple outward. When people eat together, raise children together, and care for each other's elderly together, the relationships that result are different from the relationships produced by isolated nuclear family units. The isolated family is a production unit that reproduces the next generation of workers and generates consumption. The commune is something else — a form of life with different possibilities.</p>
<div class="pull">
        Every profit calculation <strong>assumes</strong><br/>that care work costs nothing.
      </div>
<h2>Watching the revolution fail</h2>
<p>Kollontai was part of the Russian Revolution of 1917. She held senior positions in the early Soviet government — the only woman to do so. And she watched, from the inside, as the revolution consumed itself.</p>
<p>In 1921, she published <em>The Workers' Opposition</em>. It was a report, written at personal risk, on what had gone wrong. The argument: the Bolshevik party had captured the revolution's routing architecture.</p>
<p>Before 1917, the revolutionary energy in Russia ran through the soviets — the workers' councils that coordinated action at the local level. The soviets were distributed. They processed local knowledge locally. Different factories, different cities, different industries — each with its own council, connected to others but not commanded by any of them. This was, for a moment, exactly the kind of distributed coordination <a class="xl" href="the-outside-capital-needs.html">Luxemburg had described in the mass strike</a>.</p>
<p>After 1917, the party progressively absorbed the soviets. Decisions that had been made at the factory level were routed through the party hierarchy. Local councils became administrative units executing central directives rather than decision-making bodies expressing local knowledge. The distributed intelligence of the revolutionary moment was replaced by centralized command.</p>
<p>This is not just a story about political betrayal. It's a story about a structural tendency: centralized revolutionary organizations systematically destroy the distributed intelligence they claim to represent. They don't have to be corrupt or evil to do this. The architecture of centralization produces this outcome regardless of intention.</p>
<div class="callout">
<span class="callout-label">Why this matters for authoritarian socialism</span>
<p>Kollontai documents, from the inside and in real time, the mechanism by which revolutionary movements get captured by their own leadership. The soviets — distributed, self-organizing, locally intelligent — were the revolutionary form. The party that claimed to act in their name became the capture mechanism.</p>
<p>This is the template. Every subsequent attempt to route a revolutionary movement through a centralized party structure has repeated this pattern. The advanced track explores exactly why — starting with <a href="the-party-ate-the-revolution.html" style="color:var(--red)">The Party Ate the Revolution</a>.</p>
</div>
<h2>The limit she didn't fully solve</h2>
<p>Kollontai's solution to reproductive labor assumed the state could be trusted to manage collective care without becoming a new form of domination. Communal kitchens run by the state are still run by the state. Collective childcare institutions are still institutions — with their own hierarchies, their own incentives, their own potential for becoming another capture mechanism.</p>
<p>She knew the party had betrayed the revolution. She saw it happen. But she didn't fully theorize why state-managed care was structurally prone to the same failure. That question — how do you build collective reproductive infrastructure that doesn't get captured by the institutions that manage it — is one that <a class="xl" href="what-they-burned.html">later thinkers in this series will take further</a>.</p>
<p>What Kollontai got right was the question itself — the most important thing. The work that produces workers is political. The labor that happens inside houses, outside ledgers, below the threshold of what the economy officially counts — that labor is where the system hides its dependence. Making it visible is the first step to changing anything real.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
