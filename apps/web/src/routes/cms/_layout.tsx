import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/cms/_layout')({
  component: () => (
    <div className="flex h-screen bg-gray-50">
      <nav className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">CMS</h2>
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Main</p>
            <div className="space-y-2">
              <a href="/cms" className="block px-4 py-2 rounded hover:bg-gray-100">Dashboard</a>
              <a href="/cms/overview" className="block px-4 py-2 rounded hover:bg-gray-100">Overview</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Content</p>
            <div className="space-y-2">
              <a href="/cms/posts" className="block px-4 py-2 rounded hover:bg-gray-100">Posts</a>
              <a href="/cms/pages" className="block px-4 py-2 rounded hover:bg-gray-100">Pages</a>
              <a href="/cms/media" className="block px-4 py-2 rounded hover:bg-gray-100">Media Library</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Analytics</p>
            <div className="space-y-2">
              <a href="/cms/analytics" className="block px-4 py-2 rounded hover:bg-gray-100">Content Analytics</a>
              <a href="/cms/seo" className="block px-4 py-2 rounded hover:bg-gray-100">SEO Tools</a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Settings</p>
            <div className="space-y-2">
              <a href="/cms/settings" className="block px-4 py-2 rounded hover:bg-gray-100">Site Settings</a>
              <a href="/cms/users" className="block px-4 py-2 rounded hover:bg-gray-100">User Management</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  ),
})