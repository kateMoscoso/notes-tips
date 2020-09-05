* cipher
* DiffieHeelman/ECDH
* Hash
* HMAC
* Sign/verify
* Crypto methods

A complex app has many places where data could be compromised
You nedd cryptography in the rigth places to protect your sensetive data
Node's Crypto module provids several classes you can yuse to envrypt and protect data
You next webapp willl be more secure whne you know to encrypt with Node

Problem with password
Too easy, people choose porr pass that are easily guessed
Duplication people tend to use the same password on multiple sites
Data breaches.pass are stolen by attackers

https://haveibeenpwned.com/

# Hash password 

``` js
const crypto = require('crypto');
const hash = crypto.createHash('md5');

hash.update('password1');

const hpass = hash.digest('hex');
```

https://hashtoolkit.com/
``` js
const hash = crypto.createHash('sha256');
``` 

This is not enough to protect password

## Good hash algorithms
* Argon2
* PBKDF2
* scrypt
* bcrypt

```js
const crypto = require('crypto');

const password = 'password1';

const salt = crypto.randomBytes(256).toString('hex');

const hasedPwd = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512');
```

## Symetric encryption
* One key, Same key used to encrypt and decrypt
* Makes data unreadable, if youdon'thave the key, you can't read the data.

`Crypto.createCipheriv` Function provided to create symmetric ciphers
`Update anf final` Update to add data. Final to encrypt data.

``` js
const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const password = '';
const salt = crypto.randomBytes(32);
const key = crypto.scryptSync(password, salt, 32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, ke
let ssn = '111-000-0000';
let encrypted = cipher.update(ssn, 'utf8', 'hex');
encrypted += cipher.final('hex');

```

## decrypt
 ```js
 const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decypted = decipher.update(encrypted, 'hex', 'utf8');
decypted = decipher.final('utf-8');

 ```

## Keys
* Robust key management system (KMS)
* Key management best practices
  * Key store to protect keys
  * Encryption keys encrypted by master key
  * User request key when data is needed
  * Key store decrypts keys and sends to the user
  * Keys can be rotated regularly for extra security

AWS key values

## Vault
Used as secure key store
* Master key
* Stores keys to other applications
* API for retrieval

## Combating threats to data in transil
* Asymmectric encryption, encrypt with one key, decrypt with another.
* HMAC know if something's been changed
* Digital signatures, verify authenticity and integrity

``` js
const sally = crypto.createDiffieHellman(2048);
const sallyKeys = sally.generateKeys();

const bob = crypto.createDiffieHellman(sally.getPrime(), sally.getGenerator());

const bobKey = bob.generateKeys();

const sallySecret = sally.computeSecret(bobKey);
const bobSecret = bob.computeSecret(sallyKeys);
console.log(sallySecret.toString('hex'))
```

// hmac
``` js

const hmac = crypto.createHmac('sha256', 'a secret');

hmac.update('some datat to hash');

console.log(hmac.digest('hex'));
``` 

## Factor
Method to indentify someone
* Something you know, password
* Something you have, badge, id card, token
* Something you are, biometrics

Time-based one time password
* A secret is shared between the serve and the user
* The secret is used to generate a number
* The generated number is inout with the password


https://nodegoat.net/

