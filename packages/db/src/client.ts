import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../schema'

// Get database URL from environment
const connectionString = process?.env?.DATABASE_URL

if (!connectionString) {
  console.error('❌ DATABASE_URL is not set in environment variables')
  throw new Error('DATABASE_URL is not set')
}

console.log('🔗 Using database URL:', connectionString.replace(/\/\/.*@/, '//***:***@'))

// Create a client with connection timeout
const client = postgres(connectionString, {
  max: 1,
  connect_timeout: 5,
  idle_timeout: 20,
})

// Test database connection
export const testConnection = async () => {
  console.log("calling testConnection👍🏻")
  try {
    console.log('🔄 Testing database connection to:', connectionString?.replace(/\/\/.*@/, '//***:***@'))
    const result = await client`SELECT 1`
    console.log('✅ Database connected successfully!')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:')
    console.error(`   - URL: ${connectionString?.replace(/\/\/.*@/, '//***:***@')}`)
    console.error(`   - Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    
    // Additional troubleshooting info
    if (connectionString?.includes('10.0.0.50')) {
      console.error('   - Make sure database server at 10.0.0.50:5433 is running')
      console.error('   - Check if PostgreSQL is accessible from your network')
    }
    
    return false
  }
}

export const db = drizzle(client, { schema })