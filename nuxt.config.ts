export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ["js", "ts", "vue", "bash", "json", "css", "html", "c", "cpp"],
        },
      },
    },
  },
  app: {
    head: {
      link : [
        {rel: 'icon', 'type': 'image/png', href: '/Logo/t.png'}
      ]
    }
  }
});
