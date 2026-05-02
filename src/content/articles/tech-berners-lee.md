---
slug: tech-berners-lee
title: "The Gift and the Enclosure — Power Explained"
description: "Tim Berners-Lee invented the web in 1989 and gave it away on principle. What happened next is the complete arc of digital commons destruction in one story."
seriesTag: "For People Who Build the Internet — Part III"
h1: "The Gift and the Enclosure"
---
In March 1989, Tim Berners-Lee submitted a proposal to his supervisors at CERN, the European particle physics laboratory. The proposal was for a system to manage information across a distributed network of computers: a web of documents linked by hyperlinks, accessible through a common protocol, identified by unique addresses. His supervisor, Mike Sendall, wrote on the cover sheet: _Vague but exciting._[1](#fn1)

By 1991, Berners-Lee had built the first web server, the first web browser, and the first web page. In April 1993, CERN released the web protocols into the public domain — no license fee, no patent, no requirement of any kind. Anyone could use them, build on them, extend them, sell products that ran on them. The web was a gift.

This was a decision, not an accident. Berners-Lee and CERN made a deliberate choice to forgo the intellectual property that could have made CERN, or Berners-Lee personally, enormously wealthy. The reasoning was that a proprietary web — one where you had to pay to use the protocols, or where a single entity controlled what could be built on them — would not be the web. Its value was universal access. Enclose it and you destroy it.[2](#fn2)

The decision was controversial inside CERN. There were people who thought the institution should retain licensing rights. Berners-Lee's position was that the web's utility was its openness — that the point was not to extract value from the protocol but to maximize what could be built on it. He was right. The open web became the infrastructure for an economy that created more value than any patent portfolio could have captured, and none of that value went to CERN or to Berners-Lee.

The early web was a commons in the technical sense: shared infrastructure, open protocols, no central control. HTTP, HTML, and URLs were specifications that anyone could implement. No single entity could decide what went on the web or who could access it. The architecture was deliberately decentralized — no hub that could be controlled, no chokepoint that could be enclosed.

The W3C, which Berners-Lee founded in 1994 to govern web standards, operated as a commons institution: member organizations, open processes, specifications that became standards through consensus. Not perfect — the W3C has always included large corporations alongside civil society and academic institutions, and the power dynamics inside it have always been contested. But the structure was designed to prevent any single actor from capturing the standard-setting process.[3](#fn3)

What this produced, in the 1990s and early 2000s, was an extraordinary period of commons-based innovation: anyone could build a web server, anyone could build a browser, anyone could publish a web page. The value wasn't in the protocol — it was in what people built on the protocol. And because the protocol was open, the people who built on it competed on the quality of what they built, not on control of the underlying infrastructure.

> The web's value was not in the protocol. It was in what people built on the protocol **because it was open.**

The enclosure didn't happen to the protocols. It happened on top of them. The open web layer — HTTP, HTML, URLs — remained open. What got enclosed was the application layer built on top: the platforms that became the default interfaces through which most people accessed the web's content and through which most content found its audience.

Google enclosed search — not by controlling the protocol, but by becoming the default way to navigate it. Facebook enclosed social — not by owning the web, but by becoming the default place where social relationships were recorded and maintained online. Amazon enclosed commerce. These are not web protocols. They are proprietary platforms that run on web protocols. The infrastructure remained open; the applications on top became chokepoints.

The enclosure model works because network effects compound: the platform that has the most users is the most useful platform, which attracts more users, which makes it more useful. Once a platform achieves dominant network position, switching costs become real — your social graph, your search history, your purchase history, your content audience all live inside the platform. The open protocol underneath doesn't help you leave because what you have is not your data on an open system. It's your relationships and history locked inside a closed one.

> **The architecture of platform capture**
> **Build on the commons.** Every major platform was built on open protocols. Facebook runs on HTTP. Google indexes HTML pages. Amazon sells through browsers. The open infrastructure was not competed away — it was used as a free substrate for proprietary superstructure. **Capture the social layer.** The protocols move data. What the platforms captured was not data but relationships — the social graph that connects people to each other and to content. Relationships are stickier than data. Moving your files is easy. Moving your social network is nearly impossible. **Monetize attention.** The business model that paid for the enclosure was advertising — selling user attention to advertisers. This aligned platform incentives with maximizing engagement rather than maximizing information quality, which is [Shannon's noise problem](tech-shannon.html) in institutional form: the platform optimizes for what keeps people on the platform, which is not the same as what transmits information reliably.

The advertising model required data. To sell targeted attention, you needed to know who was paying attention and what they were likely to respond to. This required tracking: recording what people looked at, what they clicked, what they bought, who they knew, what they said. The open web, designed for communication, became an apparatus for surveillance.

This was not Berners-Lee's design. He built a system for linking documents, not for tracking people. But the architecture he built — stateless HTTP, no built-in identity layer — left a gap that platforms filled with cookies, tracking pixels, login walls, and eventually the vast apparatus of what Shoshana Zuboff calls surveillance capitalism: the extraction of behavioral data as raw material for prediction products sold to advertisers.[4](#fn4)

Berners-Lee has been clear that he considers this a betrayal of what the web was designed to be. His most recent project, Solid, is an attempt to build a technical alternative: a protocol for personal data stores that separates your data from the applications that use it, so you own your data and applications request access rather than capturing it. Whether Solid succeeds is an open question. That its inventor felt it necessary is a measure of how thoroughly the enclosure succeeded.

In 2017, the W3C voted to include Encrypted Media Extensions (EME) — a standard for Digital Rights Management — in the HTML specification. This was the moment that enclosure arrived at the protocol level. DRM in the browser standard meant that content could be locked in ways the open web had never permitted: content that couldn't be saved, copied, modified, or used by accessibility tools without permission from the content owner.

The Electronic Frontier Foundation, which held a W3C membership specifically to participate in standards processes, resigned from the consortium in protest. Berners-Lee personally advocated for a compromise that would have required content owners who used the standard to pledge not to sue security researchers who found vulnerabilities in DRM implementations. The compromise failed. The standard passed. The EFF left.[5](#fn5)

The vote was, in miniature, the history of the web's enclosure: open infrastructure, built on open protocols, governed by a body that included the companies that had profited most from openness, voting to introduce a mechanism that served the interests of those companies at the expense of the openness that had made the infrastructure valuable in the first place. The commons was used to build the enclosure of the commons.

The open web is not gone. The protocols are still open. You can still run your own web server, your own email server, your own content publication system, without asking permission from anyone. The web Berners-Lee built still exists underneath the platforms that have enclosed most of its traffic.

The IndieWeb movement, the Fediverse (running on the ActivityPub protocol), and projects like Berners-Lee's own Solid are attempts to rebuild the social layer on open protocols — to create a commons-based alternative to the proprietary social platforms. These are not marginal. Mastodon has millions of users. Email, still running on fully open protocols, remains the largest digital communication system in the world by most measures.

The pattern is [Linux's pattern](how-linux-became-the-internet.html): commons infrastructure, patient development, slow accumulation of critical mass, and then sudden relevance when the enclosed alternatives fail visibly. The question is whether the open protocols accumulate enough social infrastructure before the platforms complete their enclosure of the social layer.
