<template>
<div id="edit">
  <div class="editor">
    <h2>文章标题</h2>
    <el-input v-model="title"/>
    <h2>文章分类</h2>
    <el-input v-model="tag"/>

    <h2>关键字</h2>

    <el-select v-model="keyWord" placeholder="请选择关键字">
      <el-option
          v-for="word in keyWordList"
          :key="word.word"
          :label="word.word"
          :value="word.word"
      >
      </el-option>
    </el-select>
    <div class="wordContainer">
      <div v-for="(word,index) in wordList" class="word">{{word}}
        <span style="color:red;cursor:pointer;font-size: 19px;" @click="delWord(index)">×</span>
      </div>
    </div>
    <div style="display:flex;">
      <el-button type="success" @click="addWord" >添加该关键字</el-button>
      <el-button type="success" @click="newKeyWord" >创建新关键字</el-button>
    </div>
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

  <el-dialog
      v-model="keyWordDialog"
      title="添加新关键字"
      width="30%"
      :before-close="handlekeyWordDialogClose"
  >
    设置新关键字
    <el-input v-model="newKey"></el-input>
    <el-button  type="success" class="myDialogBtn" @click="handleAddNewKey">添加新关键字</el-button>
  </el-dialog>
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
      newKey:"",
      keyWordList:[],
      tag:"",
      keyWord:"",
      wordList:[],
      title:"",
      profile:"",
      content:"",
      keyWordDialog:false
    }
  },
  mounted() {

    this.getKeyWordsData()
    if(this.id !== "new"){
      this.getArticle(this.id).then((res)=>{
        this.title = res.title
        this.profile = res.profile
        this.content = res.content
        this.tag = res.tag
        this.wordList = res.KeyWords.map(item=>item.word)
      })
    }
  },
  methods:{
    ...mapActions([
        "addNewArticle",
        "getArticle",
        "getAllKeyWords",
        "addNewWord"
    ]),
    addWord(){
      if(this. keyWord !== ""){
        if( this.wordList.find(item => item===this.keyWord)!== undefined){
          ElNotification({
            message:"不能选择重复关键词",
            type:"warning"
          })
          return
        }
        this.wordList.push(this.keyWord)
      }else {
        ElNotification({
          message:"请先选择关键字",
          type:"warning"
        })
      }
    },
    newKeyWord(){
      this.keyWordDialog = true
    },
    handleAddNewKey(){
      const word = this.newKey;

      this.addNewWord({
        word
      }).then((res)=>{
        console.log(res)
        if(res === ""){
          ElNotification({
            message:"关键字已存在",
            type:"warning"
          })
        }else {
          this.keyWord = word
          this.getKeyWordsData()
          this.handlekeyWordDialogClose()
          ElNotification({
            message:"添加成功",
            type:"success",
          })
          this.wordList.push(word)
        }
      })
    },
    handlekeyWordDialogClose(){
      this.keyWordDialog = false
    },
    getKeyWordsData(){
      this.getAllKeyWords().then((res)=>{
        this.keyWordList = res
      })
    },
    delWord(index){
      this.wordList=  this.wordList.splice(1,index)
    },
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

      this.addNewArticle({
        article,
        words:this.wordList
      }).then((data)=>{
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

.myDialogBtn{
  margin: 10px auto;
  display:block;
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
.edit{
  width:100%;
  height:600px;

}
</style>