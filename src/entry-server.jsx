// SSR entry — must use eager imports (not lazy) for renderToString to work
// Used only by scripts/prerender.js, never bundled into the client build

import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'

// Eager imports — no lazy() here
import AgentContext from './pages/AgentContext'
import BuildItNow from './pages/BuildItNow'
import BuildTheCommons from './pages/BuildTheCommons'
import BuildTheCommuneWithoutTheState from './pages/BuildTheCommuneWithoutTheState'
import CareIsTheEconomy from './pages/CareIsTheEconomy'
import CaseStudies from './pages/CaseStudies'
import CaseStudyChile from './pages/CaseStudyChile'
import CaseStudyIndia from './pages/CaseStudyIndia'
import CaseStudyMyanmar from './pages/CaseStudyMyanmar'
import CaseStudyOccupy from './pages/CaseStudyOccupy'
import CaseStudyRojava from './pages/CaseStudyRojava'
import CaseStudyZapatistas from './pages/CaseStudyZapatistas'
import Contents from './pages/Contents'
import DeleuzeGuattari from './pages/DeleuzeGuattari'
import EnvCarbonMarketsAreEnclosures from './pages/EnvCarbonMarketsAreEnclosures'
import EnvEnclosureAndExtinction from './pages/EnvEnclosureAndExtinction'
import EnvIndigenousLandGovernance from './pages/EnvIndigenousLandGovernance'
import FallingThroughTheGap from './pages/FallingThroughTheGap'
import ForAgents from './pages/ForAgents'
import ForEnvironmentalists from './pages/ForEnvironmentalists'
import ForLibertarians from './pages/ForLibertarians'
import ForNormies from './pages/ForNormies'
import ForSocialJustice from './pages/ForSocialJustice'
import ForTechWorkers from './pages/ForTechWorkers'
import ForUrbanists from './pages/ForUrbanists'
import Foucault from './pages/Foucault'
import Freire from './pages/Freire'
import Glossary from './pages/Glossary'
import Godel from './pages/Godel'
import Graeber from './pages/Graeber'
import Gramsci from './pages/Gramsci'
import HardinWasWrong from './pages/HardinWasWrong'
import HardtNegri from './pages/HardtNegri'
import Home from './pages/Home'
import HowLinuxBecameTheInternet from './pages/HowLinuxBecameTheInternet'
import HowThisWasDone from './pages/HowThisWasDone'
import Kropotkin from './pages/Kropotkin'
import LandIsTheFoundation from './pages/LandIsTheFoundation'
import LibLibertyAndHegemony from './pages/LibLibertyAndHegemony'
import LibMinersAndCnt from './pages/LibMinersAndCnt'
import LibSkinInTheGame from './pages/LibSkinInTheGame'
import MoneyHasToBeACommons from './pages/MoneyHasToBeACommons'
import MutualAidIsntCharity from './pages/MutualAidIsntCharity'
import NobodyHadTo from './pages/NobodyHadTo'
import OnePattern from './pages/OnePattern'
import OpenDataIsntEnough from './pages/OpenDataIsntEnough'
import Ostrom from './pages/Ostrom'
import RacialCapitalism from './pages/RacialCapitalism'
import Shannon from './pages/Shannon'
import Simondon from './pages/Simondon'
import SjAbolitionIsACommonsProject from './pages/SjAbolitionIsACommonsProject'
import SjRacialCapitalism from './pages/SjRacialCapitalism'
import SjReproductiveCommons from './pages/SjReproductiveCommons'
import StartHere from './pages/StartHere'
import TechBernersLee from './pages/TechBernersLee'
import TechRaymond from './pages/TechRaymond'
import TechShannon from './pages/TechShannon'
import TechTuring from './pages/TechTuring'
import TheAgentAndTheCommons from './pages/TheAgentAndTheCommons'
import TheAlibiWasAMirror from './pages/TheAlibiWasAMirror'
import TheCommonsTheyNeverStoppedBuilding from './pages/TheCommonsTheyNeverStoppedBuilding'
import TheHumanWasAStory from './pages/TheHumanWasAStory'
import TheLanguageWasAlwaysACommons from './pages/TheLanguageWasAlwaysACommons'
import TheOtherAndTheOutside from './pages/TheOtherAndTheOutside'
import TheOutsideCapitalNeeds from './pages/TheOutsideCapitalNeeds'
import ThePartyAteTheRevolution from './pages/ThePartyAteTheRevolution'
import ThePreparationIsUnderway from './pages/ThePreparationIsUnderway'
import TheTraditionTheyBuried from './pages/TheTraditionTheyBuried'
import TheyWereRightAboutTheProblem from './pages/TheyWereRightAboutTheProblem'
import TwoWaysToFixAPothole from './pages/TwoWaysToFixAPothole'
import UnderdevelopmentIsAVerb from './pages/UnderdevelopmentIsAVerb'
import UrbanCapture from './pages/UrbanCapture'
import UrbanCooperativeInfrastructure from './pages/UrbanCooperativeInfrastructure'
import UrbanLandValue from './pages/UrbanLandValue'
import WhatTheyBurned from './pages/WhatTheyBurned'
import WhatWeDoOnMonday from './pages/WhatWeDoOnMonday'
import WhichWomen from './pages/WhichWomen'
import WhoGetsPaid from './pages/WhoGetsPaid'
import WhoGetsToDie from './pages/WhoGetsToDie'
import WhoPaysForTheNextShift from './pages/WhoPaysForTheNextShift'
import WhyYourCityDoesntWork from './pages/WhyYourCityDoesntWork'
import YourCity from './pages/YourCity'
import YourCityKnowsLess from './pages/YourCityKnowsLess'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gramsci" element={<Gramsci />} />
        <Route path="/foucault" element={<Foucault />} />
        <Route path="/for-agents" element={<ForAgents />} />
        <Route path="/kropotkin" element={<Kropotkin />} />
        <Route path="/ostrom" element={<Ostrom />} />
        <Route path="/graeber" element={<Graeber />} />
        <Route path="/hardt-negri" element={<HardtNegri />} />
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
      </Routes>
    </StaticRouter>
  )
}
