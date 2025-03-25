/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/06_Site',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  assetPrefix: '/06_Site/',
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 