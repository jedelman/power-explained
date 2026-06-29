# Tapestry — orphan tag proposals (for Jason's approval)

After the spine + mop-up passes, **849 / 947** river gestures (89.7%) sit on at
least one thread. The remaining **98 orphans** were each read in context and
classified (conservatively — a tag asserts the gesture is genuinely *about* /
*doing* that thing, and tags are yours):

- **33 are genuine tag-gaps** — the gesture plainly carries a tag it's missing,
  and that tag is *already a thread*, so adding it folds the gesture straight in.
- **65 are structural/connective** — transitions, one-line hinges, "what comes
  next" notes, mood beats, lexicon-reveal scaffolding. Tagging them would be
  artificial. Recommend leaving orphaned.

**The ask:** approve the proposals below (all, or strike any) and I'll add the
tags and re-run `scripts/weave-spines.mjs` → coverage rises to ~93%. I have NOT
edited any gesture yet.

---

## Proposed tag-gaps (33) — approve to fold in

### High confidence — obvious gaps (9)
| Gesture | Add tag | Why |
| --- | --- | --- |
| G-02-027 | `place/barcelona` | "Why Barcelona?" — plainly about Barcelona |
| G-03-013 | `concept/enclosure` | The "Tragedy of the Commons" paper |
| G-05-003 | `person/luxemburg` | Luxemburg biography (Zamość, Zurich) |
| G-05-005 | `person/luxemburg` | "the German left had no one more capable" — Luxemburg |
| G-06-006 | `person/robinson-cedric` | *Black Marxism* — Cedric Robinson |
| G-IW-029 | `practice/holding` | Defines and performs the fourth capacity, holding |
| G-11-012 | `concept/enclosure` | "the commons was enclosed because it worked" |
| G-13-024 | `concept/debt` | Venmo, mutual obligation, the social ledger |
| G-CE-047 | `concept/simulation` | Baudrillard's test: genuine practice vs simulation |

### Medium confidence — clear fit, your call (24)
| Gesture | Add tag | Why |
| --- | --- | --- |
| G-OV-002 | `concept/enclosure` | terrain thick with knowing the market couldn't sell |
| G-PR-002 | `concept/debt` | the hospital bill / contracted rate |
| G-PR-012 | `concept/enclosure` | private status defended at the world's expense |
| G-02-012 | `concept/enclosure` | officials reframe the place as "slum" — enclosure prelude |
| G-01-019 | `practice/self-governing` | running a neighborhood league meeting |
| G-02-001 | `practice/positioning` | taking the mic, taking a stand |
| G-IB-002 | `image/the-superblock` | Barcelona street-market scene |
| G-IW-023 | `concept/hegemony` | enchantment = a perspective become common sense |
| G-05-012 | `person/luxemburg` | her arguing with the Social Democrats |
| G-07-006 | `person/fanon` | Fanon's clinic, French soldiers and Algerians |
| G-07-014 | `concept/biopower` | colonial subject vs citizen; legal/labor hierarchy |
| G-09-007 | `person/gramsci` | "since Turin… why did the councils fail" |
| G-10-008 | `person/luxemburg` | Luxemburg's freedom sentence |
| G-13-007 | `concept/debt` | the barter-before-money myth (debt chapter) |
| G-14-030 | `concept/enclosure` | land governed for extraction; housing/extinction cause |
| G-15-029 | `practice/tending` | intimate local care work |
| G-16-063 | `concept/simulation` | the spectacle owns the interface, not the protocol |
| G-16b-012 | `concept/simulation` | representation as the goal; the influencer stages |
| G-16b-035 | `concept/simulation` | what averaging cannot hold — singular vs average |
| G-16b-049 | `concept/cooperative` | "a commons that is also a singularity," co-made |
| G-CE-043 | `concept/cooperative` | joint authorship — the centaur, what each brings |
| G-CE-046 | `concept/simulation` | "nothing simulated in the producing" |
| G-18-042 | `image/songbirds` | "you wonderful weird birds" — the songbird motif |

---

## Structural / connective — recommend leave orphaned (65)

These are scaffolding, not themes. Listed so you can override any you'd rather
thread.

G-OV-001, G-OV-005, G-PR-025, G-PR-039, G-01-027, G-01-029, G-02-003, G-03-008,
G-IW-002, G-IW-028, G-IW-024a, G-IW-025, G-IW-026, G-IW-027a, G-IW-027b,
G-GC-014, G-05-015, G-05-021, G-05-025, G-05-030, G-06-026, G-06-038, G-07-005,
G-07-016, G-07-034, G-08-002, G-08-003, G-10-005, G-10-007, G-10-020, G-10-030,
G-10-040, G-11-005, G-12-027, G-14-024, G-14-038, G-RE-005, G-RE-021, G-RE-029,
G-RE-040, G-16-001, G-16-009, G-16-043, G-16-068, G-16b-014, G-16b-026,
G-16b-040, G-16b-045, G-16b-051, G-16b-057, G-17-008, G-17-016, G-17-019,
G-18-001, G-18-013, G-18-014, G-18-029, G-18-037, G-AB-052, G-AB-069, G-CE-040,
G-CE-041, G-CE-042, G-CE-022, G-CE-045, G-EP-015.

### Worth a second look (carry a real but un-threaded theme)
A handful are *about* something whose tag simply isn't a thread yet. If you'd
like, I can thread these themes too:
- **Kollontai / care work** — G-05-021, G-05-025, G-05-030 (no `person/kollontai` thread)
- **Kropotkin** — G-11-005 · **Turing** — G-16-043 · **Prechtel** — G-17-016
- **Henry George / land value tax** — G-14-024
- **The djinn (the Centaur's voice)** — G-CE-040/041/042 (`image/the-djinn`, only 4 gestures)
- **G-CE-022** carries a `[Jason's section]` placeholder (standing alchemical-pass flag) — left untouched.
