# 问答题
##程序语言中有哪三种控制结构？请用文字描述，并画图示意。
1. 顺序结构
2. 选择结构
3. 循环结构

##if ... else ... 语句的含义是什么？
如果 if 之后的条件成立 就执行 if 之后的代码块 ，反之执行 else 之后的语句
##当 if 或是 else 子句只有一行代码时，我们可以省略代码块（{}）吗？如果可以省略我们应该通过什么办法使代码可读性增加
可以 缩进并空一行
##if 语句支持嵌套吗？如何使用嵌套？
支持，在if或else 之后代码块中继续使用if else 或者 在 else 之后直接接if
##对于比较复杂的嵌套我们可以写成如下形式，请谈谈为什么可以写成这种形式
if()
  ...
else if()
  ...
else
  ...
语法上正确，是省略代码块和换行的写法
##对于多个分支的分支语句我们可以用 switch 语句，switch 语句的结构是什么样的？
switch内写需要判断的变量，之后接代码块

使用case + 目标值 匹配指定值时的动作

使用default 匹配所所有情况

使用break 跳出case
##对于 switch 语句的每一个子句，我们需要使用 break 吗？为什么？
可以不使用break 此时会继续执行接下来的case 直到遇到break或者执行结束
##switch 语句可以使用哪种数据结构替代？请给出实例代码。
数组或者字典
```javascript
var d=new Date().getDay(); 
var arrDate=["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
console.log(arrDate[d])
```
##对于需要多次执行的相同或者类似的代码，我们应该使用什么样的控制结构？它一共有几种形式？请给出示例代码。
循环结构
有三种形式
```javascript
for (let i=o;i<100;i++){
    //dosth
}
var data=[1,2,3]

for (i in data){
    //dosth
}

while (true || false){
    //dosth
}
do {
  
}while (true || false)
```
##对于 for(语句1; 语句2; 语句3) 语句，语句1，语句2, 语句3 含义是什么？他们各是在什么时候执行？
1. 初始化语句 在进入循环时执行

2. 条件判断语句，在执行完for代码块之后执行

3. 在语句2 之后执行
##for(var i in obj) 含义是什么？如何使用？

遍历对象的属性

```javascript
for (let i in obj){
  console.log(i,obj[i])
}
```

# 代码题
1.
```javascript
function func(flag){
    return flag?1:0;
}
```
2.
```javascript1
for (let i in arr){
    if (i==5)
        break;
}
```
3.
```javascript

for (let i in arr){
  if (i==5)
      continue;
}
```
4.
```javascript
console.log({4:"元素4",5:"元素5",0:"元素0",1:"元素1"})
var arr=[4,5,0,1]
for (let i in arr){
    arr[i]="元素"+arr[i]
}
```