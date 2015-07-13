var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer-core'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    cssnext = require('cssnext'),
    sync = require('browser-sync'),
    errors = require('../util/errors'),
    config = require('../config').sass;

gulp.task('css', function() {
  var processors = [
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker,
        csswring,
        cssnext
      ];
  gulp.src(config.src)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .on('error', errors)
    .pipe(gulp.dest('app'))
    .pipe(sync.stream());
});