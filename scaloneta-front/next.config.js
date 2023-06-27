/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "scaloneta.pulpol.com.ar",
      },
    ],
  },
};
queueMicrotask;
module.exports = nextConfig;
