'use strict';

var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function(cb) {
    return del(['app'], cb);
});

gulp.task('clean:css', function(cb) {
    return del(['app/*.css', 'app/*.css.map'], cb);
});

gulp.task('clean:html', function(cb) {
    return del(['app/*.html'], cb);
});

gulp.task('clean:js', function(cb) {
    return del(['app/*.js'], cb);
});

gulp.task('clean:assets', function(cb) {
    return del(['app/assets'], cb);
});

gulp.task('clean:styleguide', function(cb) {
    return del(['app/styleguide'], cb);
});