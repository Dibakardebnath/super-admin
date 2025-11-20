import { t } from 'elysia'
import { UserCreateSchema, UserSchema } from '@crm/types'

export const authSchema = {
  registerSchema: t.Omit(UserCreateSchema, ['id', 'createdAt', 'updatedAt']),
  loginSchema: t.Pick(UserCreateSchema, ['email', 'password']),
  userResponse: t.Omit(UserSchema, ['password']),
  authResponse: t.Object({
    user: t.Omit(UserSchema, ['password']),
    token: t.String(),
    message: t.String(),
  }),
}