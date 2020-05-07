module.exports = {
  base: '/notes-tips/',
  title: 'Hello ;)',
  description: 'Just playing around',
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

