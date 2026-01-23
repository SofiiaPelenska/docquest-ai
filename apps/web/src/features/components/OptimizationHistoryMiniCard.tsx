import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  history: Array<{ label: string; count: number }>;
};

export function OptimizationHistoryMiniCard({ history }: Props) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Optimization History</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {history.map((h) => (
          <div key={h.label} className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">{h.label}</span>
            <span className="font-medium">{h.count}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
