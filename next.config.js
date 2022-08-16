/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ["en"],
        defaultLocale: "en"
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.(js|ts)x?$/,
            use: ["@svgr/webpack"]
        });

        return config;
    }
};
