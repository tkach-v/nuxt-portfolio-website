export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/eslint',
  ],
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  colorMode: {
    classSuffix: '',
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
})
