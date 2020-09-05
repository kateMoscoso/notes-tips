# TypeScript
 es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando [Parcel](https://parceljs.org/).

 npm install -g typescript
$ tsc --version

## Tipos básicos
Tipos:

* **boolean.** Valor verdadero o falso.
* **number.** Números.
* **string.** Cadenas de texto.
* **string[].** Arreglo del tipo cadena de texto.
* **Array.** Arreglo multi-tipo, acepta cadenas de texto o números.
* **enum.** Es un tipo especial llamado enumeración.
* **any.** Cualquier tipo.
* **object.** Del tipo objeto.

```js
let muted: boolean = true
let numero: number = 6
let nombre: string = 'Pepe'
let personas: string [] = []
let elements : Array <sring |number> = []
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde'
}
let colorFavorito: Color =  Color.Rojo
let loquesea: any = ''
let SomeObject: object = {}
```

## Funciones
En Typescript podemos ser explícitos con el tipo de los argumentos y el tipo de retorno de una función.

``` js
function add(a:number, b:number): number {
    return a + b
}
``` 

* Funcion que devuelve otra función
``` js
function createAdder (a:number) : (number) => number {
    return function (b:number) {
        return b + a
    }
}
```

* Parámetros opcionales con `?`
``` js
function fullName(name:string, lastname?:string): string {
    return `${name} ${lastname}`
}
```

## Interfaces
Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no. Cuando no defino todos los elemento de la interfaz me salta un error

``` js
interface Rectangulo {
    ancho: number
    alto: number
}

let react : Rectangulo = {
    ancho:4
    alto:6
}

function area (r : Rectangulo): number {
    return r.alto * r.ancho
}
``` 

## Clases
En las clases en TypeScript sí existen las propiedades privadas.

## Publicar npm 
`build: "tsc src/**/*.ts --outDir lib"`
> npm publish --access=public