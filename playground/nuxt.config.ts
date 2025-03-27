export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-12-25',
  app: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'title',
          content: 'Nuxt Glow - Add a mouse-tracing glow effect to Nuxt components',
        },
        {
          name: 'description',
          content: 'Add a mouse-tracing glow effect to Nuxt components using the nuxt-glow module',
        },
        {
          name: 'keywords',
          content: 'Nuxt.js, Vue.js, Tailwind CSS, Glow UI, Glow Effect, Glow Animation, Glow Component, Glow Module, Glow Plugin, Glow Effect, Glow Animation, Glow Component, Glow Module, Glow Plugin',
        },
        {
          name: 'author',
          content: 'Akshara Hegde',
        },
      ],
    },
  },
})
