// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"], // Aqui van los Modulos de Nuxt
  ssr : false // Server Side Rendering (No va a ser usado en el proyecto)
})

// Para instalar Tailwind CSS con Nuxt JS: "npm install --save-dev @nuxtjs/tailwindcss"
// Descargar VueDraggable - Nanoid - VueUse : "npm i vuedraggable@next nanoid @vueuse/nuxt"
// No hace falta colocar como modulo a VueDraggable - Nanoid porque seran colocados directamente en el codigo.