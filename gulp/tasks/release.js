/*jslint node: true */
'use strict';

var gulp = require('gulp'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    filter = require('gulp-filter'),
    tag = require('gulp-tag-version');

function release(type) {
  return gulp.src(['./package.json'])
    .pipe(bump({type: type}))
    .pipe(gulp.dest('./'))
    .pipe(git.commit('bumps package version'))
    .pipe(filter('package.json'))
    .pipe(tag());
}

gulp.task('patch', function() { return release('patch'); });
gulp.task('feature', function() { return release('minor'); });
gulp.task('release', function() { return release('major'); });