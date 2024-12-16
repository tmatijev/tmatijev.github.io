/** @type {import('@remix-run/dev').AppConfig} */
export default {
  // ... other config
  serverEnvironmentVariables: ["FORMSPREE_KEY", "RECAPTCHA_SITE_KEY"],
  browserEnvironmentVariables: ["RECAPTCHA_SITE_KEY"]
}; 