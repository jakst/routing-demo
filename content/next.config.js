/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/app/:path*',
        destination: 'http://localhost:4321/app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
