import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@crm/ui/Card'

export const Route = createFileRoute('/admin/')({
  component: () => (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Users</h3>
          <p className="text-2xl font-bold">456</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Active Today</h3>
          <p className="text-2xl font-bold">123</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">Storage Used</h3>
          <p className="text-2xl font-bold">23.5 GB</p>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-1">System Health</h3>
          <p className="text-2xl font-bold text-green-600">98%</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Recent Users</h2>
          <div className="space-y-3">
            {['Alice Johnson', 'Bob Smith', 'Carol White'].map((name, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground">{i === 0 ? 'Admin' : i === 1 ? 'Editor' : 'Viewer'}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  {i === 0 ? 'Active' : i === 1 ? 'Active' : 'Inactive'}
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card>
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="space-y-3">
            {[
              { service: 'Database', status: 'Online', color: 'text-green-600' },
              { service: 'API Server', status: 'Online', color: 'text-green-600' },
              { service: 'File Storage', status: 'Online', color: 'text-green-600' },
              { service: 'Email Service', status: 'Warning', color: 'text-yellow-600' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <p className="font-medium">{item.service}</p>
                <p className={`text-sm font-medium ${item.color}`}>{item.status}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  ),
})