import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cms/analytics')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Content Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Views</h3>
          <p className="text-3xl font-bold mt-2">125.4K</p>
          <p className="text-sm text-green-600 mt-2">+18.2% this month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Avg Session Duration</h3>
          <p className="text-3xl font-bold mt-2">4m 32s</p>
          <p className="text-sm text-green-600 mt-2">+32s this month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Bounce Rate</h3>
          <p className="text-3xl font-bold mt-2">32.8%</p>
          <p className="text-sm text-green-600 mt-2">-2.4% this month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
          <p className="text-3xl font-bold mt-2">4.2%</p>
          <p className="text-sm text-green-600 mt-2">+0.3% this month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Organic Search</span>
                <span className="text-sm font-semibold">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-blue-600 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Direct Traffic</span>
                <span className="text-sm font-semibold">28%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-green-600 rounded-full" style={{ width: '28%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Social Media</span>
                <span className="text-sm font-semibold">18%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-purple-600 rounded-full" style={{ width: '18%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Referral</span>
                <span className="text-sm font-semibold">9%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="h-3 bg-yellow-600 rounded-full" style={{ width: '9%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Top Content</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Getting Started Guide</p>
                <p className="text-sm text-gray-500">Product Documentation</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">12.4K</p>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Best Practices 2024</p>
                <p className="text-sm text-gray-500">Blog Post</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">8.7K</p>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">Pricing Comparison</p>
                <p className="text-sm text-gray-500">Landing Page</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">6.2K</p>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">API Documentation</p>
                <p className="text-sm text-gray-500">Developer Docs</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">5.1K</p>
                <p className="text-sm text-gray-500">views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Content Performance Over Time</h3>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Mon</p>
            <div className="h-32 flex items-end justify-center">
              <div className="w-8 bg-blue-600 rounded-t" style={{ height: '60%' }}></div>
            </div>
            <p className="text-sm mt-2">18.2K</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Tue</p>
            <div className="h-32 flex items-end justify-center">
              <div className="w-8 bg-blue-600 rounded-t" style={{ height: '75%' }}></div>
            </div>
            <p className="text-sm mt-2">22.7K</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Wed</p>
            <div className="h-32 flex items-end justify-center">
              <div className="w-8 bg-blue-600 rounded-t" style={{ height: '68%' }}></div>
            </div>
            <p className="text-sm mt-2">20.5K</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Thu</p>
            <div className="h-32 flex items-end justify-center">
              <div className="w-8 bg-blue-600 rounded-t" style={{ height: '82%' }}></div>
            </div>
            <p className="text-sm mt-2">24.8K</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Fri</p>
            <div className="h-32 flex items-end justify-center">
              <div className="w-8 bg-green-600 rounded-t" style={{ height: '95%' }}></div>
            </div>
            <p className="text-sm mt-2">28.7K</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Sat</p>
            <div className="h-32 flex items-end justify-center">
              <div className="w-8 bg-blue-600 rounded-t" style={{ height: '45%' }}></div>
            </div>
            <p className="text-sm mt-2">13.6K</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Sun</p>
            <div className="h-32 flex items-end justify-center">
              <div className="w-8 bg-blue-600 rounded-t" style={{ height: '38%' }}></div>
            </div>
            <p className="text-sm mt-2">11.4K</p>
          </div>
        </div>
      </div>
    </div>
  ),
})