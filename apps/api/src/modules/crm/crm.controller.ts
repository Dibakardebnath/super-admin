import { CrmService } from './crm.service'
import { CustomerCreateInput, LeadCreateInput } from '@crm/types'

const crmService = new CrmService()

export const crmController = {
  getCustomers: async () => {
    const result = await crmService.getCustomers()
    return {
      customers: result.customers.map(customer => ({
        ...customer,
        phone: customer.phone === null ? undefined : customer.phone,
        company: customer.company === null ? undefined : customer.company,
        address: customer.address === null ? undefined : customer.address,
        status: customer.status as 'active' | 'prospect' | 'inactive',
        createdAt: customer.createdAt?.toString() || new Date().toISOString(),
        updatedAt: customer.updatedAt?.toString() || new Date().toISOString(),
      })),
    }
  },

  getCustomer: async ({ params }: { params: { id: string } }) => {
    const result = await crmService.getCustomer(params.id)
    return {
      message: 'Customer fetched successfully',
      customer: {
        ...result.customer,
        phone: result.customer.phone === null ? undefined : result.customer.phone,
        company: result.customer.company === null ? undefined : result.customer.company,
        address: result.customer.address === null ? undefined : result.customer.address,
        status: result.customer.status as 'active' | 'prospect' | 'inactive',
        createdAt: result.customer.createdAt?.toString() || new Date().toISOString(),
        updatedAt: result.customer.updatedAt?.toString() || new Date().toISOString(),
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
        status: result.customer.status as 'active' | 'prospect' | 'inactive',
        createdAt: result.customer.createdAt?.toString() || new Date().toISOString(),
        updatedAt: result.customer.updatedAt?.toString() || new Date().toISOString(),
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
        status: result.customer.status as 'active' | 'prospect' | 'inactive',
        createdAt: result.customer.createdAt?.toString() || new Date().toISOString(),
        updatedAt: result.customer.updatedAt?.toString() || new Date().toISOString(),
      },
      message: result.message,
    }
  },

  deleteCustomer: async ({ params }: { params: { id: string } }) => {
    return await crmService.deleteCustomer(params.id)
  },

  getLeads: async () => {
    const result = await crmService.getLeads()
    return {
      message: 'Leads fetched successfully',
      leads: result.leads.map(lead => ({
        ...lead,
        status: lead.status as 'prospect' | 'qualified' | 'converted' | 'lost',
        createdAt: lead.createdAt?.toString() || new Date().toISOString(),
        updatedAt: lead.updatedAt?.toString() || new Date().toISOString(),
      })),
    }
  },

  createLead: async ({ body }: { body: LeadCreateInput }) => {
    const result = await crmService.createLead(body)
    return {
      lead: {
        ...result.lead,
        status: result.lead.status as 'prospect' | 'qualified' | 'converted' | 'lost',
        createdAt: result.lead.createdAt?.toString() || new Date().toISOString(),
        updatedAt: result.lead.updatedAt?.toString() || new Date().toISOString(),
      },
      message: result.message,
    }
  },
}