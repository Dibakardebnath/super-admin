import { db } from '@crm/db'
import { users, systemSettings, SystemSetting, NewSystemSetting } from '@crm/db'
import { eq } from 'drizzle-orm'
import { UserCreateInput, User } from '@crm/types'
import bcrypt from 'bcrypt'

export class AdminService {
  async getUsers(): Promise<{ users: User[] }> {
    const userList = await db.select().from(users)
    return { 
      users: userList.map(({ password, ...user }) => ({
        ...user,
        role: user.role as 'admin' | 'editor' | 'viewer',
        createdAt: user.createdAt || new Date(),
        updatedAt: user.updatedAt || new Date(),
        isActive: user.isActive,
        referralCode: user.referralCode,
      }))
    }
  }

  async getUser(id: string): Promise<{ user: User }> {
    const [user] = await db.select().from(users).where(eq(users.id, id))
    if (!user) {
      throw new Error('User not found')
    }
    const { password, ...userWithoutPassword } = user
    return { 
      user: {
        ...userWithoutPassword,
        role: userWithoutPassword.role as 'admin' | 'editor' | 'viewer',
        createdAt: userWithoutPassword.createdAt || new Date(),
        updatedAt: userWithoutPassword.updatedAt || new Date(),
      }
    }
  }

  async createUser(data: UserCreateInput): Promise<{ user: User; message: string }> {
    const hashedPassword = await bcrypt.hash(data.password, 10)
    
    // Create username from email if not provided
    const username = data.email.split('@')[0]
    
    const [user] = await db.insert(users).values({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      role: data.role,
      username,
      isActive: true,
    }).returning()
    
    const { password, ...userWithoutPassword } = user
    
    return {
      user: {
        ...userWithoutPassword,
        role: userWithoutPassword.role as 'admin' | 'editor' | 'viewer',
        createdAt: userWithoutPassword.createdAt || new Date(),
        updatedAt: userWithoutPassword.updatedAt || new Date(),
      },
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
      user: {
        ...userWithoutPassword,
        role: userWithoutPassword.role as 'admin' | 'editor' | 'viewer',
        createdAt: userWithoutPassword.createdAt || new Date(),
        updatedAt: userWithoutPassword.updatedAt || new Date(),
      },
      message: 'User updated successfully',
    }
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    await db.delete(users).where(eq(users.id, id))
    return { message: 'User deleted successfully' }
  }

  async getSettings(): Promise<{ settings: SystemSetting[] }> {
    const settings = await db.select().from(systemSettings)
    return { settings }
  }

  async updateSettings(data: NewSystemSetting): Promise<{ setting: SystemSetting; message: string }> {
    const [setting] = await db.insert(systemSettings).values(data).returning()
    return {
      setting,
      message: 'Setting updated successfully',
    }
  }
}