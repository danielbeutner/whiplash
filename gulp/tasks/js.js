'use strict';

var gulp = require('gulp'),
    glob = require('glob'),
    sync = require('browser-sync'),
    browserify = require('browserify'),
    riotify = require('riotify'),
    source = require('vinyl-source-stream'),
    errors = require('../util/errors'),
    config = require('../config').js,
    tags = [];

gulp.task('js', function() {
  tags = glob.sync(config.tag.src);
  return browserify({
    debug: false,
    entries: [tags, config.src],
    transform: [riotify]
  })
    .bundle()
    .on('error', errors)
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.dest))
    .pipe(sync.stream());
});