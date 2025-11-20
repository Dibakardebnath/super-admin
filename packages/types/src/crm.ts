import { z } from 'zod'

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  address: z.string().optional(),
  status: z.enum(['active', 'inactive', 'prospect']),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const CustomerCreateSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  address: z.string().optional(),
  status: z.enum(['active', 'inactive', 'prospect']).default('prospect'),
})

export type Customer = z.infer<typeof CustomerSchema>
export type CustomerCreateInput = z.infer<typeof CustomerCreateSchema>