var src = "./src",
    dest = "./app";

module.exports = {
  watch: {
    src: src,
    dest: dest
  },
  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest
  },
  browserify: {
    src: src + '/js/app.js',
    dest: dest,
    tags: src + '/tags/**/*.tag'
  },
  html: {
    src: src + "/html/*.html",
    dest: dest + "/"
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + "/"
  }
};