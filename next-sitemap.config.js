/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://lawrence-sable.vercel.app/",
  generateRobotsTxt: true,
  async additionalPaths(config) {
    const blogs = [{ slug: "suit-essentials" }, { slug: "the-art-of-the-suit" }, { slug: "all-about-suits" }];

    const galleries = [
      { slug: "formal-bespoke" },
      { slug: "casual-bespoke" },
      { slug: "wedding-bespoke" },
      { slug: "women-bespoke" },
      { slug: "fabrics" },
    ];

    const blogPaths = blogs.map((post) => ({
      loc: `/journal-blog/${post.slug}`,
      lastmod: new Date().toISOString(),
    }));

    const galleriesPaths = galleries.map((cat) => ({
      loc: `/gallery/${cat.slug}`,
      lastmod: new Date().toISOString(),
    }));

    return [...blogPaths, ...galleriesPaths];
  },
};
