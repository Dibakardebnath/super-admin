import { createFileRoute } from '@tanstack/react-router'
import { Card, Badge, Button, Input, Table, TableHeader, TableBody, TableRow, TableCell, TableHead, TrendingUp, DollarSign, CreditCard, AlertCircle, Search, CheckCircle, MoreVertical } from '@crm/ui'


// Mock data
const billingData = [
  { id: 'ORG-001', org: 'TechCorp Inc', plan: 'Enterprise', mrr: 2499, arr: 29988, users: 150, status: 'active', nextBilling: 'Dec 15, 2024' },
  { id: 'ORG-002', org: 'StartupHub', plan: 'Pro', mrr: 499, arr: 5988, users: 25, status: 'active', nextBilling: 'Dec 20, 2024' },
  { id: 'ORG-003', org: 'DesignCo', plan: 'Basic', mrr: 99, arr: 1188, users: 5, status: 'overdue', nextBilling: 'Dec 10, 2024' },
  { id: 'ORG-004', org: 'MediaFlow', plan: 'Pro', mrr: 499, arr: 5988, users: 30, status: 'active', nextBilling: 'Dec 18, 2024' },
  { id: 'ORG-005', org: 'CloudBase', plan: 'Enterprise', mrr: 2499, arr: 29988, users: 200, status: 'active', nextBilling: 'Dec 22, 2024' },
]

// Calculate totals
const totalMRR = billingData.reduce((sum, org) => sum + org.mrr, 0)
const totalARR = billingData.reduce((sum, org) => sum + org.arr, 0)
const activeOrgs = billingData.filter(org => org.status === 'active').length

export const Route = createFileRoute('/crm/billing')({
  component: () => (
    <div className="p-6 space-y-6">
      {/* Revenue Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Monthly Recurring Revenue</p>
              <p className="text-3xl font-bold text-gray-900">${totalMRR.toLocaleString()}</p>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12.5% from last month
              </p>
            </div>
            <div className="rounded-xl bg-blue-50 p-3">
              <DollarSign className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Annual Recurring Revenue</p>
              <p className="text-3xl font-bold text-gray-900">${totalARR.toLocaleString()}</p>
              <p className="text-sm text-green-600 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +18.2% YoY
              </p>
            </div>
            <div className="rounded-xl bg-green-50 p-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Active Organizations</p>
              <p className="text-3xl font-bold text-gray-900">{activeOrgs}</p>
              <p className="text-sm text-gray-500">
                {billingData.length} total orgs
              </p>
            </div>
            <div className="rounded-xl bg-purple-50 p-3">
              <CreditCard className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Overdue Payments</p>
              <p className="text-3xl font-bold text-gray-900">
                {billingData.filter(org => org.status === 'overdue').length}
              </p>
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                Requires attention
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Billing Table */}
      <Card className="rounded-xl border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Organization Billing</h3>
              <p className="text-sm text-gray-600">Manage subscriptions and payments</p>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search organizations..." 
                className="pl-10 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500" 
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700">Organization</TableHead>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700">Plan</TableHead>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700">MRR</TableHead>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700">ARR</TableHead>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700">Users</TableHead>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700">Next Billing</TableHead>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700">Status</TableHead>
                <TableHead className="px-6 py-4 text-sm font-medium text-gray-700"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {billingData.map((org) => (
                <TableRow key={org.id} className="hover:bg-gray-50">
                  <TableCell className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{org.org}</p>
                      <p className="text-xs text-gray-500">{org.id}</p>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Badge variant="outline" className="border-blue-200 text-blue-700">
                      {org.plan}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 font-medium text-gray-900">${org.mrr}</TableCell>
                  <TableCell className="px-6 py-4 font-medium text-gray-900">${org.arr.toLocaleString()}</TableCell>
                  <TableCell className="px-6 py-4 text-gray-600">{org.users}</TableCell>
                  <TableCell className="px-6 py-4 text-sm text-gray-600">{org.nextBilling}</TableCell>
                  <TableCell className="px-6 py-4">
                    {org.status === 'active' ? (
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-700 border-red-200">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Overdue
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="px-6 py-4">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  ),
})