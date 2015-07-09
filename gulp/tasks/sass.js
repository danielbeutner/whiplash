var gulp = require('gulp'),
    sync = require('browser-sync'),
    sass = require('gulp-sass'),
    errors = require('../util/errors'),
    config = require('../config').sass;

gulp.task('sass', function() {
  gulp.src(config.src)
    .pipe(sass())
    .on('error', errors)
    .pipe(gulp.dest('app'))
    .pipe(sync.stream());
});