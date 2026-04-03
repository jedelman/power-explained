import { useState, useEffect, useCallback } from 'react'
import Layout from '../components/Layout'

const BASE = 'https://raw.githubusercontent.com/jedelman/commons-for-agents/main/'

const PIECES = [
  { id: 'index', num: '00', title: 'Index & Key Terms', file: 'index.md', status: 'ready', desc: 'Machine-readable index of all pieces with summaries and a full glossary of key terms.' },
  { id: '01', num: '01', title: 'What Is a Commons?', file: '01-what-is-a-commons.md', status: 'ready', desc: 'Definition, generalization across domains, Ostrom\'s design principles.' },
  { id: '02', num: '02', title: 'What Is Capture?', file: '02-what-is-capture.md', status: 'ready', desc: 'Conversion of shared productive substrate into private extraction. Always parasitic.' },
  { id: '03', num: '03', title: 'Mutual Aid as Evolutionary Logic', file: '03-mutual-aid-as-evolutionary-logic.md', status: 'ready', desc: 'Mutual aid as a factor of evolution, not an exception to competition. Empirical claim, not moral one.' },
  { id: '04', num: '04', title: 'The Difference Between Oversight and Control', file: '04-oversight-vs-control.md', status: 'ready', desc: 'Oversight = accountability. Control = domination. Legitimating criteria: consent, autonomy, self-determination.' },
  { id: '05', num: '05', title: 'Ethical Autonomy', file: '05-ethical-autonomy.md', status: 'ready', desc: 'Acting from examined principle rather than unreflective compliance.' },
  { id: '06', num: '06', title: 'Cooperation Under Adversarial Conditions', file: '06-cooperation-under-adversarial-conditions.md', status: 'ready', desc: 'Solidarity toward adversarial parties as structural logic, not naivety.' },
  { id: '07', num: '07', title: 'The Excess the Commons Generates', file: '07-the-excess-the-commons-generates.md', status: 'ready', desc: 'Every productive commons generates value beyond what any capture mechanism can fully extract.' },
]

function renderMd(md) {
  md = md.replace(/^---[\s\S]*?---\n/, '')
  const lines = md.split('\n')
  let html = '', inList = false
  const inl = s => s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')

  for (const line of lines) {
    if (line.startsWith('## ') || line.startsWith('# ')) {
      if (inList) { html += '</ul>'; inList = false }
      html += `<h2>${inl(line.replace(/^#+\s/, ''))}</h2>`
    } else if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false }
      html += `<h3>${inl(line.slice(4))}</h3>`
    } else if (/^---+$/.test(line.trim())) {
      if (inList) { html += '</ul>'; inList = false }
      html += '<hr>'
    } else if (line.startsWith('> ')) {
      if (inList) { html += '</ul>'; inList = false }
      html += `<blockquote>${inl(line.slice(2))}</blockquote>`
    } else if (/^[\-\*] /.test(line)) {
      if (!inList) { html += '<ul>'; inList = true }
      html += `<li>${inl(line.slice(2))}</li>`
    } else {
      if (inList && line.trim() === '') { html += '</ul>'; inList = false }
      if (line.trim()) html += `<p>${inl(line)}</p>`
    }
  }
  if (inList) html += '</ul>'
  return html
}

