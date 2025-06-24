import { getProducts } from "@/constants/products";
import { NextResponse } from "next/server";

export async function GET() {
  const products = getProducts();
  const baseUrl = "https://yourdomain.com";
  const today = new Date().toISOString().split("T")[0];

  // Static pages with their own priorities and changefreqs
  const staticPages = [
    { url: "/", priority: 1.0, changefreq: "daily" },
    { url: "/products", priority: 0.9, changefreq: "weekly" },
    { url: "/about-us", priority: 0.7, changefreq: "monthly" },
    { url: "/solutions", priority: 0.7, changefreq: "monthly" },
  ];

  // Product pages
  const productUrls = products.map((product) => ({
    url: `/products/${product.id}`,
    priority: 0.8,
    changefreq: "monthly",
    lastmod: today,
  }));

  const urls = [
    ...staticPages.map((page) => ({
      ...page,
      lastmod: today,
    })),
    ...productUrls,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ url, lastmod, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
