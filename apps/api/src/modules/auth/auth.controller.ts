import { AuthService } from './auth.service'
import { UserCreateInput, AuthInput } from '@crm/types'

const authService = new AuthService()

export const authController = {
  register: async ({ body }: { body: UserCreateInput }) => {
    return await authService.register(body)
  },

  login: async ({ body }: { body: AuthInput }) => {
    return await authService.login(body)
  },

  logout: async () => {
    return { message: 'Logged out successfully' }
  },

  getProfile: async () => {
    return { message: 'Profile endpoint - requires authentication' }
  },
}