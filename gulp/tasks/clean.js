var gulp = require('gulp');
    del = require('del');

gulp.task('clean', function(cb) {
    del(['app'], cb)
});

gulp.task('clean:css', function(cb) {
    del(['app/*.css', 'app/*.css.map'], cb)
});

gulp.task('clean:html', function(cb) {
    del(['app/*.html'], cb)
});

gulp.task('clean:js', function(cb) {
    del(['app/*.js'], cb)
});