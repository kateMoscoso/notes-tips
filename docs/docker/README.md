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
docker rm -f $(docker ps -aq) // borra dockers de la lista
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

## Levantar base de datos

```
docker run -d --name db mongo
docker exec -it db bash
```

* Montar sistema de Archivos al contenedor.

```
mkdir mongodata // crear carpeta
ll //listar
pwd //encontrat directorio carpeta
docker run -d --name db -v directorio-mi-ordenador:dondequieroquesemonte-contenedor mongo
docker run -d --name db -v /home/kate/docker/mongo-data:/data/db mongo
docker inspect -f '{{ json .Config.Volumes }}' db
docker inspect -f '{{ json .Mounts }}' db
```

El sistema escribe en el sistema operativo y así cuando se mate el contenedor esta información no se pierde.

## Docker [Volumes](https://docs.docker.com/storage/)


Esta herramienta nos permite recuperar datos que podíamos dar por perdido.

Existen tres maneras de hacer permanencia de datos:

Bind mount
Volume
tmpfs mount

```
 docker volume ls
 docker volume prune // limpiar volumenes que no estan usando lo contenedores
 docker volume create dbdata
 docker run -d --name db --mount src=nombrevolume,dst=dondemontar mongo
 docker run -d --name db --mount src=dbdata,dst=/data/db mongo
 docker exec -it db bash
 mongo
 exit
```
## Imagenes

Imágenes son fundamentalmente plantillas o templates. Una imagen esta construida sobre ua una capa base y capas por encima

* Obtener iamages 
```
docker pull redis
docker image ls
```

repositorios de docker https://hub.docker.com/

```
docker pull ubuntu:18.04
```

Para  crear nuestras propias imágenes, necesitamos un archivo llamado DockerFile que es lo que utiliza Docker para crear imágenes.

**Es importante que el DockerFile siempre empiece con un ““FROM”” sino, no va a funcionar. **

El flujo para construir en Docker siempre es así:
Dockerfile –> **build ** –> Imágen –> run --> Contenedor

```
docker build -t ubuntu:test .
docker run -it ubuntu:test .
ls -lac /usr/src
docker tag ubuntu:test nilya4/ubuntu:test
docker push nilya4/ubuntu:test
```
* Historico imagen

```
 docker history ubuntu:test
```

https://github.com/wagoodman/dive


```
 dive ubuntu:test
 ctrl+u
```

## Dockerfile node

```
FROM node:8

COPY ["package.json","package-lock.json", "/usr/src/"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 3000

CMD ["node", "index.js"]

```

```
docker build -t app .
docker run --rm -p 3000:3000 app
```
* Nodemon

```
CMD ["npx", "nodemon", "index.js"]

docker run --rm -p 3000:3000 {{path}:/usr/src testapp
```

* Docker networking 
 Colaboración entre contenedores

``` 
 docker network ls
 docker network create --attachable  testnet
 ``` 
 `--attachable` permitir que otros contenedores se conecten a esta red 

``` 
 docker run -d --name db mongo
 docker network connect testnet db
 docker run -d --name app -p 3000:3000 --env MONGO_URL=mongodb//db:27017/test testapp
 docker network connect testnet app
 docker network rm testnet
``` 
* Docker compose
Es una herramienta que nos permite describir de forma declarativa la arquitectura de nuestra aplicación, utiliza **composefile** (docker-compose.yml).

* [install](https://docs.docker.com/compose/install/#install-compose)
* [version](https://docs.docker.com/compose/compose-file/compose-versioning/)  // version > 2
* [start](https://docs.docker.com/compose/startup-order/)

* Services -> componentes de la aplicación, pueden tener mas de un contenedor
* image, nombre de la imagen
* depende_on, depende de otro servicio
* ports: puerto

``` 
version:  "3"
services:
  app: 
    image: testapp
    enviroment:
      MONGO_URL: "mongodb//db:27017/test"
    depends_on:
      - db
    ports:
      - "3000:3000"
  db:
    image: mongo
``` 

``` 
docker-compose up
docker-compose ls
docker-compose logs app
docker-compose exec app bash
docker-compose down
``` 

*Notes:* *Docker esta escrito en **GO***

