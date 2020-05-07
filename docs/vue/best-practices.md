## Defining Props: Best Practices
The Array Syntax
When defining props, many developers are initially exposed to the Array syntax.

``` javascript
<script>
export default {
  name: 'Movie',
  props: ['title', 'length', 'watched']
}
</script>

```

``` javascript
<template>
	<section>
		<h1>{{ title }}</h1>
		<p>{{ length }} <span v-if="watched">✅</span><p>
	</section>
</template>
```

While there is nothing wrong with this definition and will work in production, there are some pitfalls that exists with this method:

* Although the prop names may seem intuitive based on its meaning, it leaves it open for interpretation which can often lead to bugs
* For example, what happens when a developer forgets to include a prop that is technically required for the component to render properly? A Movie component without a title would look rather silly wouldn’t it?
* Another issue that arises is that the definition of each prop is vague. In the example we have above, should length be a number? Should it be a formatted string (i.e., 1:28)? But then which format should it be (i.e., 1 hr 28 min)
* And when registering whether the movie has been watched before, what’s the proper way to tell it’s been watched (e.g., Yes? Y? Watched? true?)

Let’s not forget that this component is only responsible for rendering the props. Can you imagine what kind of bugs would show up if more complex logic was involved? 😱

## The Object Syntax
Instead, for most scenarios, we should define our props using the Object syntax. This allows us to define three key prop attributes that allow you to answer three fundamental questions:

* *type*: What data type(s) can be expected?
* *required*: Is the prop is required or not
* *default*: Is there default content that accounts for most scenarios so we don’t have to repeat ourselves multiple time?

``` javascript
<script>
export default {
	props: {
		length: {
			type: Number,
			required: true,
			default: 90
		}
	}
}
</script>
```

While you are probably aware of some of the basic JavaScript data types:

* String
* Number
* Boolean
* Array
* Object

There are a few more that you should know about!

* Date
* Function
* Symbols

And if you want to define multiple data types, it’s as simple as using an Array syntax!

``` javascript
<script>
export default {
	props: {
		length: {
			type: [Number, String],
			required: true,
			default: 90
		}
	}
}
</script>
```

Some of you might also be thinking, “If there is a default property defined, is a required property really needed?” And you’d be right! The reality is that when you have a default prop, you don’t need the required prop.

``` javascript
<script>
export default {
	props: {
		length: {
			type: Number,
			default: 90
		}
	}
}
</script>
```

## Conclusion
To review, the Array syntax methodology can be prone to bugs as the application scales, but this is a completely valid method that can be very useful when prototyping and such. However, whenever possible, it’s considered a best practice to define your props using the Object syntax.

Finally, when defining your props, remember to answer the three fundamental questions:

* What data type(s) can be expected?
* Is the prop required?
* Can you provide default data to account for most scenario?

Remember that props are useful for providing detailed specifications on how to use a component, but this is also it’s downside as this does not allow flexibility on the developer’s part.

## image requirements
* Images live in the images directory
* Images can only be a PNG or JPEG


``` vue
validator: propValue => {
	const  propExists =  propValue.length > 0
	return propExists
}
``` javascrpt

`propValue` Anonymous function that receives the value as the first argument
`propExists` Return a Boolean value based on the desired logic


``` vue
export default {
  props: {
    image: {
      type; String,
      default: '/images/placeholder.png'	
      validator: propValue => {
         const hasImagesDirectory = propValue.indexOf('/images/') > -1
	 const isPNG = propValue.endsWith('.png')
	 const isJPEG = propValue.endsWith('.jpeg') || propValue.endsWith('.jpg')
	 const hasValidExtension = isPNG || isJPEG

	 return hasImagesDirectory && hasValidExtension
       }
     }
  }
}
```
