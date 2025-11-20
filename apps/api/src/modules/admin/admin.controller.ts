import { AdminService } from './admin.service'
import { UserCreateInput } from '@crm/types'

const adminService = new AdminService()

export const adminController = {
  getUsers: async () => {
    return await adminService.getUsers()
  },

  getUser: async ({ params }: { params: { id: string } }) => {
    return await adminService.getUser(params.id)
  },

  createUser: async ({ body }: { body: UserCreateInput }) => {
    return await adminService.createUser(body)
  },

  updateUser: async ({ params, body }: { params: { id: string }; body: Partial<UserCreateInput> }) => {
    return await adminService.updateUser(params.id, body)
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