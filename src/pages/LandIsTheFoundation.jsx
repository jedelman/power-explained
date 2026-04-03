import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []
const FOOTNOTES = [
  `George, Henry. <em>Progress and Poverty: An Inquiry into the Cause of Industrial Depressions and of Increase of Want with Increase of Wealth — the Remedy</em>. San Francisco: W.M. Hinton &amp; Co., 1879. George's argument: because land value is produced by community investment and social activity rather than by individual landowners, taxing land value (rather than improvements) captures socially produced value for social purposes while eliminating the speculative incentive to hold land idle. The single-tax movement he inspired was politically significant in the late 19th and early 20th centuries. The land value capture argument is analytically separable from and more durable than the single-tax policy proposal. <a href="#ref1">↩</a>`,
  `New Communities Inc. was incorporated in Lee County, Georgia in 1969. It emerged from the organizing of the Student Nonviolent Coordinating Committee (SNCC) in southwest Georgia; the founding organizers included Charles Sherrod, who served as president, and Slater King, whose real estate expertise enabled the land acquisition. The land trust was inspired in part by the Gramdan (village gift) land reform movement in India, associated with Vinoba Bhave, which Slater King had studied. At its founding, New Communities held 5,735 acres — the largest tract of Black-owned land in the United States at the time. It faced sustained economic pressure and USDA loan discrimination through the 1970s and 1980s and eventually lost the land in 1985. In 2009, New Communities received a settlement of approximately $12 million from the USDA as part of the Pigford v. Glickman class action discrimination lawsuit. New Communities subsequently used the settlement to repurchase land in southwest Georgia in 2011. See White, Monica M. <em>Freedom Farmers: Agricultural Resistance and the Black Freedom Movement</em>. University of North Carolina Press, 2018. <a href="#ref2">↩</a>`,
  `The Burlington Community Land Trust was founded in 1984 in Burlington, Vermont, with $200,000 in seed funding from the city during the mayoralty of Bernie Sanders — the first municipally-funded community land trust in the country. It later merged with other local housing organizations to form the Champlain Housing Trust, now one of the largest community land trusts in the United States. The Burlington CLT's development has been studied extensively as an urban CLT model; see Bratt, Rachel G., Michael E. Stone, and Chester Hartman, eds. <em>A Right to Housing: Foundation for a New Social Agenda</em>. Temple University Press, 2006, and Davis, John Emmeus. <em>The Community Land Trust Reader</em>. Lincoln Institute of Land Policy, 2010. <a href="#ref3">↩</a>`,
  `The Grounded Solutions Network serves as a national network for community land trusts and shared-equity housing models in the United States. Internationally, CLTs operate in the United Kingdom, Belgium, Australia, Kenya, and elsewhere. The UK's Community Land Trust Network has documented substantial growth in registered CLTs over recent years. The scale and governance of CLTs vary significantly across national contexts. <a href="#ref4">↩</a>`
]

