var gulp = require('gulp'),
    concat = require('gulp-concat'),
    config = require('../config').tags;

gulp.task('tags', function() {
  // tags
  gulp.src(config.src)
    .pipe(concat('_tags.scss'))
    .pipe(gulp.dest('src/css'));
});