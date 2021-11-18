#问答题
## 什么是 Generator 函数？和普通函数有什么区别？怎么声明 Generator 函数？
```javascript
function* generator(){}
```
Generator函数是一种用以迭代数据，控制异步流的工具函数

Generator函数内可以使用yield关键字

Generator函数返回一个迭代器

## 怎样调用 Generator 函数并逐步执行 Generator 代码？
```javascript
function *generator(){
    yield 1
    yield 2
    yield 3
    return 4
}
let it = generator()
it.next() // {value: 1 ,done：false}
it.next() // {value: 2 ,done：false}
it.next() // {value: 3 ,done：false}
it.next() // {value: 4 ,done：true}
```
## Generator 函数实现无限序列原理是什么？
```javascript
function* generator(){
    let count =0
    while (true){
        yield count
        count++
    }
}
```
内部状态和while(true)循环
##Generator 函数怎么实现函数内的数据与函数外进行交互的？请从函数内数据传至函数外，和函数外数据传至函数内 两个方面说明
```javascript
function* generator(){
    let count =0
    while (true){
        let state = yield count
        if (state == false)
            return
        count++
    }
}

let it =generator()
let data = it.next().value // 0 从内到外
it.next(false).value // 1 从外到内
it.next(false).value //undefined done:true

```

##yield*有什么用？它和 yield 有什么关系？（此题请自学完成）
yield* 可以解构另一个Generator 就是yield直到done：true

##怎么迭代出Generator 函数所有值？请使用 for of 循环实现
```javascript
function* range(start, end){
    for (let i = start; i<end;i++)
        yield i;
}
for (let i of range(1,10))
    console.log(i) //打印 1 ~ 9

```

# 代码题
##请实现 Generator 函数 range(start,end)，可以迭代出start到end直接所有整数
```javascript
function* range(start, end){
    for (let i = start; i<=end;i++)
        yield i;
}
for (let i of range(1,10))
    console.log(i) //打印 1 ~ 10

```
##请实现 Generator 函数 fib()，实现计算无限序列：斐波那契数列
```javascript
function* fibo(){
    let [a,b] =[0,1]
    while (true){
        [a,b] = [b,a+b]
        yield a
    }
}
```
##请使用解构语法，使用上面实现的 fib() 函数计算斐波那契数列前 3 项

```javascript
function* fibo(){
    let [a,b] =[0,1]
    while (true){
        [a,b] = [b,a+b]
        yield a
    }
}
let [first, second,third] = fibo()
```
