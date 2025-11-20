import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crm/")({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">CRM Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Total Customers</h3>
          <p className="text-3xl font-bold text-blue-600">245</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Total Leads</h3>
          <p className="text-3xl font-bold text-green-600">89</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Revenue</h3>
          <p className="text-3xl font-bold text-purple-600">$125,430</p>
        </div>
      </div>
    </div>
  ),
});
