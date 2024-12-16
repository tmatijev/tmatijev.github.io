import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  base: '/tmatijev-github-pages/',
  plugins: [remix()]
});