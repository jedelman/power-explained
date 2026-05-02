/**
 * smoke-crawl.mjs — crawl the live site for broken links
 * Usage: node scripts/smoke-crawl.mjs https://power-explained.jason-edelman.org
 *
 * Crawls all internal pages up to MAX_PAGES, checks all internal + external
 * links for non-2xx responses. Exits 1 if broken links found.
 */

const BASE_URL = process.argv[2]?.replace(/\/$/, '')
if (!BASE_URL) { console.error('Usage: smoke-crawl.mjs <base-url>'); process.exit(1) }

const MAX_PAGES   = 150   // max pages to crawl
const CONCURRENCY = 8     // parallel fetches
const TIMEOUT_MS  = 10000

// Dynamic import for node-fetch
const { default: fetch } = await import('node-fetch')
const AbortController   = globalThis.AbortController

const queue    = new Set(['/'])
const visited  = new Set()
const broken   = []   // { page, href, status, error }
const external = new Set()

function isInternal(href) {
  if (href.startsWith('/')) return true
  try { return new URL(href).origin === BASE_URL } catch { return false }
}

function normalise(href, base) {
  try {
    const u = new URL(href, base)
    // Strip hash, trailing slash normalise
    u.hash = ''
    return u.href.replace(/\/$/, '') || '/'
  } catch { return null }
}

function extractLinks(html, pageUrl) {
  const links = []
  const re = /href="([^"#][^"]*)"/g
  let m
  while ((m = re.exec(html)) !== null) {
    const raw = m[1].trim()
    if (!raw || raw.startsWith('mailto:') || raw.startsWith('javascript:')) continue
    const abs = normalise(raw, pageUrl)
    if (abs) links.push(abs)
  }
  return links
}

async function fetchWithTimeout(url) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'power-explained-smoketest/1.0' },
    })
    return { status: res.status, ok: res.ok, text: res.ok ? await res.text() : null }
  } catch (e) {
    return { status: 0, ok: false, error: e.message }
  } finally {
    clearTimeout(timer)
  }
}

async function crawlPage(path) {
  const url = path.startsWith('http') ? path : `${BASE_URL}${path}`
  visited.add(path)

  const { status, ok, text, error } = await fetchWithTimeout(url)

  if (!ok) {
    broken.push({ page: path, href: url, status, error })
    return
  }

  if (!text) return

  // Extract links and add unvisited internal ones to queue
  for (const link of extractLinks(text, url)) {
    const linkPath = link.replace(BASE_URL, '') || '/'
    if (isInternal(link)) {
      if (!visited.has(linkPath) && !queue.has(linkPath) && visited.size + queue.size < MAX_PAGES) {
        queue.add(linkPath)
      }
    } else {
      external.add(link)
    }
  }
}

// Worker pool
async function runPool(tasks, concurrency) {
  const iter = tasks[Symbol.iterator]()
  const workers = Array.from({ length: concurrency }, async () => {
    for (let { value: task, done } = iter.next(); !done; { value: task, done } = iter.next()) {
      await crawlPage(task)
    }
  })
  await Promise.all(workers)
}

// BFS crawl
console.log(`\n🔍 Crawling ${BASE_URL}...\n`)

while (queue.size > 0 && visited.size < MAX_PAGES) {
  const batch = [...queue].slice(0, CONCURRENCY)
  batch.forEach(p => queue.delete(p))
  await runPool(batch, CONCURRENCY)
  process.stdout.write(`\r   Crawled: ${visited.size} pages | Queue: ${queue.size} | Broken: ${broken.length}  `)
}

// Spot-check a sample of external links (HEAD only, don't pull body)
const EXT_SAMPLE = [...external].slice(0, 30)
if (EXT_SAMPLE.length) {
  console.log(`\n\n🌐 Checking ${EXT_SAMPLE.length} external links...`)
  for (const href of EXT_SAMPLE) {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
    try {
      const res = await fetch(href, {
        method: 'HEAD', signal: ctrl.signal, redirect: 'follow',
        headers: { 'User-Agent': 'power-explained-smoketest/1.0' },
      })
      if (!res.ok && res.status !== 405) {
        broken.push({ page: 'external', href, status: res.status })
      }
    } catch (e) {
      broken.push({ page: 'external', href, status: 0, error: e.message })
    } finally {
      clearTimeout(timer)
    }
  }
}

// Report
console.log(`\n\n${'─'.repeat(60)}`)
console.log(`Pages crawled:   ${visited.size}`)
console.log(`External links:  ${external.size} (checked ${Math.min(EXT_SAMPLE.length, external.size)})`)
console.log(`Broken links:    ${broken.length}`)

if (broken.length) {
  console.log(`\n❌ BROKEN LINKS:\n`)
  for (const { page, href, status, error } of broken) {
    const detail = error ? `ERROR: ${error}` : `HTTP ${status}`
    console.log(`  ${detail}`)
    console.log(`    href: ${href}`)
    console.log(`    found on: ${page}\n`)
  }
  console.log(`\nSmoke test FAILED — ${broken.length} broken link(s) found.`)
  process.exit(1)
} else {
  console.log(`\n✅ Smoke test passed — no broken links found.`)
}
