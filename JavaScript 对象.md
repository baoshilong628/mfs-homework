# 问答题
## 创建对象有几种方式？最常用的是那种？
var o={} 最常用

o.add=function(){}

o.a=1;

var o= new Object();

function Person(name){
this.name=name
}
var a= new Person("hello")

## 如何使用对象构造器？对象构造器和函数有什么关系？
1.编写对象构造函数

2.使用new 关键字+ 对象构造器创建对象
function Person(name){
this.name=name
}
var a= new Person("hello")

对象构造器复用了函数的结构
## 如何遍历所有的对象属性？

for(x in person){

console.log(x,person[x])

}


# 代码题

```javascript
var person={fname:"Bill",lname:"Gates",age:56};

for(x in person){

    console.log(x,person[x])

}
```