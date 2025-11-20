import { Sidebar } from "@crm/ui";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
// import { AppSidebar } from '../components/AppSidebar'

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen w-full bg-gray-50 text-gray-900 font-sans antialiased">
        {/* Import Left Sidebar */}
        <Sidebar />

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Top Header */}
          <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="text-sm text-gray-500 hover:text-gray-900">
                Notifications
              </button>
              <button className="text-sm text-gray-500 hover:text-gray-900">
                Help
              </button>
            </div>
          </header>

          {/* Scrollable Outlet Content */}
          <main className="flex-1 overflow-auto bg-gray-50 p-8">
            <Suspense
              fallback={
                <div className="flex h-full items-center justify-center text-gray-400">
                  Loading content...
                </div>
              }
            >
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>

      {/* DevTools */}
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </QueryClientProvider>
  );
}
