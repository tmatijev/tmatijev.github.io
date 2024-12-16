/** @type {import('@remix-run/dev').AppConfig} */
const config = {
  serverEnvironmentVariables: ["FORMSPREE_KEY", "RECAPTCHA_SITE_KEY"],
  browserEnvironmentVariables: ["RECAPTCHA_SITE_KEY"]
};

export default config; 