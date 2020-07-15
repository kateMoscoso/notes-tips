# Dom 
El **DOM** es la representación que hace el navegador de un documento HTML.DOM es el acrónimo de Document Object Model o Modelo de documento, y es la manera en que se representa el contenido del documento, de manera similar a un árbol de nodos.

A continuación, un ejemplo sencillo de la estructura del DOM:

* html
  * head
    * title
    * meta
  * body
    * header
      * nav
    * section
      * article
  * footer

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento DOMContentLoaded lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

Tanto con `async` como `defer` podemos hacer llamados asíncronos pero tiene sus diferencias:

* async. Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
* defer. La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento, procesamiento del html, así, no se para el procesamiento del html


::: tip
Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.
:::

## Etiquetas

* Etiquetas de cabecera (head):

  * **doctype:** indica al navegador el tipo de documento que se está mostrando.
  * **html:** es la etiqueta que envuelve todo el documento
  * **head:** es la cabecera del documento y contiene sub etiquetas que describen al documento o incluyen recursos adicionales.

* Etiquetas del cuerpo del documento (body):

  * **article:** diferencia partes del contenido que pueden vivir por sí mismas.
  * **nav:** para hacer menús de navegación.
  * **aside:** contenido menos relevante, como publicidad, etc.
  * **section:** sirve para diferenciar las secciones principales del contenido.
  * **header:** cabecera del documento.
  * **footer:** pie de página del documento.
  * **h1 - h6:** títulos de nuestro sitio web.
  * **table:** tablas de contenidos, similar a la estructura de las hojas de calculo.
  * **ul y ol:** listas de items.
  * **div:** cualquier división para organizar el contenido.
  * **p:** define el texto de un párrafo.
  * **small:** aplica una apariencia de texto reducido en tamaño.
  * **strong:** aplica al texto un formato de negritas.
  * **a:** corresponde a un ancla o enlace a una url interna o externa del documento.
  * **img:** con esta etiqueta podemos enlazar imágenes en el documento.
  * **figure:** le da un contexto semántico a las imágenes.