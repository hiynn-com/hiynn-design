const gulp = require("gulp");
const path = require("path");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const size = require("gulp-filesize");
const cssnano = require("gulp-cssnano");

const resolve = dir => path.join(__dirname, ".", dir);
const libDir = resolve("./lib");
const esDir = resolve("./es");
const sassDir = resolve("./src/**/*.scss");
const styleDir = resolve("./src/**/index.scss");

gulp.task("copySass", () => {
  return gulp
    .src(sassDir)
    .pipe(gulp.dest(libDir))
    .pipe(gulp.dest(esDir));
});

gulp.task("copyCss", () => {
  return gulp
    .src(sassDir)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(size())
    .pipe(cssnano())
    .pipe(gulp.dest(libDir))
    .pipe(gulp.dest(esDir));
});

gulp.task("compile-with-es", () => {
  return gulp
    .src("src/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(postcss([require("precss"), require("autoprefixer")]))
    .pipe(rename({ extname: ".css" }))
    .pipe(minifycss())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(esDir));
});

gulp.task("compile-with-lib", () => {
  return (
    gulp
      .src("src/**/*.scss")
      .pipe(sourcemaps.init())
      .pipe(postcss([require("precss"), require("autoprefixer")]))
      // .pipe(rename({ extname: ".css" }))
      .pipe(minifycss())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(libDir))
  );
});

gulp.task("compile", gulp.series(gulp.parallel("copySass", "copyCss")));
