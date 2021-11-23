<template>
  <div id="app">
    <header style="margin:0 200px;border-bottom: 1px solid #eeeeee;display:flow-root">
      <h1 class="l">码蜂社博客</h1>
      <router-link class="link r" to="/"><h1>主页</h1></router-link>
      <router-link class="link r" to="/about"><h1>关于</h1></router-link>
    </header>
  <router-view></router-view>
  </div>
</template>

<script>
import smalltxt from "./components/smalltxt";

export default {
  name: 'App',
}
</script>

<style>
.item p{
  cursor: pointer;
}
.container{
  display:flex;
  padding: 0 200px;
}
.item{
  margin:10px 20px;
}
.l{
  float:left;
}
.r{
  float:right;
}
*{
  user-select:none;
  color: black;
}
.link {
  text-decoration: none;
  margin: 0 10px;
}
</style>
