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
    API_URL: 'http://localhost:4000',
    BUCKET_SECRET_ACCESS_KEY: 'Ny0OD1F0IViNYNYDgWz+n5T1rL0XUixCGmz1uHub',
    BUCKET_ACCESS_KEY: 'AKIA2VTP633MZGQPDDHZ',
    BUCKET_REGION: 'ap-south -1',
    BUCKET_NAME: 'interio',
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
