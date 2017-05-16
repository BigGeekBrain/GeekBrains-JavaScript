var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var imageop = require('gulp-image-optimization');


var uglify = require('gulp-uglify');  
var imgopt = require('gulp-image-optimization');  


// в случае если этот минифаер нужно подключить, то
// убираю коменты и в конце в таск добавляю название плагина 
// gulp.task('minifyCss', function() {
//   function run(mask) {
//     return gulp.src('css/*.css')
//       .pipe(minifyCss())
//       .pipe(gulp.dest('css-min'))
//   }
//   watch('css/*.css', run)

//   return run();
// });
 


// обрабатывает шаблон сайта в pug
gulp.task('pug', function() {
  function run(mask) {
    return gulp.src('*.pug')
      .pipe(pug())
      .pipe(gulp.dest('./'))
  }
  watch('*.pug', run)
  return run();
});

// компилирует препроцессор sass в css
gulp.task('sass', function() {
  function run(mask) {
    return gulp.src('/sass/.sass')
      .pipe(sass())
      .pipe(gulp.dest('sass/min/'))
  }
  watch('*.sass', run)
  return run();
});


//в правильном порядке объединяет css сайта, bootstrap, fontawesome
gulp.task('css:build', function() {
  function run(musk) {
    return gulp.src(['css/*.css', 'css/custom/app.css'])
      .pipe(concat('style.concat.css'))
      .pipe(csso({
        comments: false
      }))
      .pipe(gulp.dest('tmp'))
  }
  watch('css', run)
  return run();
});




var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg'])
    .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    }))
    .pipe(gulp.dest('public/images'))
    .on('end', cb)
    .on('error', cb);
});



gulp.task('default', ['pug', 'stylus', 'css:build'])
