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

export const collections = { articles }
