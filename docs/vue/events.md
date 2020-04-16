``` html
<button @click="addToCart"> AddToCart </button>
```

As you can see, addToCart is the name of a method that will fire when that click event happens. We haven’t yet defined that method, so let’s do that now, right on our instance.

Just like it does for its data, the Vue instance has an optional property for methods. So we’ll write out our addToCart method within that option.

``` javascript
methods : {
    addToCart() {
        this.cart +=1
    }
}
``` 

Now, when we click our `button`, our `addToCart` method is triggered, which increments the value of `cart`.

Our button is listening for click events with the `v-on` directive, which triggers the addToCart method. That method lives within the methods property of the Vue instance as an anonymous function. The body of that function adds 1 to the value of `this.cart`. Because `this` refers to the data of the instance we’re currently in, our function is adding 1 to the value of `cart`, because `this.cart` is the `cart` inside our data property.

* The `v-o`n directive is used to allow elements to listen for events
* The shorthand for `v-on` is `@`
* You can specify the type of event to listen for:
  * click
  * mouseover
  * any other DOM event
* The `v-on` directive can trigger a method
* Triggered methods can take in arguments
`this` refers to the current Vue instance’s data as well as other methods declared inside the instance