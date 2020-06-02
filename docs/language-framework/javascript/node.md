# Node
Orientado a eventos
¿Qué es el event Loop?

Un proceso con un bucle que gestiona, de forma asíncrona, todos los eventos de tu aplicación.

Los eventos vienen desde la cola de events (event queue).
Se envian de uno a uno al event Loop, si los puede procesar los procesa.
Si no los puede procesar, los enviará al **Tread Pool**, dónde se getionarán de forma asincrona(peticiones bd, api, etc).
Node para cada proceso del thread pool levantará un hilo nuevo y ese será el encargado de procesas la petición.
Vuelve al event Loop, el event Loop si esta ejecutando otra cosa, lo envia otra vez al event queue.

* [Nodemon](https://nodemon.io/)
* [pm2](https://pm2.keymetrics.io/)
    pm2 start nombre
    pm2 stop id


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
Paser siempre como primer parámetro el error
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

## Scraping
[puppeteer](https://github.com/puppeteer/puppeteer)

## Gulp
Automatización de tareas

> npm i gulp gulp-server-livereload

 [An example](./gulp.md)