const gulp = require("gulp");
const path = require("path");
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const size = require("gulp-filesize");
const cssnano = require("gulp-cssnano");
const { name } = require("./package.json");

const resolve = dir => path.join(__dirname, ".", dir);
const distDir = resolve("dist");
const libDir = resolve("lib");
const esDir = resolve("es");
const sassDir = resolve("src/**/*.scss");
const styleDir = resolve("src/**/index.scss");

gulp.task("copy-sass", () => {
  return gulp
    .src(sassDir)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(libDir))
    .pipe(gulp.dest(esDir));
});

gulp.task("compile-sass", () => {
  return gulp
    .src(sassDir)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(libDir))
    .pipe(gulp.dest(esDir));
});

gulp.task("dist", () => {
  return gulp
    .src(sassDir)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(concat(`${name}.css`))
    .pipe(size())
    .pipe(gulp.dest(distDir))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.css.map`))
    .pipe(size())
    .pipe(gulp.dest(distDir))

    .pipe(cssnano())
    .pipe(concat(`${name}.min.css`))
    .pipe(size())
    .pipe(gulp.dest(distDir))
    .pipe(sourcemaps.write())
    .pipe(rename(`${name}.min.css.map`))
    .pipe(size())
    .pipe(gulp.dest(distDir));
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

gulp.task("compile", gulp.series(gulp.parallel("copy-sass", "compile-sass", "dist")));
