const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const WebpackMd5Hash = require("webpack-md5-hash");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";
const { version, name, description } = require("../package.json");
const buildDir = path.join(process.cwd(), "build");

module.exports = {
  mode: "development",
  entry: { [name]: "./src/index.js" },
  output: {
    // path: resolve("dist"), // 输出目录
    path: buildDir,
    filename: "[name].min.js",
    umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
    //不加下面几行，被引用会被报错
    libraryTarget: "umd", // 采用通用模块定义
    library: [name]
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(pc|sc|c)ss$/,
        use: [
          // fallback to style-loader in development
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
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
    enforceExtension: false,
    extensions: [".js", ".jsx", ".json", ".less", ".css"]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [buildDir]
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
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.pcss$/,
          chunks: "all",
          enforce: true
        }
      }
    },
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
  }
};
