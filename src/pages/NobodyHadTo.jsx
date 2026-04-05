import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function NobodyHadTo() {
  return (
    <Layout
      title="Nobody Had To — Power Explained"
      description="The commons has never been built by people who had no choice. It has always been built by people who chose. That choice is still available."
      seriesTag="Where We Go From Here — Series V"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Nobody Had To` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Nobody required it.</p>
<p>Not the neighbors who built the irrigation ditch together and wrote down the rules for how it would be maintained and who would bear the cost when it needed repair. Not the medieval commoners who upheld the customs of the common fields across generations, enforcing them against their own members as well as against outsiders. Not the women who built mutual aid networks during the Great Depression, pooling resources across households that had almost nothing to pool. Not the volunteers who built the free encyclopedia that most of the world now uses to look things up. Not the tens of thousands of contributors who wrote the code that now runs most of the world's computers.</p>
<p>Nobody made them. They chose.</p>
<p>This is the fact that gets lost in every conversation about the commons — in the academic framing that makes it a governance problem, in the political framing that makes it a policy proposal, in the economic framing that makes it a market failure. The commons is not a structure that falls into place when conditions are right. It is something people decide to build. The decision comes first. The structure follows from it.</p>
<p>And the decision is always the same decision: to build something governed by the people who use it, for the benefit of the people who need it, rather than to build something that extracts value from those people for the benefit of someone else. That decision is available in every domain, in every era, under almost any conditions. The question is only whether people make it.</p>
<h2>This is not new</h2>
<p>The commons is older than capitalism. It is older than the state. The management of shared resources through collective governance is one of the oldest human social technologies we have evidence for — in irrigation systems, in common grazing lands, in shared fisheries, in the governance of forests and watersheds. <a class=\"xl\" href=\"ostrom.html\">Elinor Ostrom</a> spent a career documenting this and won the Nobel Prize for it. The commons is not a utopian proposal. It is a proven governance form with a track record measured in centuries.</p>
<p>What capitalism did was enclose it — systematically, over several hundred years, using legal instruments and state power to convert what communities held in common into private property that could be owned, bought, sold, and extracted from. The enclosure of common land in England drove people off fields their families had worked for generations. The enclosure of reproductive knowledge — midwifery, healing, the communal management of birth and illness — reorganized care from a shared community function into unpaid private labor. The enclosure of colonial territories redirected the surplus of entire continents into the hands of a small number of European states and their merchant classes.</p>
<p>None of that erased the impulse to build the commons. It was suppressed, legally constrained, made economically precarious, and in many cases violently destroyed. But wherever people had the freedom and the capacity to organize, they built it anyway — because the commons is not an ideology. It is a response to a human problem: how do we manage together the things we depend on together?</p>
<div class="pull">
        The commons is not an ideology.<br/>
        It is a <strong>response to a human problem:</strong><br/>
        how do we manage together<br/>
        the things we depend on together?
      </div>
<h2>What the choice actually involves</h2>
<p>The choice to build the commons is not a choice to sacrifice. The people who built mutual aid networks in the Depression were not martyrs — they were people trying to survive, who figured out that survival was more achievable together than alone. The contributors who built open-source software were not giving something away — they were building something they wanted to exist, in a way that matched their values about how knowledge should work. The members of a credit union are not making a political statement — they are choosing a bank that works for them instead of one that extracts from them.</p>
<p>The choice is not between self-interest and collective good. That framing is itself a product of the enclosure — the ideological work of making private accumulation seem like the only rational behavior. People are not naturally atomized competitors who must be coerced into cooperation. They are social animals who cooperate constantly, across every domain of life, and who have been building institutions of collective governance for as long as there have been institutions of any kind.</p>
<p>The choice is between two different kinds of institution: one governed by the people who use it and oriented toward their benefit, and one governed by whoever can capture it and oriented toward extraction. Both kinds exist. Both are built by people making decisions. The commons requires a decision to build it as a commons — to write governance rules that keep it oriented toward shared benefit, to resist the constant pressure to convert it into a vehicle for private accumulation. That decision is not made once. It is made continuously, in every rule written and every precedent set.</p>
<p>What makes it possible is not idealism. What makes it possible is the understanding that the alternative — surrendering governance to whoever has the most capital — has predictable consequences that communities have been living with for a very long time. The commons is built by people who have looked at those consequences clearly enough to want something different.</p>
<h2>The proof of concept already exists</h2>
<p>The reason open source software matters to this argument is not that it's inspiring. It's that it's unambiguous. Private capital had every advantage: money, marketing, established distribution, the entire infrastructure of the technology industry. The commons won anyway. Not as a niche alternative — as the dominant form. The software that runs the world's servers, smartphones, and supercomputers is software that nobody had to write, governed by rules that nobody had to follow, built by people who chose to participate in something shared.</p>
<p>That is a proof of concept for the model, not for the domain. It tells you that commons-based governance can outcompete private accumulation at scale, when people choose to build and sustain it. It does not tell you that software is special. Software is not special. The same structural logic applies to housing, to finance, to healthcare, to the governance of artificial intelligence — to every domain where the question is who controls the resources that communities depend on, and in whose interest.</p>
<p>Community land trusts hold land in common so it can never be re-enclosed for speculative profit. Credit unions are governed by their members and oriented toward their financial wellbeing rather than toward extracting fees from them. Community health networks distribute care through relationships rather than through market transactions that price people out. These are not pilot programs waiting for scale. They are proven institutions, with track records, that work — and that work precisely because the people who built them made the choice to build something governed by the people who use it.</p>
<h2>The choice is available now</h2>
<p>This is the moment when the choices are being made — in housing, in finance, in care, in the infrastructure of artificial intelligence — that will determine what the next generation of institutions looks like. The enclosure is in progress. So is the building of the commons.</p>
<p>The two things are happening simultaneously, largely in different rooms, with very different levels of visibility. The enclosure gets covered. The commons gets built quietly, by people who have already decided what they're doing and don't need the coverage to proceed.</p>
<p>What they need is scale. And scale requires more people making the same choice — not because someone told them to, not because a theory demands it, but because they've looked clearly at what the alternative produces and decided they want something different.</p>
<p>Nobody has to make that choice. That is exactly the point. The commons has always been built by people who didn't have to and did anyway — because the thing was worth building, and because the mode of building mattered as much as the thing itself.</p>
<p>The choice is still available. The rest of this series is about the places where people are making it.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
