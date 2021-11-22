# 问答题
## 单页面应用为什么要实现页面切换而不刷新页面？如何实现？
不能丢失已经存在的数据

重复的刷新DOM降低性能 增加网络负担

无法通过常规请求加载其他页面

通过ajax + json + Vue的动态DOM
## HTML5 history 和 Hash 都能实现切换 url 而不刷新页面，它们有何异同？
history在页面的URL后部以文件路径表示，通过js修改不会请求数据，但以该URL访问则会导致请求页面 需要服务器支持才不会404 

hash 是在URL 尾部 以# + 锚点名称表示 一般请求不同hash相同URL访问同一页面 不会对后端产生影响

## 自己实现的 VLink 的原理是什么？
动态组件 + 事件触发 + 修改history 或者hash 表示页面位置

## vue-router 中 <router-view></router-view> 标签有何作用？
用来说明页面最终需要渲染的位置
## vue-router 中如何使用动态路由匹配？

采用路由参数 /user/:id