const fs = require("fs");
const gulp = require("gulp");
const path = require("path");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");

const postcssPresetEnv = require("postcss-preset-env");
const postcssImport = require("postcss-import");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const size = require("gulp-filesize");
const log = require("fancy-log");
// const cssnano = require("gulp-cssnano");
const { name } = require("../package.json");

const resolve = dir => path.join(__dirname, ".", dir);
const distDir = resolve("../dist");
const libDir = resolve("../lib");
const esDir = resolve("../es");
const scssDir = resolve("../components/**/*.scss");
const indexJsDir = resolve("../components/**/style/index.js");
const imgDir = resolve("../components/**/*.png");

// 复制 img 文件到 lib es 文件夹下
gulp.task("copy-img", () => {
  return gulp
    .src(imgDir)
    .pipe(gulp.dest(libDir))
    .pipe(gulp.dest(esDir));
});

// 复制 sass 文件到 lib es 文件夹下
gulp.task("copy-scss", () => {
  return gulp
    .src(scssDir)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(libDir))
    .pipe(gulp.dest(esDir));
});

// 根据 index.js 创建一个全新的 css.js 供按需加载 styel:'css' 使用
gulp.task("replace-indexjs", () => {
  return gulp
    .src(indexJsDir)
    .pipe(sourcemaps.init())
    .pipe(replace("scss", "css"))
    .pipe(
      rename(function(path) {
        path.basename = "css";
        path.extname = ".js";
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(libDir))
    .pipe(gulp.dest(esDir));
});

// 编译 sass 文件到 es 和 lib 文件夹下
gulp.task("compile-sass", () => {
  return (
    gulp
      .src(scssDir)
      .pipe(sourcemaps.init())
      .pipe(
        sass().on("error", function(err) {
          log.error(err.message);
        })
      )
      .pipe(
        postcss([
          // 编译.pcss 文件
          postcssPresetEnv({
            autoprefixer: {
              flexbox: "no-2009"
            },
            stage: 3,
            features: {
              //https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
              "custom-properties": true,
              "nesting-rules": true
            },
            browsers: "last 2 versions"
          })
        ])
      )
      .pipe(
        rename(function(path) {
          path.extname = ".css";
        })
      )
      // 压缩 css 文件
      .pipe(cleanCSS({ inline: ["none"] }))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(libDir))
      .pipe(gulp.dest(esDir))
  );
});

// 编译 sass 到 dist 文件夹下
gulp.task("dist-css", () => {
  return (
    gulp
      .src(scssDir)
      .pipe(sourcemaps.init())
      .pipe(
        sass().on("error", function(err) {
          log.error(err.message);
        })
      )
      .pipe(
        postcss([
          postcssPresetEnv({
            stage: 3,
            features: {
              //https://github.com/csstools/postcss-preset-env/blob/master/src/lib/plugins-by-id.js#L36
              "custom-properties": true,
              "nesting-rules": true
            }
          })
        ])
      )

      .pipe(concat(`${name}.css`))
      .pipe(size())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(distDir))

      .pipe(concat(`${name}.min.css`))
      .pipe(size())
      //清除.map 干扰
      .pipe(cleanCSS({ inline: ["none"] }))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(distDir))
  );
});

gulp.task("compile", gulp.series(gulp.parallel("copy-img", "copy-scss", "replace-indexjs", "compile-sass", "dist-css")));
