#!/usr/bin/env node
// Generates dist/sitemap.xml by scanning dist/ for index.html files

import { writeFileSync, readdirSync, statSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const dist = resolve(root, 'dist')
const BASE_URL = 'https://power-explained.jason-edelman.org'
const today = new Date().toISOString().split('T')[0]

function getSlugs(dir, base = '') {
  const slugs = []
  for (const entry of readdirSync(dir)) {
    const full = resolve(dir, entry)
    if (statSync(full).isDirectory()) {
      const nested = getSlugs(full, `${base}/${entry}`)
      slugs.push(...nested)
    } else if (entry === 'index.html' && base) {
      slugs.push(base)
    }
  }
  return slugs
}

const slugs = getSlugs(dist).filter(s => !s.startsWith('/pagefind'))

const urls = [
  `  <url><loc>${BASE_URL}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`,
  ...slugs.map(s =>
    `  <url><loc>${BASE_URL}${s}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`
  )
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

writeFileSync(resolve(dist, 'sitemap.xml'), xml)
console.log(`[sitemap] ${slugs.length + 1} URLs → dist/sitemap.xml`)
