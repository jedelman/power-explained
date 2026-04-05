#!/usr/bin/env node
// scripts/generate-sitemap.js
// Generates dist/sitemap.xml from src/data/pages.js
// Run after prerender so dist/ exists.

import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import pages from '../src/data/pages.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const BASE_URL = 'https://power-explained.jason-edelman.org'
const today = new Date().toISOString().split('T')[0]

const slugs = Object.keys(pages)

const urls = [
  // Homepage
  `  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
  // All pages
  ...slugs.map(slug => `  <url>
    <loc>${BASE_URL}/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`)
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`

const outPath = resolve(root, 'dist/sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')
console.log(`[sitemap] Wrote ${slugs.length + 1} URLs to dist/sitemap.xml`)
