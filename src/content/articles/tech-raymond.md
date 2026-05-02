---
slug: tech-raymond
title: "The Bazaar Was Right, the Politics Were Wrong — Power Explained"
description: "Eric Raymond wrote the most influential description of how open source actually works. His theory was correct. His political conclusions pointed in exactly the wrong direction."
seriesTag: "For People Who Build the Internet — Part IV"
h1: "The Bazaar Was Right, the Politics Were Wrong"
---
In 1997, Eric Raymond presented "The Cathedral and the Bazaar" at a Linux conference in Germany. The essay described, from the inside, what was actually happening in the Linux development community — and why it was producing software that was outcompeting the products of large, well-funded, hierarchically managed software companies.

The cathedral was the traditional software development model: a small, carefully chosen team, building in private, releasing finished versions to the public. Controlled, planned, hierarchical. The bazaar was Linux: a chaotic-seeming, globally distributed community of contributors, developing in the open, releasing early and often, with Linus Torvalds as a coordinator rather than an architect. No master plan. No finished design. Constant iteration driven by thousands of people scratching their own itches.

The essay's central observation — "given enough eyeballs, all bugs are shallow" — became famous as Linus's Law. The claim was that open development, with many contributors examining the code, finds and fixes bugs faster than closed development with a small team. The distributed, open model was not just more ethical or more ideologically consistent. It was better engineering.[1](#fn1)

The essay helped catalyze the rebranding of "free software" as "open source" in 1998, a deliberate move to frame the movement in terms of development methodology rather than software freedom — to make it legible to corporations as a business argument rather than as a political one. This framing was enormously effective. Within a decade, major corporations were contributing to Linux. Today it runs most of the world's servers, phones, and infrastructure.

Raymond's description of why the bazaar works is a description of the commons in operation. He identified, from observation rather than theory, exactly the properties that [Elinor Ostrom](ostrom.html) spent her career documenting in non-software commons: distributed knowledge, peer monitoring, community governance, adaptation through iteration.

The key insight is that knowledge about a software system is distributed — no single person, no matter how skilled, knows everything about a complex codebase. The people who know about particular bugs are often the people who encountered them in use. The people who know the best fix for an edge case are often the people who hit the edge case. A development model that enlists all of that distributed knowledge will outperform one that tries to centralize it.

This is [the same argument applied to city governance](your-city-knows-less.html): the people who know which intersection is dangerous, which building is deteriorating, which service is failing are the people who use those things. A governance model that enlists that distributed knowledge will outperform one that tries to centralize it in an agency that doesn't have it.

> The bazaar works for the same reason the commons works: **distributed knowledge beats centralized ignorance.**

Raymond also identified, implicitly, the importance of [Ostrom's governance design principles](hardin-was-wrong.html): clear community norms, peer monitoring, conflict resolution mechanisms, the ability to modify rules. Linux's development process has all of these. The Linus's Law claim — that many eyes find bugs — is the software version of Ostrom's finding that communities with good governance manage commons resources better than either private ownership or central control.

Raymond drew the wrong conclusion from his own correct observations. His political framework was libertarian: the bazaar worked because it was like a market — decentralized, voluntary, driven by self-interest. The implication was that open source demonstrated the superiority of market mechanisms over hierarchical control.

Raymond's conclusion
The bazaar works because it's like a market. Decentralized, voluntary exchange. Self-interest produces emergent order.
Implies: maximize individual freedom, minimize coordination, trust self-interest to produce good outcomes. Open source as vindication of market liberalism.

What the evidence shows
The bazaar works because it's a commons. Shared governance, collective maintenance, norms enforced by the community.
Implies: the commons outperforms both market and hierarchy for certain kinds of resources. Open source as vindication of commons governance.

The distinction is not semantic. Markets allocate by price, which means resources go to whoever can pay most. Commons governance allocates by need and collective decision, which means resources go where the community decides they're most useful. Linux did not get better because contributors were paid to improve it. It got better because contributors improved it in ways they cared about, governed by community norms that channeled those contributions productively.

Raymond's market framing made open source legible to corporations, which was strategically effective in the short term. But it also opened the door to exactly the enclosure that [Berners-Lee watched happen to the web](tech-berners-lee.html): corporations could participate in open source as contributors while simultaneously building proprietary layers on top of it, capturing the value of the commons without contributing proportionally to its maintenance. The "open core" model — open source foundation, proprietary extensions — is the direct product of Raymond's framing, and it's a form of enclosure.[2](#fn2)

Elinor Ostrom's research on commons governance — the Swiss villages, the Japanese forests, the Spanish water courts — found the same thing Raymond found in Linux, but theorized it correctly. She didn't find that commons worked because they were like markets. She found that commons worked because they had specific governance properties: defined membership, rules matched to local conditions, collective choice arrangements, monitoring, graduated sanctions, and the ability to modify the rules.[3](#fn3)

Applied to software: Linux works not because contributors are pursuing self-interest in a market, but because the Linux community has governance — maintainer hierarchies, patch review processes, community norms about code quality, mechanisms for resolving disputes about what to include and what to reject. The governance is what makes the distributed knowledge usable. Without it, the bazaar is just noise.

Ostrom's framework also explains why some open source projects fail. Projects without clear governance — where anyone can commit anything, where there are no maintainers with authority to make decisions, where conflicts get resolved by forking rather than by working through — often produce mediocre software or collapse into inactivity. The commons requires governance. Raymond's market framing obscures this, because markets (in the ideology) govern themselves through price signals and don't require explicit institutional design.

Raymond's libertarian reframing of open source had a strategic goal: make it palatable to corporations that were hostile to Richard Stallman's "free software" framework, which emphasized political freedom and was explicitly critical of proprietary software as an ethical failure. The rebranding worked. Netscape released its browser source code in 1998 partly on the basis of Raymond's arguments. IBM, Red Hat, and others built open source businesses in the following years.

What the rebranding also did was remove the political teeth from the movement. "Free software" was a political claim: software freedom matters, proprietary software is a form of power over users, the commons should be defended on principle. "Open source" was a development methodology claim: distributed development produces better software. The first framing makes enclosure a political problem. The second makes it a neutral business decision.

> **The strategic trade-off**
> **What the rebranding gained:** corporate adoption, mainstream legitimacy, Linux on every server, Android on every phone, open source as default infrastructure for the internet economy. **What the rebranding cost:** the political framework for resisting enclosure. When Amazon builds massive businesses on open source code while contributing minimally to its maintenance, the "open source" framing has no vocabulary for calling that what it is. The "free software" framing does: it's a free rider problem, and it's a political problem, not just a governance puzzle. This is [hegemony in technical culture](gramsci.html): the commons got institutionalized, but the language used to institutionalize it stripped out the politics that would have defended it against enclosure. The bazaar won the software argument and lost the political one.

If you work in tech, you work on a commons substrate you almost certainly didn't pay for. The programming languages, the frameworks, the libraries, the protocols, the operating systems — most of what you use to build things is open source, collectively maintained, given freely. Your employer's proprietary product rides on a commons that your employer did not produce and typically contributes to minimally.

Raymond's framework says this is fine — the market will sort it out, contributors will be compensated through reputation and employment, the bazaar will maintain itself. The evidence says otherwise. Open source maintainers are chronically underfunded, burnt out, and subject to harassment from users who treat them as service providers rather than community members.[4](#fn4) The commons that the internet runs on is maintained by a small number of people who are doing it for reasons that have nothing to do with market incentives.

Linus Torvalds has maintained the Linux kernel for thirty years. Steve Wozniak gave away his early designs at the Homebrew Computer Club with no expectation of return. John Carmack open-sourced the Quake engine in 1999, making possible a generation of game developers who built on it freely. None of these were market decisions. They were gifts — acts of contribution to a commons that these builders understood was the substrate their own work depended on. The market framing doesn't explain them and doesn't protect them.
