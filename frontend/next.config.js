/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "res.cloudinary.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  swcMinify: true,
  env: {
    REACT_APP_SECRET_KEY: process.env.REACT_APP_SECRET_KEY,
    REACT_APP_SITE_KEY: process.env.REACT_APP_SITE_KEY,
    V_TWO_SITE_KEY: process.env.V_TWO_SITE_KEY,
    V_TWO_SECRET_KEY: process.env.V_TWO_SECRET_KEY,
  },
};

module.exports = nextConfig;
