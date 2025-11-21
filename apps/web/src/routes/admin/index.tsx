import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@crm/ui'
import { dashboardApi, usersApi } from '@crm/api/api'
import { useQuery } from '@tanstack/react-query'
import { Users, Database, Server, HardDrive } from 'lucide-react'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: dashboardApi.getStats,
  })

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: usersApi.getAll,
  })

  const statsCards = [
    {
      title: 'Total Users',
      value: stats?.data?.totalUsers || 0,
      icon: Users,
      loading: statsLoading,
    },
    {
      title: 'Total Organizations',
      value: stats?.data?.totalOrganizations || 0,
      icon: Database,
      loading: statsLoading,
    },
    {
      title: 'System Health',
      value: '98%',
      icon: Server,
      loading: false,
      special: true,
    },
    {
      title: 'Storage Used',
      value: '23.5 GB',
      icon: HardDrive,
      loading: false,
    },
  ]

  const systemStatus = [
    { service: 'Database', status: 'Online', color: 'text-green-600' },
    { service: 'API Server', status: 'Online', color: 'text-green-600' },
    { service: 'File Storage', status: 'Online', color: 'text-green-600' },
    { service: 'Email Service', status: 'Warning', color: 'text-yellow-600' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {statsCards.map((card, i) => {
          const Icon = card.icon
          return (
            <Card key={i} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className={`text-2xl font-bold ${card.special ? 'text-green-600' : ''}`}>
                {card.loading ? '...' : card.value}
              </p>
            </Card>
          )
        })}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
          <div className="space-y-3">
            {usersLoading ? (
              <div className="p-4 text-center text-muted-foreground">Loading users...</div>
            ) : users?.data && users.data.length > 0 ? (
              users.data.slice(0, 3).map((user: any, i: number) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">{user.name || user.email}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Active
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-muted-foreground">No users found</div>
            )}
          </div>
        </Card>
        
        <Card>
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-3">
            {systemStatus.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <p className="font-medium">{item.service}</p>
                <p className={`text-sm font-medium ${item.color}`}>{item.status}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}