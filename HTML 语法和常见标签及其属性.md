## 1.HTML 元素需要正确嵌套，请给出示例代码说明何为正确嵌套，何为不正确嵌套
元素务必以开始标签起始，以结束标签结尾

元素的起止标签处于同级

· 正确嵌套
```html
<article>
    <title>
    </title>
    <body>
        <P>
        </p>
    </body>
</article>
```

· 不正确嵌套
```html
<article>
    <title>
    
    <body>
        <P>
        
    </body>
        </p>
</article>
    </title>
```
## 2.HTML 元素属性是什么？在哪里如何指定属性？常见属性有哪些？

元素的属性是用以标识元素元数据的标识，一般写在元素起始标签内，元素名称右侧

以键值对形式标识

部分元素可以拥有属性（如 a），部分元素无法拥有属性

a 标签的常见属性 href 标识链接指向的URL，target 标识在何处打开；链接文档

针对需要使用样式的标签 id 和 class 用以标识元素的选择器名称

## 3.空标签如何自闭和？

空标签在起始标签后添加 /

例如 `<p />`

浏览器会紧跟标签后自动闭合

空标签没有元素内容，多需要配合CSS javascript使用

## 4.HTML 文档中多个空白字符如何显示？请自行查阅资料，实现显示多个空格

1.使用 `&nbsp;`标识多个空格

&nbsp; &nbsp;&nbsp;&nbsp; 你好

2.使用 pre标签

如下所示
<pre>
    这是一段      测试文本 这是一段      测试文本    这是一段      测试文本
</pre>

源码
```html
<pre>
    这是一段      测试文本 这是一段      测试文本    这是一段      测试文本
</pre>
```
3.使用CSS属性 white-space

如下
<p style="white-space:pre">
        这是一段      测试文本 这是一段      测试文本    这是一段      测试文本
</p>

源码如下
```html
<p style="white-space:pre">
        这是一段      测试文本 这是一段      测试文本    这是一段      测试文本
</p>
```


## 5.HTML 中字符转义是什么意思？哪些字符需要转义？

由于浏览器针对 < 和 & 做了特殊处理，因此在使用这些字符时需要转义

转义字符 

`&lt;` = &lt;

`&gt;` = &gt;

`&amp;` = &amp;


有哪些常见标签？请给出代码示例(Demo)

1.标题
```html
<h1>标题1</h1>
<h2>标题1</h2>
<h3>标题1</h3>
<h4>标题1</h4>
<h5>标题1</h5>
<h6>标题1</h6>
```

<h1>标题1</h1>
<h2>标题1</h2>
<h3>标题1</h3>
<h4>标题1</h4>
<h5>标题1</h5>
<h6>标题1</h6>

2.段落和块
```html
<p>text</p>
<div>text</div>
```
<p>text</p>
<div>text</div>

3.输入框与按钮

<input></input>
<button>按钮</button>
```html 
<input></input><button>按钮</button>
```

4.超链接

<a href="https://www.baidu.com" target="_blank">前往百度</a>

```html
<a href="https://www.baidu.com" target="_blank">前往百度</a>
```
5.span 行内文字

<span>hello world</span>

```html
<span>hello world</span>
```

6.img图片

<img width="100" src="https://img0.baidu.com/it/u=2953039099,769603661&fm=26&fmt=auto"></img>
```html
<img width="100" src="https://img0.baidu.com/it/u=2953039099,769603661&fm=26&fmt=auto"></img>
```

7.有序列表
<ol>
    <li>苹果</li>
    <li>菠萝</li>
    <li>利</li>
</ol>

```html
<ol>
    <li>苹果</li>
    <li>菠萝</li>
    <li>利</li>
</ol>
```

8.无序列表

<ul>
    <li>苹果</li>
    <li>菠萝</li>
    <li>利</li>
</ul>

```html
<ul>
    <li>苹果</li>
    <li>菠萝</li>
    <li>利</li>
</ul>
```

9.换行

<br></br>

```html
<br></br>
```
10.分割线
<hr></hr>

```html
<hr></hr>
```

11.表格

<table>
    <tr>
        <th>
            名称
        </th>
        <th>
            价格
        </th>
        <th>
            地址
        </th>
    </tr>
    <tr>
        <td>
            苹果
        </td>
        <td>
            100
        </td>
        <td>
            重庆
        </td>
    </tr>
</table>

```html

<table>
    <tr>
        <th>
            名称
        </th>
        <th>
            价格
        </th>
        <th>
            地址
        </th>
    </tr>
    <tr>
        <td>
            苹果
        </td>
        <td>
            100
        </td>
        <td>
            重庆
        </td>
    </tr>
</table>
```

12 文字效果

<mark>123</mark>

<strong>123</strong>

<em>123</em>

<del>123</del>

```html
<mark>123</mark>

<strong>123</strong>

<em>123</em>

<del>123</del>
```

## 6.默认样式下`<p>`和`<div>`有什么区别？

p标签和div标签通常表现很相似，
但是p标签是语义化的，通常标识文字段落，且受到浏览器默认样式影响，具有外边距。
div标签通常用来分隔区域，实现布局，div标签默认情况下没有外边距。


## 7.请自行查阅资料，学习行内元素和块状元素的区别

块状元素

    一次占一整行
    一般不会放在行内元素内
    可以包含行内元素和块状元素
    有宽高
    可以使用display：inline 转换为行内元素
    自动换行
行内元素

    设置宽高无效
    可以设置左右外边距，上下外边距无效
    只能容纳行内元素和文本，容纳块状元素表现怪异
    可以使用display：block转换为块状元素
    float 绝对定位 固定定位会使行内元素转化为块状元素
    不自动换行
    



