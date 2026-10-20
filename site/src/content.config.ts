import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project. Drop screenshots in src/assets/projects/<slug>/
// and reference them relatively from frontmatter.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number().default(100), // lower = earlier
      featured: z.boolean().default(true),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
      links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    url: z.string().url().optional(),
    start: z.string(), // e.g. "2022-03"
    end: z.string().optional(), // omit = present
    location: z.string().optional(),
    summary: z.string(),
    highlights: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Essays, notes, anything you write. Add a .md file and it appears.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, experience, writing };
