import { Configuration } from '@nuxt/types'
require('dotenv').config()

const config: Configuration = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ja'
    },
    titleTemplate: `%s | ${process.env.APP_NAME || ''}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  env: {
    FB_APY_KEY: process.env.FB_APY_KEY || '',
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN || '',
    FB_DATABASE_URL: process.env.FB_DATABASE_URL || '',
    FB_PROJECT_ID: process.env.FB_PROJECT_ID || '',
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET || '',
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID || '',
    FB_APP_ID: process.env.FB_APP_ID || '',
    FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID || '',
    FB_REGION: process.env.FB_REGION || ''
  },
  build: {
    transpile: ['vee-validate/dist/rules'],
    html: {
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend() {}
  }
}

export default config
