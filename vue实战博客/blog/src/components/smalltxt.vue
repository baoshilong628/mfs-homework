<template>
<div id="smalltxt">
  <div class="title">
    <h2>软件工程</h2>
    <div>前端·1234567·浏览 123</div>
  </div>
  <div style="margin-top:10px;">软件工程是一门研究用工程化方法构建和维护有效的、实用的和高质量的软件的学科。 它涉及程序设计语言、数据库、软件开发工具、系统平台、标准、设计模式等方面。 在现代社会中，软件应用于多个方面。 典型的软件有电子邮件、嵌入式系统、人机界面、办公套件、操作系统、编译器、数据库、游戏等。</div>
  <div style="text-align: center;font-size:17px;cursor:pointer" @click="toArticle">| 查看文章 |</div>
</div>
</template>

<script>
export default {
  name: "smalltxt",
  methods:{
    toArticle(){
      this.$router.push("/article")
    }
  }
}
</script>

<style scoped>
#smalltxt{
  margin-top: 20px;
}
.title{
  text-align: center;
}
</style>
