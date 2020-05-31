# [Webpack](https://webpack.js.org/)
Empaquetador para Javascript. Convierte módulos con dependencias en archivos estáticos que los navegadores entienden.
Nos permite empaquetar, optimizar los diferentes módulos Javascript y sus dependencia en nuestro proyecto. Es usado en proyectos basados en Javascript como: React, Vue, Angular entre otros.
User Experience
Se logra con una aplicación que:
* Funcione
* Sea rápida
* Cumpla sus necesidades
* Se actualice
* Responda a sus interacciones
* Producto de calidad
Developer Experience
* Escribir aplicaciones de manera eficiente.
* Tener un código limpio.
* Aplicar tecnología para resolver sus problemas.
* Tener un conjunto de reglas y convenciones.
* Entorno de desarrollo optimizado en productividad.

Salva una versión explicita de una dependencia `--save-exact`

### [webpack-cli](https://webpack.js.org/api/cli/).
API que expone webpack en forma de CLI (Command Line Interface) que nos va a permitir interactuar y configurar Webpack desde la terminal.
El comando webpack tiene una bandera llamada `--mode `que nos permite cambiar entre los modos producción y desarrollo. Recuerda que por defecto nos pone en modo producción si no la especificamos.

```
npx webpack -v
npx webpack --entry ./index.js --output ./bundle.js --mode development
```

### Iniciando un webpack.config
Al ir creciendo nuestra configuración de Webpack iremos agregando cada vez más configuración esto lo haremos por medio de un archivo llamado por defecto `webpack.config.js`.
Este archivo permite importar módulos usando el formato commonJS y recibe por lo menos dos configuraciones básicas, un entry y un output.
* **Entry Point:** Es la ruta del archivo principal de nuestra aplicación JS a ser procesado por Webpack. Se pueden tener varios Entry Points.
* **Output:** Es la ruta de salida donde va a generar nuestro bundle con todos nuestros archivos especificados como Entry Points empaquetados en uno sólo.
