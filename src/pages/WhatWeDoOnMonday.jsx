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
          
          <div dangerouslySetInnerHTML={{ __html: `<p>Prisons don't work. The evidence is clear. Imprisonment doesn't make communities safer. It doesn't rehabilitate people. It doesn't deter crime. It just breaks people and their families and puts them back in the world worse than they went in.</p>
<p>Everyone knows this. The system keeps doing it anyway.</p>
<p>Mariame Kaba isn't just arguing against prisons. She's asking what we build instead. And she's already building it.</p>
<h2>Abolition is not the absence of anything</h2>
<p>When people hear "abolition," they think: no police, no consequences, chaos. That's what the system teaches you to think.</p>
<p>Actual abolition is the opposite. It's the presence of everything a community needs so badly that the police become unnecessary. It's asking: why do we call police? Because someone is in crisis and we have nowhere else to send them. Because we don't know our neighbors. Because nobody is taking care of the people who need care. Because the system has made us dependent on force to hold things together.</p>
<p>Abolition doesn't mean accepting harm. It means building structures where harm doesn't happen in the first place — and when it does, the community has the knowledge and the capacity to respond without cages and guns.</p>
<p>This is not a theory. Mariame Kaba documents it happening. Communities building alternatives to police response. Neighborhoods where people know how to handle conflict without calling state violence. Mutual aid networks that catch people before they fall into crisis.</p>
<h2>Building commons again</h2>
<p>The series started with what capital requires from the outside and what it destroys to get it. It moved through how that destruction worked on women, on women of color, on women's knowledge and women's bodies.</p>
<p>This final piece is about rebuilding. About taking the knowledge of what was destroyed and using it to build structures that can't be extracted from, can't be enclosed, can't be captured by the state.</p>
<p>The commons was destroyed on purpose. It can be rebuilt on purpose. Here's what that looks like — not as abstract theory, but as the work people are doing right now.</p>
<div class="pull">
Prisons can be abolished<br/>because <strong>other structures can replace them</strong>.<br/>The commons never stopped being built.
</div>
<p>This is the work of every piece in this series: showing what capital requires from outside itself, what it destroys to get it, and what's possible when we refuse to be the outside and start building toward the commons instead.</p>
` }} />
        </div>
        
        
        
        <ArticleFooter seriesNote="Part of a series on how power works and what people can do about it." />
      </ArticleWrap>
    </Layout>
  )
}
