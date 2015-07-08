var gulp = require('gulp');

gulp.task('build', ['lint', 'sass', 'browserify', 'html']);