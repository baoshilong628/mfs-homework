<template>
<div id="index">
  <div class="container">
    <router-view/>
  </div>
  <div class="filter">
    <h2>最新博客</h2>
    <div class="lastCont">
      <p @click="toSee(article.id)" v-for="article in lastArticle">《 {{article.title}} 》</p>
    </div>
    <h2>月度博客</h2>
    <span  v-for="count in  monthCount" @click="getMonthList(count.month)" class="monthFilter">{{count.month.replace("-","年 ")+"月" +`(${count.num})`}}</span>
    <h2>标签列表</h2>
    <div class ="tagContainer">
      <span v-for="count in  tagCount" @click="gtc(count.tag)" class="tagFilter">{{count.tag + `(${count.num})`}}</span>
    </div>
    <h2>关键字列表</h2>
    <div class ="tagContainer">
      <span v-for="count in  keyCount" @click="getkeyList(count.word)" class="tagFilter">{{count.word + `(${count.num})`}}</span>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "index",
  data(){
    return{
      monthCount:[],
      tagCount:[],
      keyCount:[],
      lastArticle:[]
    }
  },
  methods:{
    ...mapActions([
    "getMonthCount",
        "getTagCount",
        "getKeyWordInfo",
        "getLastArticle"
    ]),
    gtc(tag){
      this.$router.push({
        path:"/list",
        query:{
          tag
        }
      })
    },
    toSee(id){
      this.$router.push("/article/"+id)
    },
    getkeyList(key){
      this.$router.push({
        path:"/list",
        query:{
          key
        }
      })
    },
    getMonthList(month){
      this.$router.push({
        path:"/list",
        query:{
          month
        }
      })
    }
  },
  mounted() {
    this.getLastArticle().then((res)=>{
      this.lastArticle = res
    })
    this.getKeyWordInfo().then((res)=>{
     this.keyCount = res
    })
    this.getMonthCount().then((res)=>{
      this.monthCount = res
    })
    this.getTagCount().then((res)=>{
      this.tagCount = res
    })
  }
}
</script>

<style scoped lang="scss">
#index {
  display: flex;
  margin-top: 30px;
  justify-content: space-between;


  .container{

    margin-left:100px;
    width: 1000px;
  }
  .filter{

    margin-right: 100px;
    width: 300px;

    .monthFilter{
      cursor: pointer;
    }
    .tagContainer{
      display:flex;
      flex-wrap: wrap;
      .tagFilter{
        cursor: pointer;
        border: 1px solid #ff8d8d;
        padding: 7px;
        margin: 3px;
      }
    }

  }
}
.lastCont{
  p{
    cursor: pointer;
  }
}
</style>