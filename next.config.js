/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ing-web-spotify-media.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'ingenieria-web-spotify-media.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig;
