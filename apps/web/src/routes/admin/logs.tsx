import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/logs')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Audit Logs</h2>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option>All Actions</option>
            <option>Create</option>
            <option>Update</option>
            <option>Delete</option>
            <option>Login</option>
            <option>Logout</option>
          </select>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option>All Users</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </select>
          <input 
            type="date" 
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Export</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Filter</button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-3 font-medium text-gray-700">Timestamp</th>
              <th className="text-left p-3 font-medium text-gray-700">User</th>
              <th className="text-left p-3 font-medium text-gray-700">Action</th>
              <th className="text-left p-3 font-medium text-gray-700">Resource</th>
              <th className="text-left p-3 font-medium text-gray-700">IP Address</th>
              <th className="text-left p-3 font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div>
                  <p className="text-sm">Nov 15, 2024</p>
                  <p className="text-xs text-gray-500">14:32:18</p>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    AS
                  </div>
                  <div>
                    <p className="font-medium text-sm">Alice Smith</p>
                    <p className="text-xs text-gray-500">alice.smith@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded">DELETE</span>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-sm">Customer Record</p>
                  <p className="text-xs text-gray-500">ID: CUST-1234</p>
                </div>
              </td>
              <td className="p-3 text-sm">192.168.1.100</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Success</span>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div>
                  <p className="text-sm">Nov 15, 2024</p>
                  <p className="text-xs text-gray-500">14:28:45</p>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    BJ
                  </div>
                  <div>
                    <p className="font-medium text-sm">Bob Johnson</p>
                    <p className="text-xs text-gray-500">bob.johnson@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded">UPDATE</span>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-sm">User Settings</p>
                  <p className="text-xs text-gray-500">Email notifications</p>
                </div>
              </td>
              <td className="p-3 text-sm">192.168.1.101</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Success</span>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div>
                  <p className="text-sm">Nov 15, 2024</p>
                  <p className="text-xs text-gray-500">14:15:22</p>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    CW
                  </div>
                  <div>
                    <p className="font-medium text-sm">Carol White</p>
                    <p className="text-xs text-gray-500">carol.white@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">CREATE</span>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-sm">Blog Post</p>
                  <p className="text-xs text-gray-500">Title: "Q4 Update"</p>
                </div>
              </td>
              <td className="p-3 text-sm">192.168.1.102</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Success</span>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div>
                  <p className="text-sm">Nov 15, 2024</p>
                  <p className="text-xs text-gray-500">14:02:11</p>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    AS
                  </div>
                  <div>
                    <p className="font-medium text-sm">Alice Smith</p>
                    <p className="text-xs text-gray-500">alice.smith@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">LOGIN</span>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-sm">Admin Dashboard</p>
                  <p className="text-xs text-gray-500">Web interface</p>
                </div>
              </td>
              <td className="p-3 text-sm">192.168.1.100</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Success</span>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div>
                  <p className="text-sm">Nov 15, 2024</p>
                  <p className="text-xs text-gray-500">13:45:33</p>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    DM
                  </div>
                  <div>
                    <p className="font-medium text-sm">David Martinez</p>
                    <p className="text-xs text-gray-500">david.martinez@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">LOGIN_FAILED</span>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-sm">Admin Dashboard</p>
                  <p className="text-xs text-gray-500">Invalid credentials</p>
                </div>
              </td>
              <td className="p-3 text-sm">192.168.1.105</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded">Failed</span>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div>
                  <p className="text-sm">Nov 15, 2024</p>
                  <p className="text-xs text-gray-500">13:32:07</p>
                </div>
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs font-semibold mr-2">
                    EC
                  </div>
                  <div>
                    <p className="font-medium text-sm">Emma Chen</p>
                    <p className="text-xs text-gray-500">emma.chen@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">LOGOUT</span>
              </td>
              <td className="p-3">
                <div>
                  <p className="text-sm">System</p>
                  <p className="text-xs text-gray-500">User session ended</p>
                </div>
              </td>
              <td className="p-3 text-sm">192.168.1.103</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Success</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">Showing 1-6 of 28,547 log entries</p>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 border rounded bg-blue-600 text-white">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">2</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">3</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  ),
})