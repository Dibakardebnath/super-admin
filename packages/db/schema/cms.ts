import { pgTable, text, timestamp, varchar, integer } from 'drizzle-orm/pg-core'

export const posts = pgTable('posts', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$default(() => Math.random().toString(36).substring(7)),
  title: varchar('title', { length: 256 }).notNull(),
  slug: varchar('slug', { length: 256 }).unique().notNull(),
  content: text('content').notNull(),
  excerpt: text('excerpt'),
  status: varchar('status', { length: 50 }).notNull(),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow(),
  authorId: varchar('author_id', { length: 128 }).default(''),
})

export const media = pgTable('media', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$default(() => Math.random().toString(36).substring(7)),
  filename: varchar('filename', { length: 256 }).notNull(),
  originalName: varchar('original_name', { length: 256 }).notNull(),
  mimeType: varchar('mime_type', { length: 256 }).notNull(),
  size: integer('size').notNull(),
  path: text('path').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})