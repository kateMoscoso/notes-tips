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
                      ['/language-framework/vue/', 'Vue'],
                          {
                            title: 'Javascript',
                            collapsable: false,
                            sidebarDepth: 1, 
                            children: [
                              '/language-framework/javascript/',
                              '/language-framework/javascript/node',
                              '/language-framework/javascript/webpack',
                              '/language-framework/javascript/ECMAScript',
                              '/language-framework/javascript/typescript',
                              '/language-framework/javascript/patrones',
                              '/language-framework/javascript/utils'
                            ]
                      },
                      {
                        title: 'React',
                        collapsable: false,
                        sidebarDepth: 1, 
                        children: [
                          '/language-framework/react/',
                          '/language-framework/react/react-router',
                          '/language-framework/react/utils'
                          
                        ]
                  }
                    ]
                  },
                  ['/docker/', 'docker'],
                  ['/english/', 'inglés'],
                  ['/styles/', 'Estilos'],
                  ['/ci/', 'CI'],
                   {
                  title: 'Básicos',
                  collapsable: false, // optional, defaults to true
                  sidebarDepth: 1,    // optional, defaults to 1
                  children: [
                    ['/basics/enlaces', 'Enlaces interesantes'],
                    ['/basics/terminal', 'Terminal'],
                    ['/basics/web', 'Web'],
                    ['/basics/dom', 'DOM'],
                    ['/basics/types-web', 'Tipos de web'],
                    ['/basics/words', 'Sigla y Acrónimos'],
                    ['/basics/git', 'Git'],
                    ['/basics/poo', 'POO'],
                    ['/basics/patterns', 'patrones'],
                    ['/basics/principles', 'principles']
                  ]
                }
                ]
              }
            ],
            '/language-framework/javascript/': [
              {
                title: 'javascript',
                collapsable: false,
                children: [
                  '',
                  'configuration',
                  'node',
                  'typescript',
                  'ECMAScript',
                  'utils',
                  'webpack',
                  'patrones'
                ]
              }]
          }
            
        },
        '/en/': {
          label: 'English',
          sidebar: {
            '':[
              {
                title: 'Tips',   // required
                collapsable: false, // optional, defaults to true
                sidebarDepth: 1,    // optional, defaults to 1
                children: [ {
                  title: 'Basics',
                  collapsable: false, // optional, defaults to true
                  sidebarDepth: 1,    // optional, defaults to 1
                  children: [
                    ['/en/basics/patterns', 'patterns']
                  ]
                }]
              }
            ]
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
  