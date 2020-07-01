# Best Practices
## Defining Props
### The Array Syntax

When defining props, many developers are initially exposed to the Array syntax.

``` js
<script>
export default {
  name: 'Movie',
  props: ['title', 'length', 'watched']
}
</script>

```

``` js
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
* Another issue that arises is that the definition of each prop is vague. 
* And when registering whether the movie has been watched before, what’s the proper way to tell it’s been watched (e.g., Yes? Y? Watched? true?)

Let’s not forget that this component is only responsible for rendering the props. Can you imagine what kind of bugs would show up if more complex logic was involved? 😱

### The Object Syntax
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

Some of you might also be thinking, “If there is a default property defined, is a required property really needed?” And you’d be right! **The reality is that when you have a default prop, you don’t need the required prop.**

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

### Custom Validation

```js
export default {
  props: {
    image: {
      type; String,
      default: '/images/placeholder.png'	
    }
  }
}
```
While we have a default placeholder image that will help us when movie poster images are missing, the simple data-type-checking of String doesn’t quite cover it when it comes to validation. S*imply passing any string won’t suffice; a simple error would result in a broken image.*

#### Custom Validation for Props
While creating custom validations for props sounds complicated initially, Vue makes it quite easy for us to do so by providing the validator property. Here are the basics behind how it works:

```js
export default {
  props: {
    image: {
      type: String,
      default: '/images/placeholder.png',
      // Validator takes an anonymous function 
      // that receives the passed-down value
      // as its first argument
      validator: propValue => {
        // Return a Boolean that will serve as your validation
        const propExists = propValue.length > 0

	return propExists
      }  
    }
  }
}
```
 image requirements
* Images live in the images directory
* Images can only be a PNG or JPEG

`propValue` Anonymous function that receives the value as the first argument
`propExists` Return a Boolean value based on the desired logic


``` js
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
``` html
<template>
  <h1>My App</h1>
  <BaseButton 
    text="Submit" 
    :isLoading="loading"
    iconLeftName="left-arrow"
    iconRightName="right-arrow"
    :isLoadingLeft="loadingLeft"
    :isLoadingRight="loadingRight"
  />
</template>
``` 
``` js
📄BaseButton.vue

<template>
  <button type="button" class=“nice-button“>
    <LoadingSpinner v-if="isLoading" />
    <template v-else>
      <template v-if="iconLeftName">
        <LoadingSpinner v-if="isLoadingLeft" />
        <AppIcon v-else :icon=“iconLeftName” />
      </template>
      {{ text }}
      <template v-if="iconRightName">
        <LoadingSpinner v-if="isLoadingRight" />
        <AppIcon v-else :icon=“iconRightName” />
      </template>
    </template>
  </button>
</template>
<script>
export default {
  // Props shortened to Array syntax for brevity
  props: [
    'text', 
    'iconLeftName', 
    'iconRightName', 
    'isLoading', 
    'isLoadingLeft', 
    'isLoadingRight'
  ]
}
</script>
``` 

The Problem with Props-Based Solutions
The solution I just showed is what one might call a “props-based solution.” In other words, the strategy for solving each new requirement is simply to layer on a new prop that controls the desired behavior and layer it into the existing template and data model. Is it inherently wrong? Absolutely not. It solves the requirements and works as expected for the user.

However, as you might have noticed, it doesn’t take long before the code becomes rather difficult to read and could become very difficult to maintain as time goes on (and more requirements inevitably get added).

As a result, some of the common issues that teams see with props-based solutions are:

New developers who have no prior experience with the component are forced to navigate a complex maze of conditionals to add any new feature or debug the code.
Components lose their ability to be intuitive since components with numerous props essentially gain their own unique configurations that often require extensive onboarding or explanation just to understand how everything works. And that’s assuming the props are documented well!
Complex components that become hard to maintain often lead to developers creating alternate components since deadlines take precedent over good coding practices, which fragments the application’s ecosystem.

Instead of relying solely on props, it’s time to reach for our next component design technique: slots.
``` js
📄App.vue

<template>
  <h1>My App</h1>
  <BaseButton>Submit <AppIcon name="arrow-right" /></BaseButton>
</template>
``` 

``` js 
📄BaseButton.vue

<template>
  <button class="button">
    <slot />
  </button>
</template>
``` 