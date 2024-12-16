export const config = {
  formspreeKey: import.meta.env.VITE_FORMSPREE_KEY,
  recaptchaKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
} as const;

// Add error handling
if (!import.meta.env.VITE_FORMSPREE_KEY) {
  console.error('Missing VITE_FORMSPREE_KEY environment variable');
}

if (!import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
  console.error('Missing VITE_RECAPTCHA_SITE_KEY environment variable');
} 