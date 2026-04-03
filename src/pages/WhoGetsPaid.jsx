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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>You drove across town. You found parking. You sat in an uncomfortable chair for two hours. You waited through forty-five minutes of procedural business before your item came up. You spoke your three minutes. You drove home.</p>
<p>The decision went ahead as planned.</p>
<p>You did that for free. And you should think about who benefited from you doing it.</p>
<p>The city got to say the process was open. The officials got to say the community was heard. The developer got to say there was a public meeting. The whole thing got legitimized — by your presence, your time, your good-faith participation in a process that was never going to change the outcome.</p>
<p>Your effort was real. What happened to it is the question.</p>
<h2>Participation as raw material</h2>
<p>We're used to thinking about value in terms of money and products. But there are other things that have value — things institutions and systems need to keep running — that don't show up on any balance sheet.</p>
<p>Legitimacy is one of them. A decision that was made in a public process, with community input, with proper notice and hearings — that decision is harder to challenge. It has a kind of armor. The armor is made from your participation.</p>
<p>Engagement is another. Platforms need your attention to sell to advertisers. City processes need your presence to justify their existence. Advocacy organizations need your outrage to justify their fundraising. None of them can manufacture these things from scratch. They need people to show up and feel something and do something. That's the raw material the whole operation runs on.</p>
<p>And here's what most people miss: <strong>the system can capture your participation without giving you anything back.</strong> You showed up. The value of your showing up got absorbed. The outcome didn't change. The process is now more legitimate than it was before you walked in — and you got a parking ticket.</p>
<div class="ledger">
<div class="ledger-header">
<span>What you did</span>
<span>Who captured the value</span>
<span>What you got</span>
</div>
<div class="ledger-row">
<div class="ledger-act">Attended the public hearing</div>
<div class="ledger-them">City: legitimacy. Developer: approval cover.</div>
<div class="ledger-you">Three minutes at a mic.</div>
</div>
<div class="ledger-row">
<div class="ledger-act">Filed a 311 complaint</div>
<div class="ledger-them">City: data point. Vendor: usage metric.</div>
<div class="ledger-you">A ticket number. Maybe a fix, eventually.</div>
</div>
<div class="ledger-row">
<div class="ledger-act">Signed the online petition</div>
<div class="ledger-them">Org: your email address and implied endorsement.</div>
<div class="ledger-you">A confirmation email. Future fundraising asks.</div>
</div>
<div class="ledger-row">
<div class="ledger-act">Volunteered at the neighborhood cleanup</div>
<div class="ledger-them">City: labor it didn't pay for. PR photos.</div>
<div class="ledger-you">A cleaner block. For now.</div>
</div>
<div class="ledger-row">
<div class="ledger-act">Posted about the issue online</div>
<div class="ledger-them">Platform: engagement. Advertisers: your attention.</div>
<div class="ledger-you">Likes. Possibly some arguments.</div>
</div>
</div>
<p>None of this means those actions are worthless. Some of them matter. But it's worth being clear-eyed about who's getting what from the exchange — because that's how you figure out which actions are actually building something and which ones are just feeding a machine that will ask for more next week.</p>
<div class="pull">
<p>The system can't produce legitimacy,<br/>attention, or community on its own.<br/>It needs <strong>you to generate those things</strong><br/>so it can absorb them.</p>
</div>
<h2>The difference between feeding and building</h2>
<p>There's a version of civic participation that's extractive — where your energy goes in and the system gets stronger and you get a little more tired. And there's a version that's generative — where your energy goes into something that compounds, that builds capacity, that makes the next action easier and more powerful than the last.</p>
<p>The extractive version looks like: showing up to hearings, signing petitions, voting in every election, donating to organizations, arguing on social media. These aren't bad things. But they're mostly feeding existing structures. The structures absorb the input and continue more or less as before.</p>
<p>The generative version looks different. It looks like a tenant association that started with five people and now negotiates directly with the city over building conditions. It looks like a neighborhood <a class="xl" href="mutual-aid-isnt-charity.html">mutual aid</a> network that formed during a crisis and is still running three years later because it actually works. It looks like a community land trust that's taken thirty units permanently off the speculative market. It looks like a block that organized to get speed bumps installed — and then kept meeting.</p>
<p>The difference isn't the issue. It's the structure. <strong>Generative participation builds something that persists.</strong> It creates relationships, skills, and institutional capacity that outlast any single campaign. The next problem the group faces, they're not starting from zero. They have each other. They know how things work. They have a track record the city has to take seriously.</p>
<p>Extractive participation generates heat that dissipates. Generative participation generates mass that accumulates.</p>
<h2>Why this is hard to see</h2>
<p>The extractive options are always the most visible and the most accessible. There's always a petition to sign, a meeting to attend, an organization to donate to. These are easy to find because they're designed to be found. They're the front door.</p>
<p>The generative options are harder to see because they're usually small, local, and not trying to recruit strangers on the internet. The tenant association. The mutual aid group. The informal network that's been quietly solving problems on one block for years. These things don't have marketing. They have members.</p>
<div class="callout callout-red">
<span class="callout-label">The question to ask</span>
<p>Before you spend your time on any form of civic participation, ask: <strong>does this build something, or does it feed something?</strong></p>
<p>Building means: the next person who joins inherits something real. The group has more capacity than it started with. The work creates conditions for more work.</p>
<p>Feeding means: the input gets absorbed. The structure continues. You're asked back next time to do the same thing again.</p>
<p>Both can matter. But knowing which one you're doing changes what you expect from it — and whether you walk away feeling used or feeling like something real happened.</p>
</div>
<h2>You are the thing they can't manufacture</h2>
<p>The system needs what you produce — your attention, your labor, your relationships, your local knowledge, your willingness to care about things. It can capture these things after you generate them. But it cannot generate them itself. A government can't mandate genuine community. A platform can't synthesize real trust. A developer can't manufacture neighborhood buy-in from nothing.</p>
<p>They need you to produce it first. Then they absorb it. That's not just a problem. It's a fact about power — and it means the raw material for change is already everywhere, already being generated, right now.</p>
<p>The neighborhood cleanup where the city gets the labor and the photos — that same group of people, organized differently, is a constituency that's harder to ignore. The petition signers who got added to an email list — those same people, in a room together, are a power structure.</p>
<p>The raw material is the same. The structure determines what it builds.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
