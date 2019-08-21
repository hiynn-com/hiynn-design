const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { version, name, description } = require("../package.json");

const resolve = dir => path.join(__dirname, ".", dir);
const isProd = process.env.NODE_ENV === "production";
const docsDir = path.join(process.cwd(), "docs");

module.exports = {
  mode: "production",
  // 预览
  entry: { main: "./src/index.js" },
  output: {
    // path: resolve("dist"), // 输出目录
    path: docsDir,
    filename: "static/js/[name].min.js",
    chunkFilename: "static/js/[name].chunk.js",
    umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
    //不加下面几行，被引用会被报错
    libraryTarget: "umd", // 采用通用模块定义
    library: [name]
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(pc|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: true,
              plugins: () => [
                require("postcss-apply"),
                postcssPresetEnv({
                  stage: 3,
                  features: {
                    "custom-properties": true,
                    "nesting-rules": true,
                    "color-mod-function": { unresolved: "warn" }
                  },
                  browsers: "last 2 versions"
                })
              ]
            }
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
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
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
      cleanOnceBeforeBuildPatterns: [docsDir]
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].min.css",
      chunkFilename: "static/css/[name].chunk.css"
    }),
    //预览
    new HtmlWebpackPlugin({
      //指定要打包的html路径和文件名
      template: path.join(__dirname, "../public/index.html"),
      //指定输出路径和文件名
      filename: "./index.html"
    }),
    new InlineManifestWebpackPlugin(),
    new HtmlWebpackInlineSourcePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  //压缩js
  optimization: {
    //分离 js 和 css
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          minSize: 30000,
          minChunks: 1,
          chunks: "initial",
          priority: 1 // 该配置项是设置处理的优先级，数值越大越优先处理
        },
        commons: {
          test: /[\\/]src[\\/]common[\\/]/,
          name: "commons",
          minSize: 30000,
          minChunks: 3,
          chunks: "initial",
          priority: -1,
          reuseExistingChunk: true // 这个配置允许我们使用已经存在的代码块
        }
      }
    },
    // 生成运行时.js 文件，并写入到.html
    runtimeChunk: "single",
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
          //生成.css.map 文件
          map: true,
          discardComments: { removeAll: true },
          // 避免 cssnano 重新计算 z-index
          safe: true,
          // 关闭autoprefixer功能
          // 使用postcss cssnano的autoprefixer功能
          autoprefixer: false
        },
        canPrint: true
      })
    ]
  }
};
