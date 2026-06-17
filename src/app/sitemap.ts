import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/technology", "/about", "/contact", "/impressum", "/privacy"];
  // Static build date; avoids non-deterministic Date() during prerender.
  const lastModified = "2026-06-17";
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
