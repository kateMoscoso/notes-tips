
# React Router
## Route

Las rutas que añadamos debemos definirlas con el componente `Route` y estas deben estar encapsuladas dentro del componente `BrowserRouter` del paquete de `react-router-dom`. Para definir una ruta con el componente Route debemos pasarle las props de:

* path para indicar la url.
* exact si queremos que funcione única y exactamente con la url que le digamos.
* component para indicarle el componente que va a renderizar.

```js
<Route exact path="/player/:id" component={Player}/>
<Route component={NotFound}/>
```

Debemos modificar nuestra configuración del entorno de desarrollo local para que pueda funcionar con el uso de rutas, debemos ir al archivo webpack.config.js y añadir este fragmento de código antes de plugins:

```js
  devServer: {  
    historyApiFallback: true,  
  },
```

## Fragment
Fragment nos permite no añadir elementos extra al DOM, podemos utilizar Fragment de 2 maneras:

* Añadiendo el componente o .
* O implemente encapsulando nuestros elementos dentro de <>.

```js
    <React.Fragment>
        <h1>Not Found</h1>
    </React.Fragment>
```

o 
```js
<>
    <h1>Not Found</h1>
</>
```

## ¿Que es Redux?

Redux nos permite tener un contenedor predecible del estado en aplicaciones creadas con JavaScript, Nos ayuda a escribir aplicaciones que se comportan de una manera consistente, Esto significa que *podemos utilizar esta lógica en aplicaciones del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.*

Uno de los principales uso que tiene `Redux` es con React pero puede ser implementado en cualquier librería o proyecto que este construido con JavaScript, lo cual incluye a Angular, Vue o algún otro framework o librería.

`Redux` nace de la arquitectura *Flux*, tomando inspiración del lenguaje funcional Elm y es creado por Dan Abramov y Andrew Clark en el 2015, Hoy en día es una de las librerías más utilizadas para el manejo del flujo de la información en aplicaciones.

Una de las principales motivaciones para crear Redux nace en resolver un problema y era el manejo del estado y el flujo de nuestras aplicaciones creadas en JavaScript. *Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación,* teniendo en cuenta esto, Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.

Redux es una librería muy pequeña que se puede incorporar en cualquier proyecto construido en JavaScript y se basa en tres principios:

* Única fuente de la verdad:
Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.

* El estado es de solo lectura
La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.

* Los cambios se realizan con funciones puras
Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.


## Creando el Store de Redux
Para crear un Store necesitamos llamar a la función `createStore` del paquete de redux pasándole los parámetros del `reducer` y `initialState`.

Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:

* **mapStateToProps:** es una función que le va a indicar al provider qué información necesitamos del store.
* **mapDispatchToProps:** es un objeto con las distintas funciones para ejecutar una action en Redux.
```js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';

const Player = props => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  return ();
};

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);

```
## Creando los reducers
Un action de Redux va a contener dos elementos:

* **type:** para indicar la acción que se va a ejecutar.
* **payload:** es la información que estamos mandando al reducer.
Dentro de los reducers usaremos un switch para separar la lógica por cada tipo de acción que tendremos en Redux.



```js
//traer los elementos que necesito del estado
const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  }
}
export default connect(mapStateToProps, null)(Home)
```

* para redirigir si hay cumplido con el login

```js
    props.history.push('/')
```


https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

https://addons.mozilla.org/es/firefox/addon/reduxdevtools/