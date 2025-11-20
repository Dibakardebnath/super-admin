import type { Config } from 'drizzle-kit'
import { env } from '@crm/config'

export default {
  schema: './src/schema/index.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config