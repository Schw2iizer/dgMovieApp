var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');

gulp.task('sass', function() {
  return gulp.src('content/styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concatCss("site.css"))
    .pipe(uglifycss({
      "max-line-len": 80
    }))
    .pipe(gulp.dest('content/styles/css'));
});

gulp.task('scripts', function() {
  gulp.src('scripts/*.js')
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('scripts'));
});

gulp.task('watch', function() {
  gulp.watch('content/styles/scss/*.scss', ['sass']);
  gulp.watch(['scripts/*.js'], ['scripts']);
});

gulp.task('default', ['sass', 'watch']);
