import { Elysia, t } from 'elysia'
import { adminController } from './admin.controller'
import { adminSchema } from './admin.schema'

export const adminRoutes = new Elysia({ prefix: '/admin' })
  .model(adminSchema)
  .get('/users', adminController.getUsers, {
    response: 'usersResponse',
  })
  .get('/users/:id', adminController.getUser, {
    response: 'userResponse',
  })
  .post('/users', adminController.createUser, {
    body: 'userCreateSchema',
    response: 'userResponse',
  })
  .put('/users/:id', adminController.updateUser, {
    body: 'userUpdateSchema',
    response: 'userResponse',
  })
  .delete('/users/:id', adminController.deleteUser)
  .get('/settings', adminController.getSettings, {
    response: 'settingsResponse',
  })
  .post('/settings', adminController.updateSettings, {
    body: 'settingsUpdateSchema',
    response: 'settingResponse',
  })