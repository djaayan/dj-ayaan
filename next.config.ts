import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "/a/wgl22isy86/**",
            },
        ],
    },
};

export default nextConfig;
