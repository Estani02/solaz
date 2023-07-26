/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['lirp.cdn-website.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
      {
        protocol: 'https',
        hostname: 'www.styku.com',
      },
      {
        protocol: 'https',
        hostname: 'architect.bjc.es',
      },
      {
        protocol: 'https',
        hostname: 'blogs.funiber.org',
      },
    ],
  },
}

module.exports = nextConfig
