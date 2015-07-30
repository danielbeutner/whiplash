/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    sync = require('browser-sync'),
    config = require('../config').assets;

gulp.task('assets', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(sync.stream());
});