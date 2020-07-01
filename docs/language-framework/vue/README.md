# Vue

Tiene complejidad inherente y complejidad instrumental.
* La complejidad inherente es la que se hereda del proyecto y no se puede modificar.
* La complejidad instrumental es la que nosotros podemos controlar. Es el precio que pagamos para resolver la complejidad inherente (herramientas).

**VueJS** puede ser definido como el Framework Web Progresivo porque nos permite progresivamente ir escalando nuestra aplicación a medida que lo vamos necesitando.

* Está orientado a la vista.
* Es reactivo. Se puede enlazar el código con la vista. Se puede actualizar desde cualquiera de los dos y se sincroniza todo en un círculo virtuoso.
* Está basado en Core, es una librería pequeña, resuelve algo específico y concreto. Sin embargo es escalable y extendible.

* [Best practices](/language-framework/vue/best-practices/) 
* [Events](/language-framework/vue/events/) 
* [Vue 3](/language-framework/vue/vu3/vue3) 


## Install
> npm i -g @vue/cli

## Create a project 
> vue create real-world-vue


## Reactivo
Vue is reactive. In other words, the instance’s data is linked to every place that data is being referenced. So not only can Vue make its data appear within the HTML that references it, but that HTML will be updated to display new values any time that referenced data changes.

The only exception to this being the use of Object.freeze(), which prevents existing properties from being changed, which also means the reactivity system can’t track changes.


### Using Named Routes
Another way we can create router links is by using named routes. Remember how in our router.js each of our routes has a name? We can use these names. So instead of:
```js
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
```

We can write:

```html
    <router-link :to="{ name: 'home' }"> Home </router-link> 
    <router-link :to="{ name: 'about' }"> About </router-link>
```
These have equivalent functionality, but Vue is using the name to look up the path that we want to use.

As you might imagine, if we have a huge application with lots of links to all our pages, and we want to change the path of a route, if we’re using named routes we’d only have to change that path in one place instead of everywhere in our app.


```js

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

## lifecycle hooks

:::
Don’t use arrow functions on an options property or callback, such as created: () => console.log(this.a) or vm.$watch('a', newValue => this.myMethod()). Since an arrow function doesn’t have a this, this will be treated as any other variable and lexically looked up through parent scopes until found, often resulting in errors such as Uncaught TypeError: Cannot read property of undefined or Uncaught TypeError: this.myMethod is not a function.
:::

 In order to output real HTML, you will need to use the v-html directive:


## Data Binding

When we talk about data binding in Vue, we mean that the place where it is used or displayed in the template is directly linked, or bound to the source of the data, which is the data object inside the Vue instance.

In other words, the host of the data is linked to the target of the data. In this case, our data is hosted by the data property of our Vue instance. And we want to target that data from our src.

## Conditional
We can use the v-if and v-else directives to determine which element to render. We can add a third degree of logic with v-else-if

```html
  <p v-if="inventory > 10">In Stock</p>
  <p v-else-if= "inventory <= 10 && inventory > 0">Almost sold out</p>
  <p v-else>Out of Stock</p>
```

If your app needs an element to frequently toggle on and off the page, you’ll want to use the '  directive. An element with this directive on it will always be present in our DOM, but it will only be visible on the page if its condition is met. It will conditionally add or remove the CSS property display: none to the element.

This method is more performant than inserting and removing an element over and over with `v-if / v-else.`
`V-show `only toggles visibility, it does not insert or remove the element from the DOM.

## Loops 

```html
<div v-for="variant in variants" :key="variante.viatiantId">
  <p>{{ variant.variantColor }}</p>
