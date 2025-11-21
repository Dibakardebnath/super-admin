import { Card } from "../../ui/Card";
import { Button } from "../../ui/Button";
import { TrendingUp, FileText, BarChart3 } from "lucide-react";

const insights = [
  { title: "Q4 User Satisfaction Survey", responses: 342, completion: 85 },
  { title: "Product Feature Feedback", responses: 156, completion: 62 },
  { title: "Industry Trends Report", responses: 89, completion: 45 },
];

export function Insights() {
  return (
    <Card className="p-6 rounded-2xl border border-border shadow-premium">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary-subtle p-2.5">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Industry Insights</h3>
            <p className="text-sm text-muted-foreground">Surveys, feedback forms, and reports</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="rounded-xl ripple">
          <FileText className="h-4 w-4 mr-2" />
          New Survey
        </Button>
      </div>

      <div className="space-y-3">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-border bg-card transition-premium hover:border-primary hover:bg-primary-subtle/30"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex-1">
                <p className="font-medium mb-1">{insight.title}</p>
                <p className="text-sm text-muted-foreground">{insight.responses} responses</p>
              </div>
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Completion</span>
                <span className="font-medium">{insight.completion}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${insight.completion}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
