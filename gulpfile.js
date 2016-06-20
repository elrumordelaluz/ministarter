const gulp = require('gulp')
const postcss = require('gulp-postcss')
const cssnext = require('postcss-cssnext')
const sorting = require('postcss-sorting')
const cssnano = require('cssnano')
const pug = require('gulp-pug')
const babel = require('gulp-babel')
const browserSync = require('browser-sync')
const sourcemaps = require('gulp-sourcemaps')
const imagemin = require('gulp-imagemin');
const reload = browserSync.reload
const viewsConfig = require('./src/views/config')

gulp.task('css', () => {
  const processors = [
    cssnext({ browsers: ['last 2 versions'] }),
    sorting({ "sort-order": "yandex" }),
    cssnano({ autoprefixer: false }),
  ]
  return gulp.src('./src/styles/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(reload({ stream: true }))
})

gulp.task('pug', () => {
  return gulp.src('./src/views/*.pug')
    .pipe(pug({
      pretty: true,
      locals: viewsConfig
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(reload({ stream: true }))
})

gulp.task('js', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015', 'stage-2']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'))
    .pipe(reload({ stream: true }))
})

gulp.task('imgs', () => {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imgs'))
    .pipe(reload({ stream: true }))
})

gulp.task('watch', () => {
  gulp.watch(['./src/views/**/*.pug', './src/views/config.js'], ['pug'])
  gulp.watch(['./src/styles/*.css'], ['css'])
  gulp.watch(['./src/scripts/*.js'], ['js'])
  gulp.watch(['./src/images/*'], ['imgs'])

  browserSync({
    server: {
      baseDir: './dist'
    }
  })
})

gulp.task('default', ['css', 'pug', 'js', 'imgs'])
