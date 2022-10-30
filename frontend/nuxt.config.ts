// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  // Needed for Headless UI
  build: { transpile: ["@headlessui/vue"] },
});
