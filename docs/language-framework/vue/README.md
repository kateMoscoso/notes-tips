# Vue

* [Best practices](/language-framework/best-practices/) 
* [Events](/language-framework/events/) 
* [Vue 3](/language-framework/vu3/vue3) 


* ## Install
```
 npm i -g @vue/cli
```

* ## Create a project 
```
  vue create real-world-vue

```

## Vue UI

## Plugins

* Vetur  div>ul>li>
* Eslint
* Prettier
* Copy Relative Path
* sarah.drasner


Using Named Routes
Another way we can create router links is by using named routes. Remember how in our router.js each of our routes has a name? We can use these names. So instead of:

    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
We can write:

    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
These have equivalent functionality, but Vue is using the name to look up the path that we want to use.

As you might imagine, if we have a huge application with lots of links to all our pages, and we want to change the path of a route, if we’re using named routes we’d only have to change that path in one place instead of everywhere in our app.


```

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/about',
    redirect: { name: 'about' }
  }
]
```