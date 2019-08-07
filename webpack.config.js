const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: { main: "./lib/index.js" },
  output: {
    // path: resolve("dist"), // 输出目录
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "[name].js", // 输出文件
    //不加下面几行，被引用会被报错
    libraryTarget: "umd", // 采用通用模块定义
    library: "hiynn-design", // 库名称
    libraryExport: "default", // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: "this" // 兼容node和浏览器运行，避免window is not undefined情况
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
  // 注意：本地预览的时候要注释，否则报 require undefined
  // https://stackoverflow.com/questions/45818937/webpack-uncaught-referenceerror-require-is-not-defined
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new WebpackMd5Hash()
  ],
  //压缩js
  optimization: {
    // runtimeChunk: {
    //   name: "manifest"
    // },
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: "vendor",
    //       chunks: "all"
    //     },
    //     "async-vendors": {
    //       test: /[\\/]node_modules[\\/]/,
    //       minChunks: 2,
    //       name: "async-vendors",
    //       chunks: "async"
    //     }
    //   }
    // },
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
  },
  // 该选项是用来polyfill Node中的某些全局变量或者模块，让最初为Node.js环境写的代码可以在其他环境运行
  node: {
    // 防止webpack注入setImmediate的ployfill，因为vue原本就包含了它
    setImmediate: false,
    // 防止webpack注入到Nodejs的node_modules里，以下模块/变量在客户端不起作用
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  }
};
