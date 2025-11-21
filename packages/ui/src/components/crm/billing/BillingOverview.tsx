import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { CreditCard, TrendingUp, AlertCircle } from "lucide-react";

const mockBilling = [
  { org: "TechCorp Inc", plan: "Enterprise", mrr: "$2,499", status: "active", change: "+12%" },
  { org: "StartupHub", plan: "Pro", mrr: "$499", status: "active", change: "+5%" },
  { org: "DesignCo", plan: "Basic", mrr: "$99", status: "overdue", change: "-2%" },
];

export function BillingOverview() {
  return (
    <Card className="p-6 rounded-2xl border border-border shadow-premium">
      <div className="flex items-center gap-3 mb-6">
        <div className="rounded-xl bg-primary-subtle p-2.5">
          <CreditCard className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Billing Overview</h3>
          <p className="text-sm text-muted-foreground">Revenue and subscription management</p>
        </div>
      </div>

      <div className="space-y-3">
        {mockBilling.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-border bg-card transition-premium hover:border-primary hover:bg-primary-subtle/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{item.org}</span>
                  <Badge variant="outline" className="text-xs">
                    {item.plan}
                  </Badge>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm text-muted-foreground">MRR</span>
                  <span className="text-lg font-semibold">{item.mrr}</span>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    {item.change}
                  </div>
                </div>
              </div>
              
              <div>
                {item.status === "active" ? (
                  <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-500/20">
                    Active
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-500/20">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Overdue
                  </Badge>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
