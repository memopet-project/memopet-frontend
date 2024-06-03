/** @type {import('next').NextConfig} */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

module.exports = {
  crossOrigin: 'use-credentials',
  async redirects() {
    return [
      // Redirect to API
      {
        source: '/api/:path*',
        destination: `${API_URL}/:path*`,
        permanent: true,
      },
    ]
  },
  images: {
  },
  webpack: (config) => {

    return config
  },
}
