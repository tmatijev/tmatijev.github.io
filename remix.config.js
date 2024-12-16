/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/tmatijev-github-pages/",
  exportBuildDirectory: "dist",
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_singleFetch: true,
    v3_throwAbortReason: true,
  },
  serverEnvironmentVariables: ["FORMSPREE_KEY", "RECAPTCHA_SITE_KEY"],
  browserEnvironmentVariables: ["RECAPTCHA_SITE_KEY"]
};

export default config; 