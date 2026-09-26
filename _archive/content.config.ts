import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// EVENTS — one markdown file per event in src/content/events/.
// Add an event = add a file (or use a visual CMS later). Astro sorts + filters automatically.
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),                 // start
    end: z.coerce.date().optional(),
    type: z.enum(['workshop', 'social', 'community', 'innovation', 'networking']),
    location: z.string().default('The Common, Squamish'),
    summary: z.string(),
    image: z.string().optional(),
    rsvp: z.string().url().optional(),      // Eventbrite / Luma link
    price: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { events };
