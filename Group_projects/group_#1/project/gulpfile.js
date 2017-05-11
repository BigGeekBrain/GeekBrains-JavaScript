var gulp = require('gulp');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js:compress', function() {
	function run() {
		return gulp.src('js/*.js')
			.pipe(concat('script.concat.js'))
			.pipe(uglify())
			.pipe(gulp.dest('tmp'))	
	}
	watch('js/*.js', run);

	return run();
});

gulp.task('default', ['js:compress'])