### Sharing State
Now that we’ve learned the basic syntax of the Composition API, let’s use it to extract some reusable code from a component. When working with API calls, quite often there’s a lot of code and functionality that we might want to build around a call. Specifically things like loading state, error state, and try / catch blocks. Let’s look at this code and then extract it properly using the Composition API.

I’ve built out the code sample from the previous lesson:

📄 /src/App.js
```
<template>
  <div>
    Search for <input v-model="searchInput" /> 
    <div>
      <p>Loading: {{ loading }}</p>
      <p>Error: {{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "@vue/composition-api";
import eventApi from "@/api/event.js";
export default {
  setup() {
    const searchInput = ref("");
    const results = ref(null);
    const loading = ref(false);
    const error = ref(null);
    async function loadData(search) {
      loading.value = true;
      error.value = null;
      results.value = null;
      try {
        results.value = await eventApi.getEventCount(search.value);
      } catch (err) {
        error.value = err;
      } finally {
        loading.value = false;
      }
    }
    watch(searchInput, () => {
      if (searchInput.value !== "") {
        loadData(searchInput);
      } else {
        results.value = null;
      }
    });
    return { searchInput, results, loading, error };
  }
};
</script>
```

Now with Shared State
This is a pretty common pattern in a Vue application where I have an API call and I need to account for the results, loading, and error state. How might I extract this to use the composition API? Well first I might create a new file and extract the common functionality.

📄 /composables/use-promise.js
```
import { ref } from "@vue/composition-api";
export default function usePromise(fn) { // fn is the actual API call
  const results = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const createPromise = async (...args) => { // Args is where we send in searchInput
    loading.value = true;
    error.value = null;
    results.value = null;
    try {
      results.value = await fn(...args); // Passing through the SearchInput
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };
  return { results, loading, error, createPromise };
}
```
Notice how this function holds the reactive references as well as a function that wraps the API call, along with any arguments that need to be passed into the API call. Now to use this code:

📄 /src/App.js

```
<template>
  <div>
    Search for <input v-model="searchInput" /> 
    <div>
      <p>Loading: {{ getEvents.loading }}</p>
      <p>Error: {{ getEvents.error }}</p>
      <p>Number of events: {{ getEvents.results }}</p>
    </div>
  </div>
</template>
<script>
import { ref, watch } from "@vue/composition-api";
import eventApi from "@/api/event.js";
import usePromise from "@/composables/use-promise";
export default {
  setup() {
    const searchInput = ref("");
    const getEvents = usePromise(search =>
      eventApi.getEventCount(search.value)
    );

    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvents.createPromise(searchInput);
      } else {
        getEvents.results.value = null;
      }
    });
    return { searchInput, getEvents };
  }
};
</script>
```

That’s all there is to it, and we get the same functionality shown above.

Notice in particular how easy it is to have reactive state (loading, error, and results) that lives inside my use-promise.js file which gets used inside my component. Now when I have another API call I can use-promise.

Caveat
When I ran this by members of the Vue core team, they called attention to …getEvents. Specifically that I shouldn’t be destructuring the object. Without destructuring the data is namespaced under getEvents which makes it more encapsulated and clear where the data is coming from in the component using it. It might look like:

```
<template>
  <div>
    Search for <input v-model="searchInput" /> 
    <div>
      <p>Loading: {{ getEvents.loading }}</p>
      <p>Error: {{ getEvents.error }}</p>
      <p>Number of events: {{ getEvents.results }}</p>
    </div>
  </div>
</template>
<script>
...
export default {
  setup() {
    ...
    return { searchInput, getEvents };
  }
};
</script>
```

It looks like Vue 2 with the composition API isn’t properly recognizing my Reactive References and calling .value like it should. I could fix this by adding .value manually orr by actually using Vue 3. I tested the code with Vue 3 and sure enough, it saw the Reactive References and properly displayed the .value.