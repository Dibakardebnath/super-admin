import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/users')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      
      <div className="mb-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add User</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Bulk Import</button>
        </div>
        <div className="flex items-center space-x-2">
          <input 
            type="search" 
            placeholder="Search users..." 
            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
            <option>Guest</option>
          </select>
          <select className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Suspended</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left p-3">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="text-left p-3 font-medium text-gray-700">User</th>
              <th className="text-left p-3 font-medium text-gray-700">Role</th>
              <th className="text-left p-3 font-medium text-gray-700">Status</th>
              <th className="text-left p-3 font-medium text-gray-700">Last Active</th>
              <th className="text-left p-3 font-medium text-gray-700">Joined</th>
              <th className="text-left p-3 font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    AS
                  </div>
                  <div>
                    <p className="font-medium">Alice Smith</p>
                    <p className="text-sm text-gray-500">alice.smith@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded">Admin</span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Active</span>
              </td>
              <td className="p-3 text-sm">2 hours ago</td>
              <td className="p-3 text-sm">Jan 15, 2023</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline mr-3">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    BJ
                  </div>
                  <div>
                    <p className="font-medium">Bob Johnson</p>
                    <p className="text-sm text-gray-500">bob.johnson@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded">Manager</span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Active</span>
              </td>
              <td className="p-3 text-sm">5 hours ago</td>
              <td className="p-3 text-sm">Mar 22, 2023</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline mr-3">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    CW
                  </div>
                  <div>
                    <p className="font-medium">Carol White</p>
                    <p className="text-sm text-gray-500">carol.white@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">User</span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Active</span>
              </td>
              <td className="p-3 text-sm">1 day ago</td>
              <td className="p-3 text-sm">Jun 10, 2023</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline mr-3">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    DM
                  </div>
                  <div>
                    <p className="font-medium">David Martinez</p>
                    <p className="text-sm text-gray-500">david.martinez@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">User</span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-red-100 text-red-600 rounded">Suspended</span>
              </td>
              <td className="p-3 text-sm">3 days ago</td>
              <td className="p-3 text-sm">Aug 5, 2023</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline mr-3">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
            
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3">
                <input type="checkbox" className="rounded" />
              </td>
              <td className="p-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    EC
                  </div>
                  <div>
                    <p className="font-medium">Emma Chen</p>
                    <p className="text-sm text-gray-500">emma.chen@example.com</p>
                  </div>
                </div>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">Guest</span>
              </td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded">Inactive</span>
              </td>
              <td className="p-3 text-sm">1 week ago</td>
              <td className="p-3 text-sm">Sep 12, 2023</td>
              <td className="p-3">
                <button className="text-blue-600 hover:underline mr-3">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">Showing 1-5 of 2,847 users</p>
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