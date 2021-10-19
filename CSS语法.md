# 简答题
## 什么是 CSS？它有什么优势？

CSS 层叠样式表

内容样式分离，提高网页解析速度

样式可复用

多样式层叠

定义HTML丰富的表现形式

## 内部样式表和外部样式表各是如何声明和使用？

内部样式表：在head中style元素中定义

外部样式表：使用link引入


## 多层样式层叠是什么意思？

多种CSS样式经过优先级层叠合并

## 什么是优先级？样式表的优先级排序是什么？

从低到高 浏览器缺省设置 外部样式 内部样式 内联样式


## 请解释 CSS 如下概念

选择器：定义CSS样式作用于哪些元素

属性：CSS样式可设置条目

值： css属性对应的值

声明：属性+ ：+值构成一个声明

声明块：多个声明；+{}

## CSS 中回车符(\n)会影响 CSS 的解析吗？请测试在不同位置下的回车符对解析的影响，然后谈谈你的理解

只要不写在属性 ，值内部破坏含义，\n会被转化为空格

## CSS 代码中如何使用注释？

`/*这是CSS注释*/`

## 浏览器前缀是什么？我们为什么需要浏览器前缀？

浏览器前缀标定了部分浏览器私有实现的属性

兼容旧浏览器

## 对浏览器前缀的处理有哪些方案？其中较好处理方案是哪个？

不写前缀

使用CSS预处理器

## CSS 缩写是什么？哪些属性支持缩写？

多个CSS属性合并为一个，或基本的值缩写

color border 盒尺寸 背景 文字

## 什么是 CSS 中的继承？哪些属性可以继承？如果不希望子元素继承父元素的某个属性该怎么办？

部分样式会影响元素到其子元素

```
azimuth, border-collapse, border-spacing,
caption-side, color, cursor, direction, elevation,
empty-cells, font-family, font-size, font-style,
font-variant, font-weight, font, letter-spacing,
line-height, list-style-image, list-style-position,
list-style-type, list-style, orphans, pitch-range,
pitch, quotes, richness, speak-header, speaknumeral,
speak-punctuation, speak, speechrate,
stress, text-align, text-indent, texttransform,
visibility, voice-family, volume, whitespace,
widows, word-spacing
```

明确指定子元素的属性

## 以下代码`<h2>`最终显示成什么颜色？为什么？

```html
<!DOCTYPE html>
<html>

<head>
<style type="text/css">
  body{
    color: yellow;
  }
</style>
</head>

<body>
<h2>标题</h2>
</body>

</html>
```

黄色，因为color属性会被子元素继承

# 代码题
## 以下代码中`<h2>`最终显示成什么颜色？如果我想让color: red，在不修改内部和外部样式表的前提下，该如何实现？

```html
index.html

<!DOCTYPE html>
<html>

<head>
 <link rel="stylesheet" type="text/css" href="style.css">
 <style type="text/css">
   body{
     color: yellow;
   }
   h2 {
     color: blue;
   }
 </style>
</head>

<body>
 <h2>标题</h2>
</body>

</html>
style.css

h2 {
 color: green
}
```
蓝色，要达到目的只需替换h2标签代码为如下所示

```html
<h2 style="color:red;">标题</h2>
```