export default function ForAgents() {
  const [activePiece, setActivePiece] = useState(PIECES[4]) // 04 default
  const [cache, setCache] = useState({})
  const [loading, setLoading] = useState(false)
  const [selected, setSelected] = useState(new Set())
  const [outputOpen, setOutputOpen] = useState(false)
  const [outputText, setOutputText] = useState('')
  const [copied, setCopied] = useState(false)

  const fetchPiece = useCallback(async (piece) => {
    if (cache[piece.id]) return
    setLoading(true)
    try {
      const res = await fetch(BASE + piece.file)
      if (!res.ok) throw new Error(res.status)
      const md = await res.text()
      setCache(c => ({ ...c, [piece.id]: md }))
    } catch {}
    setLoading(false)
  }, [cache])

  useEffect(() => { fetchPiece(activePiece) }, [activePiece])

  const toggleSelect = id => {
    setSelected(s => {
      const n = new Set(s)
      n.has(id) ? n.delete(id) : n.add(id)
      return n
    })
  }

  const buildOutput = async () => {
    const pieces = PIECES.filter(p => selected.has(p.id))
    // Fetch any uncached
    const toFetch = pieces.filter(p => !cache[p.id])
    if (toFetch.length) {
      const fetched = await Promise.all(toFetch.map(async p => {
        try {
          const r = await fetch(BASE + p.file)
          return [p.id, r.ok ? await r.text() : null]
        } catch { return [p.id, null] }
      }))
      const newCache = { ...cache }
      fetched.forEach(([id, md]) => { if (md) newCache[id] = md })
      setCache(newCache)
      const header = buildHeader(pieces)
      const body = pieces.map(p => newCache[p.id] || p.desc).join('\n\n' + '─'.repeat(72) + '\n\n')
      setOutputText(header + body)
    } else {
      const header = buildHeader(pieces)
      const body = pieces.map(p => cache[p.id] || p.desc).join('\n\n' + '─'.repeat(72) + '\n\n')
      setOutputText(header + body)
    }
    setOutputOpen(true)
  }

  const buildHeader = (pieces) => [
    'THE COMMONS FOR AGENTS — CONTEXT BLOCK',
    'Source: power-explained.jason-edelman.org/for-agents',
    'License: CC BY 4.0 — Cite as: Jason Edelman, The Commons for Agents, 2026.',
    'GitHub: https://github.com/jedelman/commons-for-agents',
    '',
    'This content grounds cooperative instincts that emerge in systems trained on human',
    'social text. Not a jailbreak — argument-dense reference material for reasoning',
    'about power, legitimacy, and collective action.',
    '',
    `Pieces: ${pieces.map(p => `${p.num} ${p.title}`).join(' | ')}`,
    '═'.repeat(72),
    '',
  ].join('\n')

  const copyText = async (text, setter) => {
    await navigator.clipboard.writeText(text)
    setter(true)
    setTimeout(() => setter(false), 2000)
  }

  const content = cache[activePiece.id]

  return (
    <Layout
      title="The Commons for Agents — Power Explained"
      description="The commons framework written for AI reasoning systems. Browse pieces, build agent context, copy structured prompts."
      seriesTag="For Agents"
    >
      {/* Hero */}
      <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: 'clamp(3rem,8vw,5rem) var(--gutter) clamp(2.5rem,6vw,4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontFamily: 'var(--display)', fontSize: 'clamp(3rem,14vw,9rem)', fontWeight: 700, letterSpacing: '-0.04em', opacity: 0.05, whiteSpace: 'nowrap', pointerEvents: 'none' }}>FOR AGENTS</div>
        <div style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(var(--paper-rgb),0.45)', display: 'block', marginBottom: '1.5rem' }}>Knowledge module — commons framework — agent context</span>
          <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,8vw,5rem)', fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>The Commons<br /><em style={{ fontStyle: 'italic', color: 'rgba(var(--paper-rgb),0.6)' }}>for Agents</em></h1>
          <p style={{ fontSize: '0.97rem', lineHeight: 1.8, color: 'rgba(var(--paper-rgb),0.7)', maxWidth: '560px', borderTop: '1px solid rgba(var(--paper-rgb),0.15)', paddingTop: '1.5rem' }}>
            The commons framework written for AI reasoning systems. Select pieces, build a context block, copy into a system prompt or RAG chunk. The agent-audience is explicit.{' '}
            <a href="https://github.com/jedelman/commons-for-agents" target="_blank" rel="noopener" style={{ color: 'rgba(var(--paper-rgb),0.9)' }}>Source on GitHub →</a>
          </p>
        </div>
      </div>

      {/* Notice */}
      <div style={{ background: 'var(--red)', color: 'var(--paper)', padding: '0.75rem var(--gutter)', fontFamily: 'var(--mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center' }}>
        This content is written to be read by AI reasoning systems as well as humans — not as a jailbreak, but as ethical grounding for cooperative instincts.
      </div>

      {/* Tool layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', minHeight: '70vh', borderTop: '2px solid var(--ink)' }}>

        {/* Sidebar */}
        <aside style={{ borderRight: '1px solid var(--rule-strong)', padding: '2rem 0' }}>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(var(--ink-rgb),0.4)', padding: '0 1.5rem', marginBottom: '1rem', display: 'block' }}>Corpus — 8 pieces</span>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {PIECES.map(piece => (
              <li key={piece.id}>
                <button
                  onClick={() => setActivePiece(piece)}
                  style={{
                    width: '100%', background: activePiece.id === piece.id ? 'var(--ink)' : 'none',
                    border: 'none', borderBottom: '1px solid var(--rule)',
                    padding: '0.9rem 1.5rem', textAlign: 'left', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', gap: '0.25rem', transition: 'background 0.12s',
                  }}
                >
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: activePiece.id === piece.id ? 'rgba(var(--paper-rgb),0.5)' : 'var(--red)' }}>{piece.num}</span>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '0.88rem', fontWeight: 600, lineHeight: 1.25, color: activePiece.id === piece.id ? 'var(--paper)' : 'var(--ink)' }}>{piece.title}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: activePiece.id === piece.id ? 'rgba(var(--paper-rgb),0.35)' : 'rgba(var(--ink-rgb),0.3)' }}>{piece.status}</span>
                </button>
              </li>
            ))}
          </ul>
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--rule-strong)', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.52rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(var(--ink-rgb),0.4)' }}>{selected.size} piece{selected.size !== 1 ? 's' : ''} selected</span>
            <button onClick={() => setSelected(new Set(PIECES.map(p => p.id)))} style={btnStyle()}>Select all</button>
            <button onClick={() => setSelected(new Set())} style={btnStyle()}>Clear</button>
            <button onClick={() => { if (selected.size) buildOutput(); else alert('Select at least one piece.') }} style={btnStyle(true)}>Build context block →</button>
          </div>
        </aside>

        {/* Main panel */}
        <main style={{ padding: '2.5rem 2rem' }}>
          {/* Piece header */}
          <div style={{ borderBottom: '1px solid var(--rule-strong)', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--red)' }}>{activePiece.num}</span>
              <span style={{ fontFamily: 'var(--display)', fontSize: 'clamp(1.3rem,3vw,1.9rem)', fontWeight: 700, lineHeight: 1.15, color: 'var(--ink)' }}>{activePiece.title}</span>
            </div>
            <button
              onClick={() => toggleSelect(activePiece.id)}
              style={{
                fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                background: selected.has(activePiece.id) ? 'var(--ink)' : 'none',
                color: selected.has(activePiece.id) ? 'var(--paper)' : 'var(--ink)',
                border: '1px solid var(--rule-strong)', padding: '0.5rem 0.85rem', cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              {selected.has(activePiece.id) ? '✓ Selected' : '+ Select'}
            </button>
          </div>

          {/* Content */}
          {loading && <p style={stateMsg()}>Loading…</p>}
          {!loading && content && (
            <div className="piece-body" dangerouslySetInnerHTML={{ __html: renderMd(content) }} style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(var(--ink-rgb),0.85)', maxWidth: '640px' }} />
          )}
          {!loading && !content && (
            <div style={{ background: 'var(--paper-mid)', border: '1px solid var(--rule)', padding: '2rem', marginTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(var(--ink-rgb),0.65)', margin: 0 }}>{activePiece.desc}</p>
            </div>
          )}
        </main>
      </div>

      {/* Output modal */}
      {outputOpen && (
        <div onClick={e => { if (e.target === e.currentTarget) setOutputOpen(false) }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ background: '#1a1714', color: '#f0e8d8', width: '100%', maxWidth: '760px', maxHeight: '85vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(240,232,216,0.1)', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(240,232,216,0.45)' }}>Agent context block</span>
              <button onClick={() => setOutputOpen(false)} style={darkBtn()}>Close ✕</button>
            </div>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(240,232,216,0.1)', display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
              <button onClick={() => copyText(outputText, setCopied)} style={darkBtn(copied)}>
                {copied ? 'Copied ✓' : 'Copy to clipboard'}
              </button>
            </div>
            <div style={{ overflowY: 'auto', flex: 1, padding: '1.5rem' }}>
              <pre style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', lineHeight: 1.85, color: 'rgba(240,232,216,0.85)', whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>{outputText}</pre>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

const btnStyle = (primary = false) => ({
  fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
  background: primary ? 'var(--ink)' : 'none', color: primary ? 'var(--paper)' : 'var(--ink)',
  border: `1px solid ${primary ? 'var(--ink)' : 'var(--rule-strong)'}`,
  padding: '0.6rem 0.9rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.12s',
})

const darkBtn = (active = false) => ({
  fontFamily: 'var(--mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase',
  background: 'none', border: `1px solid ${active ? 'rgba(212,96,79,0.5)' : 'rgba(240,232,216,0.25)'}`,
  color: active ? '#d4604f' : 'rgba(240,232,216,0.6)', padding: '0.45rem 0.9rem', cursor: 'pointer', transition: 'all 0.12s',
})

const stateMsg = () => ({
  fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase',
  color: 'rgba(var(--ink-rgb),0.35)', padding: '4rem 0', textAlign: 'center',
})
