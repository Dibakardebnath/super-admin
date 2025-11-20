import { db } from '@crm/db'
import { users, systemSettings } from '@crm/db'
import { eq } from 'drizzle-orm'
import { UserCreateInput, User } from '@crm/types'
import bcrypt from 'bcrypt'

export class AdminService {
  async getUsers(): Promise<{ users: User[] }> {
    const users = await db.select().from(users)
    return { users: users.map(({ password, ...user }) => user) }
  }

  async getUser(id: string): Promise<{ user: User }> {
    const [user] = await db.select().from(users).where(eq(users.id, id))
    if (!user) {
      throw new Error('User not found')
    }
    const { password, ...userWithoutPassword } = user
    return { user: userWithoutPassword }
  }

  async createUser(data: UserCreateInput): Promise<{ user: User; message: string }> {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    
    const [user] = await db.insert(users).values({
      ...data,
      password: hashedPassword,
    }).returning()
    
    const { password, ...userWithoutPassword } = user
    
    return {
      user: userWithoutPassword,
      message: 'User created successfully',
    }
  }

  async updateUser(id: string, data: Partial<UserCreateInput>): Promise<{ user: User; message: string }> {
    let updateData: any = { ...data, updatedAt: new Date() }
    
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10)
    }
    
    const [user] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, id))
      .returning()
    
    if (!user) {
      throw new Error('User not found')
    }
    
    const { password, ...userWithoutPassword } = user
    
    return {
      user: userWithoutPassword,
      message: 'User updated successfully',
    }
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    await db.delete(users).where(eq(users.id, id))
    return { message: 'User deleted successfully' }
  }

  async getSettings(): Promise<{ settings: any[] }> {
    const settings = await db.select().from(systemSettings)
    return { settings }
  }

  async updateSettings(data: any): Promise<{ setting: any; message: string }> {
    const [setting] = await db.insert(systemSettings).values(data).returning()
    return {
      setting,
      message: 'Setting updated successfully',
    }
  }
}