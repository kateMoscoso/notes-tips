## [Webs estáticas](https://en.wikipedia.org/wiki/Static_web_page)
Son webs sencillas, estáticas que no requieren mucha interacción con el usuario. Por ejemplo, blogs, documentación. Usan la arquitectura [Jamstack](https://medium.com/@khriztianmoreno/jamstack-y-c%C3%B3mo-los-sitios-web-son-cada-vez-m%C3%A1s-r%C3%A1pidos-c4c0a4964ad6)



## SPA (Single Page Application)
Es una app web que se carga desde un fichero (index.html)
es una aplicación web o es un sitio web que cabe en una sola página con el propósito de dar una experiencia más fluida a los usuarios, como si fuera una aplicación de escritorio. En un SPA todos los códigos de HTML, JavaScript, y CSS se cargan una sola vez1​ o los recursos necesarios se cargan dinámicamente cuando lo requiera la página, normalmente como respuesta a las acciones del usuario. La página no tiene que cargarse de nuevo en ningún punto del proceso y tampoco es necesario transferir a otra página, aunque las tecnologías modernas 
A Single Page Application (SPA) is defined as a web app that loads from a single page and dynamically updates that page as the user interacts with the app. However, if we’re using a single page application we need a way to navigate between content (client-side routing).
 
## Pre-rendering SPA

Cuando se esta construyendo el proyecto se genera toda la web de tal forma que cuando el usuario carga la web, se carga todo.

## SSR ( Server Side Rendering)
* Servidor enviando respuesta en HTML para ser renderizada en e navegador 
* Navegador renderizael sitio. Ahora es visile mientras el navegador descarga el JS
* Navegador ejecuta React
* El sitio es interactivo
### Ventajas
* Primera carga más rápida
* Mejor SEO
* Look & Feel

## CSR (Client Side Rendering)
* Servidor enviando respuesta al navegador
* Navegador descarga JS
* Navegador ejecut React
* El sitio ahora e visible e interactuable
