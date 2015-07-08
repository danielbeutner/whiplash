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
    src: src,
    dest: dest
  },
  html: {
    src: src + "/html/*.html",
    dest: dest + "/"
  }
};