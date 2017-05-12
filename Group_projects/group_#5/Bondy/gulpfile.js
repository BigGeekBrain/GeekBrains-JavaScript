var gulp = require( "gulp");
var sass = require("gulp-sass");
var pug = require( "gulp-pug");
var concat = require("gulp-concat");
var image = require( "gulp-image");

gulp.task("sass", function() {
	return gulp.src("app/sass/**/*.scss")
				.pipe(sass() )
					.pipe(gulp.dest("app/css"))
});

gulp.task("pug", function() {
	return gulp.src("app/pug/*.pug")
				.pipe(pug())
					.pipe(gulp.dest("app"))
});

gulp.task("concat", function () {
  return gulp.src(["app/css/styles.css", "app/css/font-awesome-min.css", "app/css/animate.css", "app/css/jquery.easy-pie-chart.css", "app/css/styles-blue.css", "app/css/styles-orange.css", 
  	"app/css/styles-red.css"])
    .pipe(concat("main.css"))
    .pipe(gulp.dest("app/css"))
});


gulp.task("default", ["sass", "pug", "concat"]);