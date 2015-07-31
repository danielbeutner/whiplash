/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    sync = require('browser-sync'),
    mustache = require('gulp-mustache'),
    rename = require("gulp-rename"),
    debug = require('../config').debug,
    config = require('../config').html;

gulp.task('html', function() {
  gulp.src(config.src)
    .pipe(mustache({
      debug: debug
    }))
    .pipe(rename({extname: '.html' }))
    .pipe(gulp.dest(config.dest))
    .pipe(sync.stream());
});