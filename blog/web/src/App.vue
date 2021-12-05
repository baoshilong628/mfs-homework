<template>
  <header>
    <h1 class="fl title item">个人博客</h1>
    <div v-if="token === ''">
      <span  class="fr item btn" @click="showDialog">登录</span>
    </div>
    <div v-if="token !== ''">
      <span  class="fr item btn" @click="offline">注销</span>
      <span  class="fr item btn">欢迎  {{userInfo.username}}</span>
      <span  class="fr item btn" @click="toEdit">新博客</span>
      <div class="admin">
        <span class="fr item btn" @click="$router.push('/UserManager')">用户管理</span>
        <span class="fr item btn" @click="$router.push('/ArticleManager')">博客管理</span>
      </div>
      <span  class="fr item btn" @click="$router.push('/')">首页</span>
    </div>
  </header>
  <router-view />
  <footer>

  </footer>
  <el-dialog
      v-model="isShowDialog"
      title="登录 & 注册"
      width="30%"
      :before-close="handleDialogClose"
  >
    <SignInSignUpDialog ref="dialog" @success="SignInSuccess"/>
  </el-dialog>

</template>

<script>


import {mapActions,mapState,mapMutations} from "vuex";
import SignInSignUpDialog from "@/components/SignInSignUpDialog";

export default {

  components:{
    SignInSignUpDialog
  },
  data(){
    return {
      isShowDialog:false,
    }
  },
  computed:{
    ...mapState([
        "token",
        "userInfo"
    ])
  },
  methods:{
    SignInSuccess(){
      this.isShowDialog = false
      this.$router.push("/")
      location.reload()
    },
    toEdit(){
      this.$router.push("/edit/new");
    },
    offline(){
      this.setToken("")
      delete localStorage.token
      this.$router.push("/")
    },
    handleDialogClose(){
      this.$refs.dialog.resetFields()
      this.isShowDialog =false
    },
    showDialog(){
      this.isShowDialog = true
    },
    loadToken(){
      let token =localStorage.token

      if(token === undefined) return

      this.setToken(token)

      this.getUserInfo()
    },
    ...mapActions([
        "signIn",
        "getUserInfo"
    ]),
    ...mapMutations([
      "setToken"
    ]),
  },

  mounted(){

    this.loadToken()
  }
}
</script>

<style lang="scss">
*{
  user-select: none;
}
header {
  $height:60px;
  display:flow-root;
  max-width: 1600px;
  margin: 0 auto;
  height:$height;
  padding-right: 150px;
  box-sizing: border-box;
  .title{
    margin: 0;
  }
  .fl{
    float:left;
  }
  .fr{
    float:right;
  }
  .item{
    line-height: $height;
  }
  .btn{
    cursor: pointer;
    padding: 0 10px;
    font-size: 20px;
  }
}

</style>
