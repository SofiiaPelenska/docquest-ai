import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [status, setStatus] = useState("...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch(() => setStatus("error"));
  }, []);

  console.log("API response received");

  console.log("jfk");
  console.log("jfk");

  return (
    <div className="min-h-screen p-8 space-y-4">
      <div className="text-2xl font-semibold">DocQuest AI </div>
      <div className="text-sm text-muted-foreground">API status: {status}</div>
      <Button>Run OCR</Button>
    </div>
  );
}
