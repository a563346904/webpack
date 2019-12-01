/**
 * 
 * npm init -y  自动生成项目
 * 
 * npx          运行当前项目文件
 * 
 * npm info webpack   查看插件历史版本号
 * 
 * npm install webpack@4.2.6  下载指定版本
 * 
 * # webpack基础配置
 * 
 * webpck-cli 是可以正确运行 webpack指令
 * 
 * 运行npx webpack 
 * 如果没写webpack.config.js 会默认生成这样一个文件
 * 以某个文件为默认配置文件 —————————— npx webpack --config webpackconfig.js
 * 
 * 
 * webpack 会默认处理.js结尾的文件
 * 别的文件类型需要借助各自loader
 * 
 * -D 等同于 -save -dev
 * 
 * file-loader  将图片压缩到指定文件夹下
 * url-loader   将图片压缩成base64 可以通过limit来控制 是否压缩成base64
 * 
 * 压缩 eot ttf svg （字体图标可以使用 file-loader）
 * 
*/