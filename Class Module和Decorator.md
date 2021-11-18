# 问答题
## ES6 中的 class 其本质是 es5 声明类的方式的语法糖吗？请从原型链方面证明你的想法
是的，class 仍采用原型链的方式去继承，可以在__proto__中找到父类的__proto__ 以及相应的原型方法
## ES6 中的类构造函数如何声明？
```javascript
class Human{
    constructor(name){
        this.name = name
    }
}
// 采用constructor
```
## ES6 实现类 private 方法有几种形式？各是什么？
```javascript
let privateFun = new Symbol("privateFun") // 一种是 声明 使用 并抛弃 Syumbol
class Human{
    _privateFunction(){ // 另一种是采用_ 前缀
        
    }
    [privateFun](){
        
    }
}
```
## 如何声明类的get，set方法？何时会调用get、set方法？
```javascript
class Apple{
    price =20
    get price(){
        return this.price
    }
    set price(newPrice){
        this.price = newPrice
    }
}
let apple = new  Apple()
apple.price =1 //set 
let price =apple.price //get 
```
## 什么是类的静态方法？如何声明？如何调用？
```javascript
class Fruit{
    static getType(){
        return "fruit"
    }
}
Fruit.getType()
```
## ES6 中如何进行继承？子类的构造函数中如何调用父类的构造函数？
```javascript
class Human extends Animal{
    constructor(name){
        super()
    }
}
```
## ES6 的模块中如何导入导出变量？
```javascript
export let t = 1  // m1

import {t} from "m1" //m2
```
## ES6 的模块 export default 和 export 有何异同？
export default 可以不指定具体名称引入

都可以引入 模块

## 修饰器（Decorator）是什么？如何使用？
```javascript
@decorator
function dosth(){
    
}

是一种类似于java注解的语法，可以增强被修饰的对象 函数等的功能

```
# 代码题
## 请写出与下面 ES5 代码等价的 ES6 代码

```javascript

function Point(x, y) {
this.x = x;
this.y = y;
}

Point.prototype.toString = function () {
return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);

class Point{
    constructor(){
        this.x = x;
        this.y = y;
    }
    toString(){
        return '(' + this.x + ', ' + this.y + ')';
    }
}
var p = new Point(1, 2)
```
## 请实现Circle类，其表示平面上的一个圆，构造时需要传入 x,y,r 分别为圆在平面上的坐标 (x,y）和其半径 r，需要支持使用 circle.area 获取圆的面积
```javascript
class Circle{
    constructor(x,y,r){
        this.x = x
        this.y = y
        this.r = r
    }
    area(){
        return Math.PI * this.r * this.r 
    }
}
let circle = new Circle(0,0,1)
let area = circle.area()
```
## 假定我们的代码中需要4个类，分别是 Animal，Dog，Cat，Human。Animal 有方法 eat,sleep;Dog,Cat有方法bark；Human有方法speak；请使用 ES6 中的继承实现。

```javascript
class Animal{
    eat(){}
    sleep(){}
}
class Human extends Animal{
    speak(){}
}
class Dog extends Animal{
    bark(){}
}
class Cat extends Animal{
    bark(){}
}
```
