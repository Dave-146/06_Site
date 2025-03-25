/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/06_Site' : '',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/06_Site/' : '',
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 