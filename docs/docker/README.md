## Install

```
  https://docs.docker.com/engine/install/ubuntu/
```

## Run hello world

```
docker run hello-world
```

La arquitectura de Docker funciona cliente - servidor y además utiliza `daemon` al conectarse con los contenedores.

Client -->  daemon --> containers

## Contenedores
Un `contenedor` es una entidad lógica, una agrupación de procesos que se ejecutan de forma nativa como cualquier otra aplicación en la máquina host.

Un contenedor ejecuta sus procesos de forma nativa. Lo único que comparte el contenedor con la máquina es el `kernel` del sistema operativo

https://itnext.io/chroot-cgroups-and-namespaces-an-overview-37124d995e3d


* Para listar todos los contenedores de Docker, utilizamos el comando:

```
docker ps -a
```

* Podemos inspeccionar un contenedor en específico utilizando:

```
docker inspect nombreDelContenedor
``` 

* Usando filtros

```
docker inspect -f '{{ json .Config.Env }}' nombreDelContenedor
```

* Renombrar contenedores

```
docker rename oldName newName
``` 

* no se pueden repetir los nombres pero si los id
* cada docker run genera un contenedor nuevo

```
docker logs nombre_contenedor
docker ps -aq // lista id contaniers
docker rm ${docker ps -aq} // borra dockers de la lista
```

* Levantar imagen de ubuntu
```
docker run ubuntu
docker run -it ubuntu // hacerlo de forma interactiva con la terminal
```
* Comandos dentro de la imagen ubuntu

```
ls -lac
uname -a
cat /etc/lsb-release
exit
```

## Ciclo de vida de los contenedores

```
docker run ubuntu tail -f /dev/null
``` 

* Meterte dentro del contenedor

```
docker exec -it nombre_contenedor bash
```

```
ps -fea  // ver pid
docker rm -f nombre_contenedor // borra contenedor
docker kill nombre_contenedor // matar contenedor
```


## Exponiendo contenedores al mundo exterior

Debemos redirigir los puertos del contenedor a los de la computadora y lo podemos hacer al utilizar este comando:

--detach // si tiene un proceso que tiene output, no me interesa el output

```
docker run -d --name server -p 8080:00  nombreDelContenedor

docker run -d --name server nginx

docker run -d --name server -p 8080:80 nginx //-p publish
```

*Notes:* *Docker esta escrito en **GO***