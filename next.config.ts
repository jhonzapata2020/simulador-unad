import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repoName = "";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY || "";
  repoName = repo.split("/")[1] || "";
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName ? `/${repoName}` : "",
  assetPrefix: repoName ? `/${repoName}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
