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
    src: src + "/icons/icons-14px.sketch",
    classname: "icon",
    fontname: "iconset",
    template: {
      name: "whiplash-style",
      src: src + "/icons/templates/"
    },
    dest: {
      font: src + "/assets/fonts",
      fontcss: "assets/fonts",
      tag: src + "/tags/atoms"
    }
  }
};