var gulp = require('gulp'),
    sync = require('browser-sync'),
    config = require('../config').watch;

gulp.task('watch', function() {
  sync.init({
    server: config.dest,
    index: 'app.html'
  });
  gulp.watch(config.src + '/html/*.html',
             ['html']);
  gulp.watch([config.src + '/js/**/*.js', config.src + '/tags/**/*.tag'],
             ['lint','js']);
  gulp.watch(config.src + '/sass/**/*.{sass,scss}',
             ['css']);
  gulp.watch('./gulpfile.js',
             ['lint']);
});