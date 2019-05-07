var gulp = require("gulp");
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss = require('gulp-concat-css');
var uglifycss = require('gulp-uglifycss');
var concat = require('gulp-concat');
gulp.task('sass', function() {
  return gulp.src('content/styles/scss/*.scss')
    .pipe(sass().on('error', sass.logError)) // shows errors if there are any
    .pipe(autoprefixer({ // autoprefixer
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concatCss("site.css")) // concatenates all files in one big file
    .pipe(uglifycss({ // uglifies and saves space
      "max-line-len": 80
    }))
    .pipe(gulp.dest('content/styles/css')); // output file directory
});

gulp.task('watch', function() {
  gulp.watch('content/styles/scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass', 'watch']);
