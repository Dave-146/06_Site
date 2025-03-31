/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/corlican_pet_motel_typescript' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/corlican_pet_motel_typescript' : '',
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  distDir: '.next'
}

module.exports = nextConfig 