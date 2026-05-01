import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `Graeber, David. <em>Debt: The First 5,000 Years</em>. Brooklyn: Melville House, 2011. The opening chapters systematically examine the anthropological literature for evidence of barter economies and find none. Graeber cites Caroline Humphrey's survey of the anthropological record: "No example of a barter economy, pure and simple, has ever been described, let alone the emergence from it of money." The argument draws also on Marcel Mauss, <em>The Gift</em> (1925), the foundational text on reciprocity and obligation as the basis of pre-monetary exchange. <a href="#ref1">↩</a>`,
  `The Mesopotamian credit records Graeber cites are among the earliest written documents: clay tablets from Sumer recording grain and silver loans, dating to approximately 3000–2500 BCE. The unit of account — the silver shekel as a weight measure used to denominate debts — predated the existence of silver coins by roughly two thousand years. Graeber draws here on the work of economic historian Michael Hudson, whose research on ancient Near Eastern debt practices is extensive. See Hudson, Michael and Marc Van De Mieroop, eds. <em>Debt and Economic Renewal in the Ancient Near East</em>. CDL Press, 2002. <a href="#ref2">↩</a>`,
  `Graeber's argument about the military origins of coinage — what he calls the "military-coinage-slavery complex" — is developed in Chapter 8 of <em>Debt</em>. The core claim: coinage appears historically in the context of large standing armies requiring payment in portable, impersonal form, followed by taxation demands in coin that force populations into commodity markets. He traces this pattern across ancient Greece, India (the Axial Age), and China roughly simultaneously, around 600–500 BCE — all periods of intense military competition and the rise of mercenary armies. <a href="#ref3">↩</a>`,
  `The ancient Near Eastern debt jubilee tradition is documented primarily through the work of Michael Hudson. Mesopotamian rulers issued periodic "clean slate" decrees — <em>amargi</em> in Sumerian, <em>andurarum</em> in Akkadian — canceling agrarian debts, freeing debt slaves, and returning alienated land. <em>Andurarum</em> means "freedom" and "release from debt slavery" in Akkadian and is cognate with the Hebrew <em>deror</em>, the jubilee term in Leviticus 25. Hudson documents approximately thirty such decrees between 2400 and 1400 BCE. Hudson argues these were recurrent administrative policy, not exceptional events, and that the biblical Jubilee tradition derives from this practice. See Hudson, Michael. <em>...and forgive them their debts: Lending, Foreclosure and Redemption from Bronze Age Finance to the Jubilee Year</em>. ISLET-Verlag, 2018. Graeber draws extensively on Hudson's work throughout <em>Debt</em>. <a href="#ref4">↩</a>`,
  `Credit unions are member-owned financial cooperatives operating under a not-for-profit structure in which depositors are shareholders and governance follows one-member-one-vote principles rather than capital-weighted voting. According to the World Council of Credit Unions 2024 Statistical Report, global credit union membership stands at more than 400 million members across 101 countries. In the United States, the credit union sector is regulated by the National Credit Union Administration (NCUA) and insured through the National Credit Union Share Insurance Fund (NCUSIF), parallel to FDIC insurance for banks. The cooperative financial model predates the modern credit union — Robert Owen's cooperative stores (1840s Britain) and Friedrich Wilhelm Raiffeisen's rural credit cooperatives (1860s Germany) are among the documented antecedents. <a href="#ref5">↩</a>`
]

