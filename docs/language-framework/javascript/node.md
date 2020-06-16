# Node
Node.js es un entorno de ejecución para JavaScript construido con el motor JavaScript V8 de Chrome.
## Entorno de ejecución
Es una capa encima del sistema operativo que ejecuta una pieza de software. Esta capa es la que decide como se consume la memoria, como accede a las variables, como debe pasar los parámetros, cuando y como ejecutar el garbage collector. 
V8 es un engine de js
El lenguaje intgerpretado es más rápido que el compilado pero cuando pasa por un loop es más lento porque cada vez que pasa por el loop tiene que volver a interpretarlo. Los lenguajes compilado se demoran mucho en cargar pero cuando se ejecutan son más rápidos.
Javascript se compila ahora con el just in time compiler. Esta tecnologia tiene un monitor que se encarga de mirar cada cuanto se ejecuta nuestro código, si el código se ejecuta mucho pone un estado warn y ese código lo compila, si ese código compilado se ejecuta mucho pasa a un estado hot, entonces se hace una versión optimizada de ese código
## Diferencias entre Js y nodejs

En `JavaScript` del lado del cliente tenemos el DOM y el CSSDOM así como el objeto window para manipular los elementos de nuestra página además una serie de APIs, aquí unos ejemplos:

* fetch
* SessionStorage y LocalStorage
* canvas
* bluetooth
* audio
* web authentication

Mientras que en `Node.js` no tenemos un DOM ni un objeto windows, lo que sí tenemos son una serie de módulos que nos permiten interactuar con los recursos de la máquina como el sistema operativo y el sistema de archivos, por ejemplo:

* os
* fs
* http
* util
* debugger
* stream
* events

## ¿Qué es el event Loop?

Un proceso con un bucle que gestiona, de forma asíncrona, todos los eventos de tu aplicación. El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Los eventos vienen desde la cola de events (event queue).
Se envian de uno a uno al event Loop, si los puede procesar los procesa.
Si no los puede procesar, los enviará al **Tread Pool**, dónde se getionarán de forma asincrona(peticiones bd, api, etc).
Node para cada proceso del thread pool levantará un hilo nuevo y ese será el encargado de procesas la petición.
Vuelve al event Loop, el event Loop si esta ejecutando otra cosa, lo envia otra vez al event queue.

