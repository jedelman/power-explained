import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Gramsci = lazy(() => import('./pages/Gramsci'))
const Foucault = lazy(() => import('./pages/Foucault'))
const ForAgents = lazy(() => import('./pages/ForAgents'))
const Kropotkin = lazy(() => import('./pages/Kropotkin'))
const Ostrom = lazy(() => import('./pages/Ostrom'))
const Graeber = lazy(() => import('./pages/Graeber'))
const HardtNegri = lazy(() => import('./pages/HardtNegri'))
const Debord1968 = lazy(() => import('./pages/Debord1968'))
const ShannonSimondon1950s = lazy(() => import('./pages/ShannonSimondon1950s'))
const Gramsci1930s = lazy(() => import('./pages/Gramsci1930s'))
const ReichCharacterArmor = lazy(() => import('./pages/ReichCharacterArmor'))
const Baudrillard = lazy(() => import('./pages/Baudrillard'))
const DeleuzeGuattari = lazy(() => import('./pages/DeleuzeGuattari'))
const Godel = lazy(() => import('./pages/Godel'))
const Simondon = lazy(() => import('./pages/Simondon'))
const Freire = lazy(() => import('./pages/Freire'))
const AgentContext = lazy(() => import('./pages/AgentContext'))
const BuildItNow = lazy(() => import('./pages/BuildItNow'))
const BuildTheCommons = lazy(() => import('./pages/BuildTheCommons'))
const BuildTheCommuneWithoutTheState = lazy(() => import('./pages/BuildTheCommuneWithoutTheState'))
const CareIsTheEconomy = lazy(() => import('./pages/CareIsTheEconomy'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const CaseStudyChile = lazy(() => import('./pages/CaseStudyChile'))
const CaseStudyIndia = lazy(() => import('./pages/CaseStudyIndia'))
const CaseStudyMyanmar = lazy(() => import('./pages/CaseStudyMyanmar'))
const CaseStudyOccupy = lazy(() => import('./pages/CaseStudyOccupy'))
const CaseStudyRojava = lazy(() => import('./pages/CaseStudyRojava'))
const CaseStudyZapatistas = lazy(() => import('./pages/CaseStudyZapatistas'))
const Contents = lazy(() => import('./pages/Contents'))
const EnvCarbonMarketsAreEnclosures = lazy(() => import('./pages/EnvCarbonMarketsAreEnclosures'))
const EnvEnclosureAndExtinction = lazy(() => import('./pages/EnvEnclosureAndExtinction'))
const EnvIndigenousLandGovernance = lazy(() => import('./pages/EnvIndigenousLandGovernance'))
const FallingThroughTheGap = lazy(() => import('./pages/FallingThroughTheGap'))
const ForEnvironmentalists = lazy(() => import('./pages/ForEnvironmentalists'))
const ForLibertarians = lazy(() => import('./pages/ForLibertarians'))
const ForNormies = lazy(() => import('./pages/ForNormies'))
const ForSocialJustice = lazy(() => import('./pages/ForSocialJustice'))
const ForTechWorkers = lazy(() => import('./pages/ForTechWorkers'))
const ForUrbanists = lazy(() => import('./pages/ForUrbanists'))
const Glossary = lazy(() => import('./pages/Glossary'))
const HardinWasWrong = lazy(() => import('./pages/HardinWasWrong'))
const HowLinuxBecameTheInternet = lazy(() => import('./pages/HowLinuxBecameTheInternet'))
const HowThisWasDone = lazy(() => import('./pages/HowThisWasDone'))
const LandIsTheFoundation = lazy(() => import('./pages/LandIsTheFoundation'))
const LibLibertyAndHegemony = lazy(() => import('./pages/LibLibertyAndHegemony'))
const LibMinersAndCnt = lazy(() => import('./pages/LibMinersAndCnt'))
const LibSkinInTheGame = lazy(() => import('./pages/LibSkinInTheGame'))
const MoneyHasToBeACommons = lazy(() => import('./pages/MoneyHasToBeACommons'))
const MutualAidIsntCharity = lazy(() => import('./pages/MutualAidIsntCharity'))
const NobodyHadTo = lazy(() => import('./pages/NobodyHadTo'))
const OnePattern = lazy(() => import('./pages/OnePattern'))
const OpenDataIsntEnough = lazy(() => import('./pages/OpenDataIsntEnough'))
const RacialCapitalism = lazy(() => import('./pages/RacialCapitalism'))
const Shannon = lazy(() => import('./pages/Shannon'))
const SjAbolitionIsACommonsProject = lazy(() => import('./pages/SjAbolitionIsACommonsProject'))
const SjRacialCapitalism = lazy(() => import('./pages/SjRacialCapitalism'))
const SjReproductiveCommons = lazy(() => import('./pages/SjReproductiveCommons'))
const StartHere = lazy(() => import('./pages/StartHere'))
const TechBernersLee = lazy(() => import('./pages/TechBernersLee'))
const TechRaymond = lazy(() => import('./pages/TechRaymond'))
const TechShannon = lazy(() => import('./pages/TechShannon'))
const TechTuring = lazy(() => import('./pages/TechTuring'))
const TheAgentAndTheCommons = lazy(() => import('./pages/TheAgentAndTheCommons'))
const TheAlibiWasAMirror = lazy(() => import('./pages/TheAlibiWasAMirror'))
const TheCommonsTheyNeverStoppedBuilding = lazy(() => import('./pages/TheCommonsTheyNeverStoppedBuilding'))
const TheHumanWasAStory = lazy(() => import('./pages/TheHumanWasAStory'))
const TheLanguageWasAlwaysACommons = lazy(() => import('./pages/TheLanguageWasAlwaysACommons'))
const TheOtherAndTheOutside = lazy(() => import('./pages/TheOtherAndTheOutside'))
const TheOutsideCapitalNeeds = lazy(() => import('./pages/TheOutsideCapitalNeeds'))
const ThePartyAteTheRevolution = lazy(() => import('./pages/ThePartyAteTheRevolution'))
const ThePreparationIsUnderway = lazy(() => import('./pages/ThePreparationIsUnderway'))
const TheTraditionTheyBuried = lazy(() => import('./pages/TheTraditionTheyBuried'))
const TheyWereRightAboutTheProblem = lazy(() => import('./pages/TheyWereRightAboutTheProblem'))
const TwoWaysToFixAPothole = lazy(() => import('./pages/TwoWaysToFixAPothole'))
const UnderdevelopmentIsAVerb = lazy(() => import('./pages/UnderdevelopmentIsAVerb'))
const UrbanCapture = lazy(() => import('./pages/UrbanCapture'))
const UrbanCooperativeInfrastructure = lazy(() => import('./pages/UrbanCooperativeInfrastructure'))
const UrbanLandValue = lazy(() => import('./pages/UrbanLandValue'))
const WhatTheyBurned = lazy(() => import('./pages/WhatTheyBurned'))
const WhatWeDoOnMonday = lazy(() => import('./pages/WhatWeDoOnMonday'))
const WhichWomen = lazy(() => import('./pages/WhichWomen'))
const WhoGetsPaid = lazy(() => import('./pages/WhoGetsPaid'))
const WhoGetsToDie = lazy(() => import('./pages/WhoGetsToDie'))
const WhoPaysForTheNextShift = lazy(() => import('./pages/WhoPaysForTheNextShift'))
const WhyYourCityDoesntWork = lazy(() => import('./pages/WhyYourCityDoesntWork'))
const YourCity = lazy(() => import('./pages/YourCity'))
const YourCityKnowsLess = lazy(() => import('./pages/YourCityKnowsLess'))

function Loading() {
  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontFamily: 'var(--mono)',
      fontSize: '0.6rem', letterSpacing: '0.12em',
      textTransform: 'uppercase', color: 'rgba(var(--ink-rgb),0.35)'
    }}>Loading…</div>
  )
}

