var gulp = require( "gulp");
var sass = require("gulp-sass");
var pug = require( "gulp-pug");
var concat = require("gulp-concat");
var image = require( "gulp-image");
var cssnano = require( "gulp-cssnano");
var prefix = require( "gulp-autoprefixer");
var watch = require("gulp-watch");
var script = require("gulp-uglifyjs");

gulp.task("sass", function() {
	function run() {
		return gulp.src("app/sass/**/*.scss")
				.pipe(sass() )
					.pipe(gulp.dest("app/css"))
	}
	watch("app/sass/**/*.scss", run);
	return run;
});	

gulp.task("pug", function() {
	function run() {
	return gulp.src("app/pug/*.pug")
				.pipe(pug())
					.pipe(gulp.dest("app"))
	}
	watch("app/pug/*.pug", run);
	return run;
});

gulp.task("concat", function () {
	function run() {
  			return gulp.src(["app/css/styles.css", "app/css/font-awesome-min.css", "app/css/animate.css", "app/css/jquery.easy-pie-chart.css", "app/css/styles-blue.css", "app/css/styles-orange.css", 
  	"app/css/styles-red.css"])
   				 .pipe(concat("main.css"))
    					.pipe(gulp.dest("app/css"))
    }
    watch("app/css/*.css", run);
    return run;
});

gulp.task("image",function() {
	return gulp.src("app/image_source/**/*")
			.pipe(image())
					.pipe(gulp.dest("app/img"))
});

gulp.task("cssnano", function() {
	function run() {
			return gulp.src("app/css/main.css")
					.pipe(cssnano())
							.pipe(gulp.dest("app/css"))
		}
		watch("app/css/main.css", run);
		return run;
});

gulp.task("prefix", function() {
			function run(){
					return gulp.src("app/css/main.css")
						.pipe(prefix())
								.pipe(gulp.dest("app/css"))
			}
			watch("app/css/main.css", run);
			return run;
});

gulp.task("scripts", function () {
	function run() {
  			return gulp.src("app/js/*.js")
   				 .pipe(concat("main.js"))
   				 		.pipe(script())
    						.pipe(gulp.dest("app/js"))
    }
    watch("app/js/*.js", run);
    return run;
});

gulp.task("default", ["sass", "pug", "concat", "image", "cssnano", "prefix", "scripts"]);