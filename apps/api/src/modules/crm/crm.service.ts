import { db } from '@crm/db'
import { customers, leads, Customer, Lead } from '@crm/db'
import { eq } from 'drizzle-orm'
import { CustomerCreateInput, LeadCreateInput } from '@crm/types'

export class CrmService {
  async getCustomers(): Promise<{ customers: Customer[] }> {
    const customerList = await db.select().from(customers)
    return { customers: customerList }
  }

  async getCustomer(id: string): Promise<{ customer: Customer }> {
    const [customer] = await db.select().from(customers).where(eq(customers.id, id))
    if (!customer) {
      throw new Error('Customer not found')
    }
    return { customer }
  }

  async createCustomer(data: CustomerCreateInput): Promise<{ customer: Customer; message: string }> {
    const [customer] = await db.insert(customers).values(data).returning()
    return {
      customer,
      message: 'Customer created successfully',
    }
  }

  async updateCustomer(id: string, data: Partial<CustomerCreateInput>): Promise<{ customer: Customer; message: string }> {
    const [customer] = await db
      .update(customers)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(customers.id, id))
      .returning()
    
    if (!customer) {
      throw new Error('Customer not found')
    }
    
    return {
      customer,
      message: 'Customer updated successfully',
    }
  }

  async deleteCustomer(id: string): Promise<{ message: string }> {
    await db.delete(customers).where(eq(customers.id, id))
    return { message: 'Customer deleted successfully' }
  }

  async getLeads(): Promise<{ leads: Lead[] }> {
    const leadsList = await db.select().from(leads)
    return { leads: leadsList }
  }

  async createLead(data: LeadCreateInput): Promise<{ lead: Lead; message: string }> {
    const [lead] = await db.insert(leads).values(data).returning()
    return {
      lead,
      message: 'Lead created successfully',
    }
  }
}