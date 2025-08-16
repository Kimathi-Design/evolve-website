/** @type {import('next').NextConfig} */
const nextConfig = {
  // For deployment
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
