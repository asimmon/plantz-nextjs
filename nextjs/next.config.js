/** @type {import("next").NextConfig} */

module.exports = {
    compress: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    poweredByHeader: false,

    async redirects() {
        return [
            {
                destination: "/today",
                permanent: true,
                source: "/",
            },
        ];
    },
};
