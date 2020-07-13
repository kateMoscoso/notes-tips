
## Scraping
[puppeteer](https://github.com/puppeteer/puppeteer)

## Gulp
Automatización de tareas

> npm i gulp gulp-server-livereload

``` js
const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
});

gulp.task('serve', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

gulp.task('default', gulp.series('build', 'serve'));
``` 

* Configuración con eslint
```js
npm install -g eslint
 eslint --init
```