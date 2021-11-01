#问答题
##有哪些方法可以创建字符串？我们最常用哪一种方法？
var str = new String("")
var str = String("")
var str = "" 这个方法是最常用的方法
##如果需要将字符串折行，可以使用什么办法？
行尾采用 \
##如果使用双引号声明字符串，而字符串中又存在 " 这时该怎么办？
将双引号改为单引号 或者采用\ 转义

##split() 函数有什么用？它的返回值是什么？
切分字符串，传入字符指定切分标志
返回值是切分好的字符串数组
##如何查询字符串中的子串所在位置？
采用indexof方法
## slice()，substring()，substr() 函数用法有什么不同？
slice()两个参数表示提取的字符串的起始下标和结束下标，负数表示从末尾算起
substring()两个参数表示字符串起始和结束下标 参数非负
substr()第一个参数表示起始 第二个参数表示最大长度

## 字符串是如何比较的？一个字符串比另外一个大表示什么？

字符串采用字典顺序，越大越靠前

#代码题
## 请实现：输入文件名，返回文件后缀名
```javascript
function getsuffix(fileName) {
    fileName.slice(fileName.lastIndexOf(".")+!,fileName.left);
}
```
## 请实现：输入任意英文语句，将单词首字母大写。如输入：I miss you，返回I Miss You

```javascript
function getUpperCaseSentence(sentence){
    return sentence.toUpperCase();
}
```