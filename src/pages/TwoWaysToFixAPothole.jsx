import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function TwoWaysToFixAPothole() {
  return (
    <Layout
      title="Two Ways to Fix a Pothole — Power Explained"
      description="The difference between a system that captures and a system that builds — explained through something everyone has felt."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Two Ways to Fix a Pothole` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>There's a pothole on your street. It appeared after the last winter. You've been driving around it for three months. Your neighbor hit it last week and bent a rim.</p>
<p>Everyone on the block knows about it. The mail carrier knows about it. The delivery drivers know about it. You know who doesn't know about it? The people in charge of fixing it.</p>
<p>This is how most cities work. The people with the most information about a problem have no way to act on it. The people with the power to act have no way to get the information. Both sides spin their wheels. Nothing happens. The pothole gets worse.</p>
<p>Here's the same problem, run two different ways.</p>
<div class="scenario">
<span class="scenario-label">The way it works now</span>
<h3>Way One: You're a complaint, not a resource.</h3>
<p>You call the city. Or you find the app. You file a report. A complaint number gets assigned. It goes into a queue with every other complaint in the city.</p>
<p>Somewhere downtown, someone looks at the queue. They weigh your pothole against every other pothole. They schedule a crew. The crew has a full calendar. Your pothole isn't urgent enough to jump the line, so it waits.</p>
<p>When the crew finally comes, they fill the hole. Maybe they fix it well. Maybe they patch it quick because they have twelve more stops. Six weeks later, the patch fails. The pothole is back. You file another complaint. The clock starts over.</p>
<p>Nobody who fixed it knows why it keeps coming back. Nobody who knows why it keeps coming back had any say in how it was fixed.</p>
<p>You were useful to this system exactly once — when you filed the complaint. After that, you were just waiting.</p>
</div>
<div class="scenario scenario-b">
<span class="scenario-label">A different way it could work</span>
<h3>Way Two: You're an expert, not a problem.</h3>
<p>You report the pothole in an app. You take a photo. You note that it's been there since February and that it keeps coming back in the same spot after every repair.</p>
<p>The app shows you three other reports from the same intersection. It asks: same hole? You confirm. The reports get combined.</p>
<p>A neighborhood group — people who live there, who've agreed to take responsibility for this block's small repairs — reviews it. They recognize the pattern. They know there's a drainage problem underneath that's been ignored for years. They flag it.</p>
<p>The city allocates a portion of the road budget to that neighborhood group. The group decides: this one is worth doing right. They post the job publicly — city crews and local contractors can both bid. Someone who actually lives nearby takes the job. The fix addresses the drainage. The whole thing — report, decision, contract, payment — is public record.</p>
<p>A year later, when a city planner is looking at drainage problems across the district, that record is sitting there. It connects to five other records from five other blocks. A pattern emerges that nobody could see when the complaints were sitting in separate queues.</p>
<p>Your knowledge didn't get filed. It got used.</p>
</div>
<div class="pull">
<p>In Way One, the city needs your <strong>complaint</strong>.<br/>In Way Two, the city needs your <strong>knowledge</strong>.<br/>Those are completely different systems.</p>
</div>
<h2>Why it matters beyond potholes</h2>
<p>One system gets more efficient at processing complaints. The other gets smarter over time.</p>
<p>Apply that to schools. To housing. To transit. To who gets hired and for what. To how money gets spent. Every decision a city makes that affects the people who live there can be run like Way One or like Way Two. Most are currently run like Way One — not because the people running them are corrupt or lazy, but because Way One is the template. It's what managing a city is supposed to look like.</p>
<p><strong>The template is the problem.</strong> Not the people following it.</p>
<h2>What gets captured and what gets built</h2>
<p>There's a useful question to ask about any system: does it capture or does it build?</p>
<p>A system that captures takes something from you — your time, your knowledge, your energy — and converts it into something useful for the system. Your complaint becomes a data point. Your vote becomes a mandate. Your tax dollar becomes a budget line. You gave something real. The system used it for its own purposes. You don't get it back.</p>
<p>A system that builds takes what you offer and makes it larger. Your knowledge combines with your neighbor's knowledge. The combination produces something neither of you had alone. It stays visible. It compounds. The more people contribute, the more useful it becomes for everyone who contributes.</p>
<p>Way One captures. Way Two builds.</p>
<p>Most of what we interact with every day captures. Your attention, your behavior, your social connections — platforms take these things and turn them into money. The anger you feel scrolling through the news isn't an accident. It's the product. You're not the customer. You're the raw material.</p>
<p>But here's the thing that gets missed: building is also happening, all the time. Neighbors sharing information about a dangerous intersection. Parents coordinating pickup schedules. A block association tracking which houses are vacant. A community garden where everyone knows what's growing and what's needed.</p>
<p>None of that gets headlines. None of it has a stock price. But it's the reason cities function at all. The people closest to the problems are quietly holding things together — mostly without credit, mostly without resources, mostly without a way to connect their knowledge to the decisions that affect them.</p>
<p>Way Two isn't a fantasy. It's just what building looks like, taken seriously.</p>
<h2>The question isn't whether this is possible</h2>
<p>Open source software has worked this way for decades. Thousands of strangers, spread across the world, with different goals and different abilities, building something together — something more reliable and more useful than anything any one company or government could have built alone.</p>
<p>They didn't do it by agreeing on everything. They did it by building a system where contributions stay visible, where mistakes are part of the record, where the people closest to a problem have real power to fix it.</p>
<p>That's not ideology. It's engineering. And it works.</p>
<p>The same logic applies to cities. The knowledge is already there — in the people who live in them, who fix things informally, who see what's broken and why. The question is whether that knowledge gets captured and filed away, or whether it gets built into something that lasts.</p>
<p>Right now, it mostly gets filed.</p>
<p>That's a choice. It can be made differently.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
