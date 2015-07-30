/*jslint node: true */
'use strict';

var src = "./src",
    dest = "./app";

module.exports = {
  watch: {
    src: src,
    dest: dest
  },
  css: {
    src: src + "/css/**/*.{sass,scss}",
    dest: dest
  },
  js: {
    src: src + '/js/app.js',
    dest: dest,
    tags: src + '/tags/**/*.tag'
  },
  html: {
    src: src + "/html/*.html",
    dest: dest + "/"
  },
  tags: {
    src: src + "/tags/**/*.{sass,scss}",
    dest: src + "/css"
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
      tag: src + "/tags/atoms"
    }
  },
  styleguide: {
    src: 'src/css',
    mask: '"*.scss"',
    dest: 'app/styleguide',
    template: 'src/styleguide',
    homepage: 'styleguide.md',
    css: '../app.css',
    js: '../app.js'
  }
};