/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', ['build'], function () {
  gulp.start('watch');
});