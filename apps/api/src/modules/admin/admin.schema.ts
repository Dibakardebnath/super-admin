import { t } from 'elysia'
import { UserSchema } from '@crm/types'

export const adminSchema = {
  userCreateSchema: t.Omit(UserSchema, ['id', 'createdAt', 'updatedAt']),
  userUpdateSchema: t.Partial(t.Omit(UserSchema, ['id', 'createdAt', 'updatedAt'])),
  userResponse: t.Object({
    user: t.Omit(UserSchema, ['password']),
    message: t.String(),
  }),
  usersResponse: t.Object({
    users: t.Array(t.Omit(UserSchema, ['password'])),
  }),
  settingsUpdateSchema: t.Object({
    key: t.String(),
    value: t.String(),
    description: t.Optional(t.String()),
    isPublic: t.Optional(t.Boolean()),
  }),
  settingResponse: t.Object({
    setting: t.Any(),
    message: t.String(),
  }),
  settingsResponse: t.Object({
    settings: t.Array(t.Any()),
  }),
}