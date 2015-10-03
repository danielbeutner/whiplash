'use strict';

var gulp = require('gulp'),
    sync = require('browser-sync'),
    config = require('../config');

gulp.task('watch',['assets', 'css', 'js', 'html'], function() {
  /* Start Vorlon server */
  require('vorlon');
  /* Start Browsersync */
  sync.init({
    server: config.watch.src,
    index: 'app.html'
  });
  /* Assets */
  gulp.watch(config.assets.src,
             { debounceDelay: 6000 },
             ['assets']);
  gulp.watch([config.icons.src],
             { debounceDelay: 3000 },
             ['icons']);
  /* HTML, CSS and JS*/
  gulp.watch(config.html.src,
             ['html']);
  gulp.watch([config.css.tag.src],
             { debounceDelay: 500 },
             ['css_tag']);
  gulp.watch([config.css.src],
             { debounceDelay: 500 },
             ['css']);
  gulp.watch([config.js.src, config.js.tag.src],
             { debounceDelay: 1000 },
             ['js']);
});