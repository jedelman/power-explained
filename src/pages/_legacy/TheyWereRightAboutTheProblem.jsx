import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function TheyWereRightAboutTheProblem() {
  return (
    <Layout
      title="They Were Right About the Problem — Power Explained"
      description="The people who said capitalism needs to go were not wrong. The diagnosis holds. The problem is what some people concluded from it."
      seriesTag="Against Authoritarianism — Series III"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `They Were Right About the Problem` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Let's start with agreement: the people who looked at capitalism and said "this needs to go" were not wrong.</p>
<p>They were looking at child labor in textile mills. Workers dying in coal mines at thirty. Empires extracting entire continents to enrich a handful of European countries. A system that kept producing famines in places that were producing plenty of food.</p>
<p>Their analysis: this isn't a bug. It's the feature. The system works exactly as designed — the design is just not for us.</p>
<p>That analysis holds. A hundred and fifty years of reform, regulation, and social democracy have softened the edges. They have not changed the architecture. The system still runs on an outside — on labor, land, and resources it encloses, extracts from, and moves on from when depleted. The outside is still mostly people who aren't white, aren't in the Global North, and don't get to set the terms. The math <a class="xl" href="the-outside-capital-needs.html">Luxemburg identified in 1913</a> is still the math.</p>
<p>The basic critique is widely understood now: capitalism is structurally exploitative, reform is insufficient, the whole architecture needs to change.</p>
<p>On the substance, that analysis is correct. The problem isn't the diagnosis. The problem is the prescription.</p>
<h2>The argument for the strong solution</h2>
<p>When the problem is big enough, the strong solution is tempting. If liberal democracy is just capitalism with better PR, then the solution has to actually break with capitalism — something that can hold off the counterrevolution, reorganize the economy at scale, survive the violent response from people being dispossessed of power.</p>
<p>This is the argument for authoritarian socialism. Most serious people in this tradition have moved past "Stalin was good, actually." The argument is more sophisticated.</p>
<p>The historical socialist states, for all their brutality, at least broke with capitalism. They industrialized countries capitalism had kept underdeveloped. They provided education, healthcare, and housing at scale. They demonstrated an alternative existed. The brutality was real, but has to be understood in context: every major capitalist power was trying to destroy the Soviet project from the moment it began.</p>
<p>This position doesn't require uncritical defense of Gulags. It requires concluding that concentrated state power, while ugly, was necessary. The alternative to authoritarian socialism wasn't libertarian communism. It was just capitalism.</p>
<p>The argument is not stupid. It deserves a real answer, not a dismissal.</p>
<div class="pull">
The diagnosis is correct.<br/>The <strong>prescription</strong> is where it goes wrong.
</div>
<h2>The structural error</h2>
<p>Authoritarian socialism nationalized the means of production. It did not end the separation of workers from control over their own labor.</p>
<p>Factory managers were still appointed from above. Production targets handed down from central planning bodies. Workers still showed up, did what they were told, and went home. The form of domination changed. The basic structure — workers controlled by managers — did not.</p>
<p>The state owned everything. But who controlled the state? Increasingly, a single party. Within that party, increasingly, a leadership that could not be removed, questioned, or overruled. The workers who were supposed to be the subject of socialist liberation became the object of socialist state administration — which is a different thing, and in practice often antagonistic.</p>
<p>This critique wasn't just made from outside. It was made from inside, by committed socialists, before the pattern fully established itself. The people who saw it coming had a name. We'll get to them.</p>
<div class="callout">
<span class="callout-label">Why this matters now</span>
<p>The authoritarian socialist tradition isn't just history — it's actively recruited from. Movements that correctly identify capitalism as the problem sometimes conclude the only serious response is Leninist: build the <a class="xl" href="glossary.html#vanguard">vanguard party</a>, seize state power, hold it against counterrevolution.</p>
<p>If that prescription is structurally wrong — not just tactically wrong, but architecturally wrong — then following it doesn't fail. It destroys the things it was supposed to build. That's worth understanding before committing to it.</p>
</div>
<h2>What we're asking</h2>
<p>Is the authoritarian socialist model the only way to break with capitalism? Or does it represent a specific architectural error that reliably produces specific bad outcomes — regardless of the intentions of the people who build it?</p>
<p>And if it is an error: what's the alternative?</p>
<p>Not "liberal democracy" — that's not an alternative, it's the problem. Not "wait for perfect conditions" — conditions are never perfect and that's a recipe for nothing.</p>
<p>Something real. With a track record. That doesn't require defending massacres to take seriously.</p>
<p>That's what this series is about.</p>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Power Explained — Advanced Track" />
      </ArticleWrap>
    </Layout>
  )
}
