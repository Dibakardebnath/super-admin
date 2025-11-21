import { AuthService } from './auth.service'
import { UserCreateInput, AuthInput } from '@crm/types'

const authService = new AuthService()

export const authController = {
  register: async ({ body }: { body: UserCreateInput }) => {
    const result = await authService.register(body)
    return {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email,
      role: result.user.role,
      createdAt: result.user.createdAt.toString(),
      updatedAt: result.user.updatedAt.toString(),
      username: result.user.username,
      isActive: result.user.isActive,
      referralCode: result.user.referralCode,
    }
  },

  login: async ({ body }: { body: AuthInput }) => {
    const result = await authService.login(body)
    return {
      user: {
        ...result.user,
        createdAt: result.user.createdAt.toString(),
        updatedAt: result.user.updatedAt.toString(),
        isActive: result.user.isActive,
        referralCode: result.user.referralCode,
      },
      token: result.token,
      message: result.message,
    }
  },

  logout: async () => {
    return { message: 'Logged out successfully' }
  },

  getProfile: async () => {
    return {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin' as const,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      username: 'johndoe',
      isActive: true,
      referralCode: '',
    }
  },
}