import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, Zap } from "lucide-react";

type Props = {
  onBrowse?: () => void;
  onOptimize?: () => void;
};

export function UploadOptimizeCard({ onBrowse, onOptimize }: Props) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Upload an Image to Optimize</CardTitle>
      </CardHeader>

      <CardContent className="flex items-center gap-3">
        <div className="flex-1 border border-dashed rounded-xl p-6 text-center bg-muted/20">
          <div className="mx-auto h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
            <ImageIcon className="h-5 w-5 text-primary" />
          </div>
          <div className="text-sm font-medium">Drop image here</div>
          <div className="text-xs text-muted-foreground">or browse from your computer</div>
        </div>

        <Button variant="outline" onClick={onBrowse}>
          Browse Image
        </Button>

        <Button className="gap-2" onClick={onOptimize}>
          <Zap className="h-4 w-4" />
          Optimize
        </Button>
      </CardContent>
    </Card>
  );
}
