/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  // For deployment
  output: 'export',
  assetPrefix: '.',
  distDir: 'out',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  // For deployment
  output: 'export',
  assetPrefix: '.',
  distDir: 'out',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
