
## DOM, CSSOM, Render Tree y el proceso de renderizado de la Web

* **DOM:** Document Object Model. Define la estructura lógica de los documentos y el modo en que se accede y manipula un documento.
* **CSSOM:** CSS Object Model. It is basically a "map" of the CSS styles found on a web page. It is much like the DOM, but for the CSS rather than the HTML.
* **Render Tree:** es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

Pasos que sigue el navegador para construir las páginas web:

* Procesa el HTML para construir el DOM.
* Procesa el CSS para construir el CSSOM.
* El DOM se une con el CSSOM para crear el Render Tree.
* Se aplican los estilos CSS en el Render Tree.
* Se ““pintan”” los nodos en la pantalla para que los usuarios vean el contenido de la página web.

## Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos

Nuestros elementos HTML se componen de:

* **Etiqueta de apertura:** el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor. Por ejemplo: `<h1>`.
* **Contenido:** dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como anidamiento.
* **Etiqueta de cierre:** son casi iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: </h1>.

Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: 

`<etiqueta atributo="valor del atributo">. Por ejemplo: <h1 class="saludo">`.

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos. Por ejemplo: 

`<img src="puppy.png" alt=""mi mascota"">`

h1 siempre va a ser el principal y el h6 el de menos tamaño.

## La importancia del código semántico
La semántica HTML no es más que darle sentido y estructura a lo que estas escribiendo. Muy importante para el navegador. No todos los elementos deberían ser un div.

## Tipor de errores:

* **Errores sintácticos:** Son errores de escritura en el código y evitan que el programa funcione. Pueden ser errores de tipado.
* **Errores lógicos:** En estos la sintaxis es correcta, pero el código no hace lo que debería. El programa funciona, pero de forma incorrecta.

## Anatomía de una declaración CSS: Selectores, Propiedades y Valores

Nuestros estilos con CSS se componen de:

* **Selector:** son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre ({}). Por ejemplo: `h1 {}`.
* **Propiedades:** son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos (:). Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en un mismo selector. Por ejemplo: `h1 { color: }`.

* **Valores:** son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma (;). Por ejemplo: 

```
h1 {
  color: red;
}
```

## Tipos de selectores, pseudo-clases y pseudo-elementos
* *(asterisco): Es el selector universal. Las propiedades se aplicaran a todos los elementos de nuestro HTML.

* **Tipo:** Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicaran a la etiqueta que queremos, por ejemplo p, body, html, div, etc. No es recomendable usarlos en app grandes

* **Clase:** Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.

* **ID:** Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento. No es aconsejable usar id

* **Las Pseudo-clases y Pseudo-elementos** nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.

Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: p:first-child). En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces (p::first-letter).
n-> numerto cualquiera
th-> referencia a los números en inglés
😁

```
/* Asterisco (universal) */
* {
  margin: 0;
}

/* Tipo */
h1 {
  color: red;
}

/* Clase */
.saludo {
  font-size: 2em;
}

/* ID */
#id {
  border-radius: 20px;
}

/* Pseudo-clases */
p:first-child {
  color: white;
}

p:last-child {
  color: purple;
}

p:nth-child(2n) {
  color: red;
}
```

## Modelo de caja [here](https://devcode.la/tutoriales/modelo-caja-css/)
Todos los elementos de HTML tienen un modelo de caja y esta compuesto por cuatro elementos: contenido, padding, border, margin.
Padding siempre afecta al tamaño de la caja.

* [Color hunt](https://colorhunt.co/)
* box-sixing: border-box //respeta el tamaño definido