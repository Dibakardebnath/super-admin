import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/crm/_layout')({
  component: () => (
    <div className="flex h-screen bg-gray-50">
      <nav className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">CRM</h2>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Main</p>
            <div className="space-y-2">
              <a href="/crm" className="block px-4 py-2 rounded hover:bg-gray-100">Dashboard</a>
              <a href="/crm/overview" className="block px-4 py-2 rounded hover:bg-gray-100">Overview</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Management</p>
            <div className="space-y-2">
              <a href="/crm/customers" className="block px-4 py-2 rounded hover:bg-gray-100">Customers</a>
              <a href="/crm/leads" className="block px-4 py-2 rounded hover:bg-gray-100">Leads</a>
              <a href="/crm/support" className="block px-4 py-2 rounded hover:bg-gray-100">Support</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Analytics</p>
            <div className="space-y-2">
              <a href="/crm/insights" className="block px-4 py-2 rounded hover:bg-gray-100">Insights</a>
              <a href="/crm/analytics" className="block px-4 py-2 rounded hover:bg-gray-100">Analytics</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Settings</p>
            <div className="space-y-2">
              <a href="/crm/billing" className="block px-4 py-2 rounded hover:bg-gray-100">Billing</a>
              <a href="/crm/settings" className="block px-4 py-2 rounded hover:bg-gray-100">Settings</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  ),
})