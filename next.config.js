/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/06_Site' : '',
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/06_Site/' : '',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 