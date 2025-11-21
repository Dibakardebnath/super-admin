import { Elysia } from 'elysia'
import { testConnection, db, users, organizations, organizationDetails, userOrganizations } from '@crm/db'
import { eq, sql } from 'drizzle-orm'

const app = new Elysia()
  .get('/', () => ({ message: 'API is running!' }))
  
  .get('/health', async () => {
    const dbConnected = await testConnection()
    return {
      status: dbConnected ? 'ok' : 'database_error',
      timestamp: new Date().toISOString(),
      env: process.env.NODE_ENV || 'unknown',
      database: dbConnected ? 'connected' : 'disconnected'
    }
  })
  
  // Users endpoints
  .get('/api/users', async () => {
    try {
      const allUsers = await db.select().from(users).limit(10)
      return {
        success: true,
        message: 'Users fetched successfully',
        data: allUsers,
        count: allUsers.length
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch users',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  .get('/api/users/:id', async ({ params: { id } }) => {
    try {
      const user = await db.select().from(users).where(eq(users.id, id)).limit(1)
      if (user.length === 0) {
        return { success: false, message: 'User not found' }
      }
      return { success: true, data: user[0] }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch user',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  // Organizations endpoints
  .get('/api/organizations', async () => {
    try {
      const allOrgs = await db.select().from(organizations).limit(10)
      return {
        success: true,
        message: 'Organizations fetched successfully',
        data: allOrgs,
        count: allOrgs.length
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch organizations',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  .get('/api/organizations/:id', async ({ params: { id } }) => {
    try {
      const org = await db.select().from(organizations).where(eq(organizations.id, id)).limit(1)
      if (org.length === 0) {
        return { success: false, message: 'Organization not found' }
      }
      return { success: true, data: org[0] }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch organization',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  // Organization details endpoints
  .get('/api/organization-details', async () => {
    try {
      const allDetails = await db.select().from(organizationDetails).limit(10)
      return {
        success: true,
        message: 'Organization details fetched successfully',
        data: allDetails,
        count: allDetails.length
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch organization details',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  .get('/api/organization-details/:orgId', async ({ params: { orgId } }) => {
    try {
      const details = await db.select()
        .from(organizationDetails)
        .where(eq(organizationDetails.orgId, orgId))
        .limit(1)
      if (details.length === 0) {
        return { success: false, message: 'Organization details not found' }
      }
      return { success: true, data: details[0] }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch organization details',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  // User organizations endpoints
  .get('/api/user-organizations', async () => {
    try {
      const allUserOrgs = await db.select().from(userOrganizations).limit(10)
      return {
        success: true,
        message: 'User organizations fetched successfully',
        data: allUserOrgs,
        count: allUserOrgs.length
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch user organizations',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  .get('/api/user-organizations/:userId', async ({ params: { userId } }) => {
    try {
      const userOrgs = await db.select()
        .from(userOrganizations)
        .where(eq(userOrganizations.userId, userId))
      return {
        success: true,
        message: 'User organizations fetched successfully',
        data: userOrgs,
        count: userOrgs.length
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch user organizations',
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  // Dashboard statistics endpoint
  .get('/api/dashboard/stats', async () => {
    try {
      const [userCount, orgCount] = await Promise.all([
        db.select({ count: sql`COUNT(*)` }).from(users),
        db.select({ count: sql`COUNT(*)` }).from(organizations)
      ])
      
      return {
        success: true,
        message: 'Dashboard stats fetched successfully',
        data: {
          totalUsers: userCount[0].count,
          totalOrganizations: orgCount[0].count,
          lastUpdated: new Date().toISOString()
        }
      }
    } catch (error) {
      return {
        success: false,
        message: 'Failed to fetch dashboard stats',
      error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  })
  
  .listen({
    port: 3001,
    hostname: '0.0.0.0'
  })
  
console.log('🚀 API server is running on http://localhost:3001')
