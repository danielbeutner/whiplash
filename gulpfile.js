 'use strict';

var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });
gulp.task('default', function () {
  gulp.start('watch');
});