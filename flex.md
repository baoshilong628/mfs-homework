# 问答题

## 当父元素设置为 display: flex 时，子元素的摆放方式更像 display: block 还是 display: inline？请解释为什么。

像 display：inline 多个子元素排列具有行的概念。

子元素丧失浮动能力 float clear 以及vertical-align


## flexbox 有哪两个轴？他们的方向可以改变吗？如果可以改变，通过设置什么属性可以改变？

主轴与交叉轴

设置flex-direction 属性
## 有哪些属性可以设置在 container 上的？他们分别有哪些属性？分别代表什么意思

flex-direction 设置主轴的方向

flex-wrap 设置换行属性

flex-flow 以上合写

justify-content 设置了元素在主轴上的对其方式

align-items 设置了元素在交叉轴上的对其方式

align-content 设置了多行的对齐方式


## 有哪些属性可以设置在 item 上的？他们分别有哪些属性？分别代表什么意思

order 属性越小， 排列越靠前

flex-grow 设定所占空间比值

flex-shrink 设定空间不足时的空间比值

flex-basis 定义分配多余空间之前元素所占主轴空间的大小

flex 上三值的总写

align-self 自定align-items

## 如何使用 flex 实现完全居中

父元素 display：flex

justify-content：center

align-items：center

## 如何使用 flex 实现 列表（从左往右排布，可以多行，最后一行左对齐）

display:flex;

flex-wrap: wrap;

align-content: flex-start;