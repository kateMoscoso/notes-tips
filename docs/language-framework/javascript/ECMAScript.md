# ECMAScript6

* Parámetros por defecto

```js
function functionWithoutEcma(name, age, country){
    var name = name || 'Kate'
    var age = age || 30
    var country = country || 'EC'
}
```

```js
function functionWithEcma(name = 'Kate', age = 30 , country = 'EC'){

}
```
* Template Literals, ya no hace falta poner `\n` para poner un salto de línea
```js
 `Hello ${namee}`
```

* Unificar Arrays
```js
[...arrays2, arrays3]
```

* Arrow Functions
```js
const fn = name => {....}
```

* Promesas
* Clases 
```js
class Point {
    constructor() {
        this.x = 0
        this.y = 0
    }
    getPoint() {
        return `${this.x} - ${this.y}`
    }
}
```
* Import 
```js
import { hello } from './module'
```

 * Generadores

```js
function* helleWorld () {
    if (true){
        yield 'Hello, '
    }
    if (true){
        yield 'World' 
    }
}
```

# ECMAScript7

* Includes
* Potencia 
```js
const resultado = base ** exponente
```

# ECMAScript8
* Entries, values en objetos
 ```js
const entries = Object.entries(data)
const values = Object.values(data)
 ```

* padStart & padEnd (Agregan caracteres al princio y al final respectivamente, toman 2 parametros (limite, string))

 ```js
const myString = 'hello'
console.log(myString.padStart(8, 'hi ')) // hi hello
console.log(myString.padEnd(12, ' _____')) //hello ______
console.log('food'.padEnd(12, ' ______')) // food ______
 ```

 * Async Await
 ```js
 const helloWorld = () =>{
    returnnew Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('helloWorld'),3000)
        : reject(new Error ('Test Error'))
    })
}

const helloAsync = async () => {
    try{
       const hello = await helloWorld();
    } catch (error){
        console.log(error);
    }
}
 ```

## Es9
* Operador de reposo

```js
const persona = {
    name : 'Kate',
    age: 30,
    country: 'EC'
}
let {name, ...data } = persona
console.log(data) //{ age: 30, country: 'EC' }
```

* Promise finally
```js
helloWorld()
  .then (Response => console.log(Response))
  .catch (error => console.log(error))
  .finally (() => console.log('Finalizo'))
```

* Regex
```js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-06-02');
const year = match[1]
const month = match[2]
const day = match[3]
```

## ES10
* Flat y FlatMap

```js
array.flat()
array.flat(2)
arrya.flatMap(value => [value, value * 2])
```
* trimStart, trimEnd
* Convertir array(Arreglos) a object
```js
let entries = [['name', 'Kate'], ['age', 30]]
Object.fromEntries(entries)
```

* Symbol
```js
let mySymbol = 'Sym'
let symbol = Symbol(mySymbol)
mySymbol.description
```
* Estados Propuestas
  * Stage 0 Idea
  * Stage 1 Proposal
  * Stage 2 Draft
  * Stage 3 Candidate
  * Stage 4 Ready

