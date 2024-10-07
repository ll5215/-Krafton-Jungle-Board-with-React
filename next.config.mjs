/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: {
      allowedForwardedHosts: ["localhost:3000", "localhost"],
      allowedOrigins: ["http://localhost:3000", "localhost:3000", "localhost"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-blob-store.public.blob.vercel-storage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "5f3qkczco9x1vkmh.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
