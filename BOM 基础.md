# 问答题
## BOM 是什么？提供的 API 让我们能操作什么？

* BOM是Browser Object Model的缩写，简称浏览器对象模型
* BOM提供了独立于内容而与浏览器窗口进行交互的对象
* 由于BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window
* BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性

## window.name 有怎样的特性

window.name属性用于设置当前浏览器窗口的名字。它有一个特点，就是浏览器刷新后，该属性保持不变。所以，可以把值存放在该属性内，然后跨页面、甚至跨域名使用。当然，这个值有可能被其他网站的页面改写。

各个浏览器对这个值的储存容量有所不同，但是一般来说，可以高达几MB。该属性只能保存字符串，且当浏览器窗口关闭后，所保存的值就会消失。因此局限性比较大，但是与iFrame窗口通信时，非常有用。

## 如何获取窗口的尺寸？
window.innerHeight - 浏览器窗口的内部高度
window.innerWidth - 浏览器窗口的内部宽度
## 如何调整滚动条位置

window.scrollTo(0, 300); // 滚动条移动到300px处

window.scrollBy(0, 300); // 滚动条下移300px处

## 如何获取浏览器相关信息

Window对象的navigator属性，指向一个包含浏览器相关信息的对象。

navigator.userAgent属性返回浏览器的User-Agent字符串，用来标示浏览器的种类。下面是Chrome浏览器的User-Agent。

## 如何得到一个元素计算后的属性值

var style = window.getComputedStyle("元素", "伪类");
即可访问到计算后的属性

## 如何模拟点击前进后退按钮的点击？

history.back() - 与在浏览器点击后退按钮相同
history.forward() - 与在浏览器中点击按钮向前相同
