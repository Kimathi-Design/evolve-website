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
  // GitHub Pages deployment (comment out for Netlify)
  // basePath: '/evolve-website',
  // assetPrefix: '/evolve-website/',
}

module.exports = nextConfig
