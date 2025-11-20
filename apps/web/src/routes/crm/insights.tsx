import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/crm/insights')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">CRM Insights & Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Lead Conversion</h3>
          <p className="text-3xl font-bold mt-2">24.8%</p>
          <p className="text-sm text-green-600 mt-2">↑ 3.2% from last month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Customer Retention</h3>
          <p className="text-3xl font-bold mt-2">94.2%</p>
          <p className="text-sm text-green-600 mt-2">↑ 1.8% from last month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Avg Deal Value</h3>
          <p className="text-3xl font-bold mt-2">$18,450</p>
          <p className="text-sm text-red-600 mt-2">↓ 2.1% from last month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Sales Cycle</h3>
          <p className="text-3xl font-bold mt-2">42 days</p>
          <p className="text-sm text-green-600 mt-2">↓ 5 days from last month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Jan</span>
              <div className="flex-1 mx-3 h-6 bg-gray-200 rounded">
                <div className="h-6 bg-blue-600 rounded" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm font-semibold">$92,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Feb</span>
              <div className="flex-1 mx-3 h-6 bg-gray-200 rounded">
                <div className="h-6 bg-blue-600 rounded" style={{ width: '92%' }}></div>
              </div>
              <span className="text-sm font-semibold">$98,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Mar</span>
              <div className="flex-1 mx-3 h-6 bg-gray-200 rounded">
                <div className="h-6 bg-blue-600 rounded" style={{ width: '88%' }}></div>
              </div>
              <span className="text-sm font-semibold">$95,200</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Apr</span>
              <div className="flex-1 mx-3 h-6 bg-gray-200 rounded">
                <div className="h-6 bg-blue-600 rounded" style={{ width: '95%' }}></div>
              </div>
              <span className="text-sm font-semibold">$105,800</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">May</span>
              <div className="flex-1 mx-3 h-6 bg-gray-200 rounded">
                <div className="h-6 bg-green-600 rounded" style={{ width: '100%' }}></div>
              </div>
              <span className="text-sm font-semibold">$112,300</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Customer Segments</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Enterprise</span>
                <span className="text-sm font-semibold">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-purple-600 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Mid-Market</span>
                <span className="text-sm font-semibold">42%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-blue-600 rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Small Business</span>
                <span className="text-sm font-semibold">23%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-green-600 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Top Performing Products</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Enterprise Suite</p>
                <p className="text-sm text-gray-500">Software License</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">+45%</p>
                <p className="text-sm text-gray-500">$342,000</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Professional Services</p>
                <p className="text-sm text-gray-500">Consulting</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">+32%</p>
                <p className="text-sm text-gray-500">$189,000</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Support Plans</p>
                <p className="text-sm text-gray-500">Subscriptions</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">+28%</p>
                <p className="text-sm text-gray-500">$98,000</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Sales Team Performance</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">AK</div>
                <div>
                  <p className="font-medium">Alex Kim</p>
                  <p className="text-sm text-gray-500">Sales Executive</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$245,000</p>
                <p className="text-sm text-green-600">118% of quota</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">MR</div>
                <div>
                  <p className="font-medium">Maria Rodriguez</p>
                  <p className="text-sm text-gray-500">Account Manager</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$198,000</p>
                <p className="text-sm text-green-600">105% of quota</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">JD</div>
                <div>
                  <p className="font-medium">John Davis</p>
                  <p className="text-sm text-gray-500">Sales Representative</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">$178,000</p>
                <p className="text-sm text-yellow-600">95% of quota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})