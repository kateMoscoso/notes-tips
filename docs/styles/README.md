
## DOM, CSSOM, Render Tree y el proceso de renderizado de la Web

* **DOM:** Document Object Model. Define la estructura lógica de los documentos y el modo en que se accede y manipula un documento.
* **CSSOM:** CSS Object Model. It is basically a "map" of the CSS styles found on a web page. It is much like the DOM, but for the CSS rather than the HTML.
* **Render Tree:** es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

## Pasos que sigue el navegador para construir las páginas web:

* Procesa el HTML para construir el DOM.aa
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
* **Errores lógicos:** En estos la sintaxis es correcta, pero el código no hace lo que debería. El programa funciona, pero de forma incorrecta.s


 * [More CSS things](/html-css/css)


* Accesibilidadd

https://www.w3.org/WAI/
https://developer.mozilla.org/es/docs/Web/HTML/Atributos_Globales/tabindex
https://www.ssa.gov/accessibility/andi/help/install.html
https://support.apple.com/es-lamr/HT202362

https://storybook.js.org/

Flexbox es un modelo de layout que nos permite posicionar y organizar los elementos de una manera muy fácil y práctica en la pantalla
sus hijo directo flex item
en flexbox se maneja os ejes, el eje principal o el eje secundario
flex drection nos indica la dirección del eje


plugins vscode-icons