## Lifecycle Hooks


* **beforeCreate** - Called immediately after instance is initialized, before options are processed.
* **created** - Called after the instance has been created.
* **beforeMount** - Right before mounting of the DOM begins
* **mounted** - Called when the instance has been mounted (browser updated).
* **beforeUpdate** - Called when reactive data has changed, before the DOM is re-rendered.
* **updated** - Called when reactive data has changed, and the DOM has been re-rendered.
* **beforeDestroy** - Called right before the Vue instance is destroyed.
* **destroyed** - Called after the Vue instance has been destroyed.

There are two newer Vue 2 LifeCycle methods you may not be familiar with:

* **activated** - Used for , when a component inside is toggled on.
* **deactivated** - Used for , when a component inside is toggled off.
* **errorCaptured** - Called when an error from any descendent component is captured.

For more detailed explanations check out the API documentation on LifeCycle hooks.

### Unmounting in Vue 3
In Vue 3 beforeDestroy() can also be written as beforeUnmount(), and destroyed() can be written as unmounted(). When I asked Evan You about these changes, he mentioned it’s just a better naming conventions, because Vue mounts and unmounts components.

### Composition API LifeCycle Methods
In Vue 3’s Composition API we can create callback hooks inside setup() by adding on to the LifeCycle method name:

```
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from "vue";

export default {
  setup() {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {
      console.log("Mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Before Update!");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Before Unmount!");
    });
    onUnmounted(() => {
      console.log("Unmounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });
  }
};
```


You might notice that two hooks are missing. beforeCreate and created are not needed when using the Composition API. This is because beforeCreate() is called right before setup() and created() is called right after setup(). Thus, we simply put code inside setup() that would normally be in these hooks, such as API calls.

### Two New Vue 3 LifeCycle Methods
There are two more additional watchers coming in Vue 3. These have not been implemented with the Vue 2 Composition API plugin (as I’m writing this), so you can’t play with them without using Vue 3 source.

* **onRenderTracked** - called when a reactive dependency is first being accessed in the render function, during render. This dependency will now be tracked. This is helpful to see which dependencies are being tracked, for debugging.
* **onRenderTriggered** - Called when a new render is triggered, allowing you to inspect what dependency triggered a component to re-render.

### Watch
This will run our function on the next tick while reactively tracking its dependencies, and re-run it whenever the dependencies have changed

```
setup() {
  const searchInput = ref("");
  const results = ref(0);

  watch(() => {
    results.value = eventApi.getEventCount(searchInput.value);
  });

  return { searchInput, results };
}
```

So the first time this gets run it uses reactivity to start tracking searchInput, and when it gets updated it will re-run our API call which will update results. Since results is used in our template our template will be re-rendered.

If I want to be more specific as to which source I want to watch for changes, I can specify it in the watcher definition, like so:

```
watch(searchInput, () => {
  ...
});
```
Also, if I need access to the new value and old value of the item being watched I can write:

```
watch(searchInput, (newVal, oldVal) => {
  ...
});
```
Watching Multiple Sources
If I want to watch two Reactive References I can send them inside an array:

```
watch([firstName, lastName], () => {
  ...  
});
```

Now if either are changed, the code inside will re-run. I can also get access to both of their old and new values with:

```
watch([firstName, lastName], ([newFirst, newLast], [oldFirst, oldLast]) => {
  ...   
});
```
