import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "/a/k28h802xyp/**",
            },
        ],
    },
};

export default nextConfig;
