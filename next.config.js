/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/06_Site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/06_Site/' : '',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './app/image-loader.ts',
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