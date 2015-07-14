var gulp = require('gulp'),
    sync = require('browser-sync'),
    config = {
      watch: require('../config').watch,
      css: require('../config').css,
      js: require('../config').js,
      html: require('../config').html,
      tags: require('../config').tags
    };

gulp.task('watch', function() {
  sync.init({
    server: config.watch.dest,
    index: 'app.html'
  });
  gulp.watch(config.html.src,
             ['html']);
  gulp.watch([config.js.src , config.js.tags],
             ['lint','js']);
  gulp.watch([config.css.src,config.tags.src],
             ['css']);
  gulp.watch('./gulpfile.js',
             ['lint']);
});