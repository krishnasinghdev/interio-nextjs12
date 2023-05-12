/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}'
    }
  },
  env: {
    API_URL: 'https://api.evenbeam.com',
  }, images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', 
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '', 
      },
    ],
  },
}

module.exports = nextConfig
