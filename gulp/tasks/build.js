var gulp = require('gulp');

gulp.task('build', ['clean','lint'], function() {
  gulp.start('assets','css', 'js', 'html');
});