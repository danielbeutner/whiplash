var gulp = require('gulp'),
    sync = require('browser-sync'),
    browserify = require('browserify'),
    riotify = require('riotify'),
    source = require('vinyl-source-stream'),
    errors = require('../util/errors'),
    config = require('../config').browserify;

gulp.task('browserify', function() {
  return browserify({
    debug: false,
    entries: [config.src + '/js/app.js'],
    transform: [riotify]
  })
  .bundle()
  .on('error', errors)
  .pipe(source('app.js'))
  .pipe(gulp.dest(config.dest))
  .pipe(sync.stream());
});