* [Nodemon](https://nodemon.io/)
* [pm2](https://pm2.keymetrics.io/)
    pm2 start nombre
    pm2 stop id

Event Loop


Javascript se organiza usando las siguientes estructuras de datos:

* **Stack.** Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
* **Memory Heap.** De forma desorganizada se guarda información de las variables y del scope.
* **Schedule Tasks**. Aquí se agregan a la cola, las tareas programadas para su ejecución.
* **Task Queue.** Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
* **MicroTask Queue.** Aquí se agregan las promesas. E*sta Queue es la que tiene mayor prioridad*.
El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.
El evento Loop l va a dar mś prioridad a las tareas del microTask(promises) que las del task qeue(stTimeout)
### Callbacks
Pasar una función o algo que quiero que se ejecute a otra función. 

``` js
withCallback: function(nombre, cb) {
        setTimeout(()=>{
            cb(nombre)
        }, 5000);
    }
``` 
### Promise
``` js
new Promise ( (resolve, reject) => {

})
```
### Async/Await
Esperar a que se ejecuten las operacion. Hay que definir las funciones como `async` para poder usar el `await`
``` js
async function main() {
    await hablar();
}
``` 

### Modulos importantes de node
* SetInterval
* ClearInterval
* require('fs')
* console.table(), console.group(), console.groupEnd()


### Gestión de errores
``` js
function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi función asícnrona');
            cb(err);
        }
    })
}

try {
    //otraFuncion();
    seRompeAsincrona(function (err) {
        console.log (err.message)
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}
```

### [Procesos](https://nodejs.org/api/process.html)

* exec
``` js
const { exec } = require('child_process');

 exec('ls -la', (err, stdout, sterr) => {
     if (err) {
         console.error(err);
         return false;
     }
     console.log(stdout);
 })

```

* Spawn

``` js
const { spawn } = require('child_process');
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString())
});

proceso.on('exit', function() {
    console.log('el proceso terminó');
    console.log(proceso.killed)
})

``` 
* Nuevos imports 
``` js
import module from ''
```
> node --experimental-module index.js

## Bcrypt

``` js
const password = '1234Segura!';

bcrypt.hash(password, 5, function(err, hash) {
    console.log(hash); 

    bcrypt.compare('password', hash, function(err, res) {
        console.log(res)
    })
});
``` 

## moment
``` js
let ahora = moment();

console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
``` 
## Calcular lo que tarda en ejecutar una funcion

``` js
let suma = 0;
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');
``` 

## Error first callback
Pasar siempre como primer parámetro el error
``` js
function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}


asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
        // throw err; // NO VA A FUNCIONAR
    }

    console.log('todo ha ido bien, mi data es', dato);
})
``` 

## Arquitectura orientada a eventos
Los eventos permite manejar el código asicrono de una mejor manera

### Event emitter

```js
//moduloe nativo de node
const EventEmmiter = require("events");
// registrase a los eventos
logger.on("start", () => console.log("Starting"));
```
## Streams
Los Streams son una colección de datos como los arrays o strings sólo que se van procesando pedazo por pedazo, esta capacidad los hace muy poderosos porque podemos manejar una gran cantidad de datos de manera óptima.

* Crear un fichero
```js
const fs = require("fs");
const file = fs.createWriteStream("./big");

for (let i = 0; i <= 1e6; i++) {
  file.write(
    "Palabras random "
  );
}

file.end();
```
* Forma de crear un servidor para leer desde un fichero sin que consuma mucha memoria

```js
const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream('./big');
  src.pipe(res);
});

server.listen(3000);
```

Los Readable y Writeable streams tienen los siguientes eventos y funciones respectivamente. Recuerda que tienen estos eventos porque los heredan de la clase EventEmitter.

### Readable streams
* Eventos
   * data. Se dispara cuando recibe datos.
   * end. Se dispara cuando termina de recibir datos.
   * error. Se dispara cuando hay un error.
* Funciones
   * pipe
   * unpipe
   * read
   * push

```js
const { Readable } = require('stream');
const readableStream = new Readable();

readableStream.push(`${0/0} `.repeat(10).concat("Batman, Batman!"));
readableStream.push(null); //sabe que deja de recibir datos

readableStream.pipe(process.stdout);
```

### Writeable streams
* Eventos
   * drain. Se dispara cuando emite datos.
   * finish. Se dispara cuando termina de emitir.
   * error. Se dispara cuando hay un error.
* Funciones
   * write
   * end

* Ejemplo leer dato e imprimirlos
```js

const { Writable } = require("stream");

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(writableStream);
//funcionalidad nativa que se encarga de leer los datos
```

### Duplex y Transforms streams
Ambos sirven para simplificar nuestro código:

* Duplex: implementa los métodos write y read a la vez.
* Transform: es similar a Duplex pero con una sintaxis más corta.

```js
const { Duplex } = require("stream");

const duplexStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    if (this.currentCharCode > 90) {
      this.push(null);
      return;
    }

    this.push(String.fromCharCode(this.currentCharCode++));
  }
});

duplexStream.currentCharCode = 65;
```

```js
const { Transform } = require("stream");

const transformStream = new Transform({
  transform(chunk, enconding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(transformStream).pipe(process.stdout);
```

## Sistema operativo y sistema de archivos
En esta clase vemos dos módulos básicos:

* **os.** Sirve para consultar y manejar los recursos del sistema operativo.
* **fs.** Sirve para administrar (copiar, crear, borrar etc.) archivos y directorios.
Los métodos contenidos en estos módulos (y en todo Node.js) funcionan de forma asíncrona por default, pero también se pueden ejecutar de forma síncrona, por ejemplo el método readFile() tiene su versión síncrona readFileSync().

* Leer lo que pasa por la terminal `process.argv`
* Set fichero estático 
```js 
app.use(express.static(path.join(__dirname, '/public')))
app.use('/css', express.static(path.join(__dirname, '/node_modules/ddddd'))
app.use('/js', express.static(path.join(__dirname, '/node_modules/ddddd'))
```