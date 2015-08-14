'use strict';

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    sketch = require("gulp-sketch"),
    iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    config = require('../config').icons;

gulp.task('icons', function(){
  return gulp.src(config.src)
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg'
    }))
    .pipe(iconfont({ fontName: config.name, svg: true }))
    .on('glyphs', function(glyphs) {
      var options = {
        glyphs: glyphs.map(function(glyph) {
          return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) };
        }),
        fontName: config.name,
        fontPath: config.dest.fontcss + '/',
        className: config.name
      };
      return gulp.src(config.template.src + config.template.name + '.scss')
        .pipe(consolidate('lodash', options))
        .pipe(rename({ basename: config.name }))
        .pipe(gulp.dest(config.dest.tag));
    })
    .pipe(gulp.dest(config.dest.font));
});