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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>You know the intersection where kids cut through every morning because the crossing signal is timed wrong. You know the landlord who lets the building go to rot while collecting rent. You know which neighbors would help in an emergency and which ones wouldn't. You know the store that quietly started accepting EBT after the last one closed. You know where it floods after a hard rain.</p>
<p>City hall doesn't know any of this.</p>
<p>Not because they're lazy. Because they can't. A city of any real size produces more local knowledge every single day than any central office could possibly gather, process, and act on. The knowledge lives in the people who are there — on the block, in the building, in the neighborhood — and the current system has almost no way to use it.</p>
<p>This is a massive problem. Not just for fairness. For basic competence.</p>
<h2>Take stock of what you actually know</h2>
<p>Here's a small exercise. Think about your block, your building, your immediate neighborhood. Compare what you know to what your city government probably knows.</p>
<div class="inventory">
<div class="inventory-header">
<span>What you know</span>
<span>What the city has</span>
</div>
<div class="inventory-row">
<div class="inventory-you">Which sidewalk panel trips people — and has for three years.</div>
<div class="inventory-city">A complaint, if someone filed one. Probably in a queue.</div>
</div>
<div class="inventory-row">
<div class="inventory-you">The elderly neighbor who won't ask for help but clearly needs it.</div>
<div class="inventory-city">Nothing, unless she's in a service program. She probably isn't.</div>
</div>
<div class="inventory-row">
<div class="inventory-you">Why the local business closed — the real reason, not the official one.</div>
<div class="inventory-city">A vacancy on a property record. Maybe.</div>
</div>
<div class="inventory-row">
<div class="inventory-you">Which parking enforcement officer everyone knows is shaking people down.</div>
<div class="inventory-city">No complaints on file. Nobody wants the hassle of filing one.</div>
</div>
<div class="inventory-row">
<div class="inventory-you">The informal network that organizes rides to medical appointments.</div>
<div class="inventory-city">It doesn't appear in any database because it was never formalized.</div>
</div>
<div class="inventory-row">
<div class="inventory-you">Which city program is useless because the intake form assumes things most people in the neighborhood don't have.</div>
<div class="inventory-city">Participation numbers. They look fine on paper.</div>
</div>
</div>
<p>This isn't a knock on city workers. The planner who designed that intake form has never needed to use it. The councilmember who approved the program gets updates from a director who gets them from a manager who gets them from a staffer who reads the numbers. By the time information travels that chain, the friction and failure and workarounds people have invented — all of that is gone.</p>
<p>What arrives at the top is a cleaned-up version of reality. <strong>The actual situation stays at the bottom.</strong></p>
<div class="pull">
<p>The people closest to any problem<br/>always know more about it<br/>than the people <strong>in charge of fixing it.</strong></p>
</div>
<h2>This isn't just unfair — it produces bad decisions</h2>
<p>There's a temptation to frame this purely as a justice issue: the community should have a say. That's true. But there's a harder, more practical argument that doesn't depend on fairness at all.</p>
<p>Decisions made without local knowledge are worse decisions. Not sometimes — reliably, structurally, as a matter of how information works.</p>
<p>The transit agency that cuts a bus route because ridership numbers look low doesn't know that the stop serves a shift-worker population that doesn't show up in peak-hour data. The housing authority that builds units with no storage space doesn't know that residents in that neighborhood run small informal businesses out of their homes. The parks department that closes a "underused" basketball court doesn't know it's the de facto community center for three square blocks and the main reason teenage boys in that area aren't somewhere worse.</p>
<p>These decisions get made constantly, at every level of every city. Not because officials are indifferent — though some are — but because <strong>the information required to make a good decision never made it into the room.</strong></p>
<p>The hierarchy filtered it out on the way up. That's what hierarchies do. By design, they simplify. They compress. They remove the noise. Unfortunately, a lot of what gets called noise is the thing you most needed to know.</p>
<h2>Why cooperation is smarter, not just nicer</h2>
<p>The argument for involving residents in local decisions is usually framed as a values argument: people deserve a voice, representation matters, communities should be empowered. All of that is true.</p>
<p>But there's a completely separate argument that has nothing to do with values. It's a practical one: <strong>distributed systems are better at processing complex information than centralized ones.</strong></p>
<p>Consider how your immune system works. It doesn't route every threat through a central decision-maker that evaluates it and issues a response. Each cell responds to what it directly encounters. The response is local, fast, and informed by direct contact with the problem. A centralized immune system would kill you — too slow, too far from the action, working from secondhand information.</p>
<p>Or consider how the internet routes data. When a packet travels from one place to another, it doesn't follow a route predetermined by a central authority. Each node passes it along based on what that node can see. The system responds to actual conditions in real time. It's robust precisely because no single point holds all the decisions.</p>
<p>Cities are not immune systems or packet networks. But the principle holds: when you concentrate decision-making at the top of a hierarchy, you get decisions that are only as good as the information that survives the climb. A lot doesn't survive.</p>
<p>When you push decision-making closer to the people with direct knowledge — when you build systems where local information can actually reach the decisions it should be informing — you get better outcomes. Not because people are inherently wise or good, but because they know things the center can't know.</p>
<div class="callout">
<span class="callout-label">A concrete example</span>
<p>Porto Alegre, Brazil pioneered participatory budgeting starting in 1989 — giving neighborhoods direct control over a portion of the city's capital budget. Within a decade, sewage coverage expanded from 49% to 98% of households. School enrollment doubled.</p>
<p>Not because the money was infinite. Because the people deciding how to spend it knew what was actually needed. The knowledge was already there. The system finally let it work.</p>
</div>
<h2>What this asks of us</h2>
<p>The uncomfortable part of this argument is where it leads.</p>
<p>If local knowledge is genuinely valuable — if the people closest to problems really do know things the center can't — then effective governance doesn't just mean asking for community input before making the real decision. It means building structures where that knowledge shapes the decision. Where residents aren't consultants who get thanked and ignored, but participants with real authority over things that directly affect them.</p>
<p>That's a different kind of city. It requires a different kind of participation, too — not just showing up to a meeting to voice a preference, but taking on some genuine responsibility for outcomes. That's harder than filing a complaint. It's also more powerful.</p>
<p>The knowledge you have about your street, your building, your neighborhood — it's not just frustration waiting to be discharged at a council meeting. It's infrastructure. It's what good decisions are built from.</p>
<p>Right now most of it goes nowhere. That's a design choice. And it can be made differently.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
