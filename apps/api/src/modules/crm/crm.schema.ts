import { t } from 'elysia'

export const crmSchema = {
  customerCreateSchema: t.Object({
    name: t.String(),
    email: t.String({ format: 'email' }),
    phone: t.Optional(t.String()),
    company: t.Optional(t.String()),
    address: t.Optional(t.String()),
    status: t.Union([t.Literal('active'), t.Literal('inactive'), t.Literal('prospect')]),
  }),
  customerUpdateSchema: t.Partial(
    t.Object({
      name: t.String(),
      email: t.String({ format: 'email' }),
      phone: t.Optional(t.String()),
      company: t.Optional(t.String()),
      address: t.Optional(t.String()),
      status: t.Union([t.Literal('active'), t.Literal('inactive'), t.Literal('prospect')]),
    })
  ),
  customerResponse: t.Object({
    customer: t.Object({
      id: t.String(),
      name: t.String(),
      email: t.String(),
      phone: t.Optional(t.String()),
      company: t.Optional(t.String()),
      address: t.Optional(t.String()),
      status: t.Union([t.Literal('active'), t.Literal('inactive'), t.Literal('prospect')]),
      createdAt: t.String(),
      updatedAt: t.String(),
    }),
    message: t.String(),
  }),
  customersResponse: t.Object({
    customers: t.Array(
      t.Object({
        id: t.String(),
        name: t.String(),
        email: t.String(),
        phone: t.Optional(t.String()),
        company: t.Optional(t.String()),
        address: t.Optional(t.String()),
        status: t.Union([t.Literal('active'), t.Literal('inactive'), t.Literal('prospect')]),
        createdAt: t.String(),
        updatedAt: t.String(),
      })
    ),
  }),
  leadCreateSchema: t.Object({
    name: t.String(),
    email: t.String({ format: 'email' }),
    company: t.Optional(t.String()),
    status: t.Union([t.Literal('prospect'), t.Literal('qualified'), t.Literal('converted'), t.Literal('lost')]),
    value: t.Optional(t.String()),
    source: t.Optional(t.String()),
    notes: t.Optional(t.String()),
  }),
  leadResponse: t.Object({
    lead: t.Any(),
    message: t.String(),
  }),
  leadsResponse: t.Object({
    leads: t.Any(),
  }),
}