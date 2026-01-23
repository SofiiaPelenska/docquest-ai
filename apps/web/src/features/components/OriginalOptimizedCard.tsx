import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  original: { src: string; size: string };
  optimized: { src: string; size: string };
};

export function OriginalOptimizedCard({ original, optimized }: Props) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Original</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-xl border bg-background overflow-hidden">
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground">Original</div>
            <img
              src={original.src}
              alt="Original"
              className="h-[170px] w-full object-cover"
              loading="lazy"
            />
            <div className="px-3 py-2 text-xs text-muted-foreground">{original.size}</div>
          </div>

          <div className="rounded-xl border bg-background overflow-hidden">
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center justify-between">
              <span>Optimized</span>
              <Badge variant="secondary">WebP</Badge>
            </div>
            <img
              src={optimized.src}
              alt="Optimized"
              className="h-[170px] w-full object-cover"
              loading="lazy"
            />
            <div className="px-3 py-2 text-xs text-muted-foreground">{optimized.size}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
