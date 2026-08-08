import type { MetadataRoute } from "next";

const baseUrl = "https://tesapparels.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/t-shirt-manufacturer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },

    {
      url: `${baseUrl}/t-shirt-manufacturer-bangalore`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/corporate-polo-t-shirts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/corporate-uniform-manufacturer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/dri-fit-t-shirts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/sports-t-shirts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/t-shirt-printing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/t-shirt-embroidery`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/school-uniform-manufacturer`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}