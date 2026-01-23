import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tags, ArrowRight } from "lucide-react";

type Props = {
  summary: { total: number; reducedMb: number; avg: number; format: string };
  ml: Array<{ label: string; value: number }>;
  tags: string[];
};

export function OptimizationSummaryCard({ summary, ml, tags }: Props) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Optimization Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Stat label="Total Optimized Images" value={`${summary.total}`} />
          <Stat label="Total Size Reduced" value={`${summary.reducedMb} MB`} />
          <Stat label="Avg. Reduction" value={`${summary.avg}%`} />
          <Stat label="Most Used Format" value={summary.format} />
        </div>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="text-sm font-medium">ML Analysis</div>
            {ml.map((row) => (
              <div key={row.label} className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{row.label}</span>
                  <span>{row.value}%</span>
                </div>
                <Progress value={row.value} />
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-sm font-medium">Targeted Usage</div>

            <div className="rounded-xl border p-3 space-y-2 bg-muted/10">
              <Row label="Trees" left="47" right="+42%" />
              <Row label="Sky" left="87%" right="+82%" />
              <Row label="Beach" left="21%" right="+89%" />
              <Row label="Architecture" left="15%" right="+82%" />
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Tags className="h-4 w-4" />
              Top tags: <span className="text-foreground font-medium">{tags.join(", ")}</span>
              <ArrowRight className="h-3 w-3 opacity-60" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border p-3 bg-muted/10">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function Row({ label, left, right }: { label: string; left: string; right: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="flex items-center gap-3">
        <span className="font-medium">{left}</span>
        <span className="text-emerald-600 text-xs">{right}</span>
      </span>
    </div>
  );
}
