import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function YourCityKnowsLess() {
  return (
    <Layout
      title="Your City Knows Less About Your Street Than You Do — Power Explained"
      description="The people making decisions about your neighborhood have less information than you do. That's not a bug. It's what happens when you concentrate power."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Your City Knows Less About Your Street Than You Do` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>You know the intersection where kids cut through every morning because the crossing signal is timed wrong. You know the landlord who lets the building rot while collecting rent. You know which neighbors would help in an emergency and which ones wouldn't. You know the store that quietly started accepting EBT after the last one closed. You know where it floods after a hard rain. You know where the potholes get bigger each winter because the same spot never gets fixed right.</p>
<p>City hall doesn't know any of this.</p>
<p>Not because they're lazy. Because they can't. A city of any real size produces more local knowledge every single day than any central office could possibly gather, process, and act on. The knowledge lives in the people who are there — on the block, in the building, in the neighborhood — and the current system has almost no way to use it.</p>
<p>This is a massive problem. Not just for fairness. For basic competence.</p>
<h2>What you actually see</h2>
<p>Think about your block, your building, your immediate neighborhood. Compare what you know to what your city government probably knows.</p>
<p>You know which storefront has been empty for two years and why (the landlord is waiting for the rent to go up). They see: vacant retail space.</p>
<p>You know the elderly woman three doors down is on a fixed income and the building heat barely works in winter. They see: a property in need of maintenance.</p>
<p>You know three families on the block are sleeping in their cars because their lease wasn't renewed. They see: declining residential occupancy in the area.</p>
<p>You know the bus stop is dangerous at night because the light is broken and visibility sucks. They see: a bus stop. Data point in a schedule.</p>
<p>You know the real story. They have the spreadsheet.</p>
<div class="callout">
<span class="callout-label">Why this matters</span>
<p>The city can't make good decisions based on spreadsheets alone. The spreadsheet tells you traffic is up on Route 5. It doesn't tell you why — that the regular route got cut and now everyone's rerouting through residential streets because the alternate is worse. The spreadsheet tells you restaurant permits are down 8%. It doesn't tell you the landlords are turning commercial units into condos because that's worth more than small business rent.</p>
<p>Good policy requires understanding the mechanism, not just the number. The people who have the mechanism are the people living it. But they're not connected to the decision-making process.</p>
</div>
<h2>The gap</h2>
<p>There are too many problems for the city to solve them all. There are never enough resources. There is never enough time. So the city has to pick which problems to focus on.</p>
<p>How does it decide?</p>
<p>Usually: whoever is loudest, whoever can afford a lawyer, whoever knows how to navigate the system, whoever has political connections. Not: whoever understands the problem best, or whose need is deepest, or where the fix would ripple most helpfully through the neighborhood.</p>
<p>The people who actually understand the problem are often the people least equipped to get the city's attention. They're busy working multiple jobs. They don't know the permitting process. They don't have a lawyer. They don't know anyone downtown.</p>
<p>Meanwhile, a real estate developer with a project that affects your neighborhood knows exactly which meetings to attend, which officials to talk to, which process to game. They have the time, the money, and the relationships. They also have a direct interest in the outcome.</p>
<p>The person living on the block that would be affected has the knowledge. They don't have the access.</p>
<h2>What would change</h2>
<p>Imagine the people with the most detailed knowledge of a neighborhood's actual problems had a direct way to get that knowledge into the decision-making process. Not as complaints. As expertise.</p>
<p>Imagine the city actually built channels to access the knowledge that's already being generated every day by the people who live there. And then actually used it.</p>
<p>The next piece in this series is about what happens when a city tries to do this. When it works. And when the system fights back.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="why-your-city-doesnt-work.html">← Previous</a>
          <a href="who-gets-paid.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
