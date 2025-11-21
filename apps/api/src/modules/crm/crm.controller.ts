import { CrmService } from './crm.service'
import { CustomerCreateInput, LeadCreateInput } from '@crm/types'

const crmService = new CrmService()

export const crmController = {
  getCustomers: async () => {
    const result = await crmService.getCustomers()
    return {
      customers: result.customers.map(customer => ({
        ...customer,
        createdAt: customer.createdAt?.toString(),
        updatedAt: customer.updatedAt?.toString(),
      })),
    }
  },

  getCustomer: async ({ params }: { params: { id: string } }) => {
    const result = await crmService.getCustomer(params.id)
    return {
      customer: {
        ...result.customer,
        phone: result.customer.phone === null ? undefined : result.customer.phone,
        company: result.customer.company === null ? undefined : result.customer.company,
        address: result.customer.address === null ? undefined : result.customer.address,
        createdAt: (result.customer.createdAt || new Date()).toString(),
        updatedAt: (result.customer.updatedAt || new Date()).toString(),
      },
    }
  },

  createCustomer: async ({ body }: { body: CustomerCreateInput }) => {
    const result = await crmService.createCustomer(body)
    return {
      customer: {
        ...result.customer,
        phone: result.customer.phone === null ? undefined : result.customer.phone,
        company: result.customer.company === null ? undefined : result.customer.company,
        address: result.customer.address === null ? undefined : result.customer.address,
        createdAt: (result.customer.createdAt || new Date()).toString(),
        updatedAt: (result.customer.updatedAt || new Date()).toString(),
      },
      message: result.message,
    }
  },

  updateCustomer: async ({ params, body }: { params: { id: string }; body: Partial<CustomerCreateInput> }) => {
    const result = await crmService.updateCustomer(params.id, body)
    return {
      customer: {
        ...result.customer,
        phone: result.customer.phone === null ? undefined : result.customer.phone,
        company: result.customer.company === null ? undefined : result.customer.company,
        address: result.customer.address === null ? undefined : result.customer.address,
        createdAt: (result.customer.createdAt || new Date()).toString(),
        updatedAt: (result.customer.updatedAt || new Date()).toString(),
      },
      message: result.message,
    }
  },

  deleteCustomer: async ({ params }: { params: { id: string } }) => {
    return await crmService.deleteCustomer(params.id)
  },

  getLeads: async () => {
    return await crmService.getLeads()
  },

  createLead: async ({ body }: { body: LeadCreateInput }) => {
    const result = await crmService.createLead(body)
    return {
      lead: {
        ...result.lead,
        createdAt: result.lead.createdAt?.toString(),
        updatedAt: result.lead.updatedAt?.toString(),
      },
      message: result.message,
    }
  },
}