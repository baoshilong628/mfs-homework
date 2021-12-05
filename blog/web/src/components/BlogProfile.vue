<template>
  <div id="profile">
    <h2>{{profile.title}}</h2>
    <div class="meta">
      <span>标签: {{profile.tag}}</span>
      <span>作者：{{ profile.author }}</span>
      <span>最后修改日期：{{profile.lastFixedDate}}</span>
    </div>
    <p>{{profile.profile}}</p>
    <el-button @click="toRead">详细阅读</el-button>
    <el-button @click="toEdit">修改</el-button>
  </div>
</template>

<script>
export default {
  props: ["profile"],
  name: "BlogProfile",
  methods:{
    toRead(){
      this.$router.push("/article/"+this.profile.id)
    },
    toEdit(){
      this.$router.push("/edit/"+this.profile.id)
    }
  }
}
</script>

<style scoped lang="scss">

#profile {
  text-align: center;
  border-bottom: 1px dashed #6a6a6a;
}
.meta{
  span{

    margin:0 10px;
  }
}
.el-button {
  margin: 20px;
}
</style>