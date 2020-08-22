# Principios

## S.O.L.I.D

### Single responsability
Principio de responsabilidad única establece que un módulo de software **debe hacer una y solo una cosa.** Este principio limita el impacto frente a un cambio. Su aplicación ayuda a que el código tenga una alta cohesión y un bajo acoplamiento.

* *Cohesión*: Un módulo tiene un alto grado de cohesión si mantiene *unidas* cosas que están relacionadas entre ellas y mantiene fuera el resto.

* *Acoplamiento*: Acoplamiento es la medida de la fortaleza de la asociación establecida por una conexión entre módulos dentro de una estructura software.

::: tip
Ejemplo de la navaja, una navaja solo puede tener una cosa, no como una navaja suiza que tiene y hace muchas cosas.
::: 

### Open/Closed
Los módulos de software deben ser abiertos para su extensión pero cerrados para su modificación​.
* *Abierto para la extensión​:* esto significa que el comportamiento del módulo puede extenderse. A medida que cambian los requisitos de la aplicación, podemos ampliar el módulo con nuevos comportamientos que satisfagan esos cambios. En otras palabras, podemos cambiar lo
que hace el módulo.
* *Cerrado por modificación​:* un módulo estará cerrado si dispone de una descripción (interface) estable y bien definida. Extender el comportamiento de un módulo no debería afectar al código ya existente en el módulo, es decir, el código original del módulo no debería verse afectado y tener que modificarse. debemos esforzarnos por lograr que nuestro código esté estructurado de forma que, cuando el comportamiento cambie de la manera esperada, no debamos hacer cambios radicales en todos los módulos del sistema.

La forma de implementar este principio en el mundo práctico, es a través del polimorfismo, ya sea por interfaces o clases abstractas. Su comportamiento debe ser modificable por medio de otros objetos.

::: tip
Un camion sirve para moverse y cambiar cosas. Si le añado un modulo para tranportar persona, tranpostará personas
:::

### Liskov substitution

Esta dice que los objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar el correcto funcionamiento del programa.
Este principio nos ​ ayuda a utilizar la herencia de forma correcta y nos muestra que no se debe mapear automáticamente el mundo real en un modelo orientado a objetos, ya que no existe una equivalencia unívoca entre ambos modelos.

Cada clase que hereda de otra puede usarse como su padre sin necesidad de conocer las diferencias entre ellas.

:::tip
Se ve como un pato, hace cuak pero tiene batería entonces igual no es un pato.
Deberíamos poder usar una clase hija para sustituir a una clase padre sin obtener errores.
:::


### [Interface segregation](https://www.adictosaltrabajo.com/2014/10/27/solid-4/)

Muchas interfaces cliente específicas son mejores que una interfaz de propósito general​. Ninguna clase debería depender de métodos que no usa.
Si una interfaz crece demasiado pierde su objetivo y viola el primer principio.

:::tip
Hay pajaros que vuelan, que nada, que corren pero no todos hacen lo mismo, no puedo tener una clase padre Pajaro que tenga volar y nadar. Debo de crear dos interfaces pajaro volador y pajaro nadador.
Si una interfaz crece demasiado pierde su objetivo y viola el primer principio.
:::

### Dependency inversion

El principio de inversión de dependencia nos dice que ​ las entidades de software deben depender de abstracciones, no de implementaciones​. A su vez, los módulos de alto nivel no deberían depender de los de bajo nivel. Ambos deberían depender de abstracciones.

Mediante este principio ocultamos los detalles de implementación, ganando en flexibilidad. Cuando estamos haciendo tests, podemos reemplazar dependencias reales por objetos mockeados.

:::tip
Le pasamos al constructor interfaces que puede implementar una clase, así, le podemos pasar los distintos objetos que implementa esa interfaz.
:::