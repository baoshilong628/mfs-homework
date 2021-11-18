# 问答题
## Vue 是通过什么方式检测 data 变化？
通过object.defineProperty 遍历data 中的属性 设定其get和set

当 get被调用时，向watcher注册依赖

当 set被调用时，触发watcher重新计算

## 以下过渡类名各是在什么时候添加的？

v-enter DOM插入动画开始的第一帧

v-enter-active 动画执行过程中 在此设定动画属性

v-enter-to 动画结束的目标帧

v-leave DOM删除动画开始的第一帧

v-leave-active 动画执行中的属性

v-leave-to 动画结束的目标帧

## render 函数有什么用？Vue 是如何编译 template ？

可以编写函数式组件，可以处理需要操作DOM和定义html tag 的场景

将template编译为render函数调用

## 指令(directive)是如何声明？如何使用？
```javascript

<input v-focus />

const app = Vue.createApp({})
// 注册一个全局自定义指令 `v-focus`
app.directive('focus', {
  // 当被绑定的元素挂载到 DOM 中时……
  mounted(el) {
    // 聚焦元素
    el.focus()
  }
})

//或者是局部使用指令

directives: {
    focus: {
        // 指令的定义
        mounted(el) {
            el.focus()
        }
    }
}

```

## 如下代码会打印什么？

```javascript
var mixin = {
created: function () {
console.log('混合对象的钩子被调用')
}
}
new Vue({
mixins: [mixin],
created: function () {
console.log('组件钩子被调用')
}
})
```

混合对象的钩子被调用

组件钩子被调用
