/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.dota2.com.cn',
        port: '',
        pathname: '/dota2static/**',
      },
    ],
  },
};

module.exports = nextConfig;
