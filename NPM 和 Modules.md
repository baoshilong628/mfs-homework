# 问答题
## 如何新建一个npm项目，本质是创建了什么文件？
采用npm init 命令

本质上是package.json

## 如何安装删除npm包？全局安装和局部安装有什么区别？
npm install 和 npm remove

全局安装具有cli工具可以使用 存放在指定用户目录 所有项目都可以引用

局部安装只有当前项目可以使用

## 如何自定义 npm 命令（scripts）？
在package.json中的script中声明脚本指令
## Node.js中require('./xxxx')和require('xxxx')导入的包相同吗？
不相同 采用相对路径会在当前文件下相对寻找
而采用模块名则会在当前项目中的node_modules中寻找，找不到就在全局中寻找
## Node.js中是如何处理循环引用？

A模块引用B模块 B模块引用A模块 会导致B模块执行到引用指令时直接返回A模块直到引用B模块前的exports

## Node.js 模块如何如何导出变量/函数/对象？
给exports对象赋予对应属性，然后在其他模块中解构出来

## module.exports 和 exports 的使用有何区别？(饿了么面试题)
module.exports 和 exports 本质上指向同一个对象

exports 是模块外包裹的函数传入的参数

我们可以给module.exports 赋予对象a

而exports 只能赋予属性，由于赋予对象会导致引用偏移

## Node.js 模块中可以定义全局变量（其他模块可以直接引用访问）吗？如果能，应该如何定义？如果不能，请说明原因。（饿了么面试题改编）

能 var声明的变量会最终在global对象上允许所有模块访问 或者不使用var而采用直接使用的方式