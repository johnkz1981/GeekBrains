'use strict';

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglifyes'),
    autoPrefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    bs = require('browser-sync'),
    rename = require('gulp-rename'),
    cssMin = require('gulp-csso');

const paths = {
  css: './style.sass',
  cssDir: 'style/*.sass',
  js: 'js/**/*.js',
  project: './',
};

gulp.task('css', () => {
  return gulp.src(paths.css)
      .pipe(sass())
      .pipe(autoPrefixer())
      .pipe(cssMin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.project));
});

gulp.task('js', () => {
  return gulp.src(paths.js)
      .pipe(concat('js.js'))
      .pipe(uglify())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(paths.project));
});

gulp.task('server', () => {
  return bs({
    browser: 'google chrome canary',
    server: {
      baseDir: paths.project
    }
  })
});

gulp.task('css:watch', () => {
  return gulp.watch(paths.cssDir, gulp.series('css', (done) => {
    bs.reload();
    done();
  }));
});

gulp.task('js:watch', () => {
  return gulp.watch(paths.js, gulp.series('js', (done) => {
    bs.reload();
    done();
  }));
});

gulp.task('default', gulp.parallel('css', 'js', 'server', 'css:watch', 'js:watch'));