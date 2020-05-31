
* ¿Qué significa REST? y ¿qué es una API RESTful?
REST es un acrónimo de Representational State Transfer o transferencia de estado representacional, le agrega una capa muy delgada de complejidad y abstracción a HTTP. Mientras que `HTTP` es transferencia de archivos, REST se basa en la transferencia de recursos.
Una API RESTful es una API diseñada con los conceptos de REST:
* **Recurso:** todo dentro de una API RESTful debe ser un recurso.
* **URI:** los recursos en REST siempre se manipulan a partir de la URI, identificadores universales de recursos.
* **Acción:** todas las peticiones a tu API RESTful deben estar asociadas a uno de los verbos de HTTP: 
    * GET para obtener un recurso
    * POST para escribir un recurso. 
    * PUT para modificar un recurso.
    * DELETE para borrarlo.
    
REST es muy útil cuando:
* Las interacciones son simples.
* Los recursos de tu hardware son limitados.
* No conviene cuando las interacciones son muy complejas.

## Métodos de autenticación con REST
### Autenticación vía HMAC
Para esta autenticación necesitamos 3 elementos:
* Función Hash: Difícil de romper, que sea conocida por el cliente y servidor.
* Clave secreta: Solamente la pueden saber el cliente y el servidor, será utilizada para corroborar el hash.
* UID: El id del usuario, será utilizado dentro de la función hash junto con la clave secreta y un timestamp.
Es mucho más segura que la autenticación vía HTTP, por ello la información que se envía a través de este método no es muy sensible.

### Autenticación vía Access Tokens
Está forma es la más compleja de todas, pero también es la forma más segura utilizada para información muy sensible. El servidor al que le van a hacer las consultas se va a partir en dos:
* Uno se va a encargar específicamente de la autenticación.
* El otro se va a encargar de desplegar los recursos de la API.
* El flujo de la petición es la siguiente:
    * Nuestro usuario hace una petición al servidor de autenticación para pedir un token.
    * El servidor le devuelve el token.
    * El usuario hace una petición al servidor para pedir recursos de la API.
    * El servidor con los recursos hace una petición al servidor de autenticación para verificar que el token sea válido.
    * Una vez verificado el token, el servidor le devuelve los recursos al cliente.
    * Manejo de errores de un servicio REST
    * De momento nuestra API no nos indica que haya ocurrido un error, solamente nos regresa un código 200 de HTTP que significa que la petición se realizó sin problemas.

Para mejorar nuestra API añadiremos respuestas con los códigos HTTP más comunes:
* *400 Bad Request:* indica que el servidor no puede o no procesa la petición debido a algo que es percibido como un error del cliente
* *404 Not Found:* el servidor no encuentra el recurso solicitado.
* *500 Internal Server Error:* la petición no pudo procesarse por un error del servidor.
* [More](https://www.restapitutorial.com/httpstatuscodes.html)

### Introducción a Ajax
Es muy común tener comunicaciones con API REST al momento de tener una aplicación de una sola página o SPA, ya sea para obtener o guardar datos. Esta comunicación se realiza a través de AJAX, `Asynchronous JavaScript XML.` la clave es la parte de asincronismo pues el cliente no se queda bloqueado.

7 Buenas prácticas del diseño de APIs RESTful

* Siempre utiliza sustantivos para nombrar tus recursos.
* Añade los nombres en plural para las urls.
* Las modificaciones a recursos deben hacerse con su verbo HTTP correspondiente: POST, PUT o DELETE.
* Para devolver recursos asociados a otro recurso utiliza url que incorporen subrecursos: Autos/1/Choferes.
* Navegabilidad vía vínculos.
* Cuando devuelvas colecciones deben ser filtrables, ordenables y paginables.
* Versiona tu API, añade el número de versión en la url: v1/Autos.

