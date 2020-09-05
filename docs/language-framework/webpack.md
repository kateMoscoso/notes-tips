
# Webpack
Tiene el propósito de trabajar con diferentes archivos en nuestro desarrollo local,  pero generando un único archivo, aunque podemos configurarlo para que sea uno, dos o tres  archivos, eso depende de cómo lo necesitemos.

Webpack también nos permite agregar archivos de CSS, archivos .svg, imágenes, urls y contenidos. Esto quiere decir que se puede compilar archivos de JavaScript y archivos estáticos.
Webpack se ejecuta sobre node, por lo que, necesitamos intalarlo.

* entry: archivo de entrada, todo el bundle final va a estar compuesto de los elementos que necesita el entry point
* output: es único, se pueden configurar varios puntos de salida
    * path: indicar dónde generar el outpu
    * publicPath
    * filename: Como se llama el bundle
* module: Donde van las rules de ransformaciones
  * rules: nos permiten que en ese proceso de entrada y salida que se va a generar se corran procesos intermedios, que se apliquen tranformaciones o compilaciones intermedias entre que se genere la entrada y salida.
    * test: aplica una expreion regular a los archivos dónde se van a ejecutar la regla
    * loaders: loader a usar
    * options: compile cosas con los loaders
    * exclude: 
  * resolve: para decirle a vueJs los archivos a compilar
  * devServer: necesario webpack
  * performance: pistas que da webpack del performance
  * devtoll: sourcemap de nuestro código

babel ejecuta código para los browser más obsoletos

``` javascript
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
```

## Babel 
es un transpilador de código. Una herramienta que transforma y compila nuestro código. Esto quiere decir que nos permite escribir en un código compatible con cualquier navegador.

* babel-core: es lo que nos permite la compilación
* babel-loader: es la regla que nos permite transformar nuestro código a través de Webpack
* babel-preset-env: es el conjunto de plugins que utiliza babel para transformar nuestro código
.babelrc

``` json
{
  "presets": [
    ["env", { "modules": false }]
  ]
}
```
https://github.com/webpack-contrib/webpack-hot-middleware
https://github.com/webpack/webpack-dev-middleware