module.exports = {
  base: '/notes-tips',
  dest: 'public',
  locales: {
    '/' :{
      lang : 'es-SP',
      title: 'Hola ;)',
      description: 'Web con mis apuntes'
    },
    '/en/':{
      lang : 'en-US',
      title: 'Hello ;)',
      description: 'Just playing around'
    }
  },
  themeConfig: {
    locales: {
      '/' :{
        sidebar: [
          ['/language-framework/javascript/', 'Javascript'],
          ['/language-framework/vue/', 'Vue'],
          ['/docker/', 'Docker']
        ]
      }
    }
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

