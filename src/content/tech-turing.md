---
slug: tech-turing
title: "The Universal Machine and the Ungrateful State — Power Explained"
description: "Alan Turing invented the conceptual foundation for all computing. Then the state that depended on his work prosecuted him for being gay and chemically castrated him. He was 41 when he died."
seriesTag: "For People Who Build the Internet — Part II"
h1: "The Universal Machine and the Ungrateful State"
---
In 1936, Turing published a paper solving a problem in mathematical logic that had nothing to do with engineering: he was answering David Hilbert's question about whether there could be a mechanical procedure for deciding whether any given mathematical statement was provable.[1](#fn1) Working alongside [Gödel's incompleteness results](godel.html), Turing showed the answer was no — there could be no such procedure, because the problem of deciding whether a computation halts is undecidable in principle.

To prove this, Turing invented a device. Not a physical machine — a thought experiment: an abstract machine that reads and writes symbols on an infinite tape, according to a finite set of rules. Simple enough to analyze precisely. Powerful enough, he showed, to compute anything that can be computed at all. Any computation, by any machine, could be simulated on a Turing machine given the right program.

Then he described a Universal Turing Machine: a single machine that could simulate any other Turing machine, if given that machine's rules as input. One machine that could do everything any machine could do. The program — the rules — was just data, read from the tape like anything else. The machine and its instructions were the same kind of thing.

This is the conceptual foundation of every computer ever built. The stored-program computer — the computer you are using right now — is a physical instantiation of Turing's universal machine: one device that can run any program, because the program is just data that the device reads and executes. Turing invented this concept in 1936 to prove a result in mathematical logic. The entire information age follows from it.[2](#fn2)

The universal machine is a commons argument in its structure. The whole point is that it's universal — that one general-purpose device replaces any number of special-purpose ones. The universality is not a convenience. It's the thing that makes computation shareable, forkable, and collectively improvable.

Before the stored-program computer, computation meant building a machine for each task: a machine that computed ballistic trajectories, a different machine that processed payroll, a third machine for weather forecasting. Each machine encoded its function in hardware. You could not share the machine across different problems. You could not give someone else your computation in a form they could modify. The machine was closed.

Turing's universal machine opens this. Because the program is just data, it can be copied, transmitted, shared, improved, and given away at zero marginal cost. The computation that runs on a universal machine is, in principle, a commons: one copy is as good as any other, sharing it doesn't deplete it, and the capacity of the machine to run new programs is not reduced by the programs already written for it.

> The program is just data. Data can be copied at zero cost. **Computation is a commons by nature.**

This is not how computation is organized in practice. Proprietary software, digital rights management, trade secret law, and patent protection all work to make computation behave like a scarce, depletable resource — to make it act like something other than what it is. [The open source movement](how-linux-became-the-internet.html) is the attempt to organize computation according to its actual nature: as a commons, shareable and collectively improved, rather than as private property, enclosed and extracted.

In September 1939, Turing reported to Bletchley Park, the British signals intelligence center. The German military was encrypting its communications using the Enigma machine — a device that could encode messages in any of an astronomically large number of ways, changed daily according to a key that the British didn't have. The Germans considered Enigma unbreakable.

