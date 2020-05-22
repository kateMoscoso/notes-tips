https://git-scm.com/book/es/v2

* `git init` se crea un area en memoria ram llamada *staging* y se crea el repo
* `git add` añade los archivos a *staging*
* `git commit` envia el archivo de *staging* al *repositorio*
* `git show filename`
* `git log filename`historico 
* `git diff id_commit id_commit`Diferencias fichero 

* `git rm` Este comando nos ayuda a eliminar archivos de Git sin eliminar su historial del sistema de versiones. borrar el add
* `git rm --cached`: Elimina los archivos del área de Staging y del próximo commit pero los mantiene en nuestro disco duro.
* `git rm --force:` Elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario (pero debemos usar comandos más avanzados).

::: danger
`git reset` Este comando nos ayuda a volver en el tiempo. Pero no como git checkout. Con git reset borramos la historia y la debemos sobreescribir. No hay vuelta atrás.
:::

* `git reset --soft`: Borramos todo el historial y los registros de Git pero guardamos los cambios que tengamos en Staging, así podemos aplicar las últimas actualizaciones a un nuevo commit.

* `git reset --hard:` Borra todo. Toda la información de los commits y del área de staging se borra del historial.

* `git reset HEAD`: Este es el comando para sacar archivos del área de Staging a Unstaged. No para borrarlos.

* `git clone url_del_servidor_remoto`: Nos permite descargar los archivos de la última versión de la rama principal y todo el historial de cambios en la carpeta .git.
* `git push`: Luego de hacer git add y git commit debemos ejecutar este comando para mandar los cambios al servidor remoto.
* `git fetch`: Lo usamos para traer actualizaciones del servidor remoto y guardarlas en nuestro repositorio local (en caso de que hayan, por supuesto) pero no al directorio local dónde estoy trabajando.
* `git merge`: También usamos el comando git fetch con servidores remotos. Lo necesitamos para combinar los últimos cambios del servidor remoto y nuestro directorio de trabajo.
* `git pull`: Básicamente, git fetch y git merge al mismo tiempo.

* `git remote add origin direccion_repo` : Agregar un origen remoto

* `git remote -v` : Ver el repo
* `git push origin master` : Subir las cosas al repo
* `git pull origin master --allow-unrelated-histories`: Fusionar con l que hay en master si no coinciden los commits

## Conexión segura

* `ssh-keygen -t rsa -b 4096 -C "tu@email.com"`: Generación llaves SSH 
* `eval $(ssh-agent -s)`: Encender el "servidor" de llaves SSH de tu computadora: 
* `ssh-add ruta-donde-guardaste-tu-llave-privada`: Añadir tu llave SSH a este "servidor":
* `git remote set-url origin url_ssh`: Cambiar url

* hot_fix
* develop
* master