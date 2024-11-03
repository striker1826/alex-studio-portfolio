/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_URL: process.env.SITE_URL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    DB_TYPE: process.env.DB_TYPE,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
  },
  webpack: (config) => {
    config.resolve.alias["react-native-sqlite-storage"] = false;
    config.resolve.alias["@sap/hana-client"] = false;

    return config;
  },
  optimization: {
    minimize: false,
  },
};

export default nextConfig;
