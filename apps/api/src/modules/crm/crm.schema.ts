import { t } from 'elysia'
import { CustomerSchema } from '@crm/types'

export const crmSchema = {
  customerCreateSchema: t.Omit(CustomerSchema, ['id', 'createdAt', 'updatedAt']),
  customerUpdateSchema: t.Partial(t.Omit(CustomerSchema, ['id', 'createdAt', 'updatedAt'])),
  customerResponse: t.Object({
    customer: CustomerSchema,
    message: t.String(),
  }),
  customersResponse: t.Object({
    customers: t.Array(CustomerSchema),
  }),
  leadCreateSchema: t.Object({
    name: t.String(),
    email: t.String(),
    phone: t.Optional(t.String()),
    company: t.Optional(t.String()),
    status: t.String(),
    value: t.Optional(t.String()),
  }),
  leadResponse: t.Object({
    lead: t.Any(),
    message: t.String(),
  }),
  leadsResponse: t.Object({
    leads: t.Any(),
  }),
}