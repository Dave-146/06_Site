/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/06_Site' : '',
  images: {
    unoptimized: true,
    remotePatterns: [],
    path: process.env.NODE_ENV === 'production' ? '/06_Site/_next/image' : '/_next/image',
    loader: 'custom',
    loaderFile: './app/image-loader.ts',
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/06_Site/' : '',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 