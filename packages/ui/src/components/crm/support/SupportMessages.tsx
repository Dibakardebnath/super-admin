import { Card } from "../../ui/Card";
import { Badge } from "../../ui/Badge";
import { Button } from "../../ui/Button";
import { MessageSquare, Clock } from "lucide-react";

const mockMessages = [
  {
    id: 1,
    user: "Sarah Chen",
    org: "TechCorp Inc",
    subject: "Integration Issue",
    priority: "high",
    time: "5m ago",
    unread: true
  },
  {
    id: 2,
    user: "Michael Ross",
    org: "StartupHub",
    subject: "Billing Question",
    priority: "medium",
    time: "1h ago",
    unread: true
  },
  {
    id: 3,
    user: "Emma Wilson",
    org: "DesignCo",
    subject: "Feature Request",
    priority: "low",
    time: "3h ago",
    unread: false
  },
];

export function SupportMessages() {
  const priorityColors: Record<string, string> = {
    high: "bg-red-500/10 text-red-600 border-red-500/20",
    medium: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    low: "bg-blue-500/10 text-blue-600 border-blue-500/20"
  };

  return (
    <Card className="p-6 rounded-2xl border border-border shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary-subtle p-2.5">
            <MessageSquare className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support Messages</h3>
            <p className="text-sm text-muted-foreground">Recent grievances and inquiries</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="rounded-xl ripple">
          View All
        </Button>
      </div>

      <div className="space-y-3">
        {mockMessages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-xl border transition-premium cursor-pointer hover:border-primary hover:bg-primary-subtle/30 ${
              message.unread ? "bg-primary-subtle/50 border-primary/20" : "bg-muted/30 border-border"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium truncate">{message.user}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground truncate">{message.org}</span>
                </div>
                <p className="text-sm text-foreground mb-2">{message.subject}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`text-xs ${priorityColors[message.priority]}`}>
                    {message.priority}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {message.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
