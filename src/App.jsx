import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Converted thinker pages
const Home          = lazy(() => import('./pages/Home'))
const Gramsci       = lazy(() => import('./pages/Gramsci'))
const Foucault      = lazy(() => import('./pages/Foucault'))
const ForAgents     = lazy(() => import('./pages/ForAgents'))
const Kropotkin     = lazy(() => import('./pages/Kropotkin'))
const Ostrom        = lazy(() => import('./pages/Ostrom'))
const Graeber       = lazy(() => import('./pages/Graeber'))
const HardtNegri    = lazy(() => import('./pages/HardtNegri'))
const DeleuzeGuattari = lazy(() => import('./pages/DeleuzeGuattari'))
const Godel         = lazy(() => import('./pages/Godel'))
const Simondon      = lazy(() => import('./pages/Simondon'))
const Freire        = lazy(() => import('./pages/Freire'))

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
          <Route path="/"                  element={<Home />} />
          <Route path="/gramsci"           element={<Gramsci />} />
          <Route path="/foucault"          element={<Foucault />} />
          <Route path="/for-agents"        element={<ForAgents />} />
          <Route path="/kropotkin"         element={<Kropotkin />} />
          <Route path="/ostrom"            element={<Ostrom />} />
          <Route path="/graeber"           element={<Graeber />} />
          <Route path="/hardt-negri"       element={<HardtNegri />} />
          <Route path="/deleuze-guattari"  element={<DeleuzeGuattari />} />
          <Route path="/godel"             element={<Godel />} />
          <Route path="/simondon"          element={<Simondon />} />
          <Route path="/freire"            element={<Freire />} />
          <Route path="/:slug"             element={<StaticFallback />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
