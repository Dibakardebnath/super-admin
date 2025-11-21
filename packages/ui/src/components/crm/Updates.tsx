import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Megaphone, Send, Bell } from "lucide-react";

const recentUpdates = [
  { type: "blog", title: "New AI Features Released", date: "2024-01-15", status: "published" },
  { type: "product", title: "Dashboard Redesign v2.0", date: "2024-01-14", status: "published" },
  { type: "alert", title: "Scheduled Maintenance", date: "2024-01-13", status: "draft" },
];

export function Updates() {
  const typeColors: Record<string, string> = {
    blog: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    product: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    alert: "bg-orange-500/10 text-orange-600 border-orange-500/20"
  };

  return (
    <Card className="p-6 rounded-2xl border border-border shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary-subtle p-2.5">
            <Megaphone className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Updates & Announcements</h3>
            <p className="text-sm text-muted-foreground">Manage blogs, product updates, and alerts</p>
          </div>
        </div>
        <Button className="rounded-xl ripple bg-primary hover:bg-primary-glow">
          <Send className="h-4 w-4 mr-2" />
          New Update
        </Button>
      </div>

      <div className="space-y-3">
        {recentUpdates.map((update, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-border bg-card transition-premium hover:border-primary hover:bg-primary-subtle/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={`text-xs ${typeColors[update.type]}`}>
                    {update.type}
                  </Badge>
                  {update.status === "published" && (
                    <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                      Published
                    </Badge>
                  )}
                </div>
                <p className="font-medium mb-1">{update.title}</p>
                <p className="text-xs text-muted-foreground">{update.date}</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-xl ripple">
                  <Bell className="h-4 w-4 mr-2" />
                  Notify
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
