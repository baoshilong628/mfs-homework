#问答题
## 什么是错误处理？为什么要错误处理？
脚本会法神各种各样的错误
有的错误是代码语法错误

有的错误是代码运行时的错误

也有的是我们自定义的错误

管理错误和处理错误有助于提高我们程序的健壮
## 常见的错误有哪些？
语法错误
浏览器功能错误
运行时错误
用户输入错误和自定义错误
## 能用 if 语句替代错误处理吗？如果能，请给出实例代码，如果不能，请说明原因（开放题）
不能， 错误的传递机制可以确保错误包含需要的信息和必要的处理采用if替代工作量大
## 如何抛出一个错误？
throw new Error("error")
## 以下代码可以捕获异常吗？为什么？
```javascript

function a(){
    throw new Error("An error")
}
function b(){
    a();
}
try{
    b()
}catch(err){
    console.log(err)
}
```
可以 错误逐层上传直到被catch处理
## finally 子句有什么用？
不论是否捕获到错误，均执行finally进行清理工作

## JavaScript 中 throw 可以抛出非 Error 类型的异常吗？请动手试试
可以
## try catch 语句可以嵌套吗？ 如何嵌套？
可以，既可以在try块中嵌套，也可以在catch中嵌套

#代码题

1.
```javascript
try{
    if(Math.random()>0.5)
        throw new Error("err")
}catch (e){
    console.log(e)
}
```
2.
不能，由于js的单线程模型，定时器的代码会在当前同步代码执行完成之后执行，因此异常无法被catch块捕获
```javascript
function syncTask(){
   throw new Error("An error")
}
try{
    syncTask()
} catch(err){
    console.log(err)
}
```