import { BillingOverview, Insights, StatsCard, SupportMessages, Updates,Users, UserManagement, MessageSquare, CreditCard, TrendingUp } from "@crm/ui";
import { createFileRoute } from "@tanstack/react-router";
// import { CreditCard, MessageSquare, TrendingUp, Users } from "lucide-react";

export const Route = createFileRoute("/crm/")({
  component: () => (
    <div className="p-6 space-y-6 animate-fade-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Total Users"
                value="12,459"
                change="+18.2% from last month"
                icon={Users}
                trend="up"
              />
              <StatsCard
                title="Active Support Tickets"
                value="34"
                change="-5.1% from last week"
                icon={MessageSquare}
                trend="down"
              />
              <StatsCard
                title="Monthly Revenue"
                value="$94,230"
                change="+23.5% from last month"
                icon={CreditCard}
                trend="up"
              />
              <StatsCard
                title="Growth Rate"
                value="32%"
                change="Steady increase"
                icon={TrendingUp}
                trend="neutral"
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <SupportMessages />
              <UserManagement />
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <BillingOverview />
              <Updates />
            </div>

            <Insights />
          </div>
  ),
});
