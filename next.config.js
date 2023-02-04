/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    'react-icons': {
      transform:'react-icons/{{member}}'
    }
  }
}

module.exports = nextConfig
