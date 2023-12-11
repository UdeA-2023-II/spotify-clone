/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
