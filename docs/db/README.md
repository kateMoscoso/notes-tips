# Bases de datos

Tipos de Bases de Datos: Relacionales y No Relacionales
* Bases de Datos Relacionales: no es una base de datos muy flexible, pero tiene a favor su gran soporte y el enorme desarrollo en herramientas para su uso. Si necesitamos cambiar un valor de un campo debemos hacerlo con todos los campos de nuestra BD, en cambio con NoSQL o No Relacional no es así.

* Bases de Datos No Relacionales: son de bases de datos sin una tabla fija como las que sí se encuentran en las bases de datos relacionales, lo que permite una alta escalabilidad en ellas. Además, es abierta y por lo tanto flexible a diferentes tipos de datos y no necesita tantos recursos para ejecutarse; de hecho, el hardware necesario no cuesta mucho.

https://platzi.com/clases/1646-backend-nodejs/22034-conexion-con-robot3t-y-mongodb-compass-a-una-bd/

## Implementación de las acciones de MongoDB
Los métodos de MongoDB para implementar un CRUD son:

* Create
    * insertOne
* Read
    * find
    * findOne
* Update
    * updateOne
* Delete
    * deleteOne

Mongodb no tiene schemas pero es importante saber y usarlos
moongose nos va a permitir crear schemas por software para nuestra base de datos

SQL es el lenguaje de programación que utilizan la mayoría de los sistemas, está basado en álgebra relacional. En una base de datos NoSQL no estamos obligados, incluso muchas veces el motor no implementa el lenguaje.

Las bases de datos NoSQL están diseñadas para ser distribuidas desde el comienzo, las bases de datos relacionales no.

Sharding: Con las bases de datos NoSQL puedo tener varios servidores y en cada servidor tener una parte de la base de datos, puedo distribuir la información y eso me facilita los procesos de recuperación y puedo escalar únicamente lo que necesito y no es necesario escalar todo el cluster. En las bases de datos relacionales es complejo el proceso de distribución.


Sql esta basado en el álgebra relacional y en el cálculo relacional, en entidades y sus relaciones, lo importante de estas es la atomicidad de las operaciones de base de datos, es decir, cuando quiero hacer una operación o la hago entera o no la hago haciendo uso del rollback. Los datos estan tipados, y tienen que cumplir esa integridad.
NoSql, son de bases de datos sin una tabla fija a diferencia de las bases de datos relacionales, lo que permite una alta escalabilidad en ellas. Puede tener diferentes tipos de datos y no necesita tantos recursos para ejecutarse. Permiten adaptarse a necesidades de proyectos mucho más fácilmente que los modelos de Entidad Relación. Las bases de datos NoSQL están diseñadas para ser distribuidas desde el comienzo, las bases de datos relacionales no.