# Web 
Para comprender cómo funciona internet necesitamos conocer tres grandes conceptos:

* Clients (clientes): son los dispositivos a través de los cuales accedemos a los sitios web: un computador desktop, un teléfono, una laptop, etc.
* Internet: es toda la red formada por servidores y clientes que proveen y consumen contenidos web y se comunican entre sí a nivel global.
* Server (servidor): es un computador, ubicado en alguna parte de la red, que está prendido todo el tiempo, en el que se alojan o almacenan sitios web y sus recursos y al cual se accede a través de nombres de dominio (.com, .net, .pe, etc.). También se les conoce como hosting.

Las tres tecnologías básicas que debe conocer y manejar un Frontend son:

* HTML: es el lenguaje de marcado para hacer websites.
* CSS: hojas de estilos cascada, el diseño hecho código.
* JavaScript: es el único lenguaje que funciona actualmente dentro de los navegadores de manera nativa.


Sesiones del lado del servidor vs sesiones del lado del cliente
¿Qué es una sesión?
En terminos generales una sesion es una manera de preservar un estado deseado.

¿Qué es una sesion del lado del servidor?
La sesión en el lado del servidor suele ser una pieza de información que se guarda en memoria o en una base de datos y esta permite hacerle seguimiento a la información de autenticación, con el fin de identificar al usuario y determinar cuál es el estado de autenticación. Mantener la sesión de esta manera en el lado del servidor es lo que se considera “stateful”, es decir que maneja un estado.

¿Qué es una sesión del lado del cliente?
Las SPA (Single-page apps) requieren una manera de saber si el usuario esta autenticado o no. Pero esto no se puede hacer de una manera tradicional porque suelen ser muy desacopladas con el backend y no suelen refrescar la página como lo hacen las aplicaciones renderizadas en el servidor.

JWT (JSON Web Token) es un mecanismo de autenticación sin estado, lo que conocemos como “stateless”. Lo que significa que no hay una sesión que exista del lado del servidor.

La manera como se comporta la sesión del lado del cliente es:

Cuando el usuario hace “login” agregamos una bandera para indicar que lo esta.
En cualquier punto de la aplicación verificamos la expiración del token.
Si el token expira, cambiamos la bandera para indicar que el usuario no está logueado.
Se suele chequear cuando la ruta cambia.
Si el token expiró lo redireccionamos a la ruta de “login” y actualizamos el estado como “logout”.
Se actualiza la UI para mostrar que el usuario ha cerrado la sesión.

Buenas practicas con JSON Web token
En los últimos años se ha criticado fuertemente el uso de JSON Web Tokens como buena practica de seguridad. La realidad es que muchas compañías hoy en día los usan sin ningún problema siguiendo unas buenas practicas de seguridad, que aseguran su uso sin ningún inconveniente.

A continuación listaremos unos consejos que se deben tener en cuenta:

Evitar almacenar información sensible
Debido a que los JSON Web tokens son decodificables es posible visualizar la información del payload, por lo que ningún tipo de información sensible debe ser expuesto como contraseñas, keys, etc. Tampoco debería agregarse información confidencial del usuario como su numero de identificación o información medica, ya que como hablamos anteriormente, los hackers pueden usar esta información para hacer ingeniería social.

Mantener su peso lo más liviano posible
Suele tenerse la tentación de guardar toda la información del perfil en el payload del JWT, pero esto no debería hacerse ya que necesitamos que el JWT sea lo más pequeño posible debido a que al enviarse con todos los request estamos consumiendo parte del ancho de banda.

Establecer un tiempo de expiración corto
Debido a que los tokens pueden ser robados si no se toman las medidas correctas de almacenamiento seguro, es muy importante que estos tengan unas expiración corta, el tiempo recomendado es desde 15 minutos hasta un maximo de 2 horas.

Tratar los JWT como tokens opacos
Aunque los tokens se pueden decodificar, deben tratarse como tokens opacos, es decir como si no tuviesen ningún valor legible. Esto es porque desde el lado del cliente no tenemos manera de verificar si la firma es correcta, así que si confiamos en la información decodificada del token, alguien podría introducir un token invalido con otra información a propósito. Lo mejor, es siempre enviar el token del lado del servidor y hacer las verificaciones allí.

¿Donde guardar los tokens?
Cuando estamos trabajando con SPA (Single Page apps) debemos evitar almacenar los tokens en Local Storage o Session Storage. Estos deben ser almacenados en memoria o en una Cookie, pero solo de manera segura y con el flag httpOnly, esto quiere decir que la cookie debe venir del lado del servidor con el token almacenado. Más información: https://auth0.com/docs/security/store-tokens#single-page-apps

Silent authenticacion vs Refresh tokens
Debido a que es riesgoso almacenar tokens del lado del cliente, no se deberian usar Refresh Tokens cuando se trabaja solo con una SPA. Lo que se debe implementar es Silent Authentication, para ello se debe seguir el siguiente flujo:

La SPA obtiene un access token al hacer login o mediante cualquier flujo de OAuth.
Cuando el token expira el API retornara un error 401.
En este momento se debe detectar el error y hacer un request para obtener de nuevo un access token.
Si nuestro backend server tiene una sesión valida (Se puede usar una cookie) entonces respondemos con un nuevo access token.
Más información:

https://auth0.com/docs/api-auth/tutorials/silent-authentication
https://auth0.com/docs/tokens/refresh-token/current
Hay que tener en cuenta que para implementar Silent authentication y Refresh tokens, se require tener un tipo de sesión valida del lado del servidor por lo que en una SPA es posible que sea necesario una especie de backend-proxy, ya que la sesión no debería convivir en el lado del API server.

En el paso 2, si se esta usando alguna librería para manejo de estado como redux, se puede implementar un middleware que detecte este error y proceda con el paso 3.

https://auth0.com/docs/tokens/token-storage#single-page-apps

## ¿Qué son las cookies y cómo implementar el manejo de sesión?
Una cookie es un archivo creado por un sitio web que tiene pequeños pedazos de datos almacenados en él. Su propósito es identificar al usuario mediante el almacenamiento de su historial.

Las cookie session son cookies que tienen un corto periodo de vida ya que son removidas cuando el navegador o la pestaña se cierran.

Las persistent cookies se usan generalmente para guardar información de interés para el usuario.

Las secure cookies almacenan datos de forma cifradas para que terceros no puedan tener acceso a ellas, se suelen usar en conexiones HTTPS (Conexiones seguras).

Hay leyes sobre cookies que debes seguir al pie de la letra:

Avisarle al usuario que estás haciendo uso de cookies en tu sitio para guardar información
Es necesario que el usuario de su consentimiento para manejar cookies en tu sitio