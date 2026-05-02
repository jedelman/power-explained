# Tasks

## Done
- [x] Landing page (index.html)
- [x] Series I — 7 pieces (01–07)
- [x] Series II — 7 pieces (08–14)
- [x] Series III — 4 pieces (15–18)
- [x] Series IV — 6 pieces (19–24)
- [x] Series V — 8 pieces (25–32)
- [x] Glossary page
- [x] Contents page
- [x] Build the Commons tool
- [x] How This Was Done tool
- [x] Tech Deep Dive Series (Shannon, Turing, Berners-Lee, Raymond)
- [x] Sticky masthead
- [x] Prose cadence rewrite — Series I (all 7)
- [x] Prose cadence rewrite — Series II (all 7)
- [x] Prose cadence rewrite — Series IV (all 6)
- [x] Prose cadence rewrite — Series V (all 8)
- [x] Content/code separation — 81 .md files extracted from JSX
- [x] Generic ArticlePage component (reads from .md)
- [x] /llms.txt route per article (generated at build)
- [x] SeriesNav sidebar (MUI Drawer, context-aware, yellow bg, black text)
- [x] Series landing pages — /series-i through /series-v
- [x] Prev/next navigation on all articles
- [x] Global focus-visible styles
- [x] MUI ThemeProvider wired to CSS tokens
- [x] Audit pass: P0/P1/P2 issues resolved

---

## Active

### Prose Rewrite Backlog
Series III needs rewrite:
- [ ] TheyWereRightAboutTheProblem
- [ ] ThePartyAteTheRevolution
- [ ] TheTraditionTheyBuried
- [ ] BuildItNow

Entry points:
- [x] ForNormies
- [ ] ForLibertarians
- [ ] ForEnvironmentalists
- [ ] ForUrbanists
- [ ] ForSocialJustice
- [ ] ForTechWorkers

Environment subseries:
- [x] EnvEnclosureAndExtinction
- [ ] EnvIndigenousLandGovernance
- [ ] EnvCarbonMarketsAreEnclosures

Theory pieces (lower priority):
- [ ] Freire (definition-heavy)
- [ ] HardtNegri (scaffolding language)
- [ ] DeleuzeGuattari (abstract, needs anchoring)

---

## Backlog

### Parity / QA Pass
- [ ] Verify all 81 rewritten pages render correctly
- [ ] Delete src/pages/_legacy/ once verified stable
- [ ] Check 13 skipped pages (Shannon, Foucault, Gramsci, etc.) render correctly
- [ ] Fix any remaining .html hrefs in source (Contents.jsx done)

### Content Gaps
- [ ] "What Is a Commons?" standalone explainer
- [ ] Foucault thinker page (discipline/surveillance; referenced in Mbembe but no profile)
- [ ] Gödel thinker page (every system has an outside)
- [ ] Concrete build piece ("How a Housing Co-op Actually Gets Started" or similar)

### SeriesNav / Navigation
- [ ] Series landing pages for non-main-series content (Thinkers, Case Studies, Audience Deep Dives)
- [ ] SeriesNav: handle pages outside the 5 main series (show all series list only)

### Technical
- [ ] Run parity check on all 81 ArticlePage renders
- [ ] Static export pipeline for OG images
- [ ] Analytics (privacy-respecting: Plausible or Fathom)
- [ ] Remaining audit items: P3 font choices, 26 hard-coded hex in style.css
