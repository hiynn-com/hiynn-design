const gulp = require("gulp");
const path = require("path");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const resolve = dir => path.join(__dirname, ".", dir);
const libDir = path.resolve(__dirname, "lib");
const esDir = path.resolve(__dirname, "es");

gulp.task("compile-with-es", () => {
  const postcss = require("gulp-postcss");
  const sourcemaps = require("gulp-sourcemaps");
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
  const postcss = require("gulp-postcss");
  const sourcemaps = require("gulp-sourcemaps");
  return gulp
    .src("src/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(postcss([require("precss"), require("autoprefixer")]))
    .pipe(rename({ extname: ".css" }))
    .pipe(minifycss())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(libDir));
});

gulp.task("compile", gulp.series(gulp.parallel("compile-with-es", "compile-with-lib")));
