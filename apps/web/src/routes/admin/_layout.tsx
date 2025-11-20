import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_layout')({
  component: () => (
    <div className="flex h-screen bg-gray-50">
      <nav className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Admin</h2>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Main</p>
            <div className="space-y-2">
              <a href="/admin" className="block px-4 py-2 rounded hover:bg-gray-100">Dashboard</a>
              <a href="/admin/overview" className="block px-4 py-2 rounded hover:bg-gray-100">Overview</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">User Management</p>
            <div className="space-y-2">
              <a href="/admin/users" className="block px-4 py-2 rounded hover:bg-gray-100">Users</a>
              <a href="/admin/roles" className="block px-4 py-2 rounded hover:bg-gray-100">Roles & Permissions</a>
              <a href="/admin/teams" className="block px-4 py-2 rounded hover:bg-gray-100">Teams</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Security</p>
            <div className="space-y-2">
              <a href="/admin/logs" className="block px-4 py-2 rounded hover:bg-gray-100">Audit Logs</a>
              <a href="/admin/security" className="block px-4 py-2 rounded hover:bg-gray-100">Security</a>
              <a href="/admin/sessions" className="block px-4 py-2 rounded hover:bg-gray-100">Active Sessions</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Settings</p>
            <div className="space-y-2">
              <a href="/admin/settings" className="block px-4 py-2 rounded hover:bg-gray-100">System Settings</a>
              <a href="/admin/integrations" className="block px-4 py-2 rounded hover:bg-gray-100">Integrations</a>
              <a href="/admin/billing" className="block px-4 py-2 rounded hover:bg-gray-100">Billing</a>
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