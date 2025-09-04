export async function GET() {
  const baseUrl = "https://yourdomain.com";

  // Example static pages
  const pages = ["", "/about", "/contact"];

  // Example dynamic slugs (replace with real fetch)
  const blogPosts = [{ slug: "post-1" }, { slug: "post-2" }];
  
  const allUrls = [
    ...pages.map((page) => `${baseUrl}${page}`),
    ...blogPosts.map((post) => `${baseUrl}/blog/${post.slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls.map((url) => `<url><loc>${url}</loc></url>`).join("")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
