# Javascript
Lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico

## Scope
Es el alcance que va a tener una variable dentro del código.

* Scope global
* Scope local, puede acceder al scope global

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

## Funciones 

Las funciones son fracciones de código reutilizable. JavaScript es un lenguaje interpretado, esto quiere decir que intentará ejecutar el código sin importar si los parámetros que le pasemos a la función estén invertidos o incluso incompletos.

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
