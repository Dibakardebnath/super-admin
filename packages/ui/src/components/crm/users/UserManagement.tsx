import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { Badge } from "../../ui/Badge";
import { Users, MoreVertical, Ban, CheckCircle, XCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/DropdownMenu";

// ---------- STATIC DATA ----------
const users = [
  { id: "1", name: "John Doe", email: "john@example.com", status: "active", sso: true },
  { id: "2", name: "Jane Smith", email: "jane@example.com", status: "inactive", sso: false },
  { id: "3", name: "Adam Fox", email: "adam@example.com", status: "banned", sso: false },
];

const userOrgs = [
  { userId: "1", orgId: "101", role: "admin" },
  { userId: "2", orgId: "102", role: "member" },
];

const organizations = [
  { id: "101", name: "Acme Corp" },
  { id: "102", name: "Globex" },
];

// ---------- UI LOGIC ----------
const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-600 border-green-500/20",
  banned: "bg-red-500/10 text-red-600 border-red-500/20",
  inactive: "bg-gray-500/10 text-gray-600 border-gray-500/20",
};

const getOrganizationName = (userId: string): string => {
  const userOrg = userOrgs.find((uo) => uo.userId === userId);
  if (!userOrg) return "No Organization";

  const org = organizations.find((o) => o.id === userOrg.orgId);
  return org?.name || "Unknown Organization";
};

// ---------- COMPONENT ----------
export function UserManagement() {
  const displayUsers = users;

  return (
    <Card className="p-6 rounded-2xl border border-border shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary-subtle p-2.5">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">User Management</h3>
            <p className="text-sm text-muted-foreground">Manage users and organizations</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {displayUsers.length > 0 ? (
          displayUsers.map((user) => (
            <div
              key={user.id}
              className="p-4 rounded-xl border border-border bg-card transition-premium hover:border-primary hover:bg-primary-subtle/30"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium truncate">{user.name || user.email}</span>

                    {user.sso && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-primary-subtle border-primary/20 text-primary"
                      >
                        SSO
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {getOrganizationName(user.id)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Badge
                    variant="outline"
                    className={`text-xs ${statusColors[user.status || "active"]}`}
                  >
                    {user.status || "active"}
                  </Badge>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-lg ripple">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48 rounded-xl">
                      <DropdownMenuItem className="cursor-pointer rounded-lg">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Activate
                      </DropdownMenuItem>

                      <DropdownMenuItem className="cursor-pointer rounded-lg">
                        <XCircle className="h-4 w-4 mr-2" />
                        Deactivate
                      </DropdownMenuItem>

                      <DropdownMenuItem className="cursor-pointer text-destructive rounded-lg">
                        <Ban className="h-4 w-4 mr-2" />
                        Ban User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-muted-foreground">No users found</div>
        )}
      </div>
    </Card>
  );
}
