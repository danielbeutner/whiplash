gulp = require 'gulp'
path = require 'path'
bs = require 'browser-sync'

src = __dirname + '/src/'
bld = __dirname + '/build/'

files = [
  bld + '*.html',
  bld + '*.js',
  bld + '*.css'
]

# Lint gulpfile
gulp.task 'lint',->
  coffeelint = require 'gulp-coffeelint'
  gulp.src './gulpfile.coffee'
    .pipe coffeelint()
    .pipe coffeelint.reporter()
  null

# Watch task
gulp.task 'serve',->
  bs.init({
    server: bld
  })
  gulp.watch src + 'jade/*.jade',['jade']
  gulp.watch src + 'coffee/*.coffee',['coffee']
  gulp.watch src + 'stylus/*.styl',['stylus']
  gulp.watch 'gulpfile.coffee' ,['lint']
  null

# Copy normalize task
gulp.task 'copy.normalize', ->
  normalize = require.resolve 'normalize.styl'
  normalizePath = path.dirname normalize
  console.log normalizePath
  gulp.src normalizePath + '/**/*.styl'
    .pipe gulp.dest src + '/stylus/normalize/'

# Coffee task
gulp.task 'coffee',->
  coffee = require 'gulp-coffee'
  plumber = require 'gulp-plumber'
  concat = require 'gulp-concat'
  gulp.src src + 'coffee/*.coffee'
    .pipe plumber()
    .pipe coffee()
    .pipe concat 'index.js'
    .pipe gulp.dest bld
    .pipe bs.stream()
  null

# Stylus task
gulp.task 'stylus',->
  stylus = require 'gulp-stylus'
  gulp.src src + 'stylus/*.styl'
    .pipe stylus()
    .pipe gulp.dest bld
    .pipe bs.stream()
  null

# Jade task
gulp.task 'jade',->
  jade = require 'gulp-jade'
  gulp.src src + 'jade/*.jade'
    .pipe jade({
      locals: {}
    })
    .pipe gulp.dest bld
    .pipe bs.stream()
  null

gulp.task 'default',['build','serve']
gulp.task 'build',['lint','coffee','stylus','jade']