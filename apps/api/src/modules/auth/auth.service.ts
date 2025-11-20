import { db } from '@crm/db'
import { users } from '@crm/db'
import { eq } from 'drizzle-orm'
import { UserCreateInput, AuthInput, User } from '@crm/types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { env } from '@crm/config'

export class AuthService {
  async register(data: UserCreateInput): Promise<{ user: Omit<User, 'password'>; message: string }> {
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

  async login(data: AuthInput): Promise<{ user: Omit<User, 'password'>; token: string; message: string }> {
    const [user] = await db.select().from(users).where(eq(users.email, data.email))
    
    if (!user) {
      throw new Error('Invalid credentials')
    }
    
    const isValid = await bcrypt.compare(data.password, user.password)
    
    if (!isValid) {
      throw new Error('Invalid credentials')
    }
    
    const token = jwt.sign({ userId: user.id, email: user.email }, env.JWT_SECRET, { expiresIn: '7d' })
    
    const { password, ...userWithoutPassword } = user
    
    return {
      user: userWithoutPassword,
      token,
      message: 'Login successful',
    }
  }
}