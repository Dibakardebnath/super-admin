import { t } from 'elysia'

export const adminSchema = {
  userCreateSchema: t.Object({
    name: t.String(),
    email: t.String({ format: 'email' }),
    password: t.String(),
    role: t.Enum({ admin: 'admin', editor: 'editor', viewer: 'viewer' }),
  }),
  userUpdateSchema: t.Partial(
    t.Object({
      name: t.String(),
      email: t.String({ format: 'email' }),
      password: t.String(),
      role: t.Enum({ admin: 'admin', editor: 'editor', viewer: 'viewer' }),
    })
  ),
  userResponse: t.Object({
    user: t.Object({
      id: t.String(),
      name: t.String(),
      email: t.String(),
      role: t.Enum({ admin: 'admin', editor: 'editor', viewer: 'viewer' }),
      createdAt: t.String(),
      updatedAt: t.String(),
      username: t.String(),
      isActive: t.Boolean(),
      referralCode: t.String(),
    }),
    message: t.String(),
  }),
  usersResponse: t.Object({
    users: t.Array(
      t.Object({
        id: t.String(),
        name: t.String(),
        email: t.String(),
        role: t.Enum({ admin: 'admin', editor: 'editor', viewer: 'viewer' }),
        createdAt: t.String(),
        updatedAt: t.String(),
        username: t.String(),
        isActive: t.Optional(t.Boolean()),
        referralCode: t.String(),
      })
    ),
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