import type { ReactNode, ElementType } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import {
  LayoutDashboard,
  UploadCloud,
  Brain,
  Wand2,
  History,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

export type NavKey = "Dashboard" | "Upload Image" | "ML Analysis" | "Optimization" | "History";

type OnNavigate = (k: NavKey) => void;

type Props = {
  children: ReactNode;
  active: NavKey;
  onNavigate: OnNavigate;
  title: string;
};

const nav: Array<{ id: NavKey; icon: ElementType }> = [
  { id: "Dashboard", icon: LayoutDashboard },
  { id: "Upload Image", icon: UploadCloud },
  { id: "ML Analysis", icon: Brain },
  { id: "Optimization", icon: Wand2 },
  { id: "History", icon: History },
];

export function AppShell({
  children,
  active,
  onNavigate,
  title = "Image Optimization & Analysis",
}: Props) {
  return (
    <div className="min-h-screen bg-muted/30 text-foreground">
      <div className="w-full p-4">
        <div className="w-full rounded-2xl border bg-background shadow-sm overflow-hidden min-h-[calc(100vh-32px)]">
          <header className="h-14 px-4 flex items-center gap-3 border-b bg-background">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <UploadCloud className="h-5 w-5 text-primary" />
              </div>
              <div className="font-semibold">{title}</div>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <div className="hidden md:block w-[420px]">
                <Input placeholder="Search..." />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Actions
                    <ChevronDown className="h-4 w-4 opacity-60" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>New optimization</DropdownMenuItem>
                  <DropdownMenuItem>Export report</DropdownMenuItem>
                  <DropdownMenuItem>API keys</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Avatar className="h-9 w-9">
                <AvatarImage src="" alt="User avatar" />
                <AvatarFallback>VF</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="grid grid-cols-[240px_1fr]">
            <aside className="border-r bg-background">
              <div className="p-3">
                <nav className="space-y-1">
                  {nav.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;

                    return (
                      <button
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className={cn(
                          "w-full flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition",
                          isActive
                            ? "bg-muted text-foreground font-medium"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        {item.id}
                      </button>
                    );
                  })}
                </nav>

                <Separator className="my-3" />

                <div className="text-xs text-muted-foreground px-3">
                  Tip: використовуй WebP + <code>loading="lazy"</code> + <code>srcset</code>.
                </div>
              </div>
            </aside>

            <main className="min-w-0 bg-muted/20">
              <div className="p-4">{children}</div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
