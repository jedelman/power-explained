// Post-build: prints a summary of site stats to stdout
// Runs after all other build steps so counts are accurate.

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT        = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT_DIR = path.join(ROOT, 'src/content/articles')
const DIST_DIR    = path.join(ROOT, 'dist')

// ── helpers ────────────────────────────────────────────────────────────────

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/m)
  if (!match) return { meta: {}, body: raw }
  const meta = {}
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(': ')
    if (idx === -1) return
    meta[line.slice(0, idx).trim()] = line.slice(idx + 2).trim().replace(/^"|"$/g, '')
  })
  return { meta, body: match[2].trim() }
}

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function dirSizeBytes(dir) {
  if (!fs.existsSync(dir)) return 0
  let total = 0
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) total += dirSizeBytes(full)
    else total += fs.statSync(full).size
  }
  return total
}

function humanBytes(n) {
  if (n < 1024)       return `${n} B`
  if (n < 1024**2)    return `${(n/1024).toFixed(1)} KB`
  if (n < 1024**3)    return `${(n/1024**2).toFixed(1)} MB`
  return `${(n/1024**3).toFixed(2)} GB`
}

// ── gather article stats ───────────────────────────────────────────────────

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))

let totalWords = 0
const seriesMap = {}   // series label → count

for (const file of files) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  const { meta, body } = parseFrontmatter(raw)
  totalWords += wordCount(body)
  const tag = meta.seriesTag?.trim() || '(untagged)'
  seriesMap[tag] = (seriesMap[tag] ?? 0) + 1
}

// ── gather dist stats ─────────────────────────────────────────────────────

const llmsTxtCount = fs.existsSync(DIST_DIR)
  ? fs.readdirSync(DIST_DIR, { withFileTypes: true })
      .filter(e => e.isDirectory())
      .filter(e => fs.existsSync(path.join(DIST_DIR, e.name, 'llms.txt')))
      .length
  : 0

const sitemapPath = path.join(DIST_DIR, 'sitemap.xml')
const sitemapUrls = fs.existsSync(sitemapPath)
  ? (fs.readFileSync(sitemapPath, 'utf8').match(/<loc>/g) ?? []).length
  : 0

const distSize = humanBytes(dirSizeBytes(DIST_DIR))

// ── print ──────────────────────────────────────────────────────────────────

const divider = '─'.repeat(50)

console.log(`\n${divider}`)
console.log('  BUILD STATS — power-explained')
console.log(divider)
console.log(`  Articles      : ${files.length}`)
console.log(`  Total words   : ${totalWords.toLocaleString()}`)
console.log(`  llms.txt      : ${llmsTxtCount} files written`)
console.log(`  Sitemap URLs  : ${sitemapUrls}`)
console.log(`  Dist size     : ${distSize}`)
console.log(divider)
console.log('  Articles by series:')

const sorted = Object.entries(seriesMap).sort((a, b) => b[1] - a[1])
for (const [series, count] of sorted) {
  const label = series.length > 40 ? series.slice(0, 37) + '…' : series
  console.log(`    ${String(count).padStart(3)}  ${label}`)
}

console.log(divider + '\n')
