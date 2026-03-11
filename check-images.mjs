/**
 * check-images.mjs
 * Scans all HTML files for Wikimedia Special:FilePath image URLs,
 * does HEAD requests, and reports any that don't resolve.
 * Exits 0 always — warnings only, never breaks the build.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const HTML_DIR = process.env.HTML_DIR ?? __dirname

const files = fs.readdirSync(HTML_DIR).filter(f => f.endsWith('.html'))

// Extract all Special:FilePath URLs from all HTML files
const found = []
for (const file of files) {
  const content = fs.readFileSync(path.join(HTML_DIR, file), 'utf8')
  const matches = [...content.matchAll(/https:\/\/commons\.wikimedia\.org\/wiki\/Special:FilePath\/([^\s"']+)/g)]
  for (const m of matches) {
    found.push({ file, url: m[0] })
  }
}

if (found.length === 0) {
  console.log('No Wikimedia image URLs found.')
  process.exit(0)
}

console.log(`Checking ${found.length} image URL(s) across ${files.length} HTML files...\n`)

const broken = []
const ok = []

await Promise.all(found.map(async ({ file, url }) => {
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(10000) })
    if (res.ok) {
      ok.push({ file, url, status: res.status })
    } else {
      broken.push({ file, url, status: res.status })
    }
  } catch (err) {
    broken.push({ file, url, status: `ERROR: ${err.message}` })
  }
}))

// Report OK
console.log(`✓ ${ok.length} image(s) resolved OK`)

// Report broken
if (broken.length > 0) {
  console.log(`\n⚠ ${broken.length} broken image(s):\n`)
  for (const { file, url, status } of broken) {
    console.log(`  [${status}] ${file}`)
    console.log(`         ${url}`)
  }
  console.log('\nFix: update the URL in the HTML file with the correct Wikimedia filename.')
} else {
  console.log('All images OK.')
}

// Always exit 0 — this is a warning step, not a gate
process.exit(0)
