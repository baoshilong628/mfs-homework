# 问答题
## babel 是什么，它能干什么，不能干什么？
是js编译器 可以将ES6 ES7 等高等级的代码编译为低等级的代码 实现浏览器兼容

但是不能实现新标准的API
## 我们使用 babel 把 es6/7的代码编译为 es5代码后，为什么还需要引入 polyfill？

补齐新标准API的实现

## .babelrc文件是干嘛的？常见配置是什么？

配置babel preset
```javascript
{
    "presets" : ["env"]
}
```

## presets 中设置 env 是什么含义？

@babel/preset-env是Babel6时代babel-preset-latest的增强版。该预设除了包含所有稳定的转码插件，还可以根据我们设定的目标环境进行针对性转码。

是一种根据浏览器版本设定转换等级的预设，包含很多插件

## babel 中 presets 与 plugin 有什么区别？有什么联系？

presets 是多个插件的集合，负责设定具体的js标准

plugin 负责具体的单个特性转化支持

## 请比较 let,var,const 命令的不同

var 是基础的变量声明 有全局作用域和函数作用域 没有块级作用域

let 在 var 基础上新增了块级作用域 不会提前声明 不允许重复声明

const 声明常量 具有不可变性 不会提前声明 作用域与let 一致


# 代码题
1. 
```javascript
"use strict";

var a = 10;
{
    var _a2 = 11;
    var b = 12;
    console.log(_a2);
}
var _a = 13;
console.log(_a);

```
通过检查变量调用，修改变量名，确保let的块级作用域

2. 静态编译不通过，不允许修改const
