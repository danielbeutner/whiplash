'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    config = require('../config.js').jshint;

gulp.task('jshint', function(){
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
gulp.task('jshint-configs', function(){
  return gulp.src(config.configSrc)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});