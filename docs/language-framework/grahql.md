# GraphQl
Un paradigma aplicado a la necesidad que siemprehan tenido lo desarroladores de realizr intercambios de información entre diferentes aplicaciones. Cuenta con un forma etandarizaa para definir todas las innteracciones posible co la información, haciendo posible que la manera de escribir y usa un API sea má predecible y entendible.

* Un lenguaje agnótico que me permite definir de una forma clara y simple los objetos y acciones del API.
* Una validación automática de la información a ingresar.
* Control de errores de una manera uniforme y predecible.

https://graphql.org/learn/queries/#mutations


Alias y fragments
Dentro de GraphQL podemos correr más de una petición a la vez y nombrarlas de distinta manera para poder identificarlas, esto es posible gracias a los Aliases o simplemente Alias.

La sintaxis de un Alias es bastante simple:

nombreDelAlias: tipoDeDato(argumento: tipo) {
  datos
}
Además de los Alias, podemos agrupar campos para ser reutilizados en distintas peticiones gracias a los Fragments.

# alias
```
{AllCourses: getCourses{
  title,
  people{
    _id,
    name
  }
}
}
```
# Alias y fragments
```
{
  AllCourses: getCourses {
    ...CourseFields
    people {
      _id
      name
    }
  }
  Course1: getCourse(id: "5f2400837571933719a6d379"){
    ...CourseFields
  }
}

fragment CourseFields on Course {
  _id
  title,
  description
}

```

Variables
Podemos utilizar variables dentro de las peticiones que hagamos a GraphQL simplemente definiéndolas con la siguiente sintaxis:

$nombre: tipo