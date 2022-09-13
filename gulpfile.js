const gulp = require('gulp');
const replace = require('gulp-replace');

gulp.task('font-replace', () => {
  return gulp
    .src('.next/**/*.css')
    .pipe(replace('Zilla Slab', '"Zilla Slab"'))
    .pipe(replace('Apple Color Emoji', '"Apple Color Emoji"'))
    .pipe(replace('Segoe UI Emoji', '"Segoe UI Emoji"'))
    .pipe(replace('Segoe UI Symbol', '"Segoe UI Symbol"'))
    .pipe(replace('Liberation Mono', '"Liberation Mono"'))
    .pipe(replace('IBM Plex Mono', '"IBM Plex Mono"'))
    .pipe(gulp.dest('.next'));
});
