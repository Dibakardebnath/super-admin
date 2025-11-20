import { Elysia, t } from 'elysia'
import { authController } from './auth.controller'
import { authSchema } from './auth.schema'

export const authRoutes = new Elysia({ prefix: '/auth' })
  .model(authSchema)
  .post('/register', authController.register, {
    body: 'registerSchema',
    response: 'userResponse',
  })
  .post('/login', authController.login, {
    body: 'loginSchema',
    response: 'authResponse',
  })
  .post('/logout', authController.logout)
  .get('/profile', authController.getProfile, {
    response: 'userResponse',
  })