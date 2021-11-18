# 问答题
## Promsie 对象有几种状态？他们之间是怎么转换的？
pending resolved rejected

pending resolve -> resolved

pending reject -> rejected

只能从pending转变到resolved或者rejected,之后状态不再改变

## 下面代码的输出结果是什么？（饿了么面试题）
```javascript
setTimeout(function() {
console.log(1)
}, 0);
new Promise(function executor(resolve) {
console.log(2);
for( var i=0 ; i<10000 ; i++ ) {
i == 9999 && resolve();
}
console.log(3);
}).then(function() {
console.log(4);
});
console.log(5);

//2 3 5 4 1
```
## 什么是 Promise 对象？引入 Promise 对象是为了解决什么？
promise 是ES6 引入的 具有一组事件状态的异步事件控制对象

用以解决异步函数复杂的回调地狱的问题

## var p = new Promise() 中 p 对象有哪些方法？各有什么功能？
then 状态转变后的回调

catch 执行抛出异常的回调

finally 完成任务之后的回调

## Promise.all 和 Promise.race 的区别是什么？

promise.all 要求数组中的所有promise都完成之后执行then

promise.race 要求数组中只要有一个promise完成就执行then

## Promise 中抛出未处理的异常会怎么样？会阻碍后面的代码执行吗？Chrome 和 Node.js 环境下有什么不同？

promise 抛出的异常在chrome中是一个报错，在nodejs中是一个警告 不会阻碍后面的代码执行

## catch 方法中再抛出异常会怎么样，需要怎样捕捉？
再次catch
```javascript
new Promise(res=> {
    throw new Error("err")
}).catch(e=> {
    throw new Error("e2")
})
    .catch(e=>console.log(e))
```
## then的链式调用每次返回的是同一个 Promise 对象吗？请写一小段代码证明你的观点
不是同一个 Promise
```javascript
let p1=new Promise(res=>{
    res()
})
let p2 = p1.then(()=>{return 1})
p1 == p2 //false
let p3 = p2.then((data)=>{
    console.log(data)//1
    return 2
})
p2 == p3 //false
```

#代码题

```javascript
    function ajaxGet(url) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true)
        xhr.send(null)
        return new Promise(res => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {  //监听readyState状态
                    if (xhr.status == 200 || xhr.status == 0) {  //监听HTTP状态码
                        res(xhr.responseText);
                    }
                }
            }
        })
    }

    ajaxGet("http://learning-api.mafengshe.com/news").then(data => console.log(data))

    let parallelData = []
    for (let i = 1; i <= 10; i++) {
        ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=${i}`).then(data => parallelData.push(data))
    }
    let serialData = []
    let p = ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=1`)
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=2`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=3`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=4`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=5`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=6`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=7`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=8`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=9`)
        })
        .then(data => {
            serialData.push(data)
            return ajaxGet(`http://learning-api.mafengshe.com/news?pageSize=10&page=10`)
        }).then(data=>serialData.push(data))

```