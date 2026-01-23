import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";

const rows = [
  {
    id: "1",
    format: "WebP",
    quality: "80%",
    original: "2.5 MB",
    optimized: "360 KB",
    gain: "+53%",
    date: "May 23, 2023, 1:39 PM",
  },
  {
    id: "2",
    format: "WebP",
    quality: "80%",
    original: "1.4 MB",
    optimized: "218 KB",
    gain: "+82%",
    date: "May 22, 2023, 1:39 PM",
  },
  {
    id: "3",
    format: "PNG",
    quality: "80%",
    original: "3.1 MB",
    optimized: "128 KB",
    gain: "+92%",
    date: "May 22, 2023, 7:29 PM",
  },
  {
    id: "4",
    format: "WebP",
    quality: "95%",
    original: "1.4 MB",
    optimized: "215 KB",
    gain: "+82%",
    date: "May 22, 2023, 7:09 PM",
  },
  {
    id: "5",
    format: "PNG",
    quality: "80%",
    original: "2.1 MB",
    optimized: "376 KB",
    gain: "+81%",
    date: "May 28, 2023, 7:29 PM",
  },
];

export function HistoryPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">History</div>
        <Button variant="outline">Clear Filters</Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex-1 md:max-w-[420px]">
              <Input placeholder="Search..." />
            </div>

            <div className="flex flex-wrap gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All Formats" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Formats</SelectItem>
                  <SelectItem value="webp">WebP</SelectItem>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="jpg">JPG</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="date">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Sort: Date</SelectItem>
                  <SelectItem value="size">Sort: Size</SelectItem>
                  <SelectItem value="gain">Sort: Gain</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="80">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Quality" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="60">Quality: 60%+</SelectItem>
                  <SelectItem value="80">Quality: 80%+</SelectItem>
                  <SelectItem value="95">Quality: 95%+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="rounded-xl border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[42px]"></TableHead>
                  <TableHead className="w-[140px]">Image Preview</TableHead>
                  <TableHead>Format</TableHead>
                  <TableHead>Quality</TableHead>
                  <TableHead>Original Size</TableHead>
                  <TableHead>Optimized Size</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[56px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {rows.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>

                    <TableCell>
                      <div className="h-10 w-16 rounded-md border bg-muted/30 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&auto=format&fit=crop&q=60"
                          alt="preview"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge variant={r.format === "WebP" ? "secondary" : "outline"}>
                        {r.format}
                      </Badge>
                    </TableCell>

                    <TableCell className="font-medium">{r.quality}</TableCell>

                    <TableCell className="text-muted-foreground">{r.original}</TableCell>

                    <TableCell className="flex items-center gap-2">
                      <span className="text-muted-foreground">{r.optimized}</span>
                      <span className="text-emerald-600 text-xs">{r.gain}</span>
                    </TableCell>

                    <TableCell className="text-muted-foreground">{r.date}</TableCell>

                    <TableCell>
                      <Button size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between pt-3">
            <Button variant="outline" size="sm">
              Delete Selected
            </Button>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                {"<"}
              </Button>
              <Button variant="outline" size="sm">
                {">"}
              </Button>

              <div className="flex items-center gap-1">
                <Button variant="secondary" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Last
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
