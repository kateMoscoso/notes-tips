module.exports = {
    base: '',
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
          label: 'Español',
          selectText: 'Languages',
          ariaLabel: 'Select language',
          sidebar: {
            '':[
              {
                title: 'Tips',   // required
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [
                  { 
                  title: 'Lenguajes Programación',
                  collapsable: false, // optional, defaults to true
                  sidebarDepth: 1,    // optional, defaults to 1
                  children: [
                    ['/language-framework/javascript/', 'Javascript'],
                    ['/language-framework/vue/', 'Vue']
                  ]
                },
                  ['/docker/', 'docker'],
                  ['/english/', 'inglés'],
                  ['/styles/', 'Estilos'],
                  { 
                    title: 'Básicos',
                    collapsable: false, // optional, defaults to true
                    sidebarDepth: 1,    // optional, defaults to 1
                    children: [
                      ['/basics/enlaces', 'Enlaces interesantes'],
                      ['/basics/terminal', 'Terminal'],
                      ['/basics/types-web', 'Tipos de web'],
                      ['/basics/words', 'Sigla y Acrónimos'],
                      ['/basics/git', 'Git']
                    ]
                  }
                ]
              }
            ],
          }
            
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
  
  function getLanguageSidebar () {
    return [
      '/javascript/',
      '/vue/'
    ]
  }
  