// webpack.config.preview 专用
module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      browsers: "last 2 versions"
    },
    cssnano: {}
  }
};
