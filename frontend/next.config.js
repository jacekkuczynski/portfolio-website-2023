/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.HOST_NAME,
        port: "",
        pathname: "**",
      },
    ],
  },
  // images: {
  //   domains: ["localhost",],
  // },
};

module.exports = nextConfig;
