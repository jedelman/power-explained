import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function ThePreparationIsUnderway() {
  return (
    <Layout
      title="The Preparation Is Already Underway — Power Explained"
      description="The credit unions, the land trusts, the care cooperatives, the open governance experiments — they look like nothing from the outside. They are the preparation for a moment that will arrive faster than anyone expects. The work is already underway."
      seriesTag="Where We Go From Here — Series V"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Preparation Is Already Underway` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Every piece in this series has described the same thing in a different domain.</p>
<p>People who looked at the enclosure clearly — at who controls the credit, who captures the land value, who governs the care infrastructure, who owns the systems trained on the commons of human language — and decided, without waiting for permission, to build something governed differently. Not as a protest. Not as a symbol. As a working institution, with governance rules designed to keep it a commons, that does the thing it was built to do better than the private alternative does.</p>
<p>From the outside, none of it looks like much. A credit union is a small bank. A community land trust is a nonprofit that holds some deeds. A childcare cooperative is parents taking turns. A community health worker program is a few people doing home visits. Open model weights are files on a server.</p>
<p>None of it trends. None of it gets covered as an economic story. The coverage goes to the enclosure — to the investment rounds, the acquisitions, the new platform, the fund that bought the apartment buildings. The preparation that is actually building the conditions for a different economy happens in meeting rooms and deed transfers and governance documents and the slow accumulation of track records that nobody outside the community is watching.</p>
<p>This is exactly what the Linux contributors looked like in 1994.</p>
<div class="pull">
        The work that looks like nothing<br/>
        is often <strong>the work that matters most.</strong>
</div>
<h2>What the preparation consists of</h2>
<p>The preparation is not abstract. It has a specific content in each domain.</p>
<p>In finance: the credit union that has been serving its members for forty years has built something money cannot easily replicate — a community's trust, a track record of lending decisions oriented toward member wellbeing, a governance culture that knows how to resist the pressure to convert into something more extractive. When the next financial crisis hits, when the predatory lender fails or the private equity fund strips the local bank, the credit union is there. It was always there. It was being built while nobody was watching.</p>
<p>In land: the community land trust that holds fifty homes today will hold five hundred in twenty years if the governance holds — and each of those homes is permanently outside the speculative market, available to a family at a price they can afford, regardless of what happens to land values in the surrounding neighborhood. The resale restriction written into the deed today is a commitment made to a family that doesn't exist yet, by a community that is choosing to extend its obligations forward in time. That is the commons working at its most fundamental level.</p>
<p>In care: the mutual aid network that formed during the last emergency did not dissolve when the emergency passed — it became the infrastructure for the next one. The relationships built while distributing groceries became the network that could mobilize for something else. The care cooperative that survived its first five years of governance conflict and financial precarity has learned something that cannot be taught — how to hold together under pressure, how to make collective decisions when the stakes are real, how to be the institution it set out to be. That knowledge lives in the people and the culture. It transfers.</p>
<p>In the governance of AI: the researchers who are building commons-oriented frameworks for training data rights, for open model weights, for community accountability structures, are writing the governance documents that will either exist or not exist when the enclosure becomes undeniable and communities start asking what the alternative looks like. The GPL existed before Microsoft understood why it mattered. The framework for commons governance of AI needs to exist before the enclosure is complete, for the same reason.</p>
<h2>What happens when something shifts</h2>
<p>Big changes do not accumulate gradually and then arrive. They arrive suddenly — after long, mostly invisible preparation. The preparation builds the conditions: the relationships, the institutions, the governance knowledge, the track records that make it possible to move fast when the moment comes.</p>
<p>The civil rights movement did not emerge from nowhere in 1955. It emerged from decades of legal groundwork, organizing infrastructure built through Black churches and civic institutions, generations of leaders trained and networks built across the South. Rosa Parks was a trained organizer. The Montgomery Bus Boycott required a community that already knew how to coordinate, already had the institutions to sustain a year-long economic action, already had the relationships to hold together under pressure. The moment was real. The preparation is what made it land.</p>
<p>Linux was ready when smartphones arrived because twenty years of contributors had been writing networking code and filesystem code and kernel code — not for smartphones, which didn't exist, but for the general purpose of making the system better. The preparation was not targeted at the moment. It was targeted at doing good work on the problem in front of them. The moment arrived and the preparation was there.</p>
<p>We do not know what the shift will be in finance, or land, or care, or AI governance. We do not know when the crisis will make the enclosure undeniable, or when the political opening will make commons governance suddenly legible as policy, or when the technology tipping point will make a different architecture possible. We know that those moments come. We know that the prepared system can move when they do, and the unprepared one cannot.</p>
<h2>The choice, again</h2>
<p>This series began with a simple claim: nobody had to build the commons. The people who built it chose to — because the thing was worth building, and because the mode of building mattered as much as the thing itself.</p>
<p>That remains true. Nobody is required to join a credit union, or donate to a community land trust, or participate in a care cooperative, or contribute to open governance frameworks for AI infrastructure. The market offers alternatives to all of these — usually more convenient, often cheaper in the short term, always better at pretending the enclosure isn't happening.</p>
<p>The choice is not between sacrifice and self-interest. It is between two different kinds of institution, two different governance structures, two different answers to the question of who the economy is for. One answer is being built by people with a great deal of capital and very clear intentions. The other is being built by people who looked at the enclosure clearly and decided to do something else.</p>
<p>The debt that underlies all of us — the mutual obligation to the communities that made us, to the language commons that gave us thought, to the land that holds us, to the care that kept us alive — is not discharged by paying your bills. It is honored by building the institutions that allow the people who come after you to live in something better than what you found.</p>
<p>That work is already underway. It has always been underway. The question is whether you are part of it.</p>
<p>The preparation is the work. The work is the preparation. And it is happening right now, in hundreds of places, by people who chose to build something that belongs to everyone.</p>` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
