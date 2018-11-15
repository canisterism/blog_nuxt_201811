const config_contentful = require('./.contentful.json')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | ええ感じのブログ (仮)',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'blog with nuxt.js'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css'
    }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes(callback) {
      const posts = require('./posts.json')
      let routes = posts.map(post => `/post/${post.id}`)
      callback(null, routes)
    }
  },
  env: {
    CTF_SPACE_ID: config_contentful.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config_contentful.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config_contentful.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config_contentful.CTF_BLOG_POST_TYPE_ID
  },
  modules: [
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
    use: [
      'markdown-it-highlightjs'
    ]
  }

}
