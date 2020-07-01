# Javascript

## Scope

* Scope global
* Scope local, puede acceder al scope global

|                | var     | let    |let    |
| -------------- |:-------:| ------:|------:|
| compatibilidad | ✔       | Babel  | Babel |
| scope          | función | bloque | bloque|
| re-asignacion  | ✔       |   ✔    | ✖     |
| re-declaración | ✔       |  ✖     | ✖     |
| declaración sin valor inicial| ✔       |   ✔    | ✖     |
| propiedad del obj global | ✔       |   ✖    | ✖     |

## jwt

# what are JSON web Tokens?
* Open source industry standard (RFC-7519)
* Usable for Authorization or secure exchange of informatio between parties.
* Verify that the sender is whho it/he/she claims to be.
* Signed by the issuer, using a secret or keypair  (HMAC algorithm, RSA or ECDSA).


```
xxxxx.yyyyy.zzzzz
``` 

**Header** contains metadata about the token (type, hashing algorithm etc)

**Payload** contains claims (statements about an entity - for example, a user and additional data)

**Signature** is the result of the encoded header, the encoe payload, signed against a secret.


JSON Web Tokens can be decoded by anyone. They should not contain sensitive information such as passwords.

It is useful for front-end applicatin to user these tokens to toggle features conditionally. For example, if a user is an administrator, we could show or hide a certain button base on the claims in the token.

Javascript isa single thread so it can only execute one chunk of code at a time. The event loop synchronously executes in the synchronised task you. This is effectivelythe call stack for you application. Your program starts to exeute and as one function calls, another tasker added to the queue and the Javascript runtime will execute them synchronously until there are no more taks in the queue. However, since only one thing can execute a time relatively long runningtask like disk io, our network calls will block any other code from executing. If you run them synchronously, the node runtime and Web browsers, for that matter minimized. It's blocking by allowing us to execute code asynchronously. The runtime includes a set of api eyes for common long running task and will execute them for us and notify us when they're done. By adding task to an asynchronous task, you the's a synchronous task or callback functions. They exist to callback into our single threat of execution and run some code that we write to process the resutl of the API call then the event loop has processed all the  items in the synchronised. Ask you it will look for task in the asynchronous task you. If it finds one, it will run it and then look to see if there any more waiting to execute. In additon to the async task. There is also something known as the micro task you asynchronous task added to it, will be prioritized higher than task in the regular async task queue. So when the event loop is donde with all the synchronous work, if their task waiting in the micros task queue, they'll be executed ahead of any task waiting in the regular asyn task queue. It's possible to add items directly to the micro task queue, but probably the most common way task it added o it is with the resolution of promises.

https://github.com/bricewilson/Async-Patterns-in-Node.js

## worker threads
Worker threads give you away to send those types of workloads to another thread while keepng your main threat  available for new user request. Worker threads and node are very similar to Web workers that are available in browsers. The problems are similar. Each worker thread instance is really a new instance of the event loop. You can think of the event loop we've been working with so far in this course is running on the main thread of the application. the application receives a request to do some work in the event loop picks it up and takes careof it, creating a new worker three it effectively gives you another event loop. The benefit of this is that runniing a CPU bound task here leaves your event loop on the main thread free to continue handling user request. If you've done multi threaded programing in other enviroments, you may be surprised to find that you don't have some of the traditional mechanisms available for  threads synchronization. However, you are able to pass messages back and forth between the main threat and the worker tree. Also, creating a new worker is as easy as calling the worker constructor, so if you determine you need more than one you can easily create as many as you need speaking of creating workers, let's look  

``` js
const  { Worker } = require('worker_threads')

const firstWorker = new Worker('cpu_intensive.js')

const secondWorker = new Worker(` console.log('Do CPU-intensive stuff here... ');`, { eval: true });
``` 