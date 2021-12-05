<template>
  <div id="list">
    <div v-if="tag||month">
      <h3>正在查阅 {{tag?tag:month}}</h3>
      <el-button @click="all">查询所有</el-button>
    </div>
    <div v-if="profileList.length ===0" style="text-align:center">
      <h1>还没有登录或编写博客</h1>
    </div>
    <BlogProfile v-for="profile in profileList"  :profile="profile" />
    <div class="ctl">
      <el-button @click="pre">上一页</el-button>
      <span>当前页 {{page}}</span>
      <el-button @click="next">下一页</el-button>
    </div>
  </div>
</template>

<script>
import BlogProfile from "@/components/BlogProfile";
import {mapActions} from "vuex";


import { ElNotification } from 'element-plus'

export default {
  name: "BlogList",
  methods:{
    ...mapActions([
        "getProfile"
    ]),
    all(){
      this.$router.push("/list")
    },
    getData(){

      this.getProfile({month:this.month,tag:this.tag,page:this.page,size:this.size}).then((data)=>{
        this.profileList = data
      })
    },
    pre(){
      this.page --
      if(this.page <0){
        this.page =0
        ElNotification({
          message:"已经是第一页了",
          type:"warning"
        })
      }
      this.getData()
    },
    next(){
      this.page ++
      this.getData()
      if(this.profileList.length === 0){
        ElNotification({
          message:"已经没有数据了",
          type:"warning"
        })
        this.page --
      }

    }
  },
  components:{
    BlogProfile
  },
  computed:{
    month(){
      const m = this.$route.query.month
      return m?m:""
    },
    tag(){
      const t = this.$route.query.tag;
      return t?t:""
    }
  },
  data(){
    return {
      profileList: [],
      page:0,
      size:10
    }
  },
  mounted() {

    this.getData()
  }
}
</script>

<style scoped lang="scss">
#list {

}
.ctl{
  text-align:center;
  padding-top:10px;
}
</style>