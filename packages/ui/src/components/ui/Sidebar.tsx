import { Link } from "@tanstack/react-router"
import { useState } from "react"
import { Home, Users, FileText, Settings, ChevronDown, ChevronRight, LayoutDashboard, BarChart3, Images, UserCog, ScrollText, CreditCard, LifeBuoy, LineChart } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  title: string
  href?: string
  icon: any
  children?: NavItem[]
}

const navigationData: NavItem[] = [
  // {
  //   title: "Dashboard",
  //   href: "/",
  //   icon: Home,
  // },
  {
    title: "CRM",
    icon: Users,
    children: [
      { title: "Overview", href: "/crm", icon: LayoutDashboard },
      { title: "Billing", href: "/crm/billing", icon: CreditCard },
      { title: "Support", href: "/crm/support", icon: LifeBuoy },
      { title: "Insights", href: "/crm/insights", icon: LineChart },
    ],
  },
  {
    title: "CMS",
    icon: FileText,
    children: [
      { title: "Overview", href: "/cms", icon: LayoutDashboard },
      { title: "Analytics", href: "/cms/analytics", icon: BarChart3 },
      { title: "Media", href: "/cms/media", icon: Images },
    ],
  },
  {
    title: "Admin",
    icon: Settings,
    children: [
      { title: "Overview", href: "/admin", icon: LayoutDashboard },
      { title: "Users", href: "/admin/users", icon: UserCog },
      { title: "Settings", href: "/admin/settings", icon: Settings },
      { title: "Logs", href: "/admin/logs", icon: ScrollText },
    ],
  },
]

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggleExpanded = (title: string) => {
    setExpanded(prev => ({ ...prev, [title]: !prev[title] }))
  }

  const renderItem = (item: NavItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expanded[item.title]

    if (hasChildren) {
      return (
        <div key={item.title}>
          <button
            onClick={() => toggleExpanded(item.title)}
            className={cn(
              "w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
              level === 0 ? "font-semibold" : "font-normal"
            )}
          >
            <item.icon className="h-4 w-4" />
            <span className="flex-1">{item.title}</span>
            {isExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          {isExpanded && (
            <div className="ml-4 space-y-1">
              {item?.children?.map((child) => (
                <div key={child.title}>
                  {renderItem(child, level + 1)}
                </div>
              ))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.title}
        to={item.href || "#"}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
          level === 0 ? "font-semibold" : "font-normal"
        )}
      >
        <item.icon className="h-4 w-4" />
        <span>{item.title}</span>
      </Link>
    )
  }

  return (
    <aside className={cn("flex h-full w-64 flex-col bg-white border-r border-gray-200", className)}>
      {/* Logo/Header */}
      <div className="flex h-16 items-center border-b border-gray-200 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
            <span className="text-sm font-bold text-white">S</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">SuperAdmin</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-auto p-4">
        <div className="space-y-2">
          {navigationData.map((item) => (
            <div key={item.title}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <div className="text-sm text-gray-600">
          Version 1.0.0
        </div>
      </div>
    </aside>
  )
}