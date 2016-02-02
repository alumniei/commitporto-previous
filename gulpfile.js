var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	useref = require('gulp-useref'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	cssnano = require('gulp-cssnano');

gulp.task('run', ['browser-sync', 'compile-sass', 'concat-minify'], function() {
	gulp.watch('app/scss/*.scss', ['compile-sass']);
	gulp.watch('app/*.html', browserSync.reload);
  	gulp.watch('app/js/**/*.js', browserSync.reload);
});

/** CSS tasks **/
gulp.task('compile-sass', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
	     	stream: true
	    }));
});

/** SYNC tasks **/
gulp.task('browser-sync', function() {
 	browserSync({
	    server: {
	      baseDir: 'app'
	    },
  });
});

/** CONCAT/MINIFY tasks **/
gulp.task('concat-minify', function(){
  	return gulp.src('app/*.html')
	    .pipe(useref())
	    .pipe(gulpIf('*.js', uglify()))
    	.pipe(gulpIf('*.css', cssnano()))
	    .pipe(gulp.dest('dist'));
});