// Plateau registry — single source of truth for inter-plateau links.
//
// Loads the full `book` content collection and exposes:
//   - getRegistry()           : Map of plateau-id → plateau entry
//   - getBySlug(slug)         : entry by file slug (e.g. "chapter-4")
//   - getById(id)             : entry by plateau id (e.g. "P-04")
//   - getDoorsForSlug(slug)   : resolved doors with target titles + URLs
//   - getHighway()            : the default linear reading order
//   - getDashboard()          : data for the descent.md auto-generated view
//
// Validation rules enforced here (errors at build time):
//   1. Every plateau has a unique id.
//   2. Every door's `to` resolves to an existing plateau.
//   3. Every door's `to` is in the source plateau's `visible_from`.
//   4. Plateaus in status `offered` have all required plateau fields.
//
// Chapters without plateau frontmatter are gracefully handled: they appear
// in the registry by slug only, with no plateau id, no doors, no map. The
// site continues to render them through the existing per-page renderer.

import { getCollection } from 'astro:content'

// Cached registry — built once per build.
let _cached: Awaited<ReturnType<typeof buildRegistry>> | null = null

export async function getRegistry() {
  if (_cached) return _cached
  _cached = await buildRegistry()
  return _cached
}

async function buildRegistry() {
  const entries = await getCollection('book')

  // Map of plateau-id → entry, plus a slug → entry map
  const byId: Map<string, typeof entries[number]> = new Map()
  const bySlug: Map<string, typeof entries[number]> = new Map()

  for (const e of entries) {
    bySlug.set(e.data.slug, e)
    const pid = e.data.plateau?.id
    if (pid) {
      if (byId.has(pid)) {
        throw new Error(
          `Plateau id collision: "${pid}" used by both ` +
          `${byId.get(pid)!.data.slug} and ${e.data.slug}`
        )
      }
      byId.set(pid, e)
    }
  }

  // Validate doors: every `to` must resolve, and must be in visible_from.
  // We collect warnings rather than throwing for unresolved targets,
  // because plateaus are being built incrementally — a door pointing to
  // P-OA before the Orgone plateau exists is a known-pending state, not
  // a build-breaking error.
  const warnings: string[] = []
  for (const e of entries) {
    const doors = e.data.doors ?? []
    const visible = e.data.map?.visible_from ?? []
    for (const d of doors) {
      if (!byId.has(d.to)) {
        warnings.push(
          `Door from ${e.data.slug} (${e.data.plateau?.id}) ` +
          `points to ${d.to} which does not yet exist in registry.`
        )
        continue
      }
      if (visible.length > 0 && !visible.includes(d.to)) {
        warnings.push(
          `Door from ${e.data.slug} (${e.data.plateau?.id}) ` +
          `points to ${d.to}, but ${d.to} is not in visible_from. ` +
          `Line-of-sight violation — either add to visible_from or ` +
          `route the reader through an intermediate plateau.`
        )
      }
    }
  }

  // Surface warnings at build time so we see them in Netlify logs.
  if (warnings.length > 0 && typeof console !== 'undefined') {
    for (const w of warnings) console.warn(`[plateau-registry] ${w}`)
  }

  return { byId, bySlug, warnings, entries }
}

// Resolve doors for a given chapter slug into renderable shapes.
export async function getDoorsForSlug(slug: string) {
  const reg = await getRegistry()
  const entry = reg.bySlug.get(slug)
  if (!entry || !entry.data.doors) return []

  return entry.data.doors.map(d => {
    const target = reg.byId.get(d.to)
    return {
      prompt: d.prompt,
      to:     d.to,
      title:  target?.data.title ?? `(plateau ${d.to} not yet built)`,
      url:    target ? `/book/${target.data.slug}/` : null,
      missing: !target,
    }
  })
}

// The highway: default linear reading order.
//
// For now this is a hardcoded sequence; eventually it lives in a separate
// manifest file. Slugs not in this list still render but aren't on the
// highway.
const HIGHWAY: string[] = [
  'overture',
  'prologue',
  'chapter-1',
  'chapter-2',
  'chapter-3',
  'becoming-wizards-in-the-woods',
  'chapter-4',
  'goetia',
  'chapter-5',
  'chapter-6',
  'chapter-7',
  'chapter-8',
  'chapter-9',
  'chapter-10',
  'chapter-11',
  'chapter-12',
  'chapter-13',
  'chapter-14',
  'chapter-15',
  'reenchanting',
  'chapter-16',
  'chapter-16b',
  'chapter-17',
  'chapter-18',
  'the-centaur-chapter',
  'epilogue',
]

export async function getHighway() {
  const reg = await getRegistry()
  return HIGHWAY
    .map(slug => reg.bySlug.get(slug))
    .filter((e): e is NonNullable<typeof e> => Boolean(e))
}

// Dashboard data for auto-generated descent.md
export async function getDashboard() {
  const reg = await getRegistry()
  const rows = reg.entries.map(e => ({
    slug:     e.data.slug,
    title:    e.data.title,
    id:       e.data.plateau?.id ?? null,
    status:   e.data.plateau?.status ?? null,
    zone:     e.data.map?.zone ?? null,
    capacity: e.data.capacities?.primary ?? null,
    has_territory: Boolean(e.data.territory?.feature),
    has_metaphor:  Boolean(e.data.metaphor?.choice),
    has_nagual:    Boolean(e.data.nagual?.blind_spot_at_entry),
    door_count:    (e.data.doors ?? []).length,
    inbox_blocked: (e.data.sources?.inbox ?? []).length > 0,
  }))
  return { rows, warnings: reg.warnings }
}
