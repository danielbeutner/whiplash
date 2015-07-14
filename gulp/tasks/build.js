var gulp = require('gulp');

gulp.task('build', ['clean'], function() {
  gulp.start('css', 'js', 'html','lint');
});