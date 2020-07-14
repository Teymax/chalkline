module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'action',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css' }
    ]
  },
  css: ['@/assets/style/index.scss'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: [
    "~/plugins/vee-validate.js"
  ],
  /*
  ** Build configuration
  */
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],
  env: {
    API_KEY: process.env.API_KEY
  },
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: 'https://chalkbet.chalklineapi.com/',
    headers: {
      'X-API-KEY': process.env.API_KEY,
    },
    // proxyHeaders: false
  },
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

