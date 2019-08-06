const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    // path: resolve("dist"), // 输出目录
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js" // 输出文件
    // libraryTarget: "umd" // 采用通用模块定义
    // library: "hiynn-design", // 库名称
    // libraryExport: "default", // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    // globalObject: "this" // 兼容node和浏览器运行，避免window is not undefined情况
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new WebpackMd5Hash()
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new webpack.NoEmitOnErrorsPlugin()
  ],
  //压缩js
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false
        }
      })
    ]
  }
};
