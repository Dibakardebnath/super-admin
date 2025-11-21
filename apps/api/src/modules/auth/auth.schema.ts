import { t } from 'elysia'

export const authSchema = {
  registerSchema: t.Object({
    name: t.String(),
    email: t.String({ format: 'email' }),
    password: t.String(),
    role: t.Enum({ admin: 'admin', editor: 'editor', viewer: 'viewer' }),
  }),
  loginSchema: t.Object({
    email: t.String({ format: 'email' }),
    password: t.String(),
  }),
  userResponse: t.Object({
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
  authResponse: t.Object({
    user: t.Object({
      id: t.String(),
      name: t.String(),
      email: t.String(),
      role: t.Enum({ admin: 'admin', editor: 'editor', viewer: 'viewer' }),
      createdAt: t.String(),
      updatedAt: t.String(),
      username: t.String(),
      isActive: t.Optional(t.Boolean()),
      referralCode: t.String(),
    }),
    token: t.String(),
    message: t.String(),
  }),
}