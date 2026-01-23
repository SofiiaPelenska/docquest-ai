import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type Props = {
  api: { used: number; percent: number; limit: number };
};

export function ApiUsageCard({ api }: Props) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">API Usage</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-semibold">{api.used}</div>
            <div className="text-xs text-muted-foreground">Queries this month</div>
          </div>
          <Badge variant="secondary">{api.percent}%</Badge>
        </div>

        <Progress value={api.percent} />

        <div className="text-xs text-muted-foreground">up to {api.limit.toLocaleString()}</div>

        <Separator />

        <div className="space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">REST</span>
            <span className="font-medium">/api/optimize</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">GraphQL</span>
            <span className="font-medium">/graphql</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
