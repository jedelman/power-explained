/**
 * rewrite-pages.mjs
 * Rewrites JSX pages that have a matching src/content/*.md to use ArticlePage.
 * Original JSX is backed up to src/pages/_legacy/*.jsx before rewriting.
 * Usage: node scripts/rewrite-pages.mjs [--dry-run] [--slug=why-your-city-doesnt-work]
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname   = path.dirname(fileURLToPath(import.meta.url))
const ROOT        = path.resolve(__dirname, '..')
const PAGES_DIR   = path.join(ROOT, 'src/pages')
const CONTENT_DIR = path.join(ROOT, 'src/content')
const LEGACY_DIR  = path.join(PAGES_DIR, '_legacy')

const DRY_RUN     = process.argv.includes('--dry-run')
const SLUG_FILTER = process.argv.find(a => a.startsWith('--slug='))?.split('=')[1]

function toSlug(name) {
  return name
    .replace(/\.jsx$/, '')
    .replace(/([A-Z])/g, m => `-${m.toLowerCase()}`)
    .replace(/^-/, '')
}

function toPascal(name) {
  return name.replace(/\.jsx$/, '')
}

// Extract the function name from JSX
function getFnName(jsx) {
  return jsx.match(/export default function (\w+)/)?.[1] ?? null
}

// Build the new slim JSX
function buildNewJsx(fnName, slug) {
  return `import { parseContent } from '../lib/loadContent'
import ArticlePage from '../components/ArticlePage'
import raw from '../content/${slug}.md?raw'

const { meta, html } = parseContent(raw)

export default function ${fnName}() {
  return <ArticlePage meta={meta} html={html} />
}
`
}

if (!DRY_RUN) fs.mkdirSync(LEGACY_DIR, { recursive: true })

const files = fs.readdirSync(PAGES_DIR)
  .filter(f => f.endsWith('.jsx') && !f.startsWith('_'))
  .map(f => ({ file: path.join(PAGES_DIR, f), name: f }))

let done = 0, skipped = 0

for (const { file, name } of files) {
  const slug   = toSlug(name)
  if (SLUG_FILTER && slug !== SLUG_FILTER) continue

  const mdPath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(mdPath)) {
    console.log(`⚠ skip  ${name} (no matching .md)`)
    skipped++
    continue
  }

  const jsx    = fs.readFileSync(file, 'utf8')
  const fnName = getFnName(jsx)
  if (!fnName) {
    console.log(`⚠ skip  ${name} (no default function found)`)
    skipped++
    continue
  }

  const newJsx = buildNewJsx(fnName, slug)

  if (!DRY_RUN) {
    // Back up original
    fs.writeFileSync(path.join(LEGACY_DIR, name), jsx, 'utf8')
    // Write new slim version
    fs.writeFileSync(file, newJsx, 'utf8')
  }

  console.log(`✓ ${name} → uses ${slug}.md`)
  done++
}

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Rewritten: ${done}  Skipped: ${skipped}`)
