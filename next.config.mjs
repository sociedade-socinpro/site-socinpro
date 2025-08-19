/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // <- necessário pro deploy em EC2 com Nginx
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "socinpro-publico-dev.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
