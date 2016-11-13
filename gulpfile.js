var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");

var paths = {
   jsSource: ['public/app/**/*.js', 'public/views/**/*.js'],
   cssSource: ['public/**/*.css']
};

gulp.task('css', function() {
   gulp.src(paths.cssSource)
       .pipe(concat('bundle.css'))
       .pipe(gulp.dest('./public/dist'));
});

gulp.task('js', function() {
   gulp.src(paths.jsSource)
       .pipe(annotate())
       .pipe(concat('bundle.js'))
       .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
   gulp.watch(paths.jsSource, ['js']);
   gulp.watch(paths.cssSource, ['css']);
});

gulp.task('default', ['js', 'css', 'watch']);

// , 'serve'
// Put the above back in the array of gulp.task if you want gulp to run nodemon.