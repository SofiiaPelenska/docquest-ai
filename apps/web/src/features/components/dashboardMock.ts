export const dashboardMock = {
  original: {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=60",
    size: "2.5 MB",
  },
  optimized: {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=35",
    size: "320 KB (WebP)",
  },
  api: { used: 832, percent: 42, limit: 22000 },
  seo: {
    alt: "A scenic mountain landscape",
    sizes: ["480w", "768w", "1200w"],
    tags: ["mountain", "trees", "sky"],
  },
  summary: { total: 58, reducedMb: 64.7, avg: 81, format: "WebP" },
  ml: [
    { label: "Nature", value: 78 },
    { label: "Sky", value: 54 },
    { label: "Beach", value: 31 },
    { label: "Architecture", value: 18 },
  ],
  history: [
    { label: "Import", count: 47 },
    { label: "JPEG", count: 47 },
    { label: "Cityscape", count: 82 },
  ],
};

export type DashboardMock = typeof dashboardMock;
