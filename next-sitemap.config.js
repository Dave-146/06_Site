/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://corlicanpetmotel.ie',
  generateRobotsTxt: false, // We already have a custom robots.txt
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/500'],
} 