import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cms/')({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">CMS Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Total Posts</h3>
          <p className="text-3xl font-bold text-blue-600">156</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Media Files</h3>
          <p className="text-3xl font-bold text-green-600">342</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Pages</h3>
          <p className="text-3xl font-bold text-purple-600">28</p>
        </div>
      </div>
    </div>
  ),
})