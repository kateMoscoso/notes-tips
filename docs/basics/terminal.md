 ## Atajos terminal

* Ver historial `history `
* punteros a directorios
```
.. --> directorio padre
. --> directorio actual
```

* Ordena los archivos por fecha de modificación:

> ls -t

* Ordena elementos primero por nombre y después por extensión:


> ls -x

* Ordena los elementos primero por extensión y luego por nombre:


> ls -X

* Muestra toda la información: usuario, grupo, permisos, tamaño, fecha y hora de creación.

> ls -l

* Muestra la misma información que ls -l pero con las unidades de tamaño en KB, MB:

> ls -lh

* Muestra el contenido de todos los subdirectorios de forma recursiva:

> ls -R

* Ordena los resultados por tamaño de archivo:


> ls -S


* Buscar fichero, `-i` incluir mayusculas y minusculas, `$` si la línea incluye esta palabra clave al final `^` si la incluye al principio

```
> grep expresion_regular fichero
> grep -i expresion_regular fichero 
```
* Filtrar las líneas que queremos visualizar utilizando (o no) expresiones regulares:
```
> grep expresion_regular fichero
> grep -i expresion_regular fichero 
> grep palabra$ fichero
> grep ^palabra fichero
```


* Sustituir en un fichero


> sed 's/word1/word2/g' fichero


* Borrar ultima linea

> sed '$d' fichero


* Imprimir la primera palabra de la linea

> awk -F ';' '{ print $1}' fichero

* Imprimir la primera palabra de la linea

> awk -F ';' 'NR > 1 && $3 > 0 { print $1, $3 * $4}' fichero


* `head`: es muy parecido al comando cat. También nos permite visualizar el contenido de nuestros archivos, pero debemos indicarle cuántas líneas nos debe mostrar. Por defecto nos mostrará las primeras 10.
  * primeras 10 líneas
    
    > head archivo.txt
    
  * primeras 20 líneas
    
    > head -n 20 archivo.txt
    
* `tail`: funciona igual que el comando head, pero al revés. También debemos indicarle cuántas líneas nos debe mostrar, la diferencia es que no las mostrará de abajo hacia arriba. Por defecto nos mostrará las últimas 10.

    * últimas 10 líneas
    
    > tail archivo.txt
    

    * últimas 5 líneas
    
    > tail -n 5 archivo.txt
    

## Redireccion 
```
> mysql -h 127.0.0.1 -u root -p1234 < fichero_ejecutar
> ls > fichero_destino
> ls >> final_fichero
```
## Pipe
> ls -l | more

* Contar lineas
> cat fichero | wc -l

* Ejecutar en background `&` o `ctrl+z`
* Traerlo del backgroung `fg`

## Procesos 
> ps ax

* Monitorizar procesos 
> top

* Permisos DueñoGrupoOtros rwx

* Comprimir fichero
> gzip fichero

* Descomprimir
> gzip -d fichero

* Crear tar
> tar cf backup.tar ficheros

* Desagrupar tar
tar xf backup.tar

* Crear tar comprimido
> tar czf backup.tgz ficheros

* Desagrupar tar comprimido
> tar xzf backup.tgz

## Busca archivos

* locate, necesita actualizar la base de datos
```
> sudo updatebd
> locate fichero
```

* whereis busca binarios
> whereis echo

* find
> find . -user file -perm 644

* Archivo modificado hace más de 7 días
> find . -type f -mtime +7

* Ejecutar operaciones sobre fichero encontrados
> find . -type f -mtime +7 -exec cp {} ./backup/ \;

* Descargar webs, con `-v` encabezados http
> curl direccion

* Descargar archivos
> wget

## Acceso a otros ordenadores
> ssh nombre_maquina


* Sesion
> export myVar=value
* local
> MI_Var= algo

> crontab -e