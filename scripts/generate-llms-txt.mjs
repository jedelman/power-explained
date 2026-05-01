/**
 * generate-llms-txt.mjs
 * Post-build: writes dist/<slug>/llms.txt for every src/content/*.md
 * Run after vite build: node scripts/generate-llms-txt.mjs
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname  = path.dirname(fileURLToPath(import.meta.url))
const ROOT       = path.resolve(__dirname, '..')
const CONTENT_DIR = path.join(ROOT, 'src/content')
const DIST_DIR   = path.join(ROOT, 'dist')

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/m)
  if (!match) return { meta: {}, body: raw }
  const meta = {}
  match[1].split('\n').forEach(line => {
    const [k, ...v] = line.split(': ')
    if (k) meta[k.trim()] = v.join(': ').trim().replace(/^"|"$/g, '')
  })
  return { meta, body: match[2].trim() }
}

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))
let count = 0

for (const file of files) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  const { meta, body } = parseFrontmatter(raw)
  const slug = meta.slug ?? path.basename(file, '.md')

  const txt = [
    `# ${meta.h1 || meta.title}`,
    meta.description ? `\n${meta.description}` : '',
    meta.seriesTag   ? `\nSeries: ${meta.seriesTag}` : '',
    `\nSource: https://power-explained.jason-edelman.org/${slug}`,
    '\n---\n',
    body,
  ].filter(Boolean).join('\n')

  const outDir = path.join(DIST_DIR, slug)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'llms.txt'), txt, 'utf8')
  count++
}

console.log(`✓ Generated ${count} llms.txt files in dist/`)
