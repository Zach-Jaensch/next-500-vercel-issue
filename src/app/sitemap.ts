import type { MetadataRoute } from "next";

export default function generateSiteMap(): MetadataRoute.Sitemap {
  return [
    {
      url: "/",
    },
    {
      url: "/throws",
    },
  ];
}
