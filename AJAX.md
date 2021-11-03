#问答题

##AJAX 是什么的简称？它和普通的 HTTP 请求有什么不同？
Ajax是Asynchronous JavaScript and XML的缩写，这一技术能够向服务器请求额外的数据而无需卸载整个页面，会带来良好的用户体验。传统的HTTP请求流程大概是这样的，
这里的异步是指脱离当前浏览器页面的请求、加载等单独执行，这意味着可以在不重新加载整个网页的情况下，通过JavaScript发送请求、接受服务器传来的数据，然后操作DOM将新数据对网页的某部分进行更新，使用Ajax最直观的感受是向服务器获取新数据不需要刷新页面等待了
##传统网页的渲染模式和基于 AJAX 的网页渲染模式有何不同？
通过AJAX 网页渲染，可以在不重写网页的基础上获取数据，修改网页内容
##如何模拟调试 AJAX 的数据
采用express搭建临时数据服务器
##如何兼容老浏览器创建 XMLHttpRequest 对象？
```javascript
function createXHR(){
    var xhr = null;
    try {
        // Firefox, Opera 8.0+, Safari，IE7+
        xhr = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                xhr = null;
            }
        }
    }
    return xhr;
}
```
##XMLHttpRequest 对象有哪几个常用方法？分别对应的含义如何？
```javascript

xhr.open('get', 'default.html', true) //设定一个异步请求

URL是相对于当前页面的路径，也可以使用绝对路径
调用open方法并不会真正的发送请求，而是初始化一个请求准备发送
只能向同一个域中使用相同协议和端口的URL发送请求，否则会因为安全原因报错（同源策略）

要想把请求发往服务器需要调用send方法，send方法接受一个参数，参数是请求主体要发送的数据，如果不需要发送数据则传入null，在调用send方法之后请求被发往服务器，如下
xhr.send(null);

请求发往服务器，服务器根据请求生成响应（Response），传回给XHR对象，在收到响应后相应数据会填充到XHR对象的属性，有四个相关属性会被填充：

responseText：作为响应主体被返回的文本
responseXML：如果响应内容的类型是”text/xml”或”application/xml”，这个属性将保存包含着相应数据的XML文档
status：响应的HTTP状态（200,404,500等）
statusText：HTTP状态说明

完整的一次请求如下

var xhr = createXHR();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log('Original Ajax: ' + xhr.responseText);
    }
}
xhr.open('get', 'ajax.aspx?action=getTime', true);
xhr.send();


可以在接受响应之前调用abort方法取消异步请求：

xhr.abort();

```
##常见的 HTTP 请求头有哪些？如何使用 AJAX 设置 HTTP 请求头？

Accept：浏览器能够处理的内容类型
Accept-Charset：浏览器能够处理的字符集
Accept-Encoding：浏览器能够处理的压缩编码
Accept-Language：浏览器当前设置的语言
Connection：浏览器与服务器的连接类型
Cookie：当前页面的cookie
Referer:发送请求的页面的URI
使用setRequestHader()方法可以设置自定义的请求头部信息，这个方法接受两个参数

1.头部字段的名称

2.头部字段的值。

要想成功发送头部信息，必须在调用open方法之后，调用send方法之前调用setRequestHeader方法。

##如何使用 AJAX 发起 POST 请求？

POST请求用于把数据作为主体向服务器提交，POST请求主体可以包含多种格式数据，在open方法第一个参数传入”POST”就可以初始化一个POST请求。发送POST请求第二步就是向send方法传输数据参数，参数可以是xml或者字符串，json等。

