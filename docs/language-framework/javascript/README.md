# Javascript
Lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico

# Scope o ámbito
Es el alcance que va a tener una variable dentro del código, en qué partes del código pueden ser usadas

* Scope global, variables disponibles de forma global `var`
* Scope local, puede acceder al scope global
* Function Scope, variables declaradas dentro de una función sólo visibles dentro de ella misma
* Block scope, variables definidas dentro de un bloque, por ejemplo variables declaradas dentro un loop while o for. Se usa let y const para declarar este tipo de variables.
* Module Scope, cuando se denota un script de tipo module con el atributo type="module las variables son limitadas al archivo en el que están declaradas.



|                | var     | let    |const    |
| -------------- |:-------:| ------:|------:|
| compatibilidad | ✔       | Babel  | Babel |
| scope          | función | bloque | bloque|
| re-asignacion  | ✔       |   ✔    | ✖     |
| re-declaración | ✔       |  ✖     | ✖     |
| declaración sin valor inicial| ✔       |   ✔    | ✖     |
| propiedad del obj global | ✔       |   ✖    | ✖     |


* Si definimos una variable en el scope global (window en el navegador) podemos acceder a ella dentro de cualquier lugar del código.
* Si definimos una variable dentro de una función solo lo podemos utilizar dentro de esa función si lo declaramos con `var`, si lo declaramos con `let` solo podemos acceder a ella en el bloque de código.

```js
function printNumbers () {
    for(var i = 0; i < 10; i++){
        setTimeout(function() {
            console.log(i)
        }, 100)
    }
}
```
Este ejemplo, imprimirá 10 veces el número 10, ya que, cuando intener imprimir `i` el valor es 10, esto se debe a qué esta deifnida de manera global, scope global.
```js
function printNumbers () {
    for(var i = 0; i < 10; i++){
        function evenPrint (n){
            setTimeout(function() {
                console.log(i)
            }, 100)
        }
        evenPrint(i)
    }
}
```

El siguiente ejemplo, imprime número del 0 al 10, ya que, con la nueva función tenemos un nuevo `scope`. También podriamos cambiar el scope de la variable a `let` en vez de `var`

## Closures
Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

 ``` js
function makeCounter(n) {
    let count = n;
    return {
      increase: () => count++,
      decrease: () => count--,
      getCount: () => count,
    }
  }

  let counter = makeCounter(7);
  console.log(counter.increase())
  ```
# Funciones 

Las funciones son fracciones de código reutilizable. JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos.

### IIFE
```js
(function(){
    let color = 'blue'
    function printColor(){
        console.log(color)
    }
    printColor()
})();
```


### El alcance de las funciones
 
Si una variable no está definida dentro del cuerpo de una función hablamos de una `variable global`. Por el contrario, una variable definida dentro de una función es una `variable local`.
Para que la ejecución de una función no modifique una variable global usamos parámetros en lugar de pasar directamente la variable.
Es posible utilizar el mismo nombre para una variable global y para el parámetro de una función con un alcance local.

### Funciones declarativas 
``` js
saludar('Diego');
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
```

### Funciones expresión o anónimas
``` js
nombre(‘Diego’);
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}
```

### Diferencias:
A las `funciones declarativas` se les aplica `hoisting`, y a la expresión de función, **no**. Ya que el *hoisting solo se aplica en las palabras reservadas var y function*.
Lo que quiere decir que con las funciones declarativas, podemos llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

## Hoisting
El concepto de `Hoisting` fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución. Sin embargo, el concepto puede ser un poco confuso al principio.
Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.

## Desestructurar objetos
``` js
var persona = {
    nombre: 'Carlos',
    apellido: 'Zavala'
}
 let { nombre, apellido } = persona
 ```
 
### Comparaciones en JavaScript
Comparacion con dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar. 
``` js
'2' == 2 //true
```
Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.
```  js
'2' == 2 //false
```

Cuando comparamos objetos js, mira si la referencia a los objetos es la misma, si comparten el mismo lugar en memoria ram

## Arrow Function o funciones flechas
Una expresión de función flecha tiene una sintaxis más compacta que una expresión de función regular, por lo que son una buena alternativa a estas últimas, aunque no tienen su propio `this, arguments, super ou new.target.` Estas expresiones no son adecuadas para ser utilizadas como métodos, y no pueden ser usadas como constructores.
### Limitaciones de las arrow functions

* No podemos emplearlas para construir objetos. Por ejemplo, intentamos algo de este estilo:
``` js
const MyClass = () => {};
const object = new MyClass();
```

Obtendremos el siguiente error:  `MyClass is not a constructor `:
* No poseen prototype. Es decir, no podemos extender el prototipo de esta clase de objetos.

``` js
const MyClass = () => {};
console.log(MyClass.prototype); // undefined
``` 

* No pueden ser usadas como funciones generadoras
Las arrow functions no admiten la palabra `yield` dentro de su cuerpo, por lo que si queremos crear una función generadora deberemos seguir recurriendo a la forma habitual: `function*` .

## Generators
Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

Algunas de sus características:

* Los generadores regresan una función.
* Empiezan suspendidos y se tiene que llamar next para que ejecuten.
* Regresan un value y un boolean done que define si ya terminaron.
* `yield` es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

```js
function* idMaker() {
    let id = 1
    let reset
    while(true) {
        reset = yield id;
        if(reset){
            id = 1
        } else {
            id += 1
        }
    }
}
const gen = idMaker()
gen.next()
gen.next(true)
```

## This 
`this` se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

