const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情

/***
 * 打包index.js文件
 * 在当前路径下生成一个dist文件夹
 * 文件为bundle.js
 */
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        //placeholders 后缀名   name-源文件名称   ext-源文件后缀
                        name: '[name]_[hash].[ext]',
                        // 将打包好的文件打包到 指定文件夹下
                        outputPath: 'images/',
                        // 如果文件小于limit 压缩成base64 反之打包到文件夹内
                        limit: 2048
                    }
                }
            },
            {
                test: /\.scss$/,
                // loader调用顺序 从后向前
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            // 遇到@import 语法重新执行两个loader
                            importLoaders: 2
                            // css 模块化   style.avatar
                            // module: true
                        }
                    }, 
                    'sass-loader', 
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    }), new CleanWebpackPlugin()]
}