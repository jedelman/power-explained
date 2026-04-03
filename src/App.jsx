import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

const Home     = lazy(() => import('./pages/Home'))
const Gramsci  = lazy(() => import('./pages/Gramsci'))
const Foucault = lazy(() => import('./pages/Foucault'))
const ForAgents = lazy(() => import('./pages/ForAgents'))

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

// Hard-navigate to the static .html file for unconverted pages.
// CF Pages serves these directly from dist/ — they bypass the SPA.
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
          <Route path="/"           element={<Home />} />
          <Route path="/gramsci"    element={<Gramsci />} />
          <Route path="/foucault"   element={<Foucault />} />
          <Route path="/for-agents" element={<ForAgents />} />
          <Route path="/:slug"      element={<StaticFallback />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
