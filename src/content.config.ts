import { defineCollection, z } from "astro:content";

// POSTS
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    category: z.enum(["tutorial", "comparison", "cases", "news", "other"]),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// PUBLICATIONS
const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    authors: z.array(z.string()),
    venue: z.string().optional(),
    category: z.enum(["books", "applications", "methodology", "conference"]),
    url: z.string().url().optional(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// PEOPLE
const people = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    affiliation: z.string().optional(),
    category: z.enum(["business-finland-2022", "contributors", "sponsors"]),
    order: z.number().int().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
  }),
});

export const collections = { posts, publications, people };