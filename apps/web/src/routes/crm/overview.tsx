import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/crm/overview")({
  component: () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">CRM Overview kj</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
          <p className="text-3xl font-bold mt-2">$89,420</p>
          <p className="text-sm text-green-600 mt-2">+12.5% from last month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">
            Active Customers
          </h3>
          <p className="text-3xl font-bold mt-2">1,284</p>
          <p className="text-sm text-blue-600 mt-2">+8.2% from last month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
          <p className="text-3xl font-bold mt-2">3.24%</p>
          <p className="text-sm text-green-600 mt-2">+0.4% from last month</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-sm font-medium text-gray-500">Avg Deal Size</h3>
          <p className="text-3xl font-bold mt-2">$12,480</p>
          <p className="text-sm text-red-600 mt-2">-2.1% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Recent Deals</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Acme Corp</p>
                <p className="text-sm text-gray-500">
                  Enterprise Software Deal
                </p>
              </div>
              <span className="text-green-600 font-semibold">$45,000</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">TechStart Inc</p>
                <p className="text-sm text-gray-500">SAAS Implementation</p>
              </div>
              <span className="text-green-600 font-semibold">$28,500</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Global Solutions</p>
                <p className="text-sm text-gray-500">Consulting Contract</p>
              </div>
              <span className="text-yellow-600 font-semibold">$15,800</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Sales Pipeline</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Lead Generation</span>
                <span>156</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Qualified Leads</span>
                <span>89</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Proposals</span>
                <span>42</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-yellow-600 h-2 rounded-full"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Negotiation</span>
                <span>18</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
});
