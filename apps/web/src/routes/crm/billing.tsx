import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crm/billing')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Billing & Invoices</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Current Plan</h3>
          <p className="text-2xl font-bold mt-2">Enterprise</p>
          <p className="text-sm text-gray-600 mt-2">$499/month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">This Month</h3>
          <p className="text-2xl font-bold mt-2">$499</p>
          <p className="text-sm text-green-600 mt-2">Paid on time</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Usage</h3>
          <p className="text-2xl font-bold mt-2">1,284</p>
          <p className="text-sm text-gray-600 mt-2">of 10,000 users</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Next Billing</h3>
          <p className="text-2xl font-bold mt-2">Dec 15</p>
          <p className="text-sm text-gray-600 mt-2">in 5 days</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Billing History</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download Invoices</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Invoice #</th>
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">Amount</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">INV-2024-011</td>
                <td className="p-3">Nov 15, 2024</td>
                <td className="p-3 font-semibold">$499.00</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Paid</span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">INV-2024-010</td>
                <td className="p-3">Oct 15, 2024</td>
                <td className="p-3 font-semibold">$499.00</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Paid</span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">INV-2024-009</td>
                <td className="p-3">Sep 15, 2024</td>
                <td className="p-3 font-semibold">$499.00</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Paid</span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">INV-2024-008</td>
                <td className="p-3">Aug 15, 2024</td>
                <td className="p-3 font-semibold">$599.00</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded">Paid</span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center">
            <div className="w-12 h-8 bg-blue-600 rounded mr-3 flex items-center justify-center text-white text-xs font-bold">VISA</div>
            <div>
              <p className="font-medium">Visa ending in 4242</p>
              <p className="text-sm text-gray-500">Expires 12/25</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Update</button>
        </div>
      </div>
    </div>
  ),
})