const path     = require('path')
const webpack  = require('webpack')

const src      = path.resolve(process.cwd(), 'dist'); // 源码目录
const evn      = process.env.NODE_ENV == "production" ? "production" : "development";

module.exports = {
    mode: "development",
    resolve: {
      // alias: {
      //   'react': path.join(__dirname, 'node_modules/react/cjs/react.production.min.js'),
      //   'react-dom': path.join(__dirname, 'node_modules/react-dom/cjs/react-dom.production.min.js'),
      //   'react-router': path.join(__dirname, 'node_modules/react-router/umd/react-router.min.js'),
      // }
    },

    entry: {
        // 定义程序中打包公共文件的入口文件vendor.js
        vendor: [
          'react', 
          'react-dom',
          "react-router-dom",
          "antd",
          "redux",
          "react-redux",
          "lodash",
          "moment"
        ],
    },

    output: {
        path: path.join(src, 'js'),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
    },

    plugins: [
        new webpack.DllPlugin({
            // 定义程序中打包公共文件的入口文件vendor.js
            context: process.cwd(),

            // manifest.json文件的输出位置
            path: path.join(src, 'js', '[name]-manifest.json'),

            // 定义打包的公共vendor文件对外暴露的函数名
            name: '[name]_[hash]'
        }),
        // new webpack
        //     .optimize
        //     .UglifyJsPlugin({
        //         compress: {
        //             warnings: false, //删除无用代码时不输出警告
        //             drop_console: true, //删除所有console语句，可以兼容IE
        //             collapse_vars: true, //内嵌已定义但只使用一次的变量
        //             reduce_vars: true, //提取使用多次但没定义的静态值到变量
        //         },
        //         output: {
        //             beautify: false, //最紧凑的输出，不保留空格和制表符
        //             comments: false, //删除所有注释
        //         }
        //     })
    ]
}