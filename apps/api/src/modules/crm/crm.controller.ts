import { CrmService } from './crm.service'
import { CustomerCreateInput } from '@crm/types'

const crmService = new CrmService()

export const crmController = {
  getCustomers: async () => {
    return await crmService.getCustomers()
  },

  getCustomer: async ({ params }: { params: { id: string } }) => {
    return await crmService.getCustomer(params.id)
  },

  createCustomer: async ({ body }: { body: CustomerCreateInput }) => {
    return await crmService.createCustomer(body)
  },

  updateCustomer: async ({ params, body }: { params: { id: string }; body: Partial<CustomerCreateInput> }) => {
    return await crmService.updateCustomer(params.id, body)
  },

  deleteCustomer: async ({ params }: { params: { id: string } }) => {
    return await crmService.deleteCustomer(params.id)
  },

  getLeads: async () => {
    return await crmService.getLeads()
  },

  createLead: async ({ body }: { body: any }) => {
    return await crmService.createLead(body)
  },
}