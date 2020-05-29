CI/CD
Plan -> Code -> Build -> Test -> Release -> Deploy -> Operate

## [Travis Ci] (https://travis-ci.org/)

```
language: node_js
os: osx

git:
    depth: 3 //profundidad del repo

node_js: 
    - '12'
branches:
    except:
    - legacy
    - experimental

branches:
    only:
    - stable
    - master

before_install: //antes de intalar flujo
    - python

install:
    - yarn install

script 
    - yarn build
    - yarn deploy
    - yarn test

before_script:
    - yarn test

after_script:
    - yarn clean

cache:
    directories:
    - node_modules
    - ~/.npm

jobs:
    include:
        - stage: test
          script: yarn test
          script: yarn eslint
        - stage: deploy
          script: yarn deploy
notifications:
    slack: slack_url
    email: 
        recipients:
            - email@gmail.com
        on_success: always
        on_failure: always
deploy:
    provider: heroku
    on
        repo: repo_name
    provider: pages
    skip-cleanup: true
    kepp-histoy: true
    github-token: $GITHUB_TOKEN
    local-dir: dist/
    target-branch_ gh-pages
    commit_messages: "Deploy"
    on:
        branch: mater

```

* Para conectar con la cuenta de slack tienes que pertenecer al grupo o ser wl owner
  * More Apps -> find travis

**Deploy Heroku**
  ```
  deploy:
  provide: heroku
  skip-cleanup: true
  keep-history: true
  api_key: apiKey # desde heroku
  app: app_name
  on:
    repo: repo_name
  ```

  Hay que encriptar el api-key de heroku y el enlace a slack
[seguridad](https://docs.travis-ci.com/user/encryption-keys/)

> travis encrypt url-slack