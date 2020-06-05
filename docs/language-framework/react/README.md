# DOM, Virtual DOM y React DOM
El DOM es el código HTML que se transforma en páginas web.

Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.

Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.

Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.

> npx create-react-app nombre-de-tu-proyecto
> npm start

## Creación y Tipos de Componentes
Los nombres de nuestros componentes deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como *Pascal Case o Upper Camel Case*.

Los componentes **Stateful** son los más robustos de React. Los usamos creando clases que extiendan de `React.Component.` Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).

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
También tenemos componentes **Stateless** o **Presentacionales**. Los usamos creando funciones que devuelvan código en *formato JSX* .
``` js
import React from 'react';

const Stateless = () => {
  return (
    <h1>¡Hola!h1>
  );
}

// Otra forma de crearlos:
const Stateless = () => <h1>¡Hola!h1>;

export default Stateless;
``` 