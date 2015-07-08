var gulp = require('gulp'),
    lint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    errors = require('../util/errors'),
    config = require('../config');

gulp.task('lint', function() {
  return gulp.src([config.src + '/js/**/*.js'])
    .pipe(lint())
    .pipe(lint.reporter(stylish));
});