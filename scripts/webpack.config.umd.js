const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";
const { version, name, description } = require("../package.json");
const distDir = path.join(process.cwd(), "dist");

module.exports = {
  mode: "production",
  entry: { [name]: "./components/index.js" },
  output: {
    // path: resolve("dist"), // 输出目录
    path: distDir,
    filename: "[name].min.js",
    umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
    //不加下面几行，被引用会被报错
    libraryTarget: "umd", // 采用通用模块定义
    library: name
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.md$/,
        use: "raw-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(pc|sc|le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                postcssPresetEnv({
                  stage: 3,
                  features: {
                    "custom-properties": true,
                    "nesting-rules": true
                  },
                  browsers: "last 2 versions"
                })
              ]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    enforceExtension: false,
    extensions: [".js", ".jsx", ".json", ".less", ".css"]
  },
  // 注意：本地预览的时候要注释，否则报 require undefined
  // https://stackoverflow.com/questions/45818937/webpack-uncaught-referenceerror-require-is-not-defined
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [distDir]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.BannerPlugin(` \n ${name} v${version} \n ${description} ${fs.readFileSync(path.join(process.cwd(), "LICENSE"))}`)
  ],
  //压缩js
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css\.*(?!.*map)/g, //注意不要写成 /\.css$/g
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          discardComments: { removeAll: true },
          safe: true,
          autoprefixer: false
        },
        canPrint: true
      })
    ]
  },
  node: {
    setImmediate: false,
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
