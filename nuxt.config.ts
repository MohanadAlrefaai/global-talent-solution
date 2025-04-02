// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css", 
    "@/assets/scss/style.scss"],

  nitro: {
    compressPublicAssets: true,
    prerender: {
      //crawlLinks: true,

    },

    routeRules: {
      "/_nuxt/**": { headers: { 'Cache-Control': `public, max-age=10912000, s-maxage=10912000` } },
      "/images/**": { headers: { 'Cache-Control': `public, max-age=10912000, s-maxage=10912000` } },
      "/styles/**": { headers: { 'Cache-Control': `public, max-age=10912000, s-maxage=10912000` } },
      "/videos/**": { headers: { 'Cache-Control': `public, max-age=10912000, s-maxage=10912000` } },
    }
  },

  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@import "./assets/scss/_variables.scss";',
                  sassOptions: {
            
                  }
              },
          },
      },
  },
  modules: ['@vueuse/nuxt', ['@pinia/nuxt', {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore',
    ],
  },] , ['nuxt-mail', {
    message: {
      to: process.env.CONTACT_MAIL_TO,
      from: `${process.env.CONTACT_MAIL_FROM_USER}`
    },
    smtp: {
      host: process.env.OFUQ_SMTP_HOST,
      secure: true,
      port: process.env.OFUQ_SMTP_PORT,
      auth: {
        user: process.env.CONTACT_MAIL_WEBSITE_USER,
        pass: process.env.CONTACT_MAIL_WEBSITE_PASS
      }
    },
  }], '@nuxt/scripts',  '@nuxtjs/sitemap'],

  site: {
    url: 'https://gts-globaltalentsolution.com',
    name: 'GTS Global Talent Solution'
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ],
    exclude: [
      // temporary
      "/blog",
      "/blog/*",
      "/home-three",
      "/home-two",
      "/project",
      "/project/*",
      "/team",
      "/team/*"
    ]
  },

  runtimeConfig: {
    appName: 'GTS Global Talent Solution',
    baseUrl: '',
    public: {
      baseUrl: ''
    }
  },
  compatibilityDate: "2024-10-17",

  postcss: {
    
    plugins: {
      'postcss-rtlcss': {}
    }
  }
})