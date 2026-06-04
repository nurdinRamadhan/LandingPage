import type { MetadataRoute } from "next";

import { seoRouteSlugs } from "@/lib/seo-pages";
import { getSiteUrl } from "@/lib/site";

const routes = [
  { path: "/", priority: 1 },
  { path: "/admin-panel", priority: 0.9 },
  { path: "/android", priority: 0.9 },
  { path: "/dompet-santri", priority: 0.85 },
  { path: "/keamanan-sistem", priority: 0.8 },
  { path: "/workflow-pengguna", priority: 0.8 },
  ...seoRouteSlugs.map((slug) => ({
    path: `/${slug}`,
    priority: slug === "jasa-pembuatan-aplikasi-pesantren" ? 0.95 : 0.9,
  })),
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
