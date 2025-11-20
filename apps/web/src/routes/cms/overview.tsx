import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cms/overview')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">CMS Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Pages</h3>
          <p className="text-3xl font-bold mt-2">248</p>
          <p className="text-sm text-green-600 mt-2">+12 this month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Published Posts</h3>
          <p className="text-3xl font-bold mt-2">156</p>
          <p className="text-sm text-green-600 mt-2">+8 this week</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Media Files</h3>
          <p className="text-3xl font-bold mt-2">1,247</p>
          <p className="text-sm text-blue-600 mt-2">+42 uploaded</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Page Views</h3>
          <p className="text-3xl font-bold mt-2">45.2K</p>
          <p className="text-sm text-green-600 mt-2">+23% this month</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">New blog post published</p>
                <p className="text-sm text-gray-500">"10 Tips for Better Customer Service" - 2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">Page updated</p>
                <p className="text-sm text-gray-500">Pricing page - 5 hours ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">Media uploaded</p>
                <p className="text-sm text-gray-500">15 new images added to gallery - 1 day ago</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
              <div>
                <p className="font-medium">Draft created</p>
                <p className="text-sm text-gray-500">"Q4 Marketing Campaign" - 2 days ago</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Content Performance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Blog Posts</span>
                <span className="text-sm text-gray-500">89% engagement</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '89%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Landing Pages</span>
                <span className="text-sm text-gray-500">76% conversion</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '76%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Product Docs</span>
                <span className="text-sm text-gray-500">94% satisfaction</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 bg-purple-600 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
})