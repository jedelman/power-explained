#!/usr/bin/env node
// scripts/prerender.js
// Vite SSR prerender: renders each route to static HTML with baked <head> tags.
// Run AFTER `vite build`. Outputs one HTML file per route into dist/.
//
// Requires: vite build already ran (dist/ exists, dist/index.html is the shell)

import { createServer } from 'vite'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import pages from '../src/data/pages.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

// All routes to prerender. Slug '' = homepage → dist/index.html
const routes = [
  { path: '/', slug: '' },
  ...Object.keys(pages).map(slug => ({ path: `/${slug}`, slug }))
]

async function main() {
  console.log(`[prerender] Starting SSR prerender of ${routes.length} routes…`)

  // Create a Vite dev server in SSR mode to load the entry-server module
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
    logLevel: 'error',
  })

  // Load the SSR entry
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

  // Read the shell HTML built by vite build
  const shellPath = resolve(root, 'dist/index.html')
  const shell = readFileSync(shellPath, 'utf-8')

  for (const { path: routePath, slug } of routes) {
    try {
      // Get page metadata
      const meta = slug ? pages[slug] : null
      const title = meta?.title || 'Power Explained'
      const desc = meta?.desc || 'How power works. In plain language. And what people can actually do about it.'
      const canonicalSlug = slug ? `/${slug}` : '/'
      const canonicalUrl = `https://power-explained.jason-edelman.org${canonicalSlug}`
      const ogImageUrl = `https://power-explained.jason-edelman.org/og-image.png`

      // Render the React tree to string
      const appHtml = render(routePath)

      // Build the head block
      const headTags = `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(desc)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(desc)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Power Explained" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(desc)}" />
    <meta name="twitter:image" content="${ogImageUrl}" />`

      // Inject into shell: replace <title> placeholder and inject after <head>
      let html = shell
        // Replace the generic title
        .replace(/<title>.*?<\/title>/, '')
        // Replace the generic description meta
        .replace(/<meta name="description"[^>]*>/, '')
        // Inject all head tags right after <head>
        .replace('<head>', `<head>${headTags}`)
        // Inject the rendered app HTML into the root div
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

      // Determine output path
      let outPath
      if (!slug) {
        outPath = resolve(root, 'dist/index.html')
      } else {
        // Write to dist/<slug>/index.html for clean URLs
        const dir = resolve(root, `dist/${slug}`)
        mkdirSync(dir, { recursive: true })
        outPath = resolve(dir, 'index.html')
        // Also write dist/<slug>.html as a flat file for CF Pages compatibility
        writeFileSync(resolve(root, `dist/${slug}.html`), html, 'utf-8')
      }

      writeFileSync(outPath, html, 'utf-8')
      console.log(`[prerender] ✓ ${routePath}`)
    } catch (err) {
      console.error(`[prerender] ✗ ${routePath}: ${err.message}`)
      // Don't abort — log and continue so one broken page doesn't kill the build
    }
  }

  await vite.close()
  console.log(`[prerender] Done.`)
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

main().catch(err => {
  console.error('[prerender] Fatal:', err)
  process.exit(1)
})
