// Single source of truth for chapter metadata and sequence.
//
//   - Per-chapter metadata (title, h1, description, label, part, etc.)
//     lives in the manifest frontmatter at src/content/book/<slug>.md.
//   - The canonical sequence lives in the `sources:` list of
//     src/content/manifests/the-river.manifest.yml.
//
// getChapterMeta(slug) returns everything ChapterPage.astro needs: the
// chapter's own fields plus prev/next derived from the chapter's
// position in the river. Routes do not state any of this themselves —
// they pass only `slug` to ChapterPage.
//
// Read the raw YAML (not Astro's content collection) so we can use
// fields that aren't in the collection schema (label, bodyClass,
// linkTitle, showDoors). The schema strips them silently, but they
// survive in the file and we want them.

import fs from 'node:fs'
import { resolve } from 'path'
import yaml from 'js-yaml'

const RIVER_PATH = resolve('src/content/manifests/the-river.manifest.yml')
const BOOK_DIR = resolve('src/content/book')

let cache = null

function loadAll() {
  if (cache) return cache
  const river = yaml.load(fs.readFileSync(RIVER_PATH, 'utf8'))
  const sources = river.sources
  const bySlug = {}
  for (const slug of sources) {
    const raw = fs.readFileSync(`${BOOK_DIR}/${slug}.md`, 'utf8')
    const m = raw.match(/^---\n([\s\S]*?)\n---/)
    if (!m) throw new Error(`No frontmatter in ${slug}.md`)
    bySlug[slug] = yaml.load(m[1])
  }
  cache = { sources, bySlug }
  return cache
}

// Strip presentational HTML from h1 when building cross-reference text.
function plain(h1) {
  return h1.replace(/<br\/?>/gi, ' ').replace(/\s+/g, ' ').trim()
}

// How a chapter is referred to from somewhere else's prev/next.
function linkTitleFor(meta) {
  if (meta.linkTitle) return meta.linkTitle
  const h1 = plain(meta.h1)
  if (meta.label && /^Chapter \d+/.test(meta.label)) return `${meta.label}: ${h1}`
  if (meta.label === 'Prologue' || meta.label === 'Epilogue') return `${meta.label}: ${h1}`
  return h1
}

export function getChapterMeta(slug) {
  const { sources, bySlug } = loadAll()
  const i = sources.indexOf(slug)
  if (i < 0) throw new Error(`${slug} is not in the river manifest`)
  const fm = bySlug[slug]
  if (!fm) throw new Error(`No manifest loaded for ${slug}`)

  const prevSlug = sources[i - 1]
  const nextSlug = sources[i + 1]

  const meta = {
    slug,
    title: fm.title,
    description: fm.description ?? '',
    label: fm.label,
    h1: fm.h1,
    part: fm.part,
    bodyClass: fm.bodyClass ?? 'chapter-body',
    showDoors: fm.showDoors === true,
    prev: prevSlug
      ? { href: `/book/${prevSlug}`, title: linkTitleFor(bySlug[prevSlug]) }
      : null,
    next: null,
  }

  // The book home is the natural close after the final river entry.
  if (nextSlug) {
    meta.next = { href: `/book/${nextSlug}`, title: linkTitleFor(bySlug[nextSlug]) }
  } else {
    meta.next = { href: '/book', title: 'The Book', label: '↑ Back to' }
  }

  return meta
}
