import type { Config } from 'drizzle-kit'

// Use hardcoded database URL for drizzle config
const databaseUrl = "postgresql://rahulroy:yourpassword@10.0.0.104:5432/console"

export default {
  schema: './src/schema.ts',
  out: './migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl,
  },
} satisfies Config