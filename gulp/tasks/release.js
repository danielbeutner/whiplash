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
    .pipe(git.commit('Release'))
    .pipe(filter('package.json'))
    .pipe(tag());
}

gulp.task('release', function() { return release('patch'); });
gulp.task('release:minor', function() { return release('minor'); });
gulp.task('release:major', function() { return release('major'); });