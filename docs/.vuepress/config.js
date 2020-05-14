module.exports = {
  base: '/',
  locales: {
    '/' :{
      lang : 'es-SP',
      title: 'Hello ;)',
      description: 'Just playing around'
    },
    '/en/':{
      lang : 'en-US',
      title: 'Hello ;)',
      description: 'Just playing around'
    }
  },
  themeConfig: {
    nav: [{
      text: 'Init',
      link: '/'
    }],
    sidebar: [
      '/',
      ['/javascript/', 'Javascript'],
      ['/vue/', 'Vue'],
      ['/docker/', 'Docker']
    ]
  },
  markdown: {
    plugins: [
      '@org/foo', // equals to @org/markdown-it-foo if exists
      ['markdown-it-bar', {
        // provide options here
      }]
    ]
  }
}

