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
* `git log --all --graph --decorate --oneline`: Pintar ramas

* `git tag -a v0.1 -m "Mensaje" id_hash`: Crear hash
* `git show-ref --tags`: Mostrar tags
* `git tag -d nombre-del-tag`: Borrar tag
* `git push originn :refs/tags/nombre_tag`: Borrar un tag del repositorio remoto
* `git push origin --tags`: Publicar un tag en el repositorio remoto

* `git config -l`: ver la configuración entera
* `git pull origin rama`: traer rama

* Los archivos binarios no se deberian subir al repo


* `git remote add upstream url` fuente nueva de dónde traer datos

::: danger
* `git rebase master` Con rebase puedes recoger todos los cambios confirmados en una rama y ponerlos sobre otra.
Es una mala práctica hacerl en master
::: 

* `git stash`: guardar en un lugar temporal
* `git stash list`: listar 
* `git stash pop` 
* `git stash branch branch_name`: poner el stash en una rama
* `git clean --dry-run`: Para saber qué archivos vamos a borrar  
* `git clean -f`: Para borrar todos los archivos listados (que no son carpetas)  

* `git cherry-pick id_commit`
::: danger
cherry-pick es una mala práctica porque significa que estamos reconstruyendo la historia
::: 

* `git commit --amend`: lo que hará es que los cambios que hicimos nos lo agregará al commit anterior

::: danger
* `git reset --soft id_HEAD`: te mantiene lo que tengas en staging ahí.
* `git reset --hard id_HEAD`: resetea absolutamente todo incluyendo lo que tengas en staging.
::: 

* `git grep -n word_to_find`: nos listará un output con la línea de lo que estamos buscando.
* `git grep -c word_to_find`: output de cuántas veces se repite esa palabra y en qué archivo.
* `git grep -c "<p>"`: Archivos html
* `git log -S word_to_find`: Buscar en los commits
* `git short log`: Mostrar Log de commits por persona
* `git shortlog -sm`: 
* `git config --global alias.stats "shortlog -sm --all --no-merges"`: Crear un alias
* `git blame file -c`: Ver quién hizo qué
* `git blame file -L2,4`: Ver quién hizo qué
* `git branch -r`
* `git branch -a`

* Las imagenes deberían ir en un content delivery web
## Ramas comunes
* hot_fix
* develop
* master