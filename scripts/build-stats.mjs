// Post-build: prints a summary of site stats to stdout
// Runs after all other build steps so counts are accurate.

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT        = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT_DIR = path.join(ROOT, 'src/content/articles')
const BOOK_DIR    = path.join(ROOT, 'src/content/book')
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
  if (n < 1024)     return `${n} B`
  if (n < 1024**2)  return `${(n/1024).toFixed(1)} KB`
  if (n < 1024**3)  return `${(n/1024**2).toFixed(1)} MB`
  return `${(n/1024**3).toFixed(2)} GB`
}

function printSection(title, fileCount, words, groupMap) {
  const divider = '─'.repeat(50)
  console.log(`\n${divider}`)
  console.log(`  ${title}`)
  console.log(divider)
  console.log(`  Files         : ${fileCount}`)
  console.log(`  Total words   : ${words.toLocaleString()}`)
  const sorted = Object.entries(groupMap).sort((a, b) => b[1] - a[1])
  for (const [label, count] of sorted) {
    const l = label.length > 40 ? label.slice(0, 37) + '…' : label
    console.log(`    ${String(count).padStart(3)}  ${l}`)
  }
  console.log(divider)
}

// ── articles ───────────────────────────────────────────────────────────────

const articleFiles = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))
let articleWords = 0
const seriesMap = {}

for (const file of articleFiles) {
  const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'))
  articleWords += wordCount(body)
  const tag = meta.seriesTag?.trim() || '(untagged)'
  seriesMap[tag] = (seriesMap[tag] ?? 0) + 1
}

// ── book ───────────────────────────────────────────────────────────────────

const bookFiles = fs.existsSync(BOOK_DIR)
  ? fs.readdirSync(BOOK_DIR).filter(f => f.endsWith('.md'))
  : []
let bookWords = 0
const partsMap = {}

for (const file of bookFiles) {
  const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(BOOK_DIR, file), 'utf8'))
  bookWords += wordCount(body)
  const part = meta.part?.trim() || '(untagged)'
  partsMap[part] = (partsMap[part] ?? 0) + 1
}

// ── dist ───────────────────────────────────────────────────────────────────

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

printSection('ARTICLES — power-explained', articleFiles.length, articleWords, seriesMap)

if (bookFiles.length > 0) {
  printSection('BOOK — /book', bookFiles.length, bookWords, partsMap)
}

const divider = '─'.repeat(50)
console.log(`\n${divider}`)
console.log('  BUILD OUTPUT')
console.log(divider)
console.log(`  llms.txt      : ${llmsTxtCount} files written`)
console.log(`  Sitemap URLs  : ${sitemapUrls}`)
console.log(`  Dist size     : ${distSize}`)
console.log(divider + '\n')
