var path = require("path")
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var manifest = require('./dist/js/vendor-manifest.json')
const themeConfig = require("./src/assets/less/theme.js")

function resolve(str){
  return path.resolve(__dirname, str)
}

module.exports = {
  mode: "development",
  devtool: "source-map", // 开启调试
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: resolve('dist'),
    filename: '[name]-[hash:5].bundle.js',
    chunkFilename: "[name]-[hash:5].chunk.js",
    publicPath: "/",
  },
  devServer: {
    contentBase: resolve('dist'),
    port: 8000,
    hot: true,
    hotOnly:true, //禁用自动刷新
    overlay: true,
    noInfo: true,
    open: true,
    disableHostCheck: true,
    proxy: {},
    historyApiFallback: { //true
      rewrites: [{ from: /.*/, to: "/index.html" }]
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      chunks: ["app"]
    }),
    new webpack.DllReferencePlugin({
      manifest
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve:{
    alias: {
      "@": path.join(__dirname, "src")
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          // 'react-scoped-styles/script-loader',
          {loader: "babel-loader"}
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, 
        // {
        //   loader: 'react-scoped-styles/style-loader',
        // },
        {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            modifyVars: themeConfig,
            javascriptEnabled: true
          }
        },{
          loader: 'style-resources-loader',
          options: {
              patterns: resolve('src/assets/less/common.less')
          }
        }]
      }
    ]
  }
}