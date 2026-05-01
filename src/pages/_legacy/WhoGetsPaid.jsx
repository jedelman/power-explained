import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function WhoGetsPaid() {
  return (
    <Layout
      title="Who Gets Paid When You Show Up? — Power Explained"
      description="When you go to a public meeting, file a complaint, or volunteer your time — somebody is getting value from that. It's usually not you."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Who Gets Paid When You Show Up?` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>You drove across town. Found parking. Sat in an uncomfortable chair for two hours. Waited through forty-five minutes of procedural business. Your item came up. You had three minutes at the mic.</p>
<p>You spoke. You said something true. You used your three minutes well.</p>
<p>Then you went home.</p>
<p>The decision went ahead as planned. The public meeting happened. The community was heard. Everything was legitimate — by your presence, your time, your good-faith participation in a process that was never going to change the outcome.</p>
<p>Your effort was real. What happened to it is the question.</p>
<h2>Value that doesn't show up</h2>
<p>Legitimacy is a thing institutions need to keep running. A decision made in public, with community input, with proper notice and hearings — that decision is harder to challenge. It has armor. The armor is made from your participation.</p>
<p>Engagement is another. Platforms need your attention to sell to advertisers. City processes need your presence to justify their existence. Advocacy orgs need your outrage to justify their fundraising. None of them can manufacture these things from scratch. They need you to generate them. Then they absorb them.</p>
<p>Here's what most people miss: <strong>the system can capture your participation without giving you anything back.</strong> You showed up. The value of your showing up got absorbed. The outcome didn't change. The process is now more legitimate than it was before you walked in — and you got a parking ticket.</p>
<h2>The extraction</h2>
<p>What you did — the city, the developer, the system — what they got.</p>
<p><strong>Attended the public hearing.</strong> City: legitimacy. Developer: approval cover. You: three minutes at a mic.</p>
<p><strong>Filed a 311 complaint.</strong> City: data point. Vendor: usage metric. You: a ticket number. Maybe a fix, eventually.</p>
<p><strong>Signed the online petition.</strong> Org: your email address and implied endorsement. You: a confirmation email. Future fundraising asks.</p>
<p><strong>Volunteered at the neighborhood cleanup.</strong> City: labor it didn't pay for. PR photos. You: a cleaner block. For now.</p>
<p><strong>Posted about the issue online.</strong> Platform: engagement. Advertisers: your attention. You: likes. Possibly some arguments.</p>
<p>None of this means those actions are worthless. Some of them matter. But be clear-eyed about who's getting what from the exchange — because that's how you figure out which actions are actually building something and which ones are just feeding a machine that will ask for more next week.</p>
<div class="pull">
The system can't produce legitimacy,<br/>attention, or community on its own.<br/>It needs <strong>you to generate those things</strong><br/>so it can absorb them.
</div>
<h2>Feeding vs. building</h2>
<p>Extractive participation: you show up to hearings, sign petitions, vote in every election, donate to organizations, argue on social media. These aren't bad things. But they mostly feed existing structures. The structures absorb the input and continue more or less as before.</p>
<p>Generative participation: a tenant association that started with five people and now negotiates directly with the city over building conditions. A neighborhood mutual aid network that formed during a crisis and is still running three years later because it actually works. A community land trust that's taken thirty units permanently off the speculative market. A block that organized to get speed bumps installed — and then kept meeting.</p>
<p>The difference isn't the issue. <strong>It's the structure. Generative participation builds something that persists.</strong> It creates relationships, skills, institutional capacity that outlast any single campaign. The next problem the group faces, they're not starting from zero. They have each other. They know how things work. They have a track record the city has to take seriously.</p>
<p>Extractive participation generates heat that dissipates. Generative participation generates mass that accumulates.</p>
<h2>Why the easy options are always visible</h2>
<p>There's always a petition to sign, a meeting to attend, an organization to donate to. These are designed to be found. They're the front door.</p>
<p>The generative options are harder to see because they're usually small, local, and not trying to recruit strangers on the internet. The tenant association. The mutual aid group. The informal network that's been quietly solving problems on one block for years. These things don't have marketing. They have members.</p>
<div class="callout">
<span class="callout-label">Before you commit your time</span>
<p>Ask: <strong>does this build something, or does it feed something?</strong></p>
<p>Building means: the next person who joins inherits something real. The group has more capacity than it started with. The work creates conditions for more work.</p>
<p>Feeding means: the input gets absorbed. The structure continues. You're asked back next time to do the same thing again.</p>
<p>Both can matter. But knowing which one you're doing changes what you expect from it.</p>
</div>
<h2>You are the material they can't manufacture</h2>
<p>The system needs what you produce — your attention, your labor, your relationships, your local knowledge, your willingness to care about things. It can capture these things. But it cannot generate them itself.</p>
<p>A government can't mandate genuine community. A platform can't synthesize real trust. A developer can't manufacture neighborhood buy-in from nothing.</p>
<p>They need you to produce it first. Then they absorb it.</p>
<p>That's not just a problem. It's a fact about power — and it means the raw material for change is already everywhere, already being generated, right now.</p>
<p>The neighborhood cleanup where the city gets the labor and the photos — that same group of people, organized differently, is a constituency that's harder to ignore. The petition signers who got added to an email list — those same people, in a room together, are a power structure.</p>
<p>The raw material is the same. The structure determines what it builds.</p>
<p>The next piece shows what happens when people stop feeding the machine and start building something instead.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="your-city-knows-less.html">← Previous</a>
          <a href="two-ways-to-fix-a-pothole.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
