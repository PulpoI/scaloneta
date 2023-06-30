/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://scaloneta.pulpol.com.ar/wp-json/wp/v2",
  },
};

module.exports = nextConfig;
