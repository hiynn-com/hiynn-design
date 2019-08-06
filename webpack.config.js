const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    // path: resolve("dist"), // 输出目录
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js" // 输出文件
    // libraryTarget: "umd" // 采用通用模块定义
    // library: "hiynn-design", // 库名称
    // libraryExport: "default", // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    // globalObject: "this" // 兼容node和浏览器运行，避免window is not undefined情况
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
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
  resolve: {
    extensions: [".js", ".jsx"]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      title: "Custom template",
      template: "./public/index.html", //指定要打包的html路径和文件名
      filename: "../index.html" //指定输出路径和文件名
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
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css\.*(?!.*map)/g, //注意不要写成 /\.css$/g
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          discardComments: { removeAll: true },
          // 避免 cssnano 重新计算 z-index
          safe: true,
          // cssnano 集成了autoprefixer的功能
          // 会使用到autoprefixer进行无关前缀的清理
          // 关闭autoprefixer功能
          // 使用postcss的autoprefixer功能
          autoprefixer: false
        },
        canPrint: true
      })
    ]
  }
};
