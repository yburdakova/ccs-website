import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return ["", "/digitization", "/software", "/ai-automation", "/about"].map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : .8,
  }));
}
