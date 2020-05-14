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

### Qué es JSON web Tokens?
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

It is useful for front-end application to user these tokens to toggle features conditionally. For example, if a user is an administrator, we could show or hide a certain button base on the claims in the token.

