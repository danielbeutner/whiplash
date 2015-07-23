var gulp = require('gulp'),
    shell = require('gulp-shell'),
    config = require('../config').styleguide;

// Build styleguide.
gulp.task('styleguide', ['clean:styleguide'], shell.task(
  [
    'kss-node <%= src %> <%= dest %> --css <%= css %> --js <%= js %> --homepage <%= homepage %> --mask <%= mask %> --template <%= template %>'
  ],
  {
    templateData: {
        src: config.src,
        mask: config.mask,
        dest: config.dest,
        template: config.template,
        homepage: config.homepage,
        css: config.css,
        js: config.js
    }
  }
));