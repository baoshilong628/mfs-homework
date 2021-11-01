# 问答题
## JavaScript 中有哪些基本类型？
number数字

string 字符串

bool 布尔值

object 对象

undefind 未定义

null 空值

## 如何声明并初始化字符串类型的变量？" 和 ' 声明字符串有什么不同的应用场景？

var c="hello world";

如果字符串中存在引号 " 和 ' 可以交替使用

## JavaScript 数值类型的变量支持科学计数法表示吗？如果能，如何表示？

支持 在数字中使用 e 标识指数部分

## Infinity 是什么类型？什么时候会得到 Infinity？

number 类型，当表达式计算值超出number 最大最小值时会得到 ，常见除零

## NaN 是什么类型？它表示什么意思？

number类型，非数值

## JavaScript 中布尔（boolean）类型的变量有哪两个合法值？分别代表什么意思？

true false 真和假

## JavaScript 中如何声明对象（狭义的对象）？

在花括号内，用键值对标识对象属性和函数

## 原始类型可以看做是广义的对象吗？可以调用 toString() 方法吗？

可以，可以调用toString，字面量不是对象

## 新建数组有几种方法？最常用的是哪种方法？

可以直接赋值

var a=[1,2,3]

可以赋予对象

var a = new Array()

常用的是 var a=[]

## 任何数据类型如何转化为字符串？

可以使用 toString 方法


## 最常用的最简单的将任意类型转化为 Number 的方法是什么？

var i="123"

var d=+i


## typeof 可以查看哪些类型变量的类型，可以区分 Array ，Function 和 Object 类型吗？如果不能，我们该使用什么办法区分？

number,string,boolean 可以正常识别

函数 返回function

undefind 返回 undefined

Array 和 Object 都是 object

可以采用instanceof

var a=[]

a instanceof Array true


## null 和 undefined 有什么区别？

null 表示有值但为空，作为函数参数，作为原型链的终点

undefined 表示不存在值 变量声明但未使用 函数不返回值 对象不存在的属性