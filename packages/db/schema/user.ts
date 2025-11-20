import { pgTable, varchar, timestamp } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$default(() => Math.random().toString(36).substring(7)),
  email: varchar('email', { length: 256 }).unique().notNull(),
  name: varchar('name', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  role: varchar('role', { length: 50 }).default('viewer').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow(),
})