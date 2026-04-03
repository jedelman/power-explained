import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function HowLinuxBecameTheInternet() {
  return (
    <Layout
      title="How Linux Became the Internet — Power Explained"
      description="For twenty years, Linux looked like a hobby. Then it was everywhere. That's not a coincidence — it's a pattern. And it tells you something important about how real change works."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `How Linux Became the Internet` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>In 1991, a Finnish college student named Linus Torvalds posted a message to an internet forum. He was building a small operating system — the software that manages a computer's basic functions — and he wanted feedback. He described it as "just a hobby" and said it "won't be big and professional."</p>
<p>He was wrong about that last part.</p>
<p>Today, Linux runs the majority of the world's servers, most supercomputers, every Android phone, and most of the infrastructure that powers the internet. Microsoft, Google, Amazon, and virtually every major tech company depend on it. It is, by many measures, the most important piece of software ever written.</p>
<p>And for most of the 1990s, it looked like nothing was happening.</p>
<h2>The long preparation</h2>
<p>This is the part of the story that almost never gets told, because it's not dramatic. While Microsoft and Apple dominated the computer market, Linux was quietly getting built — by volunteers, in their spare time, for free. No venture capital. No marketing department. No product roadmap. Just thousands of people around the world, each fixing the piece they cared about, contributing back to a shared codebase anyone could use.</p>
<div class="timeline">
<div class="timeline-item">
<span class="timeline-year">1991</span>
<span class="timeline-event">Torvalds releases the first version. A few hundred nerds notice.</span>
</div>
<div class="timeline-item">
<span class="timeline-year">Mid-1990s</span>
<span class="timeline-event">Linux spreads through universities and research labs. Microsoft calls it a toy. The press mostly ignores it.</span>
</div>
<div class="timeline-item">
<span class="timeline-year">Late 1990s</span>
<span class="timeline-event">Companies start quietly using Linux for servers — it's more stable and cheaper than the alternatives. Still not mainstream.</span>
</div>
<div class="timeline-item">
<span class="timeline-year">Early 2000s</span>
<span class="timeline-event">IBM bets big on Linux, contributing thousands of engineers. Google builds its entire infrastructure on it. The codebase becomes enormous, mature, battle-tested.</span>
</div>
<div class="timeline-item highlight">
<span class="timeline-year">2007–2011</span>
<span class="timeline-event">Google launches Android — a version of Linux for smartphones. Within four years it runs on the majority of phones worldwide. Microsoft and Apple never catch up.</span>
</div>
<div class="timeline-item">
<span class="timeline-year">Today</span>
<span class="timeline-event">Linux is everywhere. The phone in your pocket. The server storing your photos. The systems running traffic lights, hospital equipment, financial markets.</span>
</div>
</div>
<p>The shift from "hobby project" to "runs the world" didn't happen gradually. It happened fast, after very long preparation. For most of the 1990s, if you'd pointed to Linux and said "this is going to beat Microsoft," people would have laughed at you. The conditions weren't visible from the outside. The work was happening anyway.</p>
<div class="pull">
<p>For a long time, it looks like<br/>nothing is working.<br/>Then something shifts and<br/><strong>everything reorganizes fast.</strong></p>
</div>
<h2>Why it won</h2>
<p>Linux didn't beat Microsoft and Apple by being better-funded or better-marketed. It won for structural reasons — because of how it was built, not just what it was.</p>
<p>First, it was built by people who used it. Every contributor had a direct stake in the quality of their piece. The person fixing the networking code was also running their own server on it. The person improving the filesystem was also storing their own files on it. That's different from employees building software for customers they'll never meet. The knowledge was local. The feedback was immediate.</p>
<p>Second, it got smarter over time instead of more brittle. In a traditional software company, the codebase belongs to the company. When an employee leaves, their knowledge mostly leaves with them. In Linux, every fix, every improvement, every hard-won lesson gets written into the shared codebase. The project accumulates knowledge. It doesn't lose it to turnover or reorganization.</p>
<p>Third — and this is the key — it was infinitely adaptable. Because anyone could modify it, Linux could be shaped to fit situations its original creators never imagined. Smartphones. Supercomputers. Submarines. Mars rovers. No centrally planned product roadmap could have anticipated all of those. But a system that anyone can adapt doesn't need to anticipate them. It just needs people who care about those problems to show up and do the work.</p>
<p>That adaptability is what made the Android moment possible. When smartphone hardware became viable, the Linux community had twenty years of mature, stable, adaptable code ready to run on it. Microsoft had to start from scratch. They never recovered.</p>
<h2>What this has to do with your street</h2>
<p>The Linux story is usually told as a tech story. But the pattern it demonstrates is much older and much broader than software.</p>
<p>Big changes don't accumulate gradually and then arrive. They arrive suddenly — after long, mostly invisible preparation. The preparation builds the conditions: the relationships, the skills, the shared tools, the common language, the organizational capacity. When something shifts in the environment — a new technology, a crisis, a political opening — the prepared system can move fast. The unprepared one can't.</p>
<p>The Civil Rights Movement didn't emerge from nowhere in 1955. It emerged from decades of legal groundwork by the NAACP, organizing infrastructure built through Black churches and civic organizations, generations of leaders trained in historically Black colleges, and a network of relationships across the South that could mobilize quickly when the moment came. Rosa Parks was a trained organizer, not a tired seamstress who spontaneously refused to move. The moment was real. The preparation made it land.</p>
<p>The same pattern shows up in cities. Neighborhoods that successfully fight off destructive development, or win genuine changes to policing, or secure real resources for their schools — they almost never do it on the first try, starting from scratch. They do it because someone started building the organization years earlier, when there was no immediate crisis to justify it. The tenant association that existed before the eviction wave hit. The neighborhood group that had been meeting monthly for three years before the rezoning proposal landed.</p>
<div class="callout">
<span class="callout-label">The preparation isn't wasted</span>
<p>One of the most demoralizing things about slow, patient organizing work is that it looks like nothing for a long time. You're building relationships. You're developing shared language. You're learning how local power actually works. You're creating structures that can absorb new people and move quickly when needed.</p>
<p>None of that is visible as "winning." But it's exactly what winning requires. The Linux developers writing networking code in 1994 weren't winning. They were building the conditions for winning — which arrived thirteen years later in the form of Android.</p>
<p>The work that looks like nothing is often the work that matters most.</p>
</div>
<h2>What you're actually building</h2>
<p>If you've read this far in this series, you probably already sense that the usual options — vote, petition, attend a meeting, post online — aren't sufficient on their own. They're not useless. But they don't build the conditions for the kind of change that actually reorganizes how things work.</p>
<p>What does build those conditions is the same thing Linux was built from: real relationships with real people in your immediate community — not followers, not contacts, but people you'd call in a crisis and who would call you. Organizations with track records, however small — a tenant group that has successfully resolved three disputes, a <a class="xl" href="mutual-aid-isnt-charity.html">mutual aid</a> network that delivered during the last emergency, a neighborhood association that got one thing changed and knows exactly how it did it. Shared language for what's actually happening, so when the moment comes you're not burning your energy arguing about whether the problem is real. Skills that transfer — how local government actually works, how to run a meeting, how to read a budget, how to escalate.</p>
<p>None of that is glamorous. None of it trends. The Linux developers writing networking code in 1994 were not winning. They were building the conditions for winning, which arrived thirteen years later in a form nobody predicted.</p>
<p>When something shifts — and things do shift, faster than anyone expects — the question is whether the preparation is there. Linux was ready when smartphones arrived. The question is whether your neighborhood is building toward being ready for its moment.</p>
<p>That moment will come. The preparation is the work.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
