/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ing-web-spotify-media.s3.amazonaws.com',
    ],
    
  },
}

module.exports = nextConfig
