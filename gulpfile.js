var gulp = require('gulp'),
	sass = require('gulp-sass');

/** CSS tasks **/
gulp.task('compile-sass', function(){
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});

gulp.task('watch', ['compile-sass'], function() {
	gulp.watch('scss/*.scss', ['compile-sass']);
});