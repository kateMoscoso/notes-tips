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