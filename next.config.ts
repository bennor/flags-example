import type { NextConfig } from "next";

const withVercelToolbar = require("@vercel/toolbar/plugins/next")();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withVercelToolbar(nextConfig);
