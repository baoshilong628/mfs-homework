# 问答题
## 什么是MVVM？M V VM三者之间是什么关系？

model 模型 view 视图  viewmodel 视图模型

model 是数据 view 使用户所看到的页面 viewmodel联系了模型和视图 通过模型改变视图

## 如何指定 Vue 根元素的挂载点？
指定 el属性
```javascript
new Vue({
    el :"#app"
})
```
## 如何声明Model里的数据？View是根据什么渲染的？
指定data属性中的数据 根据模板语法和数据来动态渲染
```html
<div>
    <p v-for="item in list">{{item}}</p>
</div>

new Vue({
    data:{
        list:[
            "a",
            "b",
            "c"
        ]
    }
})
```
## Vue 中如何让视图绑定Model里的数据？（请从绑定属性和绑定字符串两个方面回答）
属性绑定通过在属性前加冒号 字符串绑定采用花括号+变量
```html
<div>
    <p v-for="item in list" :key="item" >{{item}}</p>
</div>

new Vue({
    data:{
        list:[
            "a",
            "b",
            "c"
        ]
    }
})
```
## Vue 中如何绑定视图元素的事件？

通过@+事件名称绑定Vue methods 中的事件处理函数
```html
<div>
<p v-for="item in list" :key="item" @click="ck">{{item}}</p>
</div>

<script>
new Vue({
  methods:{
    ck(){
      console.log("hello")
    }
  }
})
</script>
```
## View和Model是如何互相影响的？
View 影响model =》通过事件绑定
model 影响View 通过改变 viewmodel
## 什么是 Vue 组件？如何声明？如何使用？

vue组件是Vue支持的可复用的代码块 是vue的基础 采用Vue.component 全局注册 采用自定义 xml标签在挂载节点内使用

```html
<template>
  <div>
    <ul>
      <item v-for="item in list" :data="item"></item>
    </ul>
  </div>
</template>

<script >
Vue.component("item",{
  prop:["data"],
  template:"<li>{{data}}</li>"
})
new Vue({
  data:{
    list :[
        "a","b","c"
    ]
  }
})
</script>
```
## 什么是组件的生命周期？Vue 组件的生命周期有哪些？分别在什么时候调用？

是Vue组件从创建挂载运行到销毁的全过程代码执行

beforeCreate //创建前

created // 创建数据，绑定事件后

beforeMount // 挂载到DOM节点前

mounted //挂载和渲染后

beforeUpdate // 数据更新前

updated// 数据更新后

beforeDestroy // 调用 $destroy后

destroyed // 完成销毁后

# 代码题
* 请使用 Vue 在 data 内声明 str:"Hello Vue"，在视图中显示Hello Vue
* 请实现计数器：视图上有一个div和一个button，如果点击botton则div中的数字加1
* 请声明组件item，并通过v-for命令实现创建多个item
* 请实现在组件创建的打印created，在组件销毁的时候打印destroyed
```html
<div id="app">
<h1>{{str}}</h1>
<div @click="add">{{count}}</div>
<ul>
  <item v-for="item in list " :data="item"></item>
</ul>
</div>

<script >
Vue.component("item",{
  props: ["data"],
  template: "<li>{{data}}</li>"
})
new Vue({
  el:"app",
  data:{
    str:"Hello Vue",
    count:0,
    list :[1,2,3]
  },
  methods:{
    add: function (){
      this.count++
    }
  },
  created: function (){
    console.log("created")
  },
  destroyed:function(){
    console.log("destroyed")
  }
})
</script>
```