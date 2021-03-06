import theme from '@nuxt/content-theme-docs'

export default theme({
  loading: { color: '#3448C5' },
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },
  buildModules: ['nuxt-ackee'],
  i18n: {
    defaultLocale: 'en'
  },
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: 'ab828dc1-9e4f-475b-9898-e225f5cdb1b1',
    detailed: true
  }
})
