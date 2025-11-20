import { pgTable, text, timestamp, varchar, boolean } from 'drizzle-orm/pg-core'

export const systemSettings = pgTable('system_settings', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$default(() => Math.random().toString(36).substring(7)),
  key: varchar('key', { length: 256 }).unique().notNull(),
  value: text('value').notNull(),
  description: text('description'),
  isPublic: boolean('is_public').default(false),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow(),
})

export const auditLogs = pgTable('audit_logs', {
  id: varchar('id', { length: 128 })
    .primaryKey()
    .$default(() => Math.random().toString(36).substring(7)),
  userId: varchar('user_id', { length: 128 }).notNull(),
  action: varchar('action', { length: 256 }).notNull(),
  resource: varchar('resource', { length: 256 }).notNull(),
  resourceId: varchar('resource_id', { length: 128 }),
  oldValues: text('old_values'),
  newValues: text('new_values'),
  ipAddress: varchar('ip_address', { length: 256 }),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})