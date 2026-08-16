import type { MetadataRoute } from "next";

const siteUrl = "https://tesapparels.com";

const pages = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly" as const,
  },

  // Core manufacturing pages
  {
    path: "/t-shirt-manufacturer",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/t-shirt-manufacturer-bangalore",
    priority: 0.95,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/apparel-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/clothing-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/garment-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/custom-clothing-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/custom-t-shirt-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },

  // Corporate apparel
  {
    path: "/corporate-t-shirt-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/company-t-shirt-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/corporate-polo-t-shirt-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/corporate-polo-t-shirts",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/corporate-uniform-manufacturer",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/corporate-uniform-suppliers-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/corporate-workwear-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },

  // Sportswear
  {
    path: "/sportswear-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/sports-t-shirt-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/sports-t-shirts",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/sports-jersey-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/dri-fit-t-shirt-manufacturers-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/dri-fit-t-shirts",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },

  // Polo
  {
    path: "/polo-t-shirt-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },

  // Formal shirts
  {
    path: "/formal-shirt-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },

  // School / institutional uniforms
  {
    path: "/school-uniform-manufacturer",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/school-uniform-manufacturer-bangalore",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/college-uniform-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/uniform-t-shirt-manufacturers-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/industrial-uniform-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },

  // Events and promotional apparel
  {
    path: "/promotional-t-shirt-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/event-t-shirt-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/event-management-t-shirt-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/event-management-company-t-shirt-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/corporate-event-t-shirt-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/marathon-t-shirt-manufacturer-bangalore",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },

  // Printing and embroidery
  {
    path: "/t-shirt-printing",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/t-shirt-embroidery",
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },

  // Blog
  {
    path: "/blog",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}