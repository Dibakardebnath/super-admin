import { z } from 'zod'

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  role: z.enum(['admin', 'editor', 'viewer']),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const UserCreateSchema = AuthSchema.extend({
  name: z.string().min(1),
  role: z.enum(['admin', 'editor', 'viewer']).default('viewer'),
})

export type User = z.infer<typeof UserSchema>
export type AuthInput = z.infer<typeof AuthSchema>
export type UserCreateInput = z.infer<typeof UserCreateSchema>