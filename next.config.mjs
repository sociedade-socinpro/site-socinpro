/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "socinpro-publico-dev.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
