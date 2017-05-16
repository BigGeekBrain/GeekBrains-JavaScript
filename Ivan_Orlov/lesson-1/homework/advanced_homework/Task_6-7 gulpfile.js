var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var minifyCss = require('gulp-minify-css');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var strip = require('gulp-strip-comments');
var csso = require('gulp-csso');

gulp.task('sass', function() {
	function run() {
		return gulp.src('sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('css'))
	}
	watch('sass/*.sass', run);

	return run();
});

gulp.task('pug', function() {
	function run() {
		return gulp.src('*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./'))
	}
	watch('*.pug', run);

	return run();
});

gulp.task('minifycss', function() {
	function run() {
		return gulp.src('css/*.css')
		.pipe(concat('style.min.css'))
		.pipe(csso({comments: false

		}))
		.pipe(gulp.dest('tmp'));
	}
	watch('css/*.css', run);

	return run();
	
});


gulp.task('default', ['sass','pug','minifycss'])