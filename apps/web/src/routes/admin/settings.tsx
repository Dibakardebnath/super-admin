import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/settings')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">System Settings</h2>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">General Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input 
                type="text" 
                defaultValue="Multi-CRM Platform" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
              <input 
                type="email" 
                defaultValue="admin@multicrm.com" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Timezone</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>UTC-5 (Eastern)</option>
                <option>UTC-6 (Central)</option>
                <option>UTC-7 (Mountain)</option>
                <option>UTC-8 (Pacific)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Language</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>English (US)</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Require 2FA for all admin users</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Session Timeout</p>
                <p className="text-sm text-gray-500">Auto-logout after inactivity</p>
              </div>
              <select className="px-3 py-1 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>4 hours</option>
              </select>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Password Complexity</p>
                <p className="text-sm text-gray-500">Require strong passwords</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500">Send system alerts via email</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">SMS Notifications</p>
                <p className="text-sm text-gray-500">Send critical alerts via SMS</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Browser Notifications</p>
                <p className="text-sm text-gray-500">Show desktop notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-1"></span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">API Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Rate Limit</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>100 requests/minute</option>
                <option>500 requests/minute</option>
                <option>1000 requests/minute</option>
                <option>Unlimited</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">API Version</label>
              <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                <option>v1.0 (Legacy)</option>
                <option>v2.0 (Current)</option>
                <option>v3.0 (Beta)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Allowed Origins</label>
              <textarea 
                rows={3}
                defaultValue="https://app.multicrm.com&#10;https://admin.multicrm.com"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Backup Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Automatic Backups</p>
                <p className="text-sm text-gray-500">Schedule automatic database backups</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Backup Frequency</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Retention Period</label>
                <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                  <option>7 days</option>
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>1 year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Cancel</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save Settings</button>
        </div>
      </div>
    </div>
  ),
})