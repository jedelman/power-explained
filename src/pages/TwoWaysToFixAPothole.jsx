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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>There's a pothole on your street. It appeared after winter. You've been driving around it for three months. Your neighbor hit it last week and bent a rim.</p>
<p>Everyone on the block knows about it. The mail carrier. The delivery drivers. The people in charge of fixing it? They don't know it exists.</p>
<p>This is how most cities work. The people with information can't act. The people with power can't see. Nothing happens. The pothole gets worse.</p>
<h2>Way One: The pothole as complaint</h2>
<p>You call the city. Or find the app. File a report. A complaint number. It goes into a queue with every other complaint in the city.</p>
<p>Someone downtown weighs it against every other pothole. Schedules a crew. The crew has twelve more stops. Your pothole waits.</p>
<p>When they come, they fill the hole. Maybe well. Maybe quick. Six weeks later it fails. Pothole's back. You file another complaint. Clock starts over.</p>
<p>Nobody who fixed it knows why it keeps coming back. Nobody who knows why it keeps coming back had any say in how it was fixed.</p>
<p>You were useful to this system once — when you filed the complaint. After that, you were waiting.</p>
<h2>Way Two: The pothole as evidence</h2>
<p>You report it in an app. Take a photo. Note that it's been there since February. Note that it comes back after every repair.</p>
<p>The app shows three other reports from the same intersection. Same hole? You confirm. Reports combine.</p>
<p>A neighborhood group — people who live there, who've agreed to care for this block — reviews it. They see the pattern. They know there's a drainage problem underneath that's been ignored for years. They flag it.</p>
<p>The city allocates road budget to that group. They decide: fix it right. Post the job publicly. Someone who lives nearby takes it. The fix addresses the drainage. Everything — report, decision, contract, payment — stays public.</p>
<p>A year later, a city planner looking at drainage problems finds that record. Connects it to five others from five other blocks. A pattern nobody could see when complaints were sitting in separate queues.</p>
<p>Your knowledge didn't get filed. It got built into something.</p>
<div class="pull">
In Way One, the city needs your <strong>complaint</strong>.<br/>In Way Two, the city needs your <strong>knowledge</strong>.<br/>Those are different systems.
</div>
<h2>The pattern beyond potholes</h2>
<p>One system gets more efficient at processing complaints. The other gets smarter.</p>
<p>Apply that to schools. To housing. To transit. To who gets hired. Every decision that affects the people living there can run like Way One or Way Two. Most run like Way One — not because the people running them are corrupt, but because Way One is the template. It's what managing a city looks like.</p>
<p>The template is the problem. Not the people following it.</p>
<h2>Capture or build</h2>
<p>Most systems do one of two things.</p>
<p>A capturing system takes something from you — your time, your knowledge, your energy — and converts it for itself. Your complaint becomes a data point. Your vote becomes a mandate. Your tax dollar becomes a budget line. You gave something real. The system used it. You don't get it back.</p>
<p>A building system takes what you offer and makes it larger. Your knowledge combines with your neighbor's. The combination produces something neither of you had alone. It stays visible. It compounds. The more people contribute, the more useful it becomes.</p>
<p>Way One captures. Way Two builds.</p>
<p>Most of what you interact with every day captures. Platforms take your attention, your behavior, your social connections and turn them into money. The anger you feel scrolling isn't an accident. It's the product.</p>
<p>But building is happening all the time. Neighbors sharing information about a dangerous intersection. Parents coordinating pickup. A block association tracking vacant houses. A community garden where everyone knows what's growing and what's needed.</p>
<p>None of that gets headlines. None has a stock price. But it's why cities function at all. The people closest to the problems are quietly holding things together — mostly without credit, mostly without resources, mostly without a way to connect their knowledge to the decisions that affect them.</p>
<p>Way Two isn't a fantasy. It's what building looks like, taken seriously.</p>
<h2>It works</h2>
<p>Open source software has done this for decades. Thousands of strangers spread across the world, with different goals and abilities, building something together — more reliable and useful than any one company or government could build alone.</p>
<p>They didn't agree on everything. They built a system where contributions stay visible, where mistakes are part of the record, where the people closest to a problem have real power to fix it.</p>
<p>That's not ideology. It's engineering.</p>
<p>The same logic applies to cities. The knowledge is already there — in the people living there, who fix things informally, who see what's broken and why. The question is whether that gets captured and filed, or built into something that lasts.</p>
<p>Right now, it mostly gets filed.</p>
<p>That's a choice. It can be made differently.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="who-gets-paid.html">← Previous</a>
          <a href="open-data-isnt-enough.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
