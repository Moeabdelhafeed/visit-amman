import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  

  css: ['~/assets/css/main.css'],

  devServer: {
    host: '0.0.0.0',
    port: 3000 // optional, default is 3000
  },

  modules: ['@vueuse/nuxt', 'nuxt-swiper', 'v-gsap-nuxt', '@vueuse/motion/nuxt'],
})