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
    dest: dest + "/"
  }
};