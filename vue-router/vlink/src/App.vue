<template>
  <div id="app">
    <Vlink href="/home" @a="change">home</Vlink>
    <Vlink href="/about" @a="change">about</Vlink>
    <Vlink href="/123" @a="change">not found</Vlink>
    <component :is="pg"></component>
    <br>
    <br>
    <router-link to="/home">Go to home</router-link>
    <router-link to="/about">Go to about</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Vlink from "./components/Vlink";
import home from "./components/home";
import about from "./components/about";
import notfound from "./components/notfound";

export default {
  name: 'App',
  data(){
    return {
      page:"/home"
    }
  },
  methods:{
    change(page){
      this.page = page
    }
  },
  computed:{
    pg(){
      if(this.page === "/home")return "home"
      if(this.page === "/about")return "about"
      return "notfound"
    }
  },
  components:{
    Vlink,home,about,notfound
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