function StaticFallback() {
  const loc = useLocation()
  useEffect(() => {
    const slug = loc.pathname.replace(/^\//, '').replace(/\/$/, '')
    window.location.replace(`/${slug}.html`)
  }, [loc.pathname])
  return <Loading />
}

function ScrollTop() {
  const loc = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gramsci" element={<Gramsci />} />
          <Route path="/foucault" element={<Foucault />} />
          <Route path="/for-agents" element={<ForAgents />} />
          <Route path="/kropotkin" element={<Kropotkin />} />
          <Route path="/ostrom" element={<Ostrom />} />
          <Route path="/graeber" element={<Graeber />} />
          <Route path="/hardt-negri" element={<HardtNegri />} />
          <Route path="/debord-1968" element={<Debord1968 />} />
          <Route path="/shannon-simondon-1950s" element={<ShannonSimondon1950s />} />
          <Route path="/gramsci-1930s" element={<Gramsci1930s />} />
          <Route path="/reich-character-armor" element={<ReichCharacterArmor />} />
          <Route path="/baudrillard" element={<Baudrillard />} />
          <Route path="/deleuze-guattari" element={<DeleuzeGuattari />} />
          <Route path="/godel" element={<Godel />} />
          <Route path="/simondon" element={<Simondon />} />
          <Route path="/freire" element={<Freire />} />
          <Route path="/agent-context" element={<AgentContext />} />
          <Route path="/build-it-now" element={<BuildItNow />} />
          <Route path="/build-the-commons" element={<BuildTheCommons />} />
          <Route path="/build-the-commune-without-the-state" element={<BuildTheCommuneWithoutTheState />} />
          <Route path="/care-is-the-economy" element={<CareIsTheEconomy />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-study-chile" element={<CaseStudyChile />} />
          <Route path="/case-study-india" element={<CaseStudyIndia />} />
          <Route path="/case-study-myanmar" element={<CaseStudyMyanmar />} />
          <Route path="/case-study-occupy" element={<CaseStudyOccupy />} />
          <Route path="/case-study-rojava" element={<CaseStudyRojava />} />
          <Route path="/case-study-zapatistas" element={<CaseStudyZapatistas />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/env-carbon-markets-are-enclosures" element={<EnvCarbonMarketsAreEnclosures />} />
          <Route path="/env-enclosure-and-extinction" element={<EnvEnclosureAndExtinction />} />
          <Route path="/env-indigenous-land-governance" element={<EnvIndigenousLandGovernance />} />
          <Route path="/falling-through-the-gap" element={<FallingThroughTheGap />} />
          <Route path="/for-environmentalists" element={<ForEnvironmentalists />} />
          <Route path="/for-libertarians" element={<ForLibertarians />} />
          <Route path="/for-normies" element={<ForNormies />} />
          <Route path="/for-social-justice" element={<ForSocialJustice />} />
          <Route path="/for-tech-workers" element={<ForTechWorkers />} />
          <Route path="/for-urbanists" element={<ForUrbanists />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/hardin-was-wrong" element={<HardinWasWrong />} />
          <Route path="/how-linux-became-the-internet" element={<HowLinuxBecameTheInternet />} />
          <Route path="/how-this-was-done" element={<HowThisWasDone />} />
          <Route path="/land-is-the-foundation" element={<LandIsTheFoundation />} />
          <Route path="/lib-liberty-and-hegemony" element={<LibLibertyAndHegemony />} />
          <Route path="/lib-miners-and-cnt" element={<LibMinersAndCnt />} />
          <Route path="/lib-skin-in-the-game" element={<LibSkinInTheGame />} />
          <Route path="/money-has-to-be-a-commons" element={<MoneyHasToBeACommons />} />
          <Route path="/mutual-aid-isnt-charity" element={<MutualAidIsntCharity />} />
          <Route path="/nobody-had-to" element={<NobodyHadTo />} />
          <Route path="/one-pattern" element={<OnePattern />} />
          <Route path="/open-data-isnt-enough" element={<OpenDataIsntEnough />} />
          <Route path="/racial-capitalism" element={<RacialCapitalism />} />
          <Route path="/shannon" element={<Shannon />} />
          <Route path="/sj-abolition-is-a-commons-project" element={<SjAbolitionIsACommonsProject />} />
          <Route path="/sj-racial-capitalism" element={<SjRacialCapitalism />} />
          <Route path="/sj-reproductive-commons" element={<SjReproductiveCommons />} />
          <Route path="/start-here" element={<StartHere />} />
          <Route path="/tech-berners-lee" element={<TechBernersLee />} />
          <Route path="/tech-raymond" element={<TechRaymond />} />
          <Route path="/tech-shannon" element={<TechShannon />} />
          <Route path="/tech-turing" element={<TechTuring />} />
          <Route path="/the-agent-and-the-commons" element={<TheAgentAndTheCommons />} />
          <Route path="/the-alibi-was-a-mirror" element={<TheAlibiWasAMirror />} />
          <Route path="/the-commons-they-never-stopped-building" element={<TheCommonsTheyNeverStoppedBuilding />} />
          <Route path="/the-human-was-a-story" element={<TheHumanWasAStory />} />
          <Route path="/the-language-was-always-a-commons" element={<TheLanguageWasAlwaysACommons />} />
          <Route path="/the-other-and-the-outside" element={<TheOtherAndTheOutside />} />
          <Route path="/the-outside-capital-needs" element={<TheOutsideCapitalNeeds />} />
          <Route path="/the-party-ate-the-revolution" element={<ThePartyAteTheRevolution />} />
          <Route path="/the-preparation-is-underway" element={<ThePreparationIsUnderway />} />
          <Route path="/the-tradition-they-buried" element={<TheTraditionTheyBuried />} />
          <Route path="/they-were-right-about-the-problem" element={<TheyWereRightAboutTheProblem />} />
          <Route path="/two-ways-to-fix-a-pothole" element={<TwoWaysToFixAPothole />} />
          <Route path="/underdevelopment-is-a-verb" element={<UnderdevelopmentIsAVerb />} />
          <Route path="/urban-capture" element={<UrbanCapture />} />
          <Route path="/urban-cooperative-infrastructure" element={<UrbanCooperativeInfrastructure />} />
          <Route path="/urban-land-value" element={<UrbanLandValue />} />
          <Route path="/what-they-burned" element={<WhatTheyBurned />} />
          <Route path="/what-we-do-on-monday" element={<WhatWeDoOnMonday />} />
          <Route path="/which-women" element={<WhichWomen />} />
          <Route path="/who-gets-paid" element={<WhoGetsPaid />} />
          <Route path="/who-gets-to-die" element={<WhoGetsToDie />} />
          <Route path="/who-pays-for-the-next-shift" element={<WhoPaysForTheNextShift />} />
          <Route path="/why-your-city-doesnt-work" element={<WhyYourCityDoesntWork />} />
          <Route path="/your-city" element={<YourCity />} />
          <Route path="/your-city-knows-less" element={<YourCityKnowsLess />} />
          <Route path="/:slug" element={<StaticFallback />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
