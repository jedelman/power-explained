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
<p>Today, Linux runs the majority of the world's servers. Most supercomputers. Every Android phone. Most of the infrastructure that powers the internet. Microsoft, Google, Amazon, virtually every major tech company depends on it. It is, by most measures, the most important piece of software ever written.</p>
<p>And for most of the 1990s, it looked like nothing was happening.</p>
<h2>The quiet preparation</h2>
<p>While Microsoft and Apple dominated the consumer market, Linux was being built — by volunteers, in their spare time, for free. No venture capital. No marketing. No product roadmap. Just thousands of people around the world, each fixing the piece they cared about, contributing back to a shared codebase anyone could use.</p>
<p>None of them reported to Linus. None of them were promised anything. They didn't need anyone's permission. They just worked.</p>
<p>What emerged wasn't planned. It was grown. A distributed group of people with different goals and different abilities built something together — something more reliable and more useful than anything any one company or government could have built alone.</p>
<p>They did it by making a few things very simple: contributions stayed visible. Mistakes were part of the record. Anyone could see the code, understand the decisions, and propose something better. The people closest to a problem had real power to fix it.</p>
<p>Not because anyone decided to be nice. Because the structure made it obvious who knew what, and gave them the tools to act on it.</p>
<h2>The pattern that shows up everywhere</h2>
<p>Linux isn't unique. Open source software works this way, all of it. Thousands of projects. Thousands of contributors. Most of it better than the proprietary alternatives.</p>
<p>Wikipedia was built the same way. A distributed network of volunteers, no company in charge, no central authority deciding what's true. It has more reliable information than Britannica ever had, despite — or because — it's built by people who care, not people who are paid.</p>
<p>The internet itself was built this way. A distributed architecture where no single point controls the network. When that structure was maintained, the internet became a platform for creativity and connection. When points of control were consolidated, it became a platform for extraction.</p>
<p>Science works this way. The peer review system, at its best, is exactly this: distributed authority, visible work, anyone can propose something better, the best ideas win.</p>
<h2>Why this structure works</h2>
<p>Distributed structures are better at using the knowledge that's already in the system. Nobody at the top is trying to make every decision. The people who know the most about a problem — because they're directly dealing with it — have the power to address it.</p>
<p>Information flow is fast. You don't wait for permission. You don't have to convince a manager. You see something broken, you fix it, you show everyone what you did. If it's good, it compounds. If it breaks something, that's visible immediately too.</p>
<p>The work itself recruits better people. You're not hiring based on credentials or connections. You're creating conditions where good work becomes obvious, and people who care about the same thing find each other and amplify each other's efforts.</p>
<p>Failure is built into the system instead of punished by it. Everyone who's ever contributed to Linux has written code that breaks something. That's not a career-ending embarrassment. It's a commit message and a fix. The system learns faster because mistakes don't disappear into organizational shame — they're public record.</p>
<h2>Why this is hard to see</h2>
<p>Linux didn't have a marketing budget. It didn't have venture capital. It didn't have a IPO. For decades, most people didn't know it existed. The companies that depended on it most weren't shouting about it.</p>
<p>Distributed structures don't announce themselves. They don't have a CEO. They don't need press conferences. They just work, quietly, until they've built something undeniable.</p>
<p>Meanwhile, the things that *do* get announced — the startups with huge funding rounds, the companies with charismatic founders, the products with billion-dollar marketing campaigns — are often built on top of infrastructure they didn't have to build. On Linux. On open source. On distributed work they didn't have to organize or pay for.</p>
<h2>What this means for cities</h2>
<p>The command structure — decisions at the top, orders flowing down, information flowing up — looks organized. Looks like someone's in control. Looks like it's the only way to run something complicated at scale.</p>
<p>Linux proved that's wrong. You can coordinate thousands of people, across continents, with no central authority, and produce something more sophisticated than anything a hierarchical organization could build.</p>
<p>It works when: contributions stay visible, mistakes are part of the record, the people closest to a problem have real power to fix it, and anyone can see why decisions were made.</p>
<p>The next piece in this series shows what happens when a city starts actually working this way. Not in theory. In practice. In a city where neighborhoods have real control over their own problems.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem", marginBottom: "2rem"}}>
          <a href="open-data-isnt-enough.html">← Previous</a>
          <a href="mutual-aid-isnt-charity.html">Next →</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
