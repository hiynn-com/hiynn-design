const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssCssNext = require("postcss-cssnext");
const postcssImport = require("postcss-import");

const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";
const distDir = path.join(process.cwd(), "dist");
console.log("--- process.cwd ---", process.cwd());

module.exports = {
  mode: "development",
  // 预览
  entry: { main: "./src/index.js" },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(pc|le|sc|c)ss$/,
        use: [
          // fallback to style-loader in development
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpe?g|png|gif|ogg|mp3)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [distDir]
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    //预览
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../public/index.html"), //指定要打包的html路径和文件名
      filename: "./index.html" //指定输出路径和文件名
    }),
    new WebpackMd5Hash(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
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
