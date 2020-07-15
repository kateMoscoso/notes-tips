# React
React cumple su función como biblioteca, ya que, para utilizar su código se debe importar. También es un Framework aunque las convenciones de cómo debe ser organizado todo no son estrictas.

React es declarativo, lo que quiere decir que se le indica qué debe hacer pero no cómo debe hacerse, ahorrando de esta manera muchos pasos.

JSX es HTML dentro de Javascript.

React está estructurado por componentes que son como pequeños bloques de lego que al ser unidos forman aplicaciones de React. Estos componentes pueden tener estilos, ser enlazados a eventos y sus estados pueden ser modificados.

Con React también se tiene la ventaja de que será escrito una sola vez y podrá ser utilizado en aplicaciones web, móviles, entre otras.

## DOM, Virtual DOM y React DOM
El DOM es el código HTML que se transforma en páginas web.

Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

**El Virtual DOM** es una herramienta que usan tecnologías como **React** y **Vue** para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones. Es una copia exacta del DOM, pero mucho más ligera, ya que, los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

::: tip
Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.
::: 

Para crea un proyecto en React, ejecutamos lo siguiente

> npx create-react-app nombre-de-tu-proyecto
> npm start

## Creación y Tipos de Componentes
Los nombres de nuestros componentes deben empezar con una **letra mayúscula**, al igual que cada nueva palabra del componente. Esto lo conocemos como *Pascal Case o Upper Camel Case*.


* **Stateful:** más conocido como la estructura de clases. Los componentes **Stateful** son los más robustos de React. Los usamos creando clases que extiendan de `React.Component.` Nos permiten manejar estado y ciclo de vida .


``` js
import React, { Component } from 'react';

class Stateful extends Component {
    constructor(props) {
      super(props);
  
      this.state = { hello: 'hello world' };
    }
  
    render() {
      return (
        <h1>{this.state.hello}</h1>
      );
    }
  }

export default Stateful;
```

* **Stateless** o **Presentacionales**  Los usamos creando funciones que devuelvan código en *formato JSX* .

``` js
import React from 'react';

const Stateless = () => {
  return (
    <h1>¡Hola!</h1>
  );
}

// Otra forma de crearlos:
const Stateless = () => <h1>¡Hola!</h1>;

export default Stateless;
``` 

## JSX: JavaScript + HTML
Estamos acostumbrados a escribir código HTML en archivos .html y la lógica de JavaScript en archivos .js.

React usa JSX: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.

## Props: Comunicación entre Componentes
Las Props son la forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

## Ciclo de vida

Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.

### Montaje:
En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

### Actualización:
En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

### Desmontaje:
En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

### Manejo de Errores:
Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.

### Montado:
**Constructor()**

Este es el primer método al que se hace un llamado, aquí es donde se inicializan los `métodos controladores, eventos del estado`.

**getDerivedStateFromProps()**

Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

**render()**

Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

**ComponentDidMount()**

Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

### Actualización:
**getDerivedStateFromProps()**

Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

**shouldComponentUpdate()**

Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

**render()**

Se llama el método render que representa los cambios en el DOM.

**componentDidUpdate()**

Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

### Desmontado
**componentWillUnmount()**

Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

### Manejo de Errores:
**getDerivedStateFromError()**

Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

**componentDidCatch()**

Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.


## State - Events
"React nos permite responder a las interacciones de los usuarios con propiedades como onClick, onChange, onKeyPress, onFocus, onScroll, entre otras.

Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios. Seguramente, esta función usará la función this.setState para actualizar el estado de nuestro componente.

```js
import React from 'react';

class Button extends React.Component {
  state = { count: 0 }

  handleClick = () => (
     this.setState({ count: this.state.count + 1 })
  );

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Manzanas: { count }</h1>
        <button onClick={ this.handleClick } >Sumar</button>
      </div>
    );
  }
}

export default Button;
```

## React Hooks: useEffect y useState

una característica de React disponible a partir de la versión 16.8 que nos permite agregar estado y ciclo de vida a nuestros componentes creados como funciones.
Se hizo porque se tenía mcuha complejidad entre la cascada de elemnetos al pasarle las propiedades
con useState voy a poder manejar mi estado y con useEffect voy a poder hacer las transmiciones, es decir hacer peticiones de una API o algún evento que se tenga que transmitir entre nuestro componentes, asi como, escuchar algún cambio que sea  necesario
El Hook useState nos devuelve un array con dos elementos: la *primera* posición es el valor de nuestro estado, la *segunda* es una función que nos permite actualizar ese valor.

El argumento que enviamos a esta función es el valor por defecto de nuestro estado (initial state).

```js
import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  return <div>{name}div>;
}
```

El Hook **useEffect** nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

*El primer argumento* que le enviamos a *useEffect* es *una función que se ejecutará* cuando React monte o actualice el componente. Esta función puede devolver otra función que se ejecutará cuando el componente se desmonte.

*El segundo argumento* es un array donde podemos especificar qué propiedades deben cambiar para que React vuelva a llamar nuestro código. Si el componente actualiza pero estas props no cambian, la función no se ejecutará.

::: tip
Por defecto, cuando no enviamos un segundo argumento, React ejecutará la función de useEffect cada vez que el componente o sus componentes padres actualicen. En cambio, si enviamos un array vacío, esta función solo se ejecutará al montar o desmontar el componente.
:::

```js

import React, { useState, useEffect } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  useEffect(() => {
    document.title = name;
    return () => {
      document.title = 'el componente se desmontó';
    };
  }, [name]);

  return <div>{name}div>;
}
```

## Custom Hooks
React nos permite crear nuestros propios Hooks. Solo debemos seguir algunas convenciones:
Nos va a permitir separar la lógica de los componentes a una función que vamos a poder utilizar en cualquier otro lugar
* Los hooks siempre deben empezar con la palabra use: useAPI, useMovies, useWhatever.
* Si nuestro custom hook nos permite consumir/interactuar con dos elementos (por ejemplo, title y setTitle), nuestro hook debe devolver un array.
* Si nuestro custom hook nos permite consumir/interactuar con tres o más elementos (por ejemplo, name, setName, lastName, setLastName, etc.), nuestro hook debe devolver un objeto.


## [PropTypes](https://es.reactjs.org/docs/typechecking-with-proptypes.html)
Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

Instalación de PropTypes:

> npm install --save prop-types
Uso de PropTypes:

```js

import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ name, lastName, age, list }) => {
  // ...
};

Component.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  list: PropTypes.array,
};

export default Component;
```

Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo isRequired.

``` js

Component.propTypes = {
  name: PropTypes.string.isRequired, // obligatorio
  lastName: PropTypes.string.isRequired, // obligatorio
  age: PropTypes.number, // opcional,
  list: PropTypes.array, // opcional
};
```
