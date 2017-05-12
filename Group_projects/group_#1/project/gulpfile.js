var gulp = require('gulp'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pug = require('gulp-pug'),
    imagemin = require('gulp-imagemin');

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

gulp.task('default', ['js:compress', 'pug', 'imagemin'])
