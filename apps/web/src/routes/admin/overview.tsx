import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/overview')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Admin Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
          <p className="text-3xl font-bold mt-2">2,847</p>
          <p className="text-sm text-green-600 mt-2">+142 this month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Active Sessions</h3>
          <p className="text-3xl font-bold mt-2">486</p>
          <p className="text-sm text-blue-600 mt-2">Right now</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">System Uptime</h3>
          <p className="text-3xl font-bold mt-2">99.9%</p>
          <p className="text-sm text-green-600 mt-2">Last 30 days</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Storage Used</h3>
          <p className="text-3xl font-bold mt-2">684GB</p>
          <p className="text-sm text-orange-600 mt-2">of 1TB</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">System Health</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium">API Server</span>
              </div>
              <span className="text-green-600 text-sm font-semibold">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium">Database</span>
              </div>
              <span className="text-green-600 text-sm font-semibold">Healthy</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <span className="font-medium">Cache Server</span>
              </div>
              <span className="text-yellow-600 text-sm font-semibold">Warning</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium">Email Service</span>
              </div>
              <span className="text-green-600 text-sm font-semibold">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-medium">CDN</span>
              </div>
              <span className="text-green-600 text-sm font-semibold">Operational</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">New user registration</p>
                <p className="text-sm text-gray-500">john.doe@example.com - 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">System backup completed</p>
                <p className="text-sm text-gray-500">Daily backup - 1 hour ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">High memory usage detected</p>
                <p className="text-sm text-gray-500">Cache server - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">Configuration updated</p>
                <p className="text-sm text-gray-500">Rate limits adjusted - 3 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})