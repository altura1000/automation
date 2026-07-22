/** @type {import('next').NextConfig} */

const repoName = 'automation'
// const isProduction = process.env.NODE_ENV === 'production'

const isProduction = true;

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig