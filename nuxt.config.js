import smConfig from "./sm.json";
require('dotenv').config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'de-sens-et-desprit',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss',
    '~assets/scss/_variables.scss',
    '~assets/scss/_reset.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/prismic',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  prismic: {
    endpoint: `${process.env.endpoint}`,
    modern: true,
    apiOptions: {
      accessToken: `${process.env.accessToken}`,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ["@nuxtjs/prismic", {
      endpoint: smConfig.apiEndpoint || "",
    }], ["nuxt-sm"],
    '@nuxtjs/dotenv',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"],
    postcss: null, 
  },
  
  // This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
