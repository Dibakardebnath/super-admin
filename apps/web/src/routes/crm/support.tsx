import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crm/support')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Support Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Open Tickets</h3>
          <p className="text-3xl font-bold mt-2">47</p>
          <p className="text-sm text-orange-600 mt-2">12 require immediate attention</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Avg Response Time</h3>
          <p className="text-3xl font-bold mt-2">2.4 hrs</p>
          <p className="text-sm text-green-600 mt-2">-30min from last week</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">CSAT Score</h3>
          <p className="text-3xl font-bold mt-2">4.8</p>
          <p className="text-sm text-green-600 mt-2">+0.2 from last month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Support Tickets</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-start p-4 border rounded-lg">
              <div>
                <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-600 rounded mb-2">High</span>
                <p className="font-medium">#1284 - Payment Gateway Issue</p>
                <p className="text-sm text-gray-500">Enterprise Client - Acme Corp</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">Assign</button>
            </div>
            <div className="flex justify-between items-start p-4 border rounded-lg">
              <div>
                <span className="inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded mb-2">Medium</span>
                <p className="font-medium">#1283 - Data Export Not Working</p>
                <p className="text-sm text-gray-500">Mid-tier Client - TechStart</p>
                <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">Assign</button>
            </div>
            <div className="flex justify-between items-start p-4 border rounded-lg">
              <div>
                <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-600 rounded mb-2">Low</span>
                <p className="font-medium">#1282 - UI Question</p>
                <p className="text-sm text-gray-500">Small Business - Local Shop</p>
                <p className="text-xs text-gray-400 mt-1">8 hours ago</p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded">Assign</button>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Support Team Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">JD</div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">Senior Support</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">15 tickets</p>
                <p className="text-sm font-semibold text-green-600">4.9 CSAT</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">SJ</div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Support Lead</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">12 tickets</p>
                <p className="text-sm font-semibold text-green-600">4.8 CSAT</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">MC</div>
                <div>
                  <p className="font-medium">Mike Chen</p>
                  <p className="text-sm text-gray-500">Support Specialist</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">18 tickets</p>
                <p className="text-sm font-semibold text-green-600">4.7 CSAT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})