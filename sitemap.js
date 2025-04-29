const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  //   { url: "/events", changefreq: "weekly", priority: 0.8 },
  //   { url: "/contact", changefreq: "monthly", priority: 0.7 },
];

const stream = new SitemapStream({
  hostname: "https://tastefultrends.netlify.app",
});

streamToPromise(stream).then((data) =>
  fs.writeFileSync("./public/sitemap.xml", data.toString())
);

links.forEach((link) => stream.write(link));
stream.end();
