Contruido sobre RUST

* Top level await, elimina los callback hell, usa async await por defecto, es decir, que puedo hacer `await` directamente 

```js
const response = await fecth('')
const data = await response.json();
```

* Browser api compatible, permite ejecutar cosas como fetch que son propias del navegador en el servidor, y al contrario, cosas del servidor en el navegador

* secury by default, no te deja acceder a cosas de la red si utilizar un flag específico
* Incluye las ultimas versiones de js 
* Hay que indicarle a los ficheros las extensiones cuando estemos importando.
* Tiene soporte binario para webassembly
* No tiene un package.json, los modulos van directamente en los fichero de importación y cuando ejecutes Deno, se los descarga