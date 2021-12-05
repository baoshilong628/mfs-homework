<template>
  <div id="ArticleManager">

    <el-button @click="delSel"
    >删除所选
    </el-button
    >

    <el-table
        :data="articleList"
        style="width: 100%"
        @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"/>
      <el-table-column label="标题" prop="article_title"/>
      <el-table-column label="作者" prop="article_author"/>
      <el-table-column label="标签" prop="article_tag"/>
      <el-table-column label="更新时间" prop="article_lastFixedDate"/>
      <el-table-column align="right">
        <template #default="scope">
          <el-button @click="handleEdit(scope.$index)"
          >修改
          </el-button
          >
          <el-button
              type="danger"
              @click="handleDelete(scope.$index)"
          >删除
          </el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {ElNotification} from 'element-plus'

export default {
  name: "ArticleManager",
  data() {
    return {
      articleList: [],
      selected: []
    }
  },
  methods: {
    ...mapActions([
      "getAllArticles",
      "deleteArticles"
    ]),
    handleEdit(idx) {
      let article = this.articleList[idx];

      this.$router.push("/edit/" + article.article_id)

    },
    delSel(){
      let ps= []
      if(this.selected.length ===0){
        ElNotification({
          message: "未选择文章",
        })
        return
      }
      for(let article of this.selected){
        let p = this.deleteArticles({
          id:article.article_id
        });
        ps.push(p)
      }
      Promise.all(ps).then(()=>{
        ElNotification({
          message: "删除成功",
        })
        this.getData()
      })
    },
    handleSelectionChange(val) {

      this.selected = val
    },
    handleDelete(idx) {
      let article = this.articleList[idx];

      this.deleteArticles({
        id: article.article_id
      }).then((res) => {
        ElNotification({
          message: "删除成功",
        })
        this.getData()
      })
    },
    getData() {
      this.getAllArticles().then((res) => {
        console.log(res)
        this.articleList = res
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
#ArticleManager {
  margin: 20px auto;
  width: 80%;
}
</style>