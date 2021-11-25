# 问答题
## 什么是 Vuex？我们为什么要使用 Vuex？
Vuex 是一个类flux的状态管理组件 采用store模式

由于当前应用日趋复杂，传统的方法已不能方便管理分散的应用状态 vuex应运而生

Vuex 可以记录每次操作和状态变化，方便地插入值到各个组件中去

## Vuex 是如何管理状态的？
将状态变量归库到一起管理，通过统一的方法去改变状态的值

## 父子组件通信可以通过 props/event ；也可以使用组件共享状态；二者有什么不同？
props/event将导致嵌套使用 组件共享状态允许统一的状态管理

在一般情况下采用 props/event 更简便

在多层组件下组件共享状态更合理方便

## Vuex 有哪些核心概念？各有什么作用？

store : 一个Vuex 应用应该仅含有一个store store保存有共享数据state 拥有触发变更的方法对象，以及其他一些配置

state ： 共享数据 具有响应式的特点 称为单一状态树 允许store 可以获取任意状态下的数据快照

Getter : 可以通过state派生数据方便使用 对象Getter 是响应式的 函数Getter 需要调用 可以传入参数

mutation ： 更新state的唯一方法 在其中可以编写类似事件的业务函数 通过store.commit方法触发对应的mutation，可以提交载荷

Action ： Action 中调用commit触发mutation Action可以是异步的，返回一个Promise 或者采用 async await

module  ： 模块化Store 