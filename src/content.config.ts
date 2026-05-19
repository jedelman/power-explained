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
    slug:        z.string(),
    title:       z.string(),
    description: z.string().optional(),
    h1:          z.string().optional(),
    part:        z.string().optional(),

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
    beauty_check: z.object({
      status: z.enum(['pending', 'passed']),
      notes:  z.string().optional(),
    }).optional(),

    // === sources ===
    sources: z.object({
      inbox:         z.array(z.string()).default([]),
      conversations: z.array(z.string()).default([]),
    }).optional(),

    // === build notes ===
    notes: z.string().optional(),
  }),
})

export const collections = { articles, book }
