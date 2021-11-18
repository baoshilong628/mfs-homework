# 问答题

## 什么是模板？它和真实的DOM有什么关系？

模板是类似虚拟的DOM 浏览器或Vue 不会直接将模板转换为DOM 而是需要借助JS 动态操作

模板是程序员对DOM的一种声明 ， Vue 通过模板解析渲染Dom

## 如何使用插值语法绑定变量到文本？

```html

<div>this is a message {{message}}</div>
```

## 如何绑定属性？（请写出缩写和非缩写形式）

```html

<div v-bind:data-src="imgsrc" :data-msg="msg"></div>
```

## 如何绑定事件？（请写出缩写和非缩写形式）

```html

<div v-on:click="clk" @click="clk"></div>
```

## v-if v-for 各有什么用？

v-if 条件渲染 类似css属性设置不可见不可用 或者js插入删除元素

v-for 根据数据批量渲染DOM 原理是循环插入带数据的Dom

## 什么是过滤器（filter），如何声明？如何使用？

```html

<div>reverse message {{message | reverse}}</div>

```

```javascript
new Vue({
    filters: {
        reverse: function (str) {
            return str.reverse()
        }
    }
})
```

## 什么是计算属性？如何声明？如何使用？

```html

<div>{{a}} + {{b}} = {{res}}</div>
```

```javascript
new Vue({
    data: {
        a: 1,
        b: 2
    },
    computed: {
        res: function () {
            return this.a + this.b
        }
    }
})
```

## 如何绑定 class和style 属性？绑定的对象为Array时如何解析？绑定对象为object时如何解析？

```html

<style>
	.red: {
		color: red
	}
	
	.blue: {
		color: blue
	}
</style>
<div :class="clazz" :style="style"></div>
```

```javascript
new Vue({
    data: {
        clazz: "red blue", // 字符串指定
        clazz: ["red", "blue"], //数组指定
        clazz: {
            red: true,
            blue: true
        }, // 对象指定
        style:{
            color:"red",
            fontSize:"19px"
        } // style 绑定
    }
})
```

#代码题
## 请使用属性绑定实现一个 <img>的src属性每隔1s自动变换，以实现图片自动切换。
```html
<img :src="src">
```
```javascript
new Vue({
    data:{
        imgList:["a.jpg","b.jpg","c.jpg"],
        src:"a.jpg",
        count:0
    },
    mounted(){
       setInterval(()=>{
           this.src = this.imgList[this.count++]
           if(this.count>=this.imgList.length)this.count  = 0
       },1000) 
    }
})
```

## 请自行查阅文档实现：当用户提交表单时，防止页面刷新，并在组件内部使用ajax方式提交表单。
```html
<form @submit.prevent="submit">
    username: <input type="text" v-model="username">
    password: <imput type="text" v-model="password">
    <buttom type="submit">提交</buttom>
</form>
```
```javascript
new Vue({
    data:{
        username:"",
        password:""
    },
    methods:{
        submit:function (){
            ajaxPost("http.....",{
                username:this.username,
                password:this.password
            })
        }
    }
})
```

## 请实现 filter uppercase 实现将输入字符串转化为大写形式,并在模板中使用这个 filter

```html
<div>the uppercase of {{str}} is {{str | uppercase}}</div>

<script >
    new Vue({
        data:{
            str:"hello world"
        },
        filters:{
            uppercase(str){
                return str.toUpperCase()
            }
        }
    })
</script>
```

## 假设 Component 中有 data:{firstName: 'Foo', lastName: 'Bar'}，请实现模板中` <div>{{fullname}}</div>` 的 fullname 会当 firstName，lastName 任意一个改变时而改变
```html
<div>{{fullname}}</div>
<script >
    new Vue({
        data:{firstName: 'Foo', lastName: 'Bar'},
        computed:{
            fullname:function () {
                return this.firstName + " "+this.lastName
            }
        }
    })
</script>
```

## 假设 Component 中有 data:{isActive: true}，请实现模板中某个 div class active根据 isActive 变化而变化。
```html
<style>
    active:{
        ....
    }
</style>
<div :class ="{active:isActive}"></div>

<script >
    new Vue({
        data:{
            isActive:true
        }
    })
</script>
```