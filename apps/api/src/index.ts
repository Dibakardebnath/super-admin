import { Elysia } from 'elysia'
import { testConnection } from '@crm/db'

console.log('🔧 Environment loaded:')
console.log(`   - DATABASE_URL: ${process.env.DATABASE_URL?.replace(/\/\/.*@/, '//***:***@')}`)
console.log(`   - NODE_ENV: ${process.env.NODE_ENV}`)

// Simple API server
const app = new Elysia()
  .get('/', () => ({ message: 'API is running!' }))
  .get('/health', async () => {
    const dbConnected = await testConnection()
    return {
      status: dbConnected ? 'ok' : 'database_error',
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV || 'unknown',
      database: dbConnected ? 'connected' : 'disconnected',
      database_url: process.env.DATABASE_URL?.replace(/\/\/.*@/, '//***:***@')
    }
  })
  .listen(3001)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)