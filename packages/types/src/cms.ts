import { z } from 'zod'

export const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  excerpt: z.string().optional(),
  status: z.enum(['draft', 'published', 'archived']),
  publishedAt: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  authorId: z.string(),
})

export const PostCreateSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  content: z.string(),
  excerpt: z.string().optional(),
  status: z.enum(['draft', 'published', 'archived']).default('draft'),
  publishedAt: z.date().optional(),
  authorId: z.string(),
})

export const MediaSchema = z.object({
  id: z.string(),
  filename: z.string(),
  originalName: z.string(),
  mimeType: z.string(),
  size: z.number(),
  path: z.string(),
  createdAt: z.date(),
})

export type Post = z.infer<typeof PostSchema>
export type PostCreateInput = z.infer<typeof PostCreateSchema>
export type Media = z.infer<typeof MediaSchema>