var gulp = require('gulp');
var concat = require('gulp-concat-css');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');

gulp.task('minifyCss', () => {
  return gulp
    .src('src/styles/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('concat', function() {
  return gulp
    .src(['src/styles/main.css','src/styles/minor.css'])
    .pipe(concat('concat.css'))
    .pipe(gulp.dest('dist'));
});
 
gulp.task('browser-sync', function() {
browserSync.init({
server: {
baseDir: "/home/usuario/práctica_1"
}
});
});

gulp.task('sourcesMaps', function(done) {
  gulp
    .src('src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'));
  done();
});
