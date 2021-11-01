# 问答题
## dom 元素常用属性有哪些？
1. nodeName：元素标签名，还有个类似的tagName

2. nodeType：元素类型

3. className：类名

4. id：元素id

5. children：子元素列表（HTMLCollection）

6. childNodes：子元素列表（NodeList）

7. firstChild：第一个子元素

8. lastChild：最后一个子元素

9. nextSibling：下一个兄弟元素

10. previousSibling：上一个兄弟元素

11. parentNode、parentElement：父元素
## 如何查找元素？
```javascript
document.getElementById("id") //element or null
document.getElementsByClassName("c1, c2") //HTMLCollection
document.getElementsByTagName("p")  //HTMLCollection
document.getElementsByName("name") //NodeList
document.querySelector("") // 返回第一个找到的Element
document.querySelectorAll("") //返回NodeList
document.elementFromPoint(x,y) //Element
```
## 如何增/删/改/查元素？
```javascript
//查询元素如上
var e=document.createElement("p") //创建元素节点
var son=document.createTextNode("text") // 创建内容节点
document.createDocumentFragment()// 创建文档集

e.removeChild(son) // 删除子元素

e.appendChild(son)// 添加子元素
e.insertBefore(son,e.firstChild) //在某元素之前添加元素
e.replaceChild(son,e.firstChild) //替换某个元素

```
## HTMLCollectioin 和 NodeList 有何异同？
都是类数组对象，都有length属性，可以通过for循环迭代

都是只读的

都是实时的，即文档的更改会立即反映到相关对象上面(有一个例外，document.querySelectorAll返回的NodeList不是实时的)

都有item()方法，可以通过item(index)或item("id")获取元素

HTMLCollection对象具有namedItem()方法，可以传递id或name获得元素

HTMLCollection的item()方法和通过属性获取元素(document.forms.f1)可以支持id和name，而NodeList对象只支持id

#代码题

```javascript
var ul = document.getElementById("list")

var li1 = document.createElement("li")

li1.innerText = "1"

var li2 =document.createElement("li")

li2.innerText = "2"

ul.appendChild(li1)

ul.appendChild(li2)
```