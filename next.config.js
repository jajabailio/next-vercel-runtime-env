/** @type {import('next').NextConfig} */
const { makeEnvPublic } = require("next-runtime-env");

makeEnvPublic("NEXT_PUBLIC_BASE_URL");

const nextConfig = {};

module.exports = nextConfig;
