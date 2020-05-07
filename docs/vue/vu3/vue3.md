Limitation Vue 2
* Readability as components grow
* Code reuse patterns have drawbacks
* Limited TypeScript Support
* No perfect way to reuse logic between components: 
  * Mixins
    * ✔ Organized by feature
    * ❕conflict prone    
    * ❕unclear relationships
    * ❕Not easily reusable
  * Mixins factories: Functions that return a customized version of a mixin
    * ✔ Easily Reusable
    * ✔ Clearer relationships
    * ❕weak namespacing    
    * ❕Implicit property additions
    * ❕No instance access at runtime
   * Scoped Slots
    * ✔ Solves Mixin Problems
    * ❕Increases identantion
    * ❕Lots fo configuration
    * ❕Less flexible   
    * ❕Less performant  

## Composition functions:
The good

* We’re writing less code, so it’s easier to pull a feature from your component into a function.
* It builds on your existing skills since you’re already familiar with functions.
* It’s more flexible than Mixins and Scoped Slots since they’re just functions.
* Intellisense, autocomplete, and typings already work in your code editor.
The not so good

* Requires learning a new low-level API to define composition functions.
* There are now two ways to write components instead of just the standard syntax.

vu3
* Code can now be organized by logicall concerns - This doesn't mean tht our user interface now has less components
*  

When to use new Composition API Syntex
* TypeScript support
* Component is too large and needs to be organized by feature
* Need to reuse code acreoss other components


The `setup` executes before any of the following options are evaluated:

* Components
* Props
* Data
* Methods
* Computed Properties
* Lifecycle methods

It’s also worth mentioning that the setup method does not have access “this”, unlike other Component options. In order to get access to the properties we normally would access using this, `setup` has two optional arguments. The first is props which is reactive and can be watched, as such:

```
import { watch } from "vue";
export default {
  props: {
    name: String
  },
  setup(props) {
    watch(() => {
      console.log(props.name);
    });
  }
};
```

The second argument is context, that has access to a bunch of useful data:

```
setup(props, context) {
  context.attrs;
  context.slots;
  context.parent;
  context.root;
  context.emit;
}
```

### Reactive References 

```
<template>
 <div>Capacity: {{ capacity }}</div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const capacity = ref(3);
    // additional code to write
  }
};
</script>
```

`const capacity = ref(3)` is creating a “Reactive Reference.” Basically it’s wrapping our primitive integer (3) in an object, which will allow us to track changes. Remember, previously our `data()` option already wrapping our primitive (capacity) inside an object.

Aside: The composition API allows us to declare reactive primitives that aren’t associated with a component, and this is how we do it.

One last step, we need to explicitly return an object with properties our template will need to render properly.

```
<template>
  <div>Capacity: {{ capacity }}</div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const capacity = ref(3);
    return { capacity };
  }
};
</script>
```
This returned object is how we expose which data we need access to in the renderContext.

Being explicit like this is a little more verbose, but it’s also intentional. It helps with longer-term maintainability because we can control what gets exposed to the template, and trace where a template property is defined. We now have what we started with:

### vue 2 and vue 3

```
<template>
  <div>
    <p>Capacity: {{ capacity }}</p>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const capacity = ref(3);

   function increaseCapacity() { 
  capacity++;
}
    return { capacity, increaseCapacity };
  }
};
</script>
```

Example

```
<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">
        {{ name }}
      </li>
    </ul>
    <button @click="increaseCapacity()">Increase Capacity</button>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    const capacity = ref(4);
    const attending = ref(["Tim", "Bob", "Joe"]);

    const spacesLeft = computed(() => { // <-------
      return capacity.value - attending.value.length;
    });

    function increaseCapacity() {
      capacity.value++;
    }
    return { capacity, attending, spacesLeft, increaseCapacity };
  }
};
</script>
```

### Introducing toRefs
 This method converts a reactive object to a plain object, where each property is a Reactive Reference pointing to the property on the original object. Here is our completed code using this method:

```
    import { reactive, computed, toRefs } from "vue";
    export default {
      setup() {
        const event = reactive({
          capacity: 4,
          attending: ["Tim", "Bob", "Joe"],
          spacesLeft: computed(() => {
            return event.capacity - event.attending.length;
          })
        });
        function increaseCapacity() {
          event.capacity++;
        }
        return { ...toRefs(event), increaseCapacity };
      }
    };
```
Notice that I’m importing toRefs and then using it in my return statement, and then destructuring the object. This works great!

### Modularizing

use/event-space.vue

```
    import { ref, computed } from "vue";
    
    export default function useEventSpace() {
      const capacity = ref(4);
      const attending = ref(["Tim", "Bob", "Joe"]);
      const spacesLeft = computed(() => {
        return capacity.value - attending.value.length;
      });
      function increaseCapacity() {
        capacity.value++;
      }
      return { capacity, attending, spacesLeft, increaseCapacity };
    }
```

```
    <template>
      ...
    </template>
    <script>
    import useEventSpace from "@/use/event-space";
    import useMapping from "@/use/mapping";
    export default {
      setup() {
        return { ...useEventSpace(), ...useMapping() }
      }
    };
    </script>
```