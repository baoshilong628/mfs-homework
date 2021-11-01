#问答题
## 什么是 Canvas？Canvas 能干那些事？
Canvas API 提供了一个通过JavaScript 和 HTML的`<canvas>`元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。
Canvas API主要聚焦于2D图形。而同样使用`<canvas>`元素的 WebGL API 则用于绘制硬件加速的2D和3D图形。
## 画笔颜色，填充颜色各如何设置？
strokeStyle 用以设置绘图颜色

fillStyle 用以设置填充样式
## Canvas 中如何画圆？如何填充圆？
```javascript
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke(); //绘制圆
ctx.fill(); //填充圆
```
## Canvas 如何改变坐标系的位置和单位长度？

```javascript
ctx.translate(70,70);//改变坐标原点的位置
ctx.scale(2,2); // 改变比列
```