import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.presentations.gov.in",
      },
      {
        protocol: "https",
        hostname: "pixabay.com",
      },
      {
        protocol:"https",
        hostname:"res.cloudinary.com"
      }
    ],
  },
};

export default nextConfig;
