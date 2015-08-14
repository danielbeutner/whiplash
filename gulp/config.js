'use strict';

var src = "./src",
    dest = "./app",
    debug = false;

module.exports = {
  debug: debug,
  watch: {
    src: dest
  },
  css: {
    src: src + "/css/**/*.{sass,scss}",
    dest: dest,
    tag: {
      src: src + "/tags/**/*.{sass,scss}",
      dest: src + "/css"
    },
  },
  js: {
    src: src + '/js/app.js',
    dest: dest,
    tag: {
      src: src + '/tags/**/*.tag'
    }
  },
  html: {
    src: src + "/html/app.mustache",
    dest: dest + "/"
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + "/assets"
  },
  icons: {
    src: src + "/icons/icons.sketch",
    name: "icon",
    template: {
      name: "icons",
      src: src + "/icons/templates/"
    },
    dest: {
      font: src + "/assets/fonts",
      fontcss: "assets/fonts",
      tag: src + "/tags/elements"
    }
  },
  jshint: {
    src: [src + 'js/*.js', src + 'tags/**/*.tag'],
    configSrc: ['gulp/**/*.js', 'gulpfile.js']
  }
};