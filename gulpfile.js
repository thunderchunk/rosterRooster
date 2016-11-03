var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var css = require('gulp-css');

var paths = {
  jsSource:  ['./public/**/*.js'],
  cssSource: ['./public/**/*.css']
};

gulp.task('css', function(){
  gulp.src(paths.cssSource)
  .pipe(css())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./public/dist'))
});

gulp.task('js', function(){
  gulp.src(paths.jsSource)
  .pipe(annotate())
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./public/dist'))
});

gulp.task('watch', function(){
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.cssSource, ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);
