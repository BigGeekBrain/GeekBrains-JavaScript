var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');


gulp.task('minifyCss', function() {
      gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('css-min'))
});

gulp.task('default', ['minifyCss']) 