import { useMemo, useState } from "react";
import { AppShell, type NavKey } from "./AppShell";
import { DashboardPage } from "@/pages/DashboardPage";
import { HistoryPage } from "@/pages/HistoryPage";

export default function App() {
  const [active, setActive] = useState<NavKey>("Dashboard");

  const content = useMemo(() => {
    switch (active) {
      case "History":
        return <HistoryPage />;
      case "Dashboard":
      default:
        return <DashboardPage />;
    }
  }, [active]);

  return (
    <AppShell active={active} onNavigate={setActive} title="Image Optimization & Analysis">
      {content}
    </AppShell>
  );
}
