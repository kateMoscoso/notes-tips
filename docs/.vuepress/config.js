module.exports = {
  base: '/notes-tips/',
  title: 'Hello ;)',
  description: 'Just playing around',
  markdown: {
    plugins: [
      '@org/foo', // equals to @org/markdown-it-foo if exists
      ['markdown-it-bar', {
        // provide options here
      }]
    ]
  }
}

