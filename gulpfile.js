var bld, bs, files, gulp, path, src, browserify, riotify, source;

gulp = require('gulp');
path = require('path');
bs = require('browser-sync');
gulp = require('gulp');
browserify = require('browserify');
riotify = require('riotify');
source = require('vinyl-source-stream');
src = __dirname + '/src/';
bld = __dirname + '/app/';

files = [
  bld + '*.html',
  bld + '*.js',
  bld + '*.css'
];

gulp.task('lint', function() {
  var coffeelint;
  coffeelint = require('gulp-coffeelint');
  gulp.src('./gulpfile.coffee').pipe(coffeelint()).pipe(coffeelint.reporter());
});

gulp.task('serve', function() {
  bs.init({
    server: bld,
    index: 'app.html'
  });
  gulp.watch(src + 'html/*.html', ['html']);
  gulp.watch(src + 'js/*.js', ['js']);
  gulp.watch(src + 'sass/*.scss', ['sass']);
  gulp.watch('gulpfile.js', ['lint']);
});

gulp.task('html', function () {
  gulp.src(src + 'html/app.html')
    .pipe(gulp.dest('app'));
})

gulp.task('js', function() {
  return browserify({
        debug: true,
        entries: [ src + 'js/app.js'],
        transform: [riotify]
    }).bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest( bld ));
});

gulp.task('sass', function() {
  var sass;
  sass = require('gulp-sass');
  gulp.src(src + 'sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(bld))
    .pipe(bs.stream());
});

gulp.task('default', ['serve']);
gulp.task('build', ['lint', 'sass', 'js', 'html']);
