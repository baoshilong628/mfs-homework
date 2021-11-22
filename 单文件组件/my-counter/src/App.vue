<template>
  <div id="app">
    {{value}}
    <Counter @inc="inc"></Counter>
    <Counter @inc="inc"></Counter>
  </div>
</template>

<script>
import Counter from "./components/Counter";
export default {
  data:function (){
    return{
      value:0
    }
  },
  name: 'App',
  methods:{
    inc(){
      this.value++
    }
  },
  components:{
    Counter
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
