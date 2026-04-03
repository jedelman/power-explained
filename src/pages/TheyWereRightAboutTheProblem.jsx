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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Let's start by agreeing on something: the people who looked at capitalism and said "this needs to go" were not wrong.</p>
<p>They were looking at child labor in textile mills, workers dying in coal mines at thirty, empires extracting entire continents to enrich a handful of European countries, and a system that kept producing famines in places that were producing plenty of food. They were looking at that and saying: this isn't a bug. This is the feature. The system works exactly as designed — the design is just not for us.</p>
<p>That analysis holds. A hundred and fifty years of reform, regulation, and social democracy have softened the edges. They have not changed the architecture. The system still runs on an outside — on labor, land, and resources that it encloses, extracts from, and moves on from when they're depleted. The outside is still mostly populated by people who aren't white, aren't in the Global North, and don't get to set the terms. The math <a class="xl" href="the-outside-capital-needs.html">Luxemburg</a> identified in 1913 is still the math.</p>
<p>The basic critique is by now widely understood: capitalism is structurally exploitative, reform is insufficient, the whole architecture needs to change. On the substance, that analysis is correct. The problem isn't the diagnosis. The problem is what some people conclude from it.</p>
<h2>The temptation of the strong solution</h2>
<p>When the problem is big enough, the strong solution is tempting. If liberal democracy is just capitalism with better PR, then the solution has to be something that actually breaks with capitalism — something that can hold off the counterrevolution, that can reorganize the economy at scale, that can survive the inevitable violent response from the people being dispossessed of their power.</p>
<p>This is the argument for authoritarian socialism. Not "Stalin was good, actually" — most serious people in this tradition have moved past that. The argument is more sophisticated: the historical socialist states, for all their brutality, at least broke with capitalism. They industrialized countries that capitalism had kept underdeveloped. They provided education, healthcare, and housing at scale. They demonstrated that there was an alternative. And the brutality, while real, has to be understood in the context of genuine external threats — the fact that every major capitalist power was trying to destroy the Soviet project from the moment it began.</p>
<p>This is the "tankie-adjacent" position. It doesn't require uncritical defense of Gulags. It requires concluding that concentrated state power, while ugly, was necessary — that the alternative to authoritarian socialism wasn't libertarian communism, it was just capitalism.</p>
<p>The argument is not stupid. It deserves a real answer, not a dismissal.</p>
<div class="pull">
        The diagnosis is correct.<br/>The <strong>prescription</strong> is where it goes wrong.
      </div>
<h2>What the argument gets wrong</h2>
<p>The core error is treating "broke with capitalism" as sufficient. The question isn't whether a system broke with capitalism. It's whether the system that replaced capitalism was actually better — and whether it contained the seeds of something genuinely emancipatory, or just reproduced domination in a different key.</p>
<p>Authoritarian socialism nationalized the means of production. It did not end the separation of workers from control over their own labor. Factory managers were still appointed from above. Production targets were still handed down from central planning bodies. Workers still showed up, did what they were told, and went home. The form of domination changed. The basic structure of workers-controlled-by-managers did not.</p>
<p>The state owned everything. But who controlled the state? Increasingly, a single party. And within that party, increasingly, a leadership that could not be removed, questioned, or overruled. The workers who were supposed to be the subject of socialist liberation became the object of socialist state administration — which is a different thing, and in practice often an antagonistic thing.</p>
<p>This isn't just a critique from outside. It's a critique that was made from inside, by committed socialists, before the pattern fully established itself. The people who saw it coming had a name you might not have heard. We'll get to them.</p>
<div class="callout">
<span class="callout-label">The stakes</span>
<p>This matters beyond historical debate. The authoritarian socialist tradition is not just a historical artifact — it's actively recruited from. Movements that correctly identify capitalism as the problem sometimes conclude that the only serious response is a Leninist one: build the <a class="xl" href="glossary.html#vanguard">vanguard party</a>, seize state power, hold it against the counterrevolution.</p>
<p>If that prescription is wrong — structurally wrong, not just tactically wrong — then following it doesn't just fail. It actively destroys the things it was supposed to build. That's worth understanding before committing to it.</p>
</div>
<h2>The question this series is asking</h2>
<p>Not: was capitalism bad? (Yes.) Not: were the historical socialist states worse than capitalism in every respect? (No.) Not: is revolutionary change impossible? (Also no.)</p>
<p>The question is: is the authoritarian socialist model the only way to break with capitalism? Or does it represent a specific architectural error that reliably produces specific bad outcomes — regardless of the intentions of the people who build it?</p>
<p>And if it is an architectural error: what's the alternative? Not "liberal democracy" — that's not an alternative, it's the problem. Not "wait for the conditions to be perfect" — conditions are never perfect and that's a recipe for nothing. Something real, with a track record, that doesn't require defending massacres to take seriously.</p>
<p>That's what this series is about.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Power Explained — Advanced Track" />
      </ArticleWrap>
    </Layout>
  )
}
