# 问答题
## Component 中的 data 应该怎样初始化？Vue作者为什么要这样设计？

通过函数放回新对象，确保组将具有私有属性

```javascript
Vue.component("item",{
    data:function (){
        return{
            msg:1
        }
    }
})
```
## 父子组件是如何通信的？

父组件通过props传递变化值

子组件通过事件冒泡通知父组件事件变动

## 如何声明 prop ？如何对 prop 进行验证？
```javascript
Vue.component("item",{
    props:["msg"],
    props:{
        msg:[String,Number],
        msg:{
            type:[Number],
            default(){
                return 1
            },
            required:true,
            validator(val){
                return val < 10
            }
        }
    }
})
```
## 如何自定义事件？父组件如何绑定子组件事件？

通过@ + 指定的事件名称来绑定子组件处理事件

子组件通过this.$emit 发出事件
```javascript
Vue.component("parent",{
    methods:{
        onChange(){
            alert("change!")
        }
    },
    template:`<child @change="onChange"/>`
})
Vue.component("child",{
    methods:{
        change(){
            this.$emit("change")
        }
    },
    template:`<botton @click="change"/>`
})
```
## 什么是 slot？如何使用？
```javascript
Vue.component("parent",{
    template:`
    <child>
    <p slot="s1">hello world</p>
    <p slot="s2">word hello</p>
    </child>`
})
Vue.component("child",{
    template:`
    <div>
    <header></header>
    <slot name="s1"></slot>
    <slot name="s2"></slot>
    <footer></footer>
    </div>`
})
```
## 如何异步加载组件？
采用promise
向组件传入函数
```javascript
Vue.component("parent",{
    template:`
    <child>
    <p slot="s1">hello world</p>
    <p slot="s2">word hello</p>
    </child>`
})
Vue.component("child",function (resolve,reject){
    setTimeout(()=>{
        resolve({
            template:`
    <header></header>
    <slot name="s1"></slot>
    <slot name="s2"></slot>
    <footer></footer>`
        })
    },1000)
})
```

# 代码题

```html
<!doctype html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
	<title>Document</title>
</head>
<body>
<div id="app">
	{{res}}
	<counter @add="add"></counter>
	<counter @add="add"></counter>
	<container>
		<p>content</p>
	</container>
</div>
<script>
	Vue.component('container', {
		template: '<div><header>header</header>' +
				'<slot></slot>' +
				'<footer>footer</footer></div>'
	})
	Vue.component('counter',{
		data:function () {
			return{
				ct:0
			}
		},
		methods:{
			add:function () {
				this.ct++
				this.$emit("add")
			}
		},
		template:"<button style='padding:10px;' @click='add'>{{ct}}</button>"
	})
	let app = new Vue({
		el:"#app",
		data:{
			res:0
		},
		methods:{
			add:function () {
				this.res++
			}
		}
	})
</script>
</body>
</html>
```