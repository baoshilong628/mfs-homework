# 问答题
## Node.js 中什么是事件？如何定义事件？如何触发事件？
```javascript
import { EventEmitter } from 'events'
const eventEmitter = new EventEmitter()

eventEmitter.on("happy",()=>{
    console.log("hello world")
})
eventEmitter.emit("happy")
```
## Node.js 中如何读写文件？请分别给出示例代码
```javascript
var fs = require('fs')

fs.readFile('hello.txt', function (error, data) {
  if (error) {
    console.log('读取文件失败了')
  } else {
    console.log(data.toString())
  }
})

var fs = require('fs')

fs.writeFile('./data/.hello.txt', 'hello Node.js', function (error) {
    if (error) {
        console.log('写入失败')
    } else {
        console.log('写入成功')
    }
})

```
## 流是什么？如何使用流读取文件？
流是一种数据读取，传输，管理的特殊工具，可以打开关闭，提供响应事件处理数据
有 可读流 可写流 读写流 转换流
```javascript
import * as fs from "fs"
let data =""
let reader = fs.createReadStream("./package.json")
reader.on("data",function (chunk) {
    data += chunk
})
reader.on("close",function (){
    console.log(data)
})
```
## Node.js 中如何获取环境变量？

process.env

# 代码题
## 请自行查阅资料学习fs.ReadStream，并使用它读取任意文件并将其中内容打印
```javascript
import * as fs from "fs"
let data =""
let reader = fs.createReadStream("./package.json")
reader.on("data",function (chunk) {
    data += chunk
})
reader.on("close",function (){
    console.log(data)
})
```
## 请使用 http server 配合流处理，完成form表单的文件上传功能（浏览器提交的文件需要保存到服务器端自己定义的目录下）
```javascript
import {RequestListener} from "http";

const http = require('http');
const fs = require('fs');
const requestListener:RequestListener = function (req, res) {
    res.writeHead(200);
    let writer = fs.createWriteStream("./file/file.txt",{encoding:"utf-8"})
    req.on("data",function (chunk) {
        writer.write(chunk)
    })
    req.on("close",function () {
        res.end('Hello, World!');
        writer.close()
    })

}

const server = http.createServer(requestListener);
server.listen(8080);
```
## Node.js 中 http 模块既有 server 端，又有 client 端，请实现一个简单的server：对于任何请求返回hello。而后使用 client 端请求你自己的server，并打印出结果

```javascript
const server=require('http');
server.createServer(function(req,res){
    res.end('hello');
}).listen(8080);

const client=require('http');
client.get('http://localhost:8080',function(res){
    res.on('data',function(data) {
        console.log(data.toString());
    })
})
```