</div>
```

* Binding class and style
```js
:style="{ backgroundColor: variant.variantColor }"
:class="{ disabledButton: !inStock }"
:class="classObject"
:class="[class1, classerrors]"
```

## Computed properties

Computed properties calculate a value rather than store a value.
Computed properties can use data from your app to calculate its values.
Computed properties are cached, meaning the result is saved until its dependencies change. So when quantity changes, the cache will be cleared and the **next time you access the value of inStock , it will return a fresh result, and cache that result.

With that in mind, it’s more efficient to use a computed property rather than a method for an expensive operation that you don’t want to re-run every time you access it.

It is also important to remember that you should not be mutating your data model from within a computed property. You are merely computing values based on other values. Keep these functions pure.

```js
computed : {
  title() {
    return `${this.brand}`
  }
}
```

## Components 

Components are reusable blocks of code that can have both structure and functionality. They help create a more modular and maintainable codebase.

In Vue, we use props to handle this kind of downward data sharing. Props are essentially variables that are waiting to be filled with the data its parent sends down into it.

Components are blocks of code, grouped together within a custom element
Components make applications more manageable by breaking up the whole into reusuable parts that have their own structure and behavior
Data on a component must be a function
Props are used to pass data from parent to child
We can specify requirements for the props a component is receiving
Props are fed into a component through a custom attribute
Props can be dynamically bound to the parent’s data
Vue dev tools provide helpful insight about your components

A component can let its parent know that an event has happened with $emit
A component can use an event handler with the v-on directive ( @ for short) to listen for an event emission, which can trigger a method on the parent
A component can $emit data along with the announcement that an event has occurred
A parent can use data emitted from its child

## The v-model directive
Vue’s v-model directive gives us this two-way binding. That way, whenever something new is entered into the input, the data changes. And whenever the data changes, anywhere using that data will update.


`@submit.prevent` That is an event modifier, which is used to prevent the submit event from reloading our page. 

We can use the v-model directive to create two-way binding on form elements
We can use the .number modifier to tell Vue to cast that value as a number, but there is a bug with it
We can use the .prevent event modifier to stop the page from reloading when the form is submitted
We can use Vue to do fairly simple custom form validation


We call this “Server-side Routing” since the client is making a request to the server on every URL change.

When it comes to Vue, many choose client-side routing, meaning that the routing happens in the browser itself using JavaScript. Our webpage is loaded from a single index.html page and we can use client-side routing to dynamically present different views, depending on which link is clicked. Often the view we need to show has already been loaded into the browser, so we don’t need to reach out to the server for it.

## Router 

As you can see, routes contains an array of objects. Each object is a specific route.

The path indicates the actual route, in terms of the URL, that the user will be taken to. In this first route, there’s only the '``/``', meaning this is the root, the homepage of our application, and what people see when they go to our domain at example.com.

The name allows us to give this route a name so we can use that name throughout our application to refer to this route.

The component allows us to specify which component to render at that route. Note that these are the same components that were imported at the top of the file. So as it is, the Home component will be rendered whenever the browser’s URL ends with a / with nothing after it.

:::
We place components in both the /components and /views folders. The difference is that when using Vue Router, it’s a best practice to put the components (AKA pages) that get loaded by Vue Router in the /views directory. You then keep the modular (reusable) components in your /components directory.
:::

`<router-link> `is a component (from the vue-router library) whose job is to link to a specific route. And `<router-view/>` is essentially a placeholder where the contents of our component will be rendered onto the page.

So when a user clicks on the About link, they are taken to /about, and as we saw in router.js, that means the About component will load into the place where `<router-view/>` is shown.

Using Named Routes
Another way we can create router links is by using named routes. Remember how in our router.js each of our routes has a name? We can use these names. So instead of:

```js
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
```
We can write:
```
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
```
These have equivalent functionality, but Vue is using the name to look up the path that we want to use.

As you might imagine, if we have a huge application with lots of links to all our pages, and we want to change the path of a route, if we’re using named routes we’d only have to change that path in one place instead of everywhere in our app.

* redirect 
```js
const router = new VueRouter({
      routes: [
        ...
        { 
          path: '/about', 
          redirect: { name: "about" }
        }
      ]
    })
```

* Alias
Instead of redirecting the old path we might just want to alias it, meaning just provide a duplicate path to the same content. We could update that path and provide an alias to the old path:
```js


    const router = new VueRouter({
      routes: [
        ...
        {
          path: '/about-us',
          name: 'about',
          component: About,
          alias: '/about' // <-----
        }
      ]
    })
```
Using $`route.params` in your component limits its flexibility. A more modular way to create your dynamic components is to set props: true in your route configuration.

```vue
  {
          path: '/event/:id',
          name: 'event-show',
          component: EventShow,
          props: true
      }
<router-link :to="{ name: 'event-show', params: { id: '1' } }">First Event</router-link>
```

In order to remove it we need to add some configuration to our router.js :
```js
    ...
    export default new Router({
      mode: 'history', // <----
      routes: [
       ...
      ]
    })
```
This tells Vue to use the browser history.pushState API to change the URL without reloading the page.

Now when we play around locally it shows the URLs exactly as we would want them, and even when we go to URLs like `http://localhost:8080/about-us` the proper page is loaded




Caveat: Handling 404s
A side effect of this you should be aware of is that when we go to an invalid URL, we are no longer given the proper 404 file not found error. There are different ways to combat this, one of which is by creating a /views/FileNotFound.vue component, which gets loaded if none of the existing paths match. To do this we would place this catch-all route at the bottom of our routes.js:
```js
    ...
    const router = new VueRouter({
      mode: 'history',
      routes: [
        ...
        { path: '*', component: NotFoundComponent }
      ]
    })
```


## Anatomy of a Single File Component

Vue components combine markup (usually HTML), logic (JavaScript), and style (usually CSS) into one, single file. 

Part of what makes Vue so powerful is how it’s flexible and allows you to use alternatives to the traditional HTML, JS and CSS setup. For example, you could use Pug, TypeScript and SCSS instead by adding the appropriate lang attributes.

```vue
    <template lang="pug">
    </template>
    
    <script lang="ts">
    </script>
    
    <style lang="scss" scoped>
    </style>
```

You’d just need to make sure you have the proper loaders setup and your Webpack is configured to handle these alternatives. 