import { z } from 'zod'

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
  API_BASE_URL: z.string().default('http://localhost:3001'),
  WEB_BASE_URL: z.string().default('http://localhost:3000'),
})

export const env = envSchema.parse(process.env)

export type Env = z.infer<typeof envSchema>