Turing led the team that broke it. He built on earlier Polish work to design the Bombe — an electromechanical device that could rapidly test possible Enigma configurations and find the daily settings. By 1941, British intelligence was reading significant portions of German military communications. The Bletchley operation eventually employed around ten thousand people and was reading German, Italian, and Japanese coded messages throughout the war.[3](#fn3)

The historical consensus is that the Bletchley operation shortened the war by at least two years. Some estimates go higher. Winston Churchill called the Bletchley personnel the geese that laid the golden eggs but never cackled. Turing's contribution was foundational: without his work on the Bombe and on the theoretical approach to cryptanalysis, the operation would not have succeeded on the timeline it did.

The operation was entirely secret. Turing returned to mathematical research after the war. Nobody outside a small circle knew what he had done. He received the Order of the British Empire in 1946 — a decoration given to many thousands of people for wartime service, carrying no indication of what specifically he had done. The work that had saved an unknowable number of lives was classified.[4](#fn4)

In January 1952, Turing reported a burglary at his house. During the investigation, he acknowledged a sexual relationship with a nineteen-year-old man. Both men were charged with "gross indecency" — the same law under which Oscar Wilde had been prosecuted sixty years earlier. Turing pleaded guilty. He was convicted in March 1952.[5](#fn5)

He was given a choice: prison or probation with chemical castration — a course of synthetic estrogen injections intended to suppress sexual drive. He chose the injections. Over the following year, his body changed. He developed gynecomastia. He described the treatment to friends with sardonic detachment.

In June 1954, he was found dead in his bedroom. A half-eaten apple was on his nightstand. Cyanide poisoning. The inquest ruled suicide. His mother believed it was accidental — he had been working with cyanide in a home chemistry experiment. The question remains open. He was 41.

> **The specifics matter**
> This is not a story about persecution in the abstract. The British state prosecuted Turing under a law it enforced selectively, against a population it targeted deliberately, for behavior that harmed no one. The prosecution was not an accident or an anomaly — between 1885 and 1967, thousands of men were convicted under the same statute. The law was a tool of social control, wielded against a group the state had decided to treat as criminal. The man prosecuted had, nine years earlier, done work that materially contributed to the state's survival. The state knew this, and prosecuted him anyway. Not despite knowing — indifferently to it. The knowledge the state depended on and the person who produced it were separable, in the state's accounting. The knowledge was useful. The person was a problem. This is the logic [Fanon identified](the-alibi-was-a-mirror.html) in the colonial context and [Mbembe named as necropolitics](who-gets-to-die.html): the sovereign decision about who is expendable, made not by calculating whether a person is useful but by applying a category that decides the question before it's asked.

The story of Alan Turing is extreme. But the structure it represents is not. Every system of power generates knowledge it depends on from people it would prefer not to recognize. The knowledge and the person are treated as separable: take the knowledge, discard the person, apply the category that makes the discarding legible as order rather than cruelty.

[Silvia Federici's witches](what-they-burned.html) knew things — about medicine, midwifery, contraception, community governance — that the communities they lived in depended on. The enclosure that destroyed them was partly about land and partly about knowledge: eliminating the people who carried knowledge that made communities less dependent on the new economic order. Take the effect of the knowledge, eliminate the carriers.

[Walter Rodney showed](underdevelopment-is-a-verb.html) how African labor and resources financed European industrialization while the people whose work built that wealth were simultaneously constructed as less than full humans, unfit for the institutions their work made possible. The commons extracted, the producers excluded.

The pattern: the system takes what it needs from people it won't recognize. The commons is produced by people the enclosure has decided are outside the category of those who deserve a share of what they produce. This is not a bug. It's the mechanism.

The computers you work with every day are Turing machines. Every program you write runs on an instantiation of the concept Turing invented in 1936 to prove a result in logic. The universality he showed was possible — one device that can run any computation — is the reason computation can be a commons at all. The stored-program computer is the technological precondition for everything [Linux](how-linux-became-the-internet.html), [the web](tech-berners-lee.html), and open source software represent.

The open source movement builds on Turing's universality and [Shannon's channel theory](tech-shannon.html) without usually naming either. The intuition that software should be shareable, forkable, and collectively improved is the intuition that computation is a commons by nature — that the artificial scarcity imposed by proprietary licensing runs against the grain of what the technology actually is. Turing's thought experiment made this nature visible. What people do with it is a political question.

The AI systems now being built on top of this commons infrastructure are an interesting test case. They are trained on the accumulated commons of human knowledge — text, code, images, ideas produced by millions of people over decades. The training is possible because the underlying computation is Turing-universal: any sufficiently powerful universal machine can, given the right program and data, learn from the collective output of human civilization. What happens to that capacity — whether it gets enclosed as private property or remains commons infrastructure — is the current frontier of the enclosure question.
