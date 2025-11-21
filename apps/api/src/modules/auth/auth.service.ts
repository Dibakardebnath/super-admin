import { db } from '@crm/db'
import { users } from '@crm/db'
import { eq } from 'drizzle-orm'
import { UserCreateInput, AuthInput, User } from '@crm/types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from '@crm/config'

export class AuthService {
  async register(data: UserCreateInput): Promise<{ user: User; message: string }> {
    // Create username from email if not provided
    const username = data.email.split('@')[0]
    
    const [user] = await db.insert(users).values({
      name: data.name,
      email: data.email,
      role: data.role,
      username,
      isActive: true,
    }).returning()
    
    return {
      user: {
        ...user,
        role: user.role as 'admin' | 'editor' | 'viewer',
        createdAt: user.createdAt || new Date(),
        updatedAt: user.updatedAt || new Date(),
        isActive: user.isActive,
        referralCode: user.referralCode,
      },
      message: 'User created successfully',
    }
  }

  async login(data: AuthInput): Promise<{ user: User; token: string; message: string }> {
    // Since there's no password, this is a placeholder implementation
    // You might want to implement OAuth or another authentication method
    const [user] = await db.select().from(users).where(eq(users.email, data.email))
    
    if (!user) {
      throw new Error('Invalid credentials')
    }
    
    // For now, we'll authenticate any user with valid email
    // You should replace this with proper authentication
    const token = jwt.sign({ userId: user.id, email: user.email }, env.JWT_SECRET, { expiresIn: '7d' })
    
    return {
      user: {
        ...user,
        role: user.role as 'admin' | 'editor' | 'viewer',
        createdAt: user.createdAt || new Date(),
        updatedAt: user.updatedAt || new Date(),
        isActive: user.isActive,
        referralCode: user.referralCode,
      },
      token,
      message: 'Login successful',
    }
  }
}