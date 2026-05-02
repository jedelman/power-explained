// Post-build: writes dist/<slug>/llms.txt for every src/content/articles/*.md

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const ROOT        = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT_DIR = path.join(ROOT, 'src/content/articles')
const DIST_DIR    = path.join(ROOT, 'dist')
const BASE_URL    = 'https://power-explained.jason-edelman.org'

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

const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'))
let count = 0

for (const file of files) {
  const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'))
  const slug = meta.slug ?? path.basename(file, '.md')
  const txt = [
    `# ${meta.h1 || meta.title}`,
    meta.description ? `\n${meta.description}` : '',
    meta.seriesTag   ? `\nSeries: ${meta.seriesTag}` : '',
    `\nSource: ${BASE_URL}/${slug}`,
    '\n---\n',
    body,
  ].filter(Boolean).join('\n')

  const outDir = path.join(DIST_DIR, slug)
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, 'llms.txt'), txt)
    count++
  }
}

console.log(`[llms.txt] ${count} files written`)
