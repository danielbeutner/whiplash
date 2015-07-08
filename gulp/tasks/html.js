var gulp = require('gulp'),
    sync = require('browser-sync'),
    config = require('../config').html;

gulp.task('html', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(sync.stream());
});