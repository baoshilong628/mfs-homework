<template>
<div id="edit">
  <div class="editor">
    <h2>文章标题</h2>
    <el-input v-model="title"/>
    <h2>文章分类</h2>
    <el-input v-model="tag"/>
    <h2>简介</h2>
    <el-input
        v-model="profile"
        :rows="4"
        type="textarea"
        placeholder="Please input"
    />
    <h2>正文(markDown 右侧预览)</h2>
    <el-input
        v-model="content"
        type="textarea"
        :rows="21"
        placeholder="Please input"
    />
    <el-button type="success" @click="publish" >发布</el-button>
  </div>
  <div class="preview"  v-html="preview">

  </div>
</div>
</template>

<script>
import {marked} from 'marked'
import {mapActions, mapState} from "vuex";
import { ElNotification } from 'element-plus'

export default {
  name: "EditArticle",
  computed:{
    ...mapState([
        "userInfo"
    ]),
    id(){
      let id = this.$route.params.id
      return id?id:""
    },
    preview(){
      return marked(this.content)
    }
  },
  data(){
    return{
      tag:"",
      title:"",
      profile:"",
      content:""
    }
  },
  mounted() {
    if(this.id !== "new"){
      this.getArticle(this.id).then((res)=>{
        this.title = res.title
        this.profile = res.profile
        this.content = res.content
        this.tag = res.tag
      })
    }
  },
  methods:{
    ...mapActions([
        "addNewArticle",
        "getArticle"
    ]),
    publish(){
      let author = this.userInfo.username
      let title = this.title
      let profile = this.profile
      let content = this.content
      let lastFixedDate = new Date()
      let tag =this.tag
      let id = this.id


      let article = {author,title,profile,content,lastFixedDate,tag}

      if(id !=="new")
        article.id = id

      this.addNewArticle(article).then((data)=>{
          if(data.id !== undefined){
            ElNotification({
              message:"发布成功",
              type:"success",
            })
            this.$router.push("/article/"+data.id)
          }
      })
    }
  }
}
</script>

<style scoped lang="scss">
#edit{
  margin: 0 30px;
  display: flex;

  .editor {
    width: 40%;
    margin: 30px;
  }
  .preview{
    flex-grow:1;
    margin: 10px;
    word-break: break-all;
    max-width: 50%;
    border: 1px solid #eeeeee;
    border-radius: 4px;
  }
  .el-button{
    width: 100%;
    margin-top: 20px ;
  }
}
</style>