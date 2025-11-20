import * as React from 'react'
import { Link } from '@tanstack/react-router'

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('Sidebar updated!');
  });
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  
  return (
    <div className={cn("w-64 bg-white border-r border-gray-200 flex flex-col h-full", className)}>
      <div className="p-6 h-16 flex items-center border-b border-gray-100">
        <div className="h-8 w-8 bg-blue-600 rounded-lg mr-3"></div>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">Super Admin</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">
        
        {/* CRM SECTION */}
        <div>
          <div className="px-4 mb-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              CRM App
            </h3>
          </div>
          <div className="space-y-1">
            <SidebarLink to="/crm" label="Dashboard" exact />
            <SidebarLink to="/crm/overview" label="Overview" />
            <SidebarLink to="/crm/insights" label="Insights" />
            <SidebarLink to="/crm/billing" label="Billing" />
            <SidebarLink to="/crm/support" label="Support" />
          </div>
        </div>

        {/* CMS SECTION */}
        <div>
          <div className="px-4 mb-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              CMS App
            </h3>
          </div>
          <div className="space-y-1">
            <SidebarLink to="/cms" label="Dashboard" exact />
            <SidebarLink to="/cms/overview" label="Overview" />
            <SidebarLink to="/cms/media" label="Media Library" />
            <SidebarLink to="/cms/analytics" label="Analytics" />
          </div>
        </div>

        {/* ADMIN SECTION */}
        <div>
          <div className="px-4 mb-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Admin Console
            </h3>
          </div>
          <div className="space-y-1">
            <SidebarLink to="/admin" label="Dashboard" exact />
            <SidebarLink to="/admin/overview" label="Overview" />
            <SidebarLink to="/admin/users" label="User Management" />
            <SidebarLink to="/admin/logs" label="Audit Logs" />
            <SidebarLink to="/admin/settings" label="Settings" />
          </div>
        </div>

      </nav>
      
      {/* ACCOUNT / FOOTER */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="px-4 py-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Account
          </h3>
        </div>
        <div className="space-y-1">
          <SidebarLink to="/auth/login" label="Login" />
          <SidebarLink to="/auth/register" label="Register" />
        </div>
        
        <div className="mt-6 px-4 flex items-center gap-3">
           <div className="h-8 w-8 rounded-full bg-gray-300"></div>
           <div className="text-sm">
             <p className="font-medium text-gray-700">Admin User</p>
             <p className="text-xs text-gray-500">admin@repo.com</p>
           </div>
        </div>
      </div>
    </div>
  )
}

// Helper component to keep the code clean and consistent with your styling
const SidebarLink = ({ to, label, exact }: { to: string; label: string; exact?: boolean }) => (
  <Link
    to={to}
    activeOptions={{ exact }}
    className={cn(
      'block px-4 py-2 text-sm transition-colors rounded-md mx-1',
      'hover:bg-gray-100 hover:text-gray-900 text-gray-700'
    )}
    activeProps={{
      className: 'bg-blue-50 text-blue-700 font-medium'
    }}
  >
    {label}
  </Link>
)