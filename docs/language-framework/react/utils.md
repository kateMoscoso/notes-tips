
# Utilss
## Agregando compatibilidad con todos los navegadores usando Babel
Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.

Instalación de Babel y otras herramientas para que funcione con React:

> npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
Configuración de Babel (.babelrc):
```js
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
}
```
### Webpack: Empaquetando nuestros módulos
"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:

> npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
Configuración de Webpack (webpack.config.js):

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
```

Script para ejecutar las tareas de Webpack (package.json):
```js
{
  "scripts": {
    "build": "webpack --mode production"
  },
}
```

## Estilos con SASS
Los preprocesadores como *Sass* son herramientas que nos permiten escribir *CSS* con una sintaxis un poco diferente y más amigable que luego se transformará en *CSS* normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:

> npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader

Configuración de Sass en Webpack (webpack.config.js):

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// ...

module: {
  rules: [
    {
      test: /\.(s*)css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        'css-loader',
        'sass-loader',
      ],
    }, 
  ],
},

// ...

plugins: [
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
  }),
],`
```

## Instalación de File Loader:

> npm install --save-dev file-loader
Configuración de File Loader en Webpack (webpack.config.js):

```js
rules: [
  {
    test: /\.(png|gif|jpg)$/,
    use: [
      {
        loader: 'file-loader',
        options: { name: 'assets/[hash].[ext]' },
      }
    ],
  },
],
```
Uso de File Loader con React:
```js
import React from 'react';
import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

const Component = () => (
  <img src={nombreDeLaImagen} />
);

export default Component;
```

## Imports, Variables y Fuentes de Google en Sass
Así como JavaScript, Sass nos permite almacenar valores en variables que podemos usar en cualquier otra parte de nuestras hojas de estilo.

```css
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

body {
  background: $main-color;
  font-family: $theme-font;
}
```

Podemos guardar nuestras variables en un archivo especial e importarlo desde los archivos de estilo donde queremos usar estas variables.

# Vars.scss
$theme-font: 'Muli, sans-serif;
$main-color: #8f57fd;

# App.scss
```css
@import ""./Vars.scss""

`body {
  background: $main-color;
  font-family: $theme-font;
}
```
También podemos importar hojas de estilo externas a nuestra aplicación. Por ejemplo: las fuentes de Google.
```css
@import url(https://fonts.googleapis.com/css?family=Muli&display-swap)
```

## Creando una Fake API
Vamos a usar JSON Server para crear una Fake API: una API *falsa* construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

Instalación de JSON Server:

> sudo npm install json-server -g

> json-server archivoParaTuAPI.json
