var gulp = require('gulp');
var concat = require('gulp-concat-css');

gulp.task('concat', function() {
  return gulp
    .src(['src/styles/main.css','src/styles/minor.css'])
    .pipe(concat('concat.css'))
    .pipe(gulp.dest('styles/dist'));
});


