import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div className="container mx-auto p-6">
      <div className="mb-6 p-6 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">Welcome to CRM</h1>
        <p className="text-gray-600">
          Choose your destination: CRM, CMS, or Admin
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">CRM</h2>
          <p className="text-gray-600 mb-4">
            Manage customers, leads, and sales
          </p>
          <a href="/crm" className="text-blue-600 hover:underline">
            Go to CRM →
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">CMS</h2>
          <p className="text-gray-600 mb-4">
            Manage content, posts, and media
          </p>
          <a href="/cms" className="text-blue-600 hover:underline">
            Go to CMS →
          </a>
        </div>
        
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-xl font-semibold mb-2">Admin</h2>
          <p className="text-gray-600 mb-4">
            System administration and settings
          </p>
          <a href="/admin" className="text-blue-600 hover:underline">
            Go to Admin →
          </a>
        </div>
      </div>
    </div>
  ),
})