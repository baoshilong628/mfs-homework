# 问答题
## 什么是 Webpack ，它能完成哪些功能？

webpack 是一种前端项目构建打包工具，它将多种文件打包为等价的js html 静态资源文件

使得程序员能够使用nodejs 生态中的库进行代码预编译而无需关心兼容性和组织问题

可以实现模块化 Babel编译 ts 支持 scss stylus 支持 以及热更新和热部署

## Webpack 有哪 4 个核心概念？这些概念的意义是什么？有何作用？
入口 依赖树的入口 主要是 js 或者ts 文件 用以进入脚本分析和打包依赖

输出 打包后的文件的输出规则

loader 文件处理导入中间件

插件 webpack 打包功能支持拓展

## 请列举 5 个 Webpack 常用 loader，并简述他们的作用
style-loader 允许js 中的cssString 转为 css样式

css-loader 将css 样式转为js 中 cssString

sass-loader 将 scss样式中的scss语法转为 css 

ts-loader 支持ts语法和特性

raw-loader 支持txt文件

## 请列举 5 个 Webpack 常用 plugin，并简述他们的作用
htmlWebpackPlugins 支持inde模板+入口自动导入

UglifyJsPlugin 支持代码压缩

CleanWebpackPlugin 清理打包文件

ProgressPlugin 报告编译进度

DefinePlugin 支持环境变量

## 如何实现 script 标签自动注入？
采用htmlWebpackPlugins
## Webpack 中如何 require 资源文件（图片，字体）？为什么可以 require ，其原理是什么？
原理是交由webpack的loader处理，形成合理的js代码
## 如何安装 loader？
npm install -D loaderName-loader
## Webpack 支持链式 loader 吗？如何配置？
支持 use 采用数组 可以在数组使用对象配置loader 数组中靠后的先执行

## Webpack require 如何导入 node_modules 中的模块？如何导入自己写的模块？二者有何不同？
require('package') npm的

require('./package') 自己的 需要用相对路径 或者 别名+路径

## 什么是 source-map？为什么一般使用打包工具都需要 source-map?

将打包压缩代码对应到源码，方便调试生产环境可以不使用source-map 

# 代码题
## 请手动配置一个webpack.conf.js文件，实现如下功能

* script 标签自动注入
* 可以 require .txt 和 .stylus 文件
* 文件修改后自动刷新页面
* 导入 axios 包，实现 ajax 请求