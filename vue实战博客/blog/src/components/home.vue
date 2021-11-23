<template>
  <div class="container">
    <div class="item" style="width:65%" >
      <smalltxt></smalltxt>
      <smalltxt></smalltxt>
      <smalltxt></smalltxt>
      <smalltxt></smalltxt>
    </div>
    <div class="item" style="width:30%" >
      <h2>近期文章</h2>
      <p @click="toArticle">JavaScript 最新特性实现的三大黑科技</p>
      <p @click="toArticle">使用 Node.js 对文本内容分词和关键词抽取</p>
      <p @click="toArticle">轻松管理你的 Node 版本</p>
      <h2>文章归档</h2>
      <p>2017年6月（6）</p>
      <p>2017年5月（8）</p>
      <p>2017年4月（12）</p>
      <p>2017年3月（9）</p>
      <p>2017年2月（2）</p>
    </div>
  </div>
</template>

<script>
import smalltxt from "./smalltxt";

export default {
  name: "home",
  components:{
    smalltxt
  },
  methods:{
    toArticle(){
      this.$router.push("/article")
    }
  }
}
</script>

<style scoped>
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