* Cuando llamamos a `this` en el `Global Scope` o Function Scope, se hace referencia al objeto `window`. A excepción de cuando estamos en `strict mode` que nos regresará `undefined`.
* Cuando llamamos a `this` desde una función que está contenida en un objeto, `this` se hace referencia a ese objeto.
* Cuando llamamos a `this` desde una “clase”, se hace referencia a la instancia generada por el constructor.


## Los métodos call, apply y bind
Estas funciones nos sirven para establecer el valor de `this`, es decir, cambiar el contexto que se va usar cuando la función sea llamada.

Las funciones `call`, `apply` y `bind` son parte del prototipo `Function`. Toda función usa este prototipo y por lo tanto tiene estas tres funciones.
``` js
function saludar () {
    console.log(`Hola, Soy ${this.name} ${this.apellido}`)
}
const persona = {
    name: 'Kate',
    apellido: 'Moscoso'
}
function caminar(metros, direccion) {
    console.log(`${this.name} camina ${metros} metros hacía ${direccion}`)
}

```

* **functionName.call().** Ejecuta la función recibiendo como primer argumento el `this` y los siguientes son los argumentos que recibe la función que llamó a `call`.
``` js
saludar.call(persona)
caminar.call(persona, 400, 'norte')

const buttons = document.getElementsByClassName('actions')

Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => alert('Hola')
})
``` 
* **functionName.apply().** Ejecuta la función recibiendo como primer argumento el `this` y como segundo un arreglo con los argumentos que recibe la función que llamó a `apply`.
`caminar.apply(persona, [400, 'norte')]`
* **functionName.bind().** Recibe como primer y único argumento el `this`. No ejecuta la función, sólo regresa otra función con el nuevo `this` integrado.
``` js
const personaSaluda = saluda.bind(persona)
personaSaluda()
const persona2Saluda = saluda.bind(persona)
persona2Saluda(50, 'sur')
const persona3Saluda = saluda.bind(persona, 40,'este')
persona3Saluda()
const persona4Saluda = saluda.bind(persona, 40)
persona4Saluda('oeste')
``` 

## Prototype
En Javascript todo son objetos, **no tenemos clases**, no tenemos ese plano para crear objetos.

Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la prototype chain.

La keyword `new` crea un nuevo objeto que “hereda” todas las propiedades del prototype de otro objeto. No confundir `prototype` con proto que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.
```js
const heroMethods = {
    saludar: function () {
        console.log(`Superheroe ${this.name}`)
    }
}
function Hero (name){
    const hero = Object.create(heroMethods)
    hero.name = name
    return hero
}
```

Usando prototype

```js

function Hero (name){
    const hero = Object.create(Hero.prototype) 
    hero.name = name
    return hero
}
Hero.prototype.saludar = function () {
    console.log(`Superheroe ${this.name}`)
    
}
const batman = new Hero('Batman')
```
* si hacemos new automaticamente se hace `const hero = Object.create(Hero.prototype) ` e incializa esto a `this` quedando `this = Object.create(Hero.prototype)`. Por lo tanto, el código equivale a:
```js
function Hero (name){
    this.name = name 
    return hero
}
Hero.prototype.saludar = function () {
    console.log(`Superheroe ${this.name}`)
    
}
const batman = new Hero('Batman')
```
## Herencia Prototipal
Por default los objetos en JavaScript tienen cómo prototipo a **Object** que es el punto de partida de todos los objetos, es el *prototipo padre*. **Object** es la raíz de todo, por lo tanto tiene un prototipo padre *undefined*.

Cuando se llama a una función o variable que no se encuentra en el mismo objeto que la llamó, se busca en toda la prototype chain hasta encontrarla o regresar undefined.

La función **hasOwnProperty** sirve para verificar si una propiedad es parte del objeto o si viene heredada desde su prototype chain.

`objet.getPrototypeOf`

## Parsers y el Abstract Syntax Tree
El JS Engine recibe el código fuente y lo procesa de la siguiente manera:

El parser descompone y crea tokens que integran el AST.
Se compila a bytecode y se ejecuta.
Lo que se pueda se optimiza a machine code y se reemplaza el código base.
Un SyntaxError es lanzado cuando el motor JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que se tiene un AST generado por el parser.

El parser es del 15% al 20% del proceso de ejecución por lo que hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.

## Cómo funciona el JavaScript Engine
Una vez tenemos el AST ahora hay que convertirlo a Bytecode.

Bytecode es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador.

Machine code es el más bajo nivel, es código binario que va directo al procesador.

El profiler se sitúa en medio del bytecode y el optimizador

Cada máquina virtual tiene sus particularidades, por ejemplo V8 tiene algo llamado Hot Functions.

Cuando una sentencia función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.

Cada navegador tiene su implementación de JavaScript Engine:

* SpiderMonkey - Firefox
* Chackra - Edge
* JavaScriptCore - Safari
* V8 - Chrome

## Getters y setters
Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords set y get para crear estas propiedades.

Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más dentro del objeto.


## Fetch - Cómo cancelar peticiones
La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función fetch para esto.

Con fetch tenemos algo llamado AbortController que nos permite enviar una señal a una petición en plena ejecución para detenerla.

## IntersectionObserver
Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.

El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.


## jwt

# Qué es JSON web Tokens?
* Es un estándar abierto basado en JSON  (RFC-7519)
* Se usa como medio de autorización para intercambiar información entre partes
* Los JSON Web Tokens generalmente están formados por tres partes:

```
xxxxx.yyyyy.zzzzz
``` 

**Header** El encabezado identifica qué algoritmo fue usado para generar la firma

**Payload** El contenido contiene la información de los privilegios o claims del token:

**Signature** La firma está calculada codificando el encabezamiento y el contenido en base64url.

El Json web token puede ser decodificado por cualquier persona, por lo que, no debería tener información sensible como la contraseña
