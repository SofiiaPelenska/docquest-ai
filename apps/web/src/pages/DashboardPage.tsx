import { dashboardMock as mock } from "@/features/components/dashboardMock";
import { UploadOptimizeCard } from "@/features/components/UploadOptimizeCard";
import { OriginalOptimizedCard } from "@/features/components/OriginalOptimizedCard";
import { OptimizationSummaryCard } from "@/features/components/OptimizationSummaryCard";
import { ApiUsageCard } from "@/features/components/ApiUsageCard";
import { SeoTipsCard } from "@/features/components/SeoTipsCard";
import { OptimizationHistoryMiniCard } from "@/features/components/OptimizationHistoryMiniCard";

export function DashboardPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
      <div className="space-y-4">
        <UploadOptimizeCard />
        <OriginalOptimizedCard original={mock.original} optimized={mock.optimized} />
        <OptimizationSummaryCard summary={mock.summary} ml={mock.ml} tags={mock.seo.tags} />
      </div>

      <div className="space-y-4">
        <ApiUsageCard api={mock.api} />
        <SeoTipsCard seo={mock.seo} />
        <OptimizationHistoryMiniCard history={mock.history} />
      </div>
    </div>
  );
}
