import { pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const customers = pgTable('customers', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$default(() => Math.random().toString(36).substring(7)),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  phone: varchar('phone', { length: 256 }),
  company: varchar('company', { length: 256 }),
  address: text('address'),
  status: varchar('status', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow(),
})

export const leads = pgTable('leads', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$default(() => Math.random().toString(36).substring(7)),
  name: varchar('name', { length: 256 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  phone: varchar('phone', { length: 256 }),
  company: varchar('company', { length: 256 }),
  status: varchar('status', { length: 50 }).notNull(),
  value: varchar('value', { length: 256 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow(),
})