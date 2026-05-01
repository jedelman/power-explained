import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function WhyYourCityDoesntWork() {
  return (
    <Layout
      title="Why Your City Doesn't Work — Power Explained"
      description="Cities seem to fail despite good intentions. That's not a coincidence. It's structural — and understanding why is the first step to doing anything real about it."
      seriesTag=""
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Why Your City Doesn't Work<br />(and Why It's Not an Accident)` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>You drove across town. Found parking — which took longer than the meeting itself. You sat in an uncomfortable chair for ninety minutes. You waited through forty-five minutes of procedural business. Then your item came up. You had three minutes.</p>
<p>You spoke.</p>
<p>The council members nodded. A staff person wrote something down. You drove home thinking maybe it mattered.</p>
<p>It didn't. The decision went ahead exactly as planned before you walked in the door.</p>
<p>Or maybe you didn't go. You already knew how it would go. The rent keeps going up. The park got sold off. The bus route got cut. The new development went through anyway. Same pattern. Different faces saying they care deeply about the community.</p>
<p>Some of them are lying. But a lot of them aren't.</p>
<p>That's what gets you. They're not malicious. They're just... stuck in a machine that produces the same outcomes no matter who runs it.</p>
<h2>The template</h2>
<p>Every city runs on a template for how decisions get made. It's simple: a small group at the top sets priorities. Managers in the middle carry them out. Workers at the bottom do the actual work. Information flows up. Orders flow down.</p>
<p>It's how the military works. How most corporations work. How most governments work. We've used it so long it feels like the only way to run something complicated.</p>
<p>But it breaks in specific, predictable ways.</p>
<p><strong>Complex:</strong> Decisions pile up at the top. Nobody can process everything. Shortcuts get taken. Details get lost. Nobody has the full picture.</p>
<p><strong>Opaque:</strong> Decision-makers don't have time to explain. People affected don't have access to the reasoning. Everything gets harder to see.</p>
<p><strong>Disjointed:</strong> Departments develop their own priorities. Fight over budget. Stop talking to each other. The left hand doesn't know what the right hand is doing.</p>
<p>Sound familiar? You've seen all three. In your city. In your workplace. In most large institutions you've ever dealt with.</p>
<p>These aren't failures of the people running the system. They're <strong>outputs of the system itself.</strong> Replace every elected official, every department head. In a few years you'll have the same three problems with new faces.</p>
<div class="pull">
The template produces the outcomes.<br/><strong>The players just run the template.</strong>
</div>
<h2>Why good people get stuck</h2>
<p>Say your city council genuinely wants to do right by everyone. They ran for office because they care. They work long hours. They read the reports.</p>
<p>Here's the problem: a city of any real size is producing more information every day than any small group of people can process. Which streets need repair. Which neighborhoods are losing businesses. Which schools are struggling and why. Which residents are being squeezed out. The full picture is immense, constantly changing, and mostly invisible from any single vantage point.</p>
<p>Your council members don't live on every block. Don't ride every bus route. Don't know what it's like to need childcare in your zip code, or navigate permitting, or wait three years for a housing voucher. They get summaries. Reports. The version of reality that fits in a presentation.</p>
<p>Meanwhile, the people who *do* have that ground-level knowledge — residents, workers, people directly affected — have almost no way to get it into the decision-making process. You can make a three-minute comment. You can vote every few years. That's mostly it.</p>
<p>So the people with power don't have the information. The people with information don't have the power. This isn't a design flaw. <strong>It's the design.</strong></p>
<h2>Who benefits</h2>
<p>Complexity, opacity, and fragmentation aren't just inconvenient for residents. They're very useful for anyone who wants to influence city decisions without public scrutiny.</p>
<p>When a process is complicated enough, most people give up. When it's opaque enough, deals get made without anyone noticing. When departments are fragmented enough, a well-connected developer can work each one separately — knowing where the real decisions happen — while ordinary residents are still trying to figure out which meeting to attend.</p>
<p>The people with money and connections navigate the complexity just fine. The template that makes things hard for you makes things easy for them.</p>
<p>That's not a conspiracy. Nobody had to design it that way. It just requires a system with these properties to exist — and for the people who benefit from it to have more resources to maintain it than the people who don't.</p>
<div class="callout">
<span class="callout-label">The question to ask</span>
<p>When something feels natural, inevitable, or too complicated to change — ask: <strong>who benefits from you believing that?</strong></p>
<p><a class="xl" href="gramsci.html">"This is just how it works" is always doing work on behalf of someone.</a></p>
</div>
<h2>What actually changes</h2>
<p>Voting out a bad mayor matters. Holding officials accountable matters. But if the template stays the same, the new mayor faces the same pressures, the same information gaps, the same structural incentives — and produces the same outcomes. You'll be back in the same meeting in four years.</p>
<p>The deeper work is changing the template. That means building different ways for local knowledge to reach decisions. It means creating processes where the people closest to a problem have real power to address it — not just power to complain. It means designing systems that get smarter over time instead of more opaque.</p>
<p>None of that is quick. None of it runs on outrage. It requires patient, unglamorous work that doesn't get covered on the news.</p>
<p>But it's the work that actually changes things. And it's already happening — in cities where residents have real budget control over their neighborhoods, in places where open data means anyone can see what the city is actually doing, in communities that stopped waiting for permission to fix their own problems.</p>
<p>The template isn't permanent. It just has a head start.</p>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
