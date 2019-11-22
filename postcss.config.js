module.exports = {
  syntax: "postcss-scss",
  plugins: {
    // "postcss-cssnext": {},
    "postcss-import": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009"
      },
      stage: 0,
      features: {
        "custom-properties": true,
        "nesting-rules": true
      }
    },
    "postcss-normalize": {},
    cssnano: {}
  }
};
