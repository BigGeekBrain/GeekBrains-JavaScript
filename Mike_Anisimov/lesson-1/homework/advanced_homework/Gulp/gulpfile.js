var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var csso = require('gulp-csso');
var concat = require('gulp-concat');

gulp.task('sass', function() {
	function run(){
	return gulp.src('sass/*.sass')
		.pipe(sass())
			.pipe(gulp.dest('css'))
		}
		watch('sass/*.sass', run);
		return run();
});

gulp.task('pug', function() {
	function run(){
	return gulp.src('*.pug')
		.pipe(pug())
			.pipe(gulp.dest('./'))
		}
		watch('*.pug', run);
		return run();
});

gulp.task('css:build', function() {
	return gulp.src('css/*.css')
		.pipe(concat('style.concat.css'))
		.pipe(csso({
			comments:false
		}))
			.pipe(gulp.dest('tmp'));
});


gulp.task('stylus', function() {
	function run(){
	return gulp.src('stylus/*.styl')
		.pipe(stylus())
			.pipe(gulp.dest('css'))
		}
		watch('stylus/*.styl', run);
		return run();
});

gulp.task('default', ['sass', 'pug', 'stylus']);