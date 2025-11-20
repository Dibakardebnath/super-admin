import { Elysia, t } from 'elysia'
import { crmController } from './crm.controller'
import { crmSchema } from './crm.schema'

export const crmRoutes = new Elysia({ prefix: '/crm' })
  .model(crmSchema)
  .get('/customers', crmController.getCustomers, {
    response: 'customersResponse',
  })
  .get('/customers/:id', crmController.getCustomer, {
    response: 'customerResponse',
  })
  .post('/customers', crmController.createCustomer, {
    body: 'customerCreateSchema',
    response: 'customerResponse',
  })
  .put('/customers/:id', crmController.updateCustomer, {
    body: 'customerUpdateSchema',
    response: 'customerResponse',
  })
  .delete('/customers/:id', crmController.deleteCustomer)
  .get('/leads', crmController.getLeads, {
    response: 'leadsResponse',
  })
  .post('/leads', crmController.createLead, {
    body: 'leadCreateSchema',
    response: 'leadResponse',
  })