var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var imagemin = require('gulp-imagemin');
//добавляет префиксы для кроссбраузерности
var prefix = require('gulp-autoprefixer');
//преобразовывает scss в css
var sass = require('gulp-ruby-sass') ;
var notify = require("gulp-notify") ;
//работаем с font-awesome и bootstrap
var bower = require('gulp-bower');
//сжимает файлы css
var csso = require('gulp-csso');
//объединяет файлы css
var concat = require('gulp-concat');

gulp.task('js:compress', function() {
    function run() {
        return gulp.src([
                'js/*.js',
                '!js/*.min.js',
                'vendor/bootstrap/js/bootstrap.js',
                'vendor/jquery/jquery.js'
            ])
            .pipe(concat('script.concat.js'))
            .pipe(uglify())
            .pipe(gulp.dest('tmp'))
    }
    watch([
        'js/*.js',
        '!js/*.min.js',
        'vendor/bootstrap/js/bootstrap.js',
        'vendor/jquery/jquery.js'
    ], run);

    return run();
});

gulp.task('pug', function() {
    function run() {
        return gulp.src('pug/*.pug')
            .pipe(pug())
            .pipe(gulp.dest('./'))
    }

    watch('pug/*.pug', run);

    return run();
});

gulp.task('imagemin', function() {
    function run() {
        return gulp.src('bigimage/*')
            .pipe(imagemin())
            .pipe(gulp.dest('img'))
    }

    watch('bigimage/*', run);

    return run();
});

//----------Автоматически добавляет префиксы для кроссбраузерности-------//
    gulp.task("autoPrefix", function() {
    	gulp.src("css/freelancer.css")
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    		.pipe(gulp.dest("src"))

    });
//-------------------------------Конец----------------------------//

//Добавляем переменные для работы с bootstrap & font-awesome
var config = {
         sassPath: 'vendor/font-awesome/scss',
         bowerDir: 'bower_components' 
    }

//-------------------------Запускаем bower-------------------------------//
gulp.task('bower', function() { 
    return bower()
         .pipe(gulp.dest(config.bowerDir)) 
});
//-------------------------------Конец----------------------------//


//-----------Располагаем font-awesome в директории src------------------------//
gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/vendor/font-awesome/fonts') 
        .pipe(gulp.dest('src')); 
});
//-------------------------------Конец----------------------------//

//-----------Работа с font-awesome и bootstrap--------------------------//
gulp.task('css', function() { 
    return sass(config.sassPath)
    .pipe(sass({
                style: 'compressed',
                loadPath: [
                    //'./resources/sass',
                   config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                    config.bowerDir + '/fontawesome/scss',
                ]
            }) 
            .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))) 
         .pipe(gulp.dest('src')); 
});
//-------------------------------Конец----------------------------//


//-------------Объединяем все файлы CSS в один и сжимаем их-----------------//
gulp.task('css:build', function(){
    return gulp.src([
        'css/*.css',
        '!css/*.min.css',
        'vendor/bootstrap/css/bootstrap.css',
        'src/font-awesome.css'
])
    .pipe(concat('style.concat.css'))
    .pipe(csso({
        comments: false
    }))
    .pipe(gulp.dest('src'))
});
//-------------------------------Конец----------------------------//

gulp.task('default', ['js:compress', 'pug', 'imagemin', 'autoPrefix'])
