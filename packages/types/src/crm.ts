import { z } from 'zod'

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().nullable().optional(),
  company: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  status: z.enum(['active', 'inactive', 'prospect']),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const CustomerCreateSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().nullable().optional(),
  company: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  status: z.enum(['active', 'inactive', 'prospect']).default('prospect'),
})

export const LeadSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  status: z.enum(['prospect', 'qualified', 'converted', 'lost']),
  value: z.string().optional(),
  source: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const LeadCreateSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  status: z.enum(['prospect', 'qualified', 'converted', 'lost']).default('prospect'),
  value: z.string().optional(),
  source: z.string().optional(),
  notes: z.string().optional(),
})

export type Customer = z.infer<typeof CustomerSchema>
export type CustomerCreateInput = z.infer<typeof CustomerCreateSchema>
export type Lead = z.infer<typeof LeadSchema>
export type LeadCreateInput = z.infer<typeof LeadCreateSchema>