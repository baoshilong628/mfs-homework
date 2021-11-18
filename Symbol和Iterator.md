# 问答题
## Symbol 是什么？有哪些使用场景？
Symbol 是ES6新的基本类型 用以标识属性的键值，是具有唯一性的魔法值

适合用来做工程化，标识接口和共识

```javascript
let apple = new Symbol()
let banana = new Symbol()

let shop  = {
    [apple]:120,
    [banana]:110
}
```
## Symbol("foo") == Symbol("foo")输出什么？为什么？
false Symbol 一旦声明就是不同Symbol 里边的字符串参数可以相同 不会影响 

## Symbol.iterator 是什么？这里为什么要使用 Symbol 那？

ES6 迭代器接口的函数标识 是ES6 标准接口 需要从Symbol中引用出iterator找到迭代器


## 哪些对象（容器）内部实现了 iterator ？
set map string array

## 数组解构的核心本质是什么？哪些对象（容器）可以作为数组解构的右值？
迭代器 具有迭代器的对象 例如 string array map set 实现了接口的object等

# 代码题
请实现与下面 generator 函数 等价的迭代器

```javascript
function* gen(){
yield 1
yield 2
return 3;
}
function makeIt(arr) {
    let count = 0
    let size = arr.length
    return {
        next:function (){
           return  count === size ? {value:arr[i++],done:false}:
               {value:undefined,done:true}
        }
    }
}
```
## 请给对象 let obj={} 加上迭代器，实现可以无限打印 a
```javascript
let obj = {
    [Symbol.iterator]:function (){
        return {
            next:function () {
                return {value :"a",done:false}
            }
        }
    }
}
for(let i of obj)
    console.log(i)
```
请给对象 obj 加上迭代器，使其可以像数组一样使用 for of 循环

```javascript
let obj = {
    [Symbol.iterator]:Array.prototype[Symbol.iterator],
[0] : "a",
[1] : "b",
[2] : "c",
length : 3
}
```