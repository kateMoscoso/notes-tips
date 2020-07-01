

# Css
* Reglas
* Selectores
* Declaraciones, son todo lo que hacemos con los selectores
* Propiedades
* Valores
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

* **Etiqueta:**  Referencia al tag html que se quiere manipular
* **Decendente:** Elemento hijo de algún otro elemento
* ***(asterisco):** Es el selector universal. Las propiedades se aplicaran a todos los elementos de nuestro HTML.

* **Tipo:** Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicaran a la etiqueta que queremos, por ejemplo p, body, html, div, etc. No es recomendable usarlos en app grandes

* **Clase:** Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento.

* **ID:** Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento. No es aconsejable usar id

* **Las Pseudo-clases y Pseudo-elementos** nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.

Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: p:first-child). En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces (p::first-letter).
n-> numerito cualquiera
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

Valores relativos y absolutos
Los valores absolutos son, por ejemplo, centímetros, milímetros, pixeles y pulgadas. Se llaman de esta forma porque no tienen en cuenta a nadie más, no depende de la medida de otra unidad.

Los valores relativas, llevan este nombre porque depende de otra unidad de medida o elemento. Por ejemplo, porcentajes, vmx, em, entre otros.

Recuerda que podemos darle estilos a etiquetas HTML muy específicas indicando dónde se van a encontrar. Por ejemplo: si queremos darle estilos únicamente a la imagen que está dentro del header, podemos usar el selector css header img { ... }.

## Arquitecturas css
tienen que ser :
 * Predecible
 * Reutilizable
 * Mantenibles
 * Escalable

 ## Buenas prácticas 

 * Establecer reglas del equipo
 * Explicar la estructura base
 * Establecer estándares de codificación
 * Evitar largas hojas de estilo
 * Documentación


* **OOCSS:** Object Oriented CSS. Css orientado a objetos. [more](https://www.keycdn.com/blog/oocss)
* **BEM:** Block element modifier [more](http://getbem.com/naming/)
* **SMACSS:** Scalable and Modular Architecture for Css
* **ITCSS:** Inverted Triangle CSS, [more](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
* **Atomic Design:**
* **Componente Css** [more](https://www.keycdn.com/blog/oocss)

# ¿Qué es un componente? Analicemos nuestros diseños

Un componente, tanto en diseño como desarrollo web, es un elemento muy pequeño que tiene la capacidad de ser reutilizado en diferentes partes de una aplicación. Por ejemplo: botones, iconos, cards, entre otras. Puedes apreciarlos en las plataformas que visitas todos los días: Twitter, Facebook, Platzi, YouTube y muchas más.

El selector ~ de CSS nos permite dar estilos a todos que cumplan los requisitos y sean “hermanos directos”, es decir, que tengan el mismo elemento padre.

```
.PrimerTitulo ~ h2 {
  background-color: red;
}
```


También existe el selector +. Solo aplica los estilos al primer hermano directo de nuestros elementos.

```
.PrimerTitulo + h2 {
  background-color: blue;
}
```




##  Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://flexboxfroggy.com/

Con CSS Grid podemos maquetar todo el layout/estructura general de nuestro sitio para que se adapten a diferentes tamaños de pantalla, lo que conocemos como diseño responsivo.

Al igual que Flebox, tenemos propiedades diferentes, tanto para el contenedor como para los elementos, y podemos usarlos dependiendo de nuestras necesidades.

## Css grid
https://labs.jensimmons.com/
https://cssgridgarden.com/

## Media queries
Los media queries nos ayudan a ajustar nuestros diseño a dispositivos más pequeños como tablets y celulares.

Es recomendable seguir la metodología de Mobile First: comenzar a diseñar para el dispositivo más pequeño e ir creando las media queries para las pantallas más grandes.


## Preprocesador

Un preprocesador CSS es un programa que te permite generar CSS a partir de la syntax única del preprocesador. Existen varios preprocesadores CSS de los cuales escoger, sin embargo la mayoría de preprocesadores CSS añadiran algunas características que no existen en CSS puro, como variable, mixins, selectores anidados, entre otros. Estas características hacen la estructura de CSS más legible y fácil de mantener.

Para utilizar un preprocesador CSS debes instalar un compilador CSS en tu web  server.

sass

```
npm install -g sass
```

https://github.com/teffcode/sass-workshop

## PostCSS 
Es un post-procesador de CSS, que a diferencia de los pre-procesadores, se apoya de JavaScript para tener más control sobre el archivo CSS resultante. Entonces, un post-procesador a diferencia de un pre-procesador, no es un cambio de sintaxis, es una nueva plataforma para crear estilos
