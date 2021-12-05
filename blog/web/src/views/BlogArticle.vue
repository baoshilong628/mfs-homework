<template>
<div id="article">
  <h1>{{article.title}}</h1>
  <div class="meta">
    <span>标签: {{ article.tag }}</span>
    <span>作者：{{ article.author }}</span>
    <span>最后修改日期：{{ article.lastFixedDate }}</span>
    <div class="wordContainer">
      关键字：
      <div v-for="(word,index) in article.KeyWords" class="word">{{word.word}}</div>
    </div>
    <div class="profile">
      {{ article.profile }}
    </div>
  </div>
  <div class="content" v-html="preview"/>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {marked} from 'marked'
export default {
  name: "BlogArticle",
  computed:{
    preview(){
      if(this.article.content !== undefined)
        return  marked(this.article.content)
      else
        return ""
    },
    ...mapState([
        "userInfo"
    ]),
    id(){
      return this.$route.params.articleId
    }
  },
  data(){
    return{
      article:{}
    }
  },
  methods:{
    ...mapActions([
        "getArticle"
    ])
  },
  mounted() {
    if(this.id !== undefined){

      this.getArticle(this.id).then((data)=>{
        this.article=data
      })
    }
  }
}
</script>

<style scoped lang="scss">
#article {
  text-align:center;
  .meta{
    span{
      margin:10px;
    }
  }
  .content{
    text-align:left;
    border-top: 1px solid #aaaaaa;
    margin: 10px;
    padding: 10px;
    min-height: 60vh;
  }
  .profile{
    border-top: 1px dashed #aaaaaa;
    font-size: 18px;
    margin-top:5px;
    padding-top: 10px;
    color: #3b3b3b;
  }
}
.wordContainer{
  display:flex;
  flex-wrap: wrap;
  .word{
    margin: 6px;
    padding: 6px;
    border: 2px solid #6ebef3;
  }
}
</style>