'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer-core'),
    mqpacker = require('css-mqpacker'),
    lost = require('lost'),
    // csswring = require('csswring'),
    cssnext = require('cssnext'),
    sync = require('browser-sync'),
    errors = require('../util/errors'),
    config = require('../config').css;

gulp.task('css', function() {
  var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker,
        lost,
        cssnext()
      ];

  return gulp.src(config.src)
    .pipe(sourcemaps.init())
        .pipe(sass()).on('error', errors)
        .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(sync.stream({match: '**/*.css'}));
});