import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    slug:        z.string(),
    title:       z.string(),
    description: z.string().optional(),
    seriesTag:   z.string().optional(),
    h1:          z.string().optional(),
    dek:         z.string().optional(),
    eyebrow:     z.string().optional(),
  }),
})

// === The book collection — plateaus of the territory ===
//
// Each chapter file is a plateau. The plateau schema below is the
// build-side contract. None of these fields render to the reader directly;
// they drive doors, the map, and the descent.md dashboard.
//
// Existing chapter files have only `slug/title/description/h1/part` — the
// plateau fields are .optional() so we can migrate chapters one at a time
// without breaking the build. As each chapter is converted to a plateau,
// its frontmatter gets the plateau fields filled in.
//
// See interviews/plateau-schema.md for the field-by-field commentary.

const CAPACITY = z.enum(['NAME', 'READ', 'BUILD', 'HOLD', 'ENTER', 'CONTINUE'])

const ZONE = z.enum([
  'outer_edge',
  'clearings',
  'high_ridges',
  'old_growth',
  'the_river',
  'the_wizards_cottage',
  'standing_stones',
])

const STATUS = z.enum(['draft', 'beauty-pending', 'offered'])

const book = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/book' }),
  schema: z.object({
    // === existing fields, kept for backwards compat ===
    slug:        z.string().optional(),
    title:       z.string(),
    description: z.string().optional(),
    h1:          z.string().optional(),
    part:        z.string().optional(),
    type:        z.string().optional(),

    // === plateau identity ===
    plateau: z.object({
      id:     z.string(),                      // e.g. "P-04"
      status: STATUS,
    }).optional(),

    // === map position ===
    map: z.object({
      zone:         ZONE,
      position:     z.tuple([z.number(), z.number()]),
      visible_from: z.array(z.string()).default([]),
    }).optional(),

    // === capacities ===
    capacities: z.object({
      primary:   CAPACITY,
      secondary: z.array(CAPACITY).default([]),
    }).optional(),

    // === territory anchor ===
    territory: z.object({
      feature:     z.string(),
      field_notes: z.array(z.string()).default([]),
    }).optional(),

    // === metaphor (commentarial choice + defense) ===
    metaphor: z.object({
      choice:  z.string(),
      defense: z.string(),
    }).optional(),

    // === nagual (where seeing runs out + angle of approach) ===
    nagual: z.object({
      blind_spot_at_entry: z.string(),
      angle_of_approach:   z.string(),
    }).optional(),

    // === doors out ===
    doors: z.array(z.object({
      to:     z.string(),    // plateau id, must exist in registry
      prompt: z.string(),    // plain pointing language
    })).default([]),

    // === beauty / offering check ===
    //
    // `status` is intentionally free-form (e.g. "draft-revised-2026-05-19")
    // — authors annotate the state of the offering in their own vocabulary.
    // The gesture collection uses an enum at the per-gesture level; the
    // plateau-level status summarizes a heterogeneous mix and is best
    // expressed in prose.
    beauty_check: z.object({
      status: z.string(),
      notes:  z.string().optional(),
    }).passthrough().optional(),

    // === sources ===
    sources: z.object({
      inbox:         z.array(z.string()).default([]),
      conversations: z.array(z.string()).default([]),
    }).optional(),

    // === build notes ===
    notes: z.string().optional(),

    // === gesture manifest (default linear traversal) ===
    //
    // A plateau is composed of gestures. The chapter file is the manifest:
    // an ordered list of gesture IDs (G-NN-NNN) and the inter-gesture
    // transitions (paragraph or section break). Gesture content lives in
    // src/content/gestures/<plateau-id>/. The compile step
    // (scripts/compile-plateau.mjs) renders the chapter by concatenating
    // gesture bodies with the declared separators.
    //
    // These fields are optional during migration: chapters that haven't
    // been refactored to gestures still render from their inline body.
    gestures:   z.array(z.string()).optional(),
    separators: z.array(z.enum(['paragraph', 'section'])).optional(),

    // === direction (wheel-of-eight) ===
    //
    // Wheel-of-eight schema is already in chapter-4 frontmatter; declare
    // here so the Astro content collection validates. Loose for now —
    // tighten to enums once stable across all plateaus.
    direction: z.record(z.any()).optional(),
  }),
})

// === Gesture collection ===
//
// A gesture is the smallest unit that is (a) authorially indivisible within
// its native plateau AND (b) liftable into another manifest without dragging
// non-gesture context with it. See for-agents/gestures-architecture.md.

const GESTURE_KIND = z.enum([
  'scene',     // continuous narrated event
  'argument',  // structural claim
  'landing',   // single-sentence gesture that lands
  'litany',    // rhetorical cascade
  'turn',      // confessional or perspectival shift
  'naming',    // names what something is
  'recovery',  // recovers something dormant
  'aside',     // interjection, often voice-shifted
  'prose',     // catch-all for unmarked moves (use sparingly)
])

const VOICE = z.enum([
  'jason',
  'coyote',
  'nasruddin',
  'kropotkin',
  'castaneda',
  'narrator',
])

const gestures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gestures' }),
  schema: z.object({
    id:      z.string(),                 // e.g. "G-04-007"
    plateau: z.string(),                 // e.g. "P-04" — home plateau
    title:   z.string(),                 // authorial label; never rendered
    slug:    z.string(),

    kind:    GESTURE_KIND,
    voice:   VOICE,
    status:  z.enum(['draft', 'beauty-pending', 'passed']),

    capacities: z.array(z.enum([
      'NAME', 'READ', 'BUILD', 'HOLD', 'ENTER', 'CONTINUE'
    ])).default([]),

    beauty_check: z.object({
      passed: z.boolean(),
      notes:  z.string().optional(),
    }).optional(),

    // Per-gesture claims for fact-checking
    claims: z.array(z.object({
      text:     z.string(),
      citation: z.string().optional(),
      verified: z.string().optional(),   // ISO date or note
    })).default([]),

    // Other gesture IDs this gesture references (for the cross-book graph)
    references: z.array(z.string()).default([]),

    // Optional default-order hints; the chapter manifest is authoritative
    neighbors: z.object({
      default_prev: z.string().optional(),
      default_next: z.string().optional(),
    }).optional(),

    notes: z.string().optional(),
  }),
})

export const collections = { articles, book, gestures }
