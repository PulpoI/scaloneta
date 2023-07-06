/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "https://scaloneta.pulpol.com.ar/wp-json/acf/v3",
  },
};

module.exports = nextConfig;