export default function LandIsTheFoundation() {
  return (
    <Layout
      title="Land Is the Foundation — Power Explained"
      description="The housing crisis is not a housing problem. It is a land problem. And the solution — governing land as a commons so it can never be re-enclosed — has been working for sixty years, in hundreds of communities, largely without coverage."
      seriesTag="Where We Go From Here — Series V"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `Land Is the Foundation` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Build more housing. That is the answer you hear most often to the affordability crisis. And it is not wrong — restricted supply is part of why housing costs have outpaced wages in city after city for decades. Zoning reform matters. Permitting reform matters. Building more matters.</p>
<p>But here is what more building alone cannot fix: as long as land is treated as a speculative asset — as an investment that should appreciate indefinitely — nothing built on it can stay affordable. You can build housing. A decade later, the land under it is worth so much that the housing gets converted, redeveloped, or simply repriced beyond what the people who live there can pay. The supply gets added. The displacement happens anyway.</p>
<p>The affordability crisis is not a housing problem that more housing will solve. It is a land problem — a problem of who owns the ground, what they are permitted to do with it, and who captures the value that communities create when they build schools and transit and parks and neighborhood character over decades. As long as that value can be privately enclosed, the communities that created it will keep being priced out of it.</p>
<h2>Where land value actually comes from</h2>
<p>When a neighborhood becomes more desirable — when new transit arrives, when schools improve, when a community invests decades of care into the streets and institutions that make a place worth living in — land values rise. That is the market correctly registering that something real has happened. The thing it is registering is community investment, not individual landowner effort.</p>
<p>The landowner who bought a parcel in a neighborhood that later got a subway station didn't build the subway. The city did, paid for by taxpayers. The landowner who holds property in a neighborhood where generations of residents built institutions, maintained streets, ran block associations, and invested their lives didn't do that work. The neighbors did. The appreciation that accrues to land is overwhelmingly the product of collective action — public investment and community effort — that the landowner captures by virtue of title.</p>
<p>This is not a new observation. Henry George identified it in 1879 and built an entire political movement around it.<sup><a href="#fn1" id="ref1">1</a></sup> The insight survives his specific policy proposal by a wide margin: land value is socially produced. Enclosing it as private property means that the people who produced it — the community — pay for it twice. Once through the taxes and labor that created the value. Again through the rents and prices that return that value to landowners rather than to the community.</p>
<p>The enclosure of land value is the engine of gentrification. It is also the engine of every displacement crisis in every city where housing costs have outrun wages. The people being priced out are not being displaced by market forces abstractly conceived. They are being displaced by the enclosure of value they helped create.</p>
<div class="pull">
        Land value is produced by the community.<br/>
        The enclosure captures it<br/>
        for <strong>whoever holds the title.</strong>
</div>
<h2>The commons that holds</h2>
<p>The community land trust solves this problem by removing land from the speculative market permanently.</p>
<p>The structure is simple. A nonprofit trust holds the land. Residents own the structures built on it — their homes — but not the ground beneath. When they sell, they receive a portion of any appreciation, but the trust's governing documents cap the resale price to keep it affordable for the next buyer. The land stays in the trust. It cannot be sold, cannot be speculated on, cannot be redeveloped for market-rate use. The affordability is not a subsidy that expires. It is built into the governance structure of the land itself.</p>
<p>The trust is governed by a tripartite board: residents of the trust's homes, residents of the broader community, and public-interest representatives. This is not an accident of design — it is the governance form that keeps the trust oriented toward its purpose rather than toward the interests of any single constituency. Residents have a stake in their own housing. The broader community has a stake in the neighborhood. The public-interest seats hold both accountable to the original mission. The structure is Ostrom applied to urban land: the rules of the commons written into the institution, enforced by the people with ongoing relationships in it.</p>
<h2>Where it came from</h2>
<p>The community land trust was not invented by urban planners. It was invented by civil rights organizers.</p>
<p>New Communities Inc., founded in southwest Georgia in 1969, was the first community land trust in the United States.<sup><a href="#fn2" id="ref2">2</a></sup> It emerged directly from the struggle of Black farmers in the South who kept being driven off land — by economic pressure, by violence, by the denial of credit — in retaliation for civil rights organizing. The land trust was a structural response to a structural problem: as long as Black farmers held land individually, they were individually vulnerable to displacement. If the land was held collectively, by a trust that could not be intimidated into selling, the individual families on it had a protection that individual title could not provide.</p>
<p>The civil rights origins matter because they name what the CLT is actually doing. It is not primarily a housing affordability tool, though it functions as one. It is a commons governance structure for land — a way of holding ground collectively so that the community on it cannot be enclosed, displaced, or sold out from under itself. The affordability is a consequence of the commons governance, not the other way around.</p>
<p>The urban CLT model developed through the 1980s. The Burlington Community Land Trust, founded in Burlington, Vermont in 1984, became one of the most documented early urban examples and demonstrated that the model worked outside its rural civil rights origins — that cities could hold land in trust at scale, produce permanently affordable housing, and sustain the governance structure across decades.<sup><a href="#fn3" id="ref3">3</a></sup> There are now hundreds of CLTs operating across the United States, the United Kingdom, Belgium, Kenya, and elsewhere.<sup><a href="#fn4" id="ref4">4</a></sup></p>
<h2>The governance lesson</h2>
<p>The community land trust faces the same pressure that every successful commons faces: as it proves its value, the interest in capturing that value grows. A CLT that holds land in an appreciating neighborhood is sitting on something that private capital would very much like to convert. The trust's governance structure is its defense against that pressure — but only if the structure is maintained.</p>
<p>This is the lesson that open-source software learned and that CLTs have had to learn independently: the commons does not maintain itself. The rules that keep it a commons have to be built into the institution, honored by the people who govern it, and defended against the constant pressure to convert shared resources into private ones. The code license that prevents proprietary capture of open-source contributions — the GPL, the Creative Commons share-alike — is the CLT's resale restriction applied to software. Both are governance decisions that have to be made explicitly and maintained actively.</p>
<p>The CLT that drifts from its tripartite governance structure, that allows the board to be captured by outside investors or by city agencies with different priorities, that lets the resale restrictions weaken under political pressure — that CLT will eventually be enclosed. This is not a hypothetical. It has happened. The commons requires governance, and governance requires people who understand what they are governing and why.</p>
<div class="callout">
<span class="callout-label">What the CLT proves</span>
<p>A community land trust in a gentrifying neighborhood is a test of whether the commons governance holds against the enclosure pressure. Where it holds, families stay. Where it doesn't, they don't. The outcomes are measurable, documented, and decades old. The model works. The question is whether it is built at the scale that matches the displacement crisis — and that question is, at its core, a question about whether communities choose to build and defend the governance structure while the land is still available to put into trust.</p>
</div>
<h2>The choice that's available now</h2>
<p>Every city has land that is not yet enclosed — publicly owned parcels, land held by nonprofits, land that cities acquire through tax default or urban renewal that could be transferred into trust rather than auctioned to developers. Every city has neighborhoods where the enclosure is in progress and where a land trust established now would hold against it. The technical knowledge exists. The legal structure exists. The track record exists.</p>
<p>What determines whether it happens is the same thing that has always determined whether the commons gets built: whether enough people in the community understand the enclosure in progress, decide they want something different, and do the work of putting the governance structure in place before the land is gone.</p>
<p>The original enclosures that drove people off common land in England and Scotland were not inevitable. They were policy decisions, made by specific people with specific interests, enforced by legal and sometimes physical violence. The housing enclosure happening now in city after city is also not inevitable. It is the product of decisions about zoning, about public land disposition, about who has standing in planning processes, about whose interest gets treated as the default.</p>
<p>The community land trust is what it looks like to make a different set of decisions — to say that this land, permanently, belongs to the people on it and cannot be taken from them by appreciation, by speculation, or by whoever happened to hold the title when the neighborhood became valuable. It is the commons restored to land. It has been being built, by people who chose to build it, for sixty years.</p>
<p>The foundation is available. The question is whether we build on it.</p>` }} />
        </div>
        
        
        
        <Footnotes notes={FOOTNOTES} />
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
