(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"understanding-reactivity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-reactivity"}},[e._v("#")]),e._v(" Understanding Reactivity")]),e._v(" "),a("p",[e._v("Vue’s reactivity system can look like magic when you see it working for the first time.")]),e._v(" "),a("p",[e._v("Take this simple app:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div id="app">\n  <div>Price: ${{ product.price }}</div>\n  <div>Total: ${{ product.price * product.quantity }}</div>\n  <div>Taxes: ${{ totalPriceWithTax }}</div>\n</div>\n<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>\n<script>\n  var vm = new Vue({\n    el: \'#app\',\n    data: {\n      product: {\n        price: 5.00,\n        quantity: 2\n      }\n    },\n    computed: {\n      totalPriceWithTax() {\n        return this.product.price * this.product.quantity * 1.03\n      }\n    }\n  })\n<\/script>\n')])])]),a("p",[e._v("And somehow Vue’s Reactivity system just knows that if "),a("code",[e._v("price")]),e._v(" changes, it should do three things:")]),e._v(" "),a("ul",[a("li",[e._v("Update the "),a("code",[e._v("price")]),e._v(" value on our webpage.")]),e._v(" "),a("li",[e._v("Recalculate the expression that multiplies "),a("code",[e._v("price * quantity")]),e._v(", and update the page.")]),e._v(" "),a("li",[e._v("Call the "),a("code",[e._v("totalPriceWithTax")]),e._v(" function again and update the page.")])]),e._v(" "),a("p",[e._v("But wait, I hear you wonder, how does Vue’s Reactivity system know what to update when the "),a("code",[e._v("price")]),e._v(" changes, and how does it keep track of everything?")]),e._v(" "),a("p",[a("strong",[e._v("This is not how JavaScript programming usually works")])]),e._v(" "),a("p",[e._v("Unfortunately, JavaScript is procedural, not reactive, so this doesn’t work in real life. In order to make total reactive, we have to use JavaScript to make things behave differently.")]),e._v(" "),a("p",[e._v("Solution\nFirst off, we need some way to tell our application,* “Store the code (effect) I’m about to run, I may need you to run it at another time.”* Then we’ll want to run the code, and if price or quantity variables get updated, run the stored code again.")]),e._v(" "),a("p",[e._v("We might do this by recording the function (effect) so we can run it again.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let product = { price: 5, quantity: 2 }\nlet total = 0\n\nlet effect = function () { \n  total = product.price * product.quantity\n})\n\ntrack() // Remember this in case we want to run it later\neffect() // Also go ahead and run it\n")])])]),a("p",[e._v("Notice that we store an anonymous function inside the effect variable, and then call a track function. Using the ES6 arrow syntax I could also write this as:")]),e._v(" "),a("p",[a("code",[e._v("let effect = () => { total = product.price * product.quantity }")])]),e._v(" "),a("p",[e._v("In order to define "),a("code",[e._v("track")]),e._v(", we need a place to store our effects, we may have many of them. We’ll create a variable called "),a("code",[e._v("dep")]),e._v(", as in dependency. We call it dependency because typically with the Observer design pattern a dependency has subscribers (in our case effects) which will get notified when an object changes state. We might make dependency a class with an array of subscribers, like we did in the Vue 2 version of this tutorial. However, since all it needs to store is a set of effects, we can simply create a Set.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let dep = new Set() // Our object tracking a list of effects\n")])])]),a("p",[e._v("Then our track function can simply add our effects to this collection:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function track () {\n  dep.add(effect) // Store the current effect\n}\n")])])]),a("p",[e._v("In case you’re not familiar, the difference between a JavaScript Array and Set, is that a Set cannot have duplicate values and it doesn’t use an index like arrays.")]),e._v(" "),a("p",[e._v("We’re storing the "),a("code",[e._v("effect")]),e._v(" (in our case the "),a("code",[e._v("{ total = price * quantity }")]),e._v(") so we can run it later. Here’s a visualization this dep Set:")]),e._v(" "),a("p",[e._v("Let’s write a trigger function that runs all the things we’ve recorded.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function trigger() { \n  dep.forEach(effect => effect()) \n}\n")])])]),a("p",[e._v("This goes through all the anonymous functions we have stored inside the dep Set and executes each of them. Then in our code, we can just:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("product.price = 20\nconsole.log(total) // => 10\ntrigger()\nconsole.log(total) // => 40\n")])])]),a("p",[e._v("Simple enough, right? Here’s the code in its entirety if you need to read through and try to grasp it one more time.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let product = { price: 5, quantity: 2 }\nlet total = 0\nlet dep = new Set()\n\nfunction track() {\n  dep.add(effect)\n}\n\nfunction trigger() {\n  dep.forEach(effect => effect())\n}\n\nlet effect = () => {\n  total = product.price * product.quantity\n}\n\ntrack()\neffect()\n\nproduct.price = 20\nconsole.log(total) // => 10\n\ntrigger()\nconsole.log(total) // => 40\n")])])]),a("h3",{attrs:{id:"problem-multiple-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-multiple-properties"}},[e._v("#")]),e._v(" Problem: Multiple Properties")]),e._v(" "),a("p",[e._v("We could go on tracking effects as needed, but our reactive objects are going to have different properties, and those properties each need their own "),a("code",[e._v("dep")]),e._v(" (which is a set of effects). Take a look at our object here:")]),e._v(" "),a("p",[a("code",[e._v("let product = { price: 5, quantity: 2 }")])]),e._v(" "),a("p",[e._v("Our "),a("code",[e._v("price")]),e._v(" property needs it’s own dep (set of "),a("code",[e._v("effects")]),e._v(") and our "),a("code",[e._v("quantity")]),e._v(" needs it’s own "),a("code",[e._v("dep")]),e._v(" (set of "),a("code",[e._v("effects")]),e._v("). Let’s build out our solution to properly record these.")]),e._v(" "),a("h3",{attrs:{id:"solution-depsmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-depsmap"}},[e._v("#")]),e._v(" Solution: depsMap")]),e._v(" "),a("p",[e._v("When we call track or trigger we now need to know which property in our object we’re targeting ("),a("code",[e._v("price")]),e._v(" or "),a("code",[e._v("quantity")]),e._v("). To do this we’ll create a "),a("code",[e._v("depsMap")]),e._v(", which is of type Map (think keys and values). Here’s how we might visualize it:")]),e._v(" "),a("p",[e._v("Notice how the "),a("code",[e._v("depsMap")]),e._v(" has a key which will be the property name we want to add (or track) a new "),a("code",[e._v("effect")]),e._v(" on. So we’ll need to send in this key to the "),a("code",[e._v("track")]),e._v(" function.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const depsMap = new Map()\nfunction track(key) {\n  // Make sure this effect is being tracked.\n  let dep = depsMap.get(key) // Get the current dep (effects) that need to be run when this key (property) is set\n  if (!dep) {\n    // There is no dep (effects) on this key yet\n    depsMap.set(key, (dep = new Set())) // Create a new Set\n  }\n  dep.add(effect) // Add effect to dep\n}\n  }\nfunction trigger(key) {\n  let dep = depsMap.get(key) // Get the dep (effects) associated with this key\n  if (dep) { // If they exist\n    dep.forEach(effect => {\n      // run them all\n      effect()\n    })\n  }\n}\n\nlet product = { price: 5, quantity: 2 }\nlet total = 0\n\nlet effect = () => {\n  total = product.price * product.quantity\n}\n\ntrack('quantity')\neffect()\nconsole.log(total) // --\x3e 10\n\nproduct.quantity = 3\ntrigger('quantity')\nconsole.log(total) // --\x3e 40\n")])])]),a("h3",{attrs:{id:"problem-multiple-reactive-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem-multiple-reactive-objects"}},[e._v("#")]),e._v(" Problem: Multiple Reactive Objects")]),e._v(" "),a("p",[e._v("This works great, until we have multiple reactive objects (more than just product) which need to track effects. Now we need a way of storing a depsMap for each object (ex. product). We need another Map, one for each object, but what would be the key? If we use a WeakMap we can actually use the objects themselves as the key. WeakMap is a JavaScript Map that uses only objects as the key. For example:")]),e._v(" "),a("p",[e._v('let product = { price: 5, quantity: 2 }\nconst targetMap = new WeakMap()\ntargetMap.set(product, "example code to test")\nconsole.log(targetMap.get(product)) // ---\x3e "example code to test"\nObviously this isn’t the code we’re going to use, but I wanted to show you how our targetMap uses our product object as the key. We call our WeakMap targetMap because we’ll consider target the object we’re targeting. There’s another reason it’s called target which will become more obvious in the next lesson. Here is what we have visualized:')]),e._v(" "),a("p",[e._v("When we call track or trigger we now need to know which object we’re targeting. So, we’ll send in both the target and the key when we call it.")]),e._v(" "),a("p",[e._v("const targetMap = new WeakMap() // targetMap stores the effects that each object should re-run when it's updated")]),e._v(" "),a("p",[e._v("function track(target, key) {\n// We need to make sure this effect is being tracked.\nlet depsMap = targetMap.get(target) // Get the current depsMap for this target")]),e._v(" "),a("p",[e._v("if (!depsMap) {\n// There is no map.\ntargetMap.set(target, (depsMap = new Map())) // Create one\n}")]),e._v(" "),a("p",[e._v("let dep = depsMap.get(key) // Get the current dependencies (effects) that need to be run when this is set\nif (!dep) {\n// There is no dependencies (effects)\ndepsMap.set(key, (dep = new Set())) // Create a new Set\n}")]),e._v(" "),a("p",[e._v("dep.add(effect) // Add effect to dependency map\n}")]),e._v(" "),a("p",[e._v("function trigger(target, key) {\nconst depsMap = targetMap.get(target) // Does this object have any properties that have dependencies (effects)\nif (!depsMap) {\nreturn\n}")]),e._v(" "),a("p",[e._v("let dep = depsMap.get(key) // If there are dependencies (effects) associated with this\nif (dep) {\ndep.forEach(effect => {\n// run them all\neffect()\n})\n}\n}")]),e._v(" "),a("p",[e._v("let product = { price: 5, quantity: 2 }\nlet total = 0\nlet effect = () => {\ntotal = product.price * product.quantity\n}")]),e._v(" "),a("p",[e._v("track(product, 'quantity')\neffect()\nconsole.log(total) // --\x3e 10")]),e._v(" "),a("p",[e._v("product.quantity = 3\ntrigger(product, 'quantity')\nconsole.log(total) // --\x3e 15\nSo now we have a very effective way of tracking the dependencies on multiple objects, this is a big piece of the puzzle when building our reactivity system. Give yourself a pat on the back. The battle is half over. In the next lesson we will discover how to call track and trigger automatically using ES6 proxy.")])])}),[],!1,null,null,null);t.default=o.exports}}]);