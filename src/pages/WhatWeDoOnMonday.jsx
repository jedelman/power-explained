import Layout from '../components/Layout'
import { ContentsNav, Section, Invitation, NextReads, Footnotes, ArticleFooter, ArticleWrap } from '../components/Article'

const SECTIONS = []

export default function WhatWeDoOnMonday() {
  return (
    <Layout
      title="What We Do on Monday — Power Explained"
      description="Mariame Kaba asks the question that makes political theory nervous: okay, but what do we actually do? Her answer is concrete, present-tense, and already underway."
      seriesTag="The Hidden Engine — Series II"
    >
      <div className="hero" style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,6rem) var(--gutter) clamp(2.5rem,6vw,4.5rem)', position: 'relative', overflow: 'hidden' }}>
        
        <div className="hero-inner" style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          
          <h1 dangerouslySetInnerHTML={{ __html: `What We Do on Monday` }} />
          
          
        </div>
      </div>

      <ArticleWrap>
        
        <div className="body-text">
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Prisons don't work. The evidence is overwhelming. Imprisonment doesn't make communities safer. It doesn't rehabilitate people. It doesn't deter crime. It just breaks people and their families and puts them back in the world worse than they went in.</p>
<p>Everyone knows this. The system keeps doing it anyway.</p>
<p>Mariame Kaba isn't asking for better prisons. She's asking: what if we stopped building cages and started building everything else instead?</p>
<h2>Abolition is presence, not absence</h2>
<p>When people hear "abolition," they imagine chaos. No law. No consequences. Harm going unchecked.</p>
<p>That's what the system teaches you to think.</p>
<p>Actual abolition is the opposite. It's the presence of everything a community needs so badly that the police become unnecessary. It's asking: why do we call police? Because someone is in crisis and we have nowhere else to send them. Because we don't know our neighbors. Because nobody is taking care of the people who need care. Because the system has made us dependent on force to hold things together.</p>
<p>Abolition means building structures where harm doesn't happen in the first place — and when it does, the community has the knowledge and the capacity to respond without cages and guns.</p>
<p>This is not theory. Kaba documents it happening. Communities building alternatives to police response. Neighborhoods where people know how to handle conflict without calling state violence. Mutual aid networks that catch people before they fall into crisis. Crisis response teams trained to de-escalate instead of arrest.</p>
<div class="pull">
Abolition isn't the absence of safety.<br/>It's <strong>building safety</strong><br/>the system was never designed to provide.
</div>
<h2>What we're actually building</h2>
<p>The whole series points toward this. The commons that capital requires and destroys. The reproductive labor that keeps everything running but stays invisible. The knowledge that was burned. The women holding communities together through work nobody counts. The people falling through the gaps in systems that weren't designed to see them.</p>
<p>All of that has to be rebuilt. Not as charity. As structure. As the real work of making communities livable for everyone in them.</p>
<p>This is what Kaba and the movements she documents are doing. Transformative justice circles where communities address harm without the police. Mutual aid networks that provide for people the welfare state abandoned. Skill-shares that rebuild the knowledge capitalism destroyed. Care collectives that make survival possible outside the market.</p>
<p>Most of it is led by the people most harmed by the system — Black women, Indigenous women, poor women, immigrant women, disabled women. The people the system was built to control. The people rebuilding the commons from the ground up.</p>
<h2>The work is already happening</h2>
<p>You don't have to invent this. It exists. In your city, in your neighborhood, in the spaces between the official economy. People are already doing the work of taking care of each other, sharing knowledge, organizing resources, building power outside the system.</p>
<p>Most of it is invisible. Most of it is unpaid. Most of it survives on commitment instead of funding because the system doesn't fund its own replacement.</p>
<p>The series started with Luxemburg's math problem: the system needs an outside and can't produce it. The outside is where people are right now. Building it. Defending it. Making it bigger.</p>
<p>That's not revolution as we've been taught to think about it — dramatic, centralized, led from above. It's the patient, unglamorous work of making your community less dependent on the system that was built to control it. It's the work of rebuilding the commons.</p>
<p>It's the work of Monday. And every day after.</p>
` }} />
        </div>
        
        
        
        <div className="nav-strip" style={{marginTop: "3rem"}}>
          <a href="what-they-burned.html">← Previous</a>
        </div>
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