export default function MoneyHasToBeACommons() {
  return (
    <Layout
      title="The Debt Came First — Power Explained"
      description="David Graeber spent five thousand years of economic history making one point: credit — trust, mutual obligation, belonging — is the original economy. Commodity money is the enclosure. And the enclosure never holds."
      seriesTag="Where We Go From Here — Series V"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `The Debt Came First` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Every economics textbook begins with the same story. Before money, there was barter — people trading chickens for shoes, arrows for grain. Money was invented to make this more efficient. Credit came later, once trust developed and commerce grew sophisticated enough to need it.</p>
<p><a class=\"xl\" href=\"graeber.html\">Graeber</a> spent a career in anthropology looking for evidence of this story. He did not find it.<sup><a href="#fn1" id="ref1">1</a></sup></p>
<p>No society operating on generalized barter has ever been documented. Not one. The societies that preceded money didn't haggle over exchange rates between goods — they operated on credit, on mutual obligation, on the ongoing social relationships that made tracking debts possible in the first place. The first sophisticated financial instruments we have evidence for are not coins or shells. They are <em>credit records</em> — clay tablets from ancient Mesopotamia recording loans of grain and silver, with interest, between people who knew each other and would continue to know each other.<sup><a href="#fn2" id="ref2">2</a></sup></p>
<p>The sequence is backwards. Credit did not emerge from barter through money. Barter is what strangers do when they have no ongoing relationship and no credit system to fall back on — it is the exception, not the origin. Credit is the original economy. It is built from the same material as community itself: trust, memory, mutual obligation, the ongoing fact of being people who depend on each other.</p>
<div class="pull">
        Credit is not a financial instrument.<br/>
        It is a <strong>social relationship</strong><br/>
        that finance learned to package<br/>
        and sell.
      </div>
<h2>What credit actually is</h2>
<p>When a neighbor helps you move and you help them paint, no money changes hands. But a debt has been created — a real one, recognized by both parties, embedded in the fabric of your relationship. It doesn't need to be tracked on paper because it's tracked in the relationship itself. The relationship is the ledger. The community is the financial system.</p>
<p>This is credit in its original form: not a bank product but a social fact. It exists wherever people have ongoing relationships and the mutual recognition that they depend on each other. It requires no institution to create it and no court to enforce it. It is enforced by the social consequences of being the person who doesn't reciprocate — of being known, in the community where you live, as someone who takes without giving back.</p>
<p>This is also why credit is inherently a commons. It is produced collectively, by the accumulated history of interactions and obligations within a community. No individual creates it. No institution owns it. It exists because the community exists. And like every commons, it can be enclosed — converted from a shared social resource into a private commodity that can be bought, sold, and extracted from.</p>
<h2>What commodity money does</h2>
<p>Coin — physical commodity money — solves a specific problem: how do you transact with strangers, people outside your community of ongoing relationships, people you will never see again? You can't extend credit to someone you don't know and will never be able to find. You need a medium that transfers value anonymously, in the moment, without requiring trust or future obligation.</p>
<p>That is a real problem worth solving. But Graeber's insight is that solving it comes at a cost that economics has systematically refused to count. The cost is this: when commodity money becomes the dominant form of exchange, it doesn't just enable transactions with strangers. It reshapes transactions with everyone — converting ongoing relationships of mutual obligation into sequences of discrete, settled, impersonal transactions. When you pay cash, you are done. The relationship is extinguished. There is nothing left between you.</p>
<p>"Paying a debt" in the full cash sense is not the discharge of an obligation. It is the destruction of a relationship. The money makes you strangers again.</p>
<p>Graeber traces where commodity money actually comes from historically, and the picture is not pretty.<sup><a href="#fn3" id="ref3">3</a></sup> Coinage appears, across multiple civilizations, in the same contexts: conquest, armies, slavery. You need impersonal money when you need to pay soldiers who come from somewhere else, have no ongoing relationship with anyone in the community, and may be dead before the next harvest. You collect it back as taxes, forcing people into commodity markets to get the coin they need to pay the state, which systematically dissolves the subsistence commons and redirects economic life through channels the state and its merchants control. The impersonal transaction is not a neutral tool. It arrives with the army.</p>
<h2>The enclosure never holds</h2>
<p>Here is what Graeber found across five thousand years: the enclosure always breaks down.</p>
<p>Debt accumulates. Interest compounds. The people at the bottom — the farmers, the small traders, the people who borrowed to survive a bad harvest — fall irreparably into debt to the people at the top. Social relations deteriorate. Communities fracture. And then, recurrently, across the ancient Near East and elsewhere, authorities declared debt jubilees — periodic cancellations that zeroed out the debts, returned alienated land, freed debt slaves, and restored something like the original commons of mutual obligation.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<p>These were not charity. They were crisis management. The rulers who declared jubilees understood that a society in which the poor are permanently indebted to the rich is a society that cannot function — cannot field an army, cannot produce food, cannot maintain the basic social fabric. The jubilee was the system correcting itself, restoring the commons that commodity money had enclosed, because the enclosure had become unsustainable.</p>
<p>The same cycle runs through all of monetary history. Periods of physical commodity money — gold, silver, coin — alternate with periods of virtual credit money, where most transactions are recorded as debts and obligations rather than settled with metal. We are in a credit money period right now. The dollars in your bank account are not commodity money. They are credit — a claim on the banking system, which is itself a claim on other claims, nested in obligations all the way down. The commodity money of economics textbooks is mostly a historical artifact. The credit economy Graeber found in ancient Mesopotamia is what we actually run on.</p>
<div class="pull">
        The jubilee was not charity.<br/>
        It was <strong>the enclosure breaking down</strong> —<br/>
        the commons reasserting itself<br/>
        because the alternative was collapse.
      </div>
<h2>The commons of credit, built now</h2>
<p>If credit is a commons — produced by communities, encoded in social relationships, inherently collective — then the question of who governs it is the same question as every other commons: governed by the people who use it, or enclosed and extracted from by whoever can capture it?</p>
<p>Credit unions are the answer to that question in one form. They are financial cooperatives, owned and governed by their members, orienting their lending toward the benefit of their depositors rather than toward the extraction of fees and the maximization of returns to external shareholders. The money that members deposit is lent to other members, at terms set by the institution they collectively govern. This is not a radical proposal. It is a legal structure that has existed for over a century, in tens of thousands of institutions, serving hundreds of millions of people worldwide.<sup><a href="#fn5" id="ref5">5</a></sup></p>
<p>Community development financial institutions — CDFIs — extend this into communities that conventional finance has written off: low-income neighborhoods, rural areas, communities of color where redlining and disinvestment have made conventional credit inaccessible for generations. They underwrite loans that a bank's algorithm would reject because the algorithm is optimized for extraction, not for whether the person in front of you will pay back the money and what it would mean for their community if they could. CDFIs know things that algorithms don't, because CDFIs are embedded in the communities they serve. That embeddedness is the credit commons functioning — local knowledge, ongoing relationship, the social ledger that tracks reputation and reciprocity better than any credit score.</p>
<p>Community land trusts work on the same principle applied to land finance: the trust holds the land in common so that the housing built on it can never be re-enclosed for speculative appreciation. The land is permanently outside the commodity market. The credit used to finance homes on it is oriented toward the people living in them, not toward investors betting on their displacement.</p>
<p>None of these are alternatives to finance. They are what finance actually is when it isn't being enclosed — when the social commons of credit is governed by the people it was built from, rather than captured by people who had nothing to do with building it.</p>
<h2>The instability is structural</h2>
<p>The enclosure of credit into extractive commodity finance is not a stable arrangement. It has never been stable. It requires constant enforcement — legal structures that treat debt as an absolute obligation regardless of social consequence, political arrangements that prioritize creditors over communities, ideological work that makes extraction look like the natural order of things. Remove any of those supports and the commons reasserts itself, because the underlying social fabric — trust, mutual obligation, the ongoing relationships that communities are made of — was always there.</p>
<p>The debt jubilees of the ancient Near East were not exceptions to the history of finance. They were the history of finance correcting an enclosure that had gone too far. We have had our own versions: bankruptcy law is a debt jubilee for individuals. The 2008 bank bailouts were a jubilee for creditors, conducted at public expense, which is why they produced such rage. The forgiveness of sovereign debt for developing countries, when it happens, is a jubilee for nations.</p>
<p>The commons keeps coming back. The question is whether we wait for the next crisis to make it visible, or choose to build it now — in credit unions, in CDFIs, in community land trusts, in every institution that puts the governance of credit back in the hands of the communities that credit was always built from.</p>
<p>The debt came first. The commons was always there. We are choosing whether to govern it.</p>` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
