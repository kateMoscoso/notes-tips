yarn add tailwindcss autoprefixies postcss-cli

npx tailwindcss init
touch postcss.config.js

plugin tailwindcss intellisens

``` javascript
module.exports = {
    plugin: [
        require('tailwindcss'),
        require('autoprefixier')
    ]
}
```

mkdir css tailwind.css

```
@tailwind base;

@tailwind components;

@tailwind utilities;
```