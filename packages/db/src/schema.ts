import { pgTable, uuid, varchar, boolean, timestamp, index, text } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  isActive: boolean('is_active').default(true),
  referralCode: varchar('referral_code', { length: 20 }).unique(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const organizations = pgTable('organizations', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  orgImageUrl: varchar('org_image_url', { length: 255 }),
  type: varchar('type', { length: 50 }).notNull(),
  isRegistered: boolean('is_registered').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export const organizationDetails = pgTable('organization_details', {
  id: uuid('id').primaryKey().defaultRandom(),
  orgId: uuid('org_id').references(() => organizations.id).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  type: varchar('type', { length: 50 }).notNull(),
  addressLine1: varchar('address_line1', { length: 255 }),
  addressLine2: varchar('address_line2', { length: 255 }),
  city: varchar('city', { length: 100 }),
  stateProvinceRegion: varchar('state_province_region', { length: 100 }),
  postalCode: varchar('postal_code', { length: 20 }),
  countryCode: varchar('country_code', { length: 2 }),
  regNum: varchar('reg_num', { length: 100 }),
  nationalTaxId: varchar('national_tax_id', { length: 100 }),
  businessTaxId: varchar('business_tax_id', { length: 100 }),
  regNumVerified: boolean('reg_num_verified').notNull().default(false),
  nationalTaxIdVerified: boolean('national_tax_id_verified').notNull().default(false),
  businessTaxIdVerified: boolean('business_tax_id_verified').notNull().default(false),
  verificationSource: varchar('verification_source', { length: 255 }),
  verificationDate: timestamp('verification_date'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}, (table) => ({
  regNumIndex: index('idx_org_details_reg_num').on(table.regNum),
  businessTaxIdIndex: index('idx_org_details_business_tax_id').on(table.businessTaxId),
  nationalTaxIdIndex: index('idx_org_details_national_tax_id').on(table.nationalTaxId),
}));

export const userOrganizations = pgTable('user_organizations', {
  id: uuid('id').primaryKey().defaultRandom(),
  orgId: uuid('org_id').references(() => organizations.id).notNull(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  roleId: uuid('role_id'),
  displayName: varchar('display_name', { length: 255 }),
  isOwner: boolean('is_owner').default(false),
  joinedAt: timestamp('joined_at').defaultNow(),
});

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const insertOrganizationSchema = createInsertSchema(organizations);
export const selectOrganizationSchema = createSelectSchema(organizations);

export const insertOrganizationDetailsSchema = createInsertSchema(organizationDetails);
export const selectOrganizationDetailsSchema = createSelectSchema(organizationDetails);

export const insertUserOrganizationSchema = createInsertSchema(userOrganizations);
export const selectUserOrganizationSchema = createSelectSchema(userOrganizations);

// Types for API responses
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Organization = typeof organizations.$inferSelect;
export type NewOrganization = typeof organizations.$inferInsert;

export type OrganizationDetails = typeof organizationDetails.$inferSelect;
export type NewOrganizationDetails = typeof organizationDetails.$inferInsert;

export type UserOrganization = typeof userOrganizations.$inferSelect;
export type NewUserOrganization = typeof userOrganizations.$inferInsert;