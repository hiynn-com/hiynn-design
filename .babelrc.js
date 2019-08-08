const options = {
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        modules: false
      }
    ],
    "@babel/react"
  ],
  plugins: [
    "@babel/proposal-object-rest-spread",
    [
      "@babel/proposal-class-properties",
      {
        loose: true
      }
    ]
  ]
};

module.exports = options;
