#问答题
##什么是 Dom？为什么要用 Dom？
当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）

Dom是浏览器构建的 用以描述和控制HTML文档结构的对象树

通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。

* JavaScript 能够改变页面中的所有 HTML 元素
* JavaScript 能够改变页面中的所有 HTML 属性
* JavaScript 能够改变页面中的所有 CSS 样式
* JavaScript 能够对页面中的所有事件做出反应
##Dom 有哪些常见属性？
doctype : 在书写HTML文档的时候第一句一般都是doctype声明，可以通过document对象获取，没有则返回null

head body 获取文档的head body 节点

activeElement 获取当前文档中获得焦点的元素
用户通常可以使用tab键移动焦点，使用空格键激活焦点，比如如果焦点在一个链接上，此时按一下空格键，就会跳转到该链接

title、characterSet title 设置的是当前网页的标题， characterSet设置的是当前文档的字符集

cookie 用来设置网站所存储的信息

innerText 返回元素内涵的文本

innerHTML、outerHTML 返回元素内的HTML 和 返回包含自己在内的html

##如何设置 Cookie？

```javascript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```
##innerText 和 innerHTML 有什么异同？
innerText返回的是元素内包含的文本

innerHTML返回的是HTML结构，并且输入时会自动构建dom
##innerHTML 和 outerHTML 有什么不同？
innerHTML返回元素内HTML outerHTML 返回包括自己在内的HTML
##我们可以使用 document.write() 动态生成文档流吗？如何可以，如何操作？
```javascript
document.write(“<div>hello world</div>“ )
```
##在什么时候，document.write() 会重写文档流？
如果文档已经渲染完成document.write()会重写文档流

#代码题
```javascript
document.write("<ul> \
    <li>1</li> \
    <li>2</li> \
    <li>3</li> \
</ul>")
```

