/**
 * extract-content.mjs
 * Extracts HTML content from JSX pages → src/content/*.md
 * Usage: node scripts/extract-content.mjs [--dry-run] [--slug=why-your-city-doesnt-work]
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT      = path.resolve(__dirname, '..')
const PAGES_DIR = path.join(ROOT, 'src/pages')
const CONTENT_DIR = path.join(ROOT, 'src/content')

const DRY_RUN     = process.argv.includes('--dry-run')
const SLUG_FILTER = process.argv.find(a => a.startsWith('--slug='))?.split('=')[1]

function toSlug(filename) {
  return filename
    .replace(/\.jsx$/, '')
    .replace(/([A-Z])/g, m => `-${m.toLowerCase()}`)
    .replace(/^-/, '')
}

function htmlToMarkdown(html) {
  return html
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<h([1-6])[^>]*>/gi, (_, n) => '\n' + '#'.repeat(Number(n)) + ' ')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<li[^>]*>/gi, '- ').replace(/<\/li>/gi, '\n')
    .replace(/<\/ul>|<\/ol>/gi, '\n')
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '_$1_')
    .replace(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    .replace(/<div[^>]*class="pull"[^>]*>([\s\S]*?)<\/div>/gi, (_, inner) =>
      '\n> ' + inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() + '\n')
    .replace(/<div[^>]*class="callout"[^>]*>([\s\S]*?)<\/div>/gi, (_, inner) => {
      const label = inner.match(/<span[^>]*class="callout-label"[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? ''
      const body  = inner.replace(/<span[^>]*class="callout-label"[^>]*>[\s\S]*?<\/span>/i, '')
      return `\n> **${label.replace(/<[^>]+>/g, '')}**\n> ${body.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()}\n`
    })
    .replace(/<div[^>]*class="nav-strip"[^>]*>[\s\S]*?<\/div>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function extractMeta(jsx) {
  const title      = jsx.match(/title="([^"]+)"/)?.[1]      ?? ''
  const description= jsx.match(/description="([^"]+)"/)?.[1]?? ''
  const seriesTag  = jsx.match(/seriesTag="([^"]*)"/)?.[1]  ?? ''
  const h1Raw      = jsx.match(/<h1[^>]*dangerouslySetInnerHTML=\{\{ __html: `([^`]*)`/)?.[1]
                    ?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() ?? ''
  return { title, description, seriesTag, h1: h1Raw }
}

function extractBody(jsx) {
  // Collect ALL dangerouslySetInnerHTML blocks inside ArticleWrap that aren't the h1
  const wrapMatch = jsx.match(/<ArticleWrap>([\s\S]*?)<\/ArticleWrap>/)
  if (!wrapMatch) return null
  const wrap = wrapMatch[1]

  const blocks = []
  const re = /<div\s[^>]*dangerouslySetInnerHTML=\{\{ __html: `([\s\S]*?)` \}\}\s*\/>/g
  let m
  while ((m = re.exec(wrap)) !== null) {
    blocks.push(m[1])
  }
  if (!blocks.length) return null
  return blocks.join('\n').replace(/\\n/g, '\n').replace(/\\`/g, '`').replace(/\\\$/g, '$')
}

function buildFrontmatter(meta, slug) {
  const esc = s => s.replace(/"/g, '\\"')
  return [
    '---',
    `slug: ${slug}`,
    `title: "${esc(meta.title)}"`,
    `description: "${esc(meta.description)}"`,
    `seriesTag: "${esc(meta.seriesTag)}"`,
    `h1: "${esc(meta.h1)}"`,
    '---\n',
  ].join('\n')
}

function processPage(file) {
  const name = path.basename(file, '.jsx')
  const slug = toSlug(name)
  if (SLUG_FILTER && slug !== SLUG_FILTER) return null

  const jsx = fs.readFileSync(file, 'utf8')
  if (!jsx.includes('ArticleWrap')) return { name, slug, skipped: true, reason: 'no ArticleWrap' }

  const meta    = extractMeta(jsx)
  const bodyHtml= extractBody(jsx)
  if (!bodyHtml) return { name, slug, skipped: true, reason: 'no body blocks found' }

  const md      = buildFrontmatter(meta, slug) + htmlToMarkdown(bodyHtml) + '\n'
  const outPath = path.join(CONTENT_DIR, `${slug}.md`)

  if (!DRY_RUN) fs.writeFileSync(outPath, md, 'utf8')
  return { name, slug, outPath, chars: md.length, skipped: false }
}

if (!DRY_RUN) fs.mkdirSync(CONTENT_DIR, { recursive: true })

const files   = fs.readdirSync(PAGES_DIR).filter(f => f.endsWith('.jsx')).map(f => path.join(PAGES_DIR, f))
const results = files.map(processPage).filter(Boolean)
const done    = results.filter(r => !r.skipped)
const skipped = results.filter(r => r.skipped)

console.log(`\n✓ Extracted: ${done.length}`)
console.log(`⚠ Skipped:   ${skipped.length}`)
if (skipped.length) skipped.forEach(r => console.log(`  - ${r.name}: ${r.reason}`))
if (DRY_RUN) console.log('\n[DRY RUN — no files written]')
