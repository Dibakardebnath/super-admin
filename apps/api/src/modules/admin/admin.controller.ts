import { AdminService } from './admin.service'
import { UserCreateInput } from '@crm/types'

const adminService = new AdminService()

export const adminController = {
  getUsers: async () => {
    const result = await adminService.getUsers()
    return {
      users: result.users.map(user => ({
        ...user,
        createdAt: user.createdAt.toString(),
        updatedAt: user.updatedAt.toString(),
        isActive: user.isActive,
        referralCode: user.referralCode,
      })),
    }
  },

  getUser: async ({ params }: { params: { id: string } }) => {
    const result = await adminService.getUser(params.id)
    return {
      user: {
        ...result.user,
        createdAt: result.user.createdAt.toString(),
        updatedAt: result.user.updatedAt.toString(),
        role: result.user.role as 'admin' | 'editor' | 'viewer',
        username: result.user.username,
        isActive: result.user.isActive,
        referralCode: result.user.referralCode,
      },
      message: 'User fetched successfully',
    }
  },

  createUser: async ({ body }: { body: UserCreateInput }) => {
    const result = await adminService.createUser(body)
    return {
      user: {
        ...result.user,
        createdAt: result.user.createdAt.toString(),
        updatedAt: result.user.updatedAt.toString(),
        isActive: result.user.isActive,
        referralCode: result.user.referralCode,
      },
      message: result.message,
    }
  },

  updateUser: async ({ params, body }: { params: { id: string }; body: Partial<UserCreateInput> }) => {
    const result = await adminService.updateUser(params.id, body)
    return {
      user: {
        ...result.user,
        createdAt: result.user.createdAt.toString(),
        updatedAt: result.user.updatedAt.toString(),
        isActive: result.user.isActive,
        referralCode: result.user.referralCode,
      },
      message: result.message,
    }
  },

  deleteUser: async ({ params }: { params: { id: string } }) => {
    return await adminService.deleteUser(params.id)
  },

  getSettings: async () => {
    return await adminService.getSettings()
  },

  updateSettings: async ({ body }: { body: any }) => {
    return await adminService.updateSettings(body)
  },
}