var gulp = require('gulp'),
    sync = require('browser-sync'),
    config = {
      watch: require('../config').watch,
      css: require('../config').css,
      js: require('../config').js,
      html: require('../config').html,
      tags: require('../config').tags,
      icons: require('../config').icons,
      assets: require('../config').assets
    };

gulp.task('watch', function() {
  sync.init({
    server: config.watch.dest,
    index: 'app.html'
  });
  gulp.watch(config.assets.src,
             { debounceDelay: 6000 },
             ['assets']);
  gulp.watch(config.html.src,
             ['html']);
  gulp.watch([config.icons.src],
             { debounceDelay: 3000 },
             ['icons']);
  gulp.watch(config.html.src,
             ['html']);
  gulp.watch([config.js.src,config.js.tags],
             ['js']);
  gulp.watch([config.css.src,config.tags.src],
             ['css']);
});