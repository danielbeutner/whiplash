/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    requireDir = require('require-dir'),
    util = require('gulp-util'),
    config = require('./gulp/config');

requireDir('./gulp/tasks', { recurse: true });
config.debug ? util.log('Debug is active') : util.log('Debug is disabled');
gulp.task('default', function () {
  gulp.start('watch');
});