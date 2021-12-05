<template>
  <el-form ref="formData" :model="formData" label-width="120px">
    <el-form-item prop="username" label="用户名">
      <el-input v-model="formData.username"></el-input>
    </el-form-item>

    <el-form-item prop="password" label="密码">
      <el-input v-model="formData.password"></el-input>
    </el-form-item>

    <el-form-item prop="secondPassword" v-if="state === 'signUp'" label="重复密码">
      <el-input v-model="formData.secondPassword"></el-input>
    </el-form-item>

    <el-form-item v-if="state === 'signIn'">
      <button class="myBtn" @click="triggerSignIn">登录</button>
    </el-form-item>

    <el-form-item v-if="state === 'signUp'">
      <button class="myBtn" @click="triggerSignUp">注册</button>
    </el-form-item>


    <p class="smallTips" v-if="state === 'signIn'">还没有账号? <a @click="state = 'signUp'">注册</a></p>

    <p class="smallTips" v-if="state === 'signUp'">已有账号? <a @click="state = 'signIn'">登录</a></p>

    <div>

    </div>
  </el-form>
</template>

<script>
import {mapActions} from "vuex";
import { ElNotification } from 'element-plus'

export default {
  data(){
    return{
      state:"signIn",
      formData:{
        username:"",
        password:"",
        secondPassword:""
      }
    }
  },
  methods:{
    ...mapActions([
        "signIn",
        "signUp"
    ]),
    resetFields(){
      this.$refs["formData"].resetFields()
    },
    triggerSignUp(){
      if(this.formData.username === ""){
        ElNotification({
          message:"用户名不能为空"
        })
        return
      }
      if(this.formData.password === ""){
        ElNotification({
          message:"密码不能为空"
        })
        return
      }
      if(this.formData.password !== this.formData.secondPassword){
        ElNotification({
          message:"密码不一致"
        })
        return
      }
      this.signUp({
        username:this.formData.username,
        password:this.formData.password
      }).then((data)=>{
        if(data === true){
          ElNotification({
            message:"注册成功",
            type:"success"
          })
          this.resetFields()
          this.state ="signIn"
        }else {
          ElNotification({
            message:"注册失败，用户名重复",
            type:"error"
          })
        }
      })
    },
    triggerSignIn(){

      if(this.formData.username === ""){
        ElNotification({
          message:"用户名不能为空"
        })
        return
      }
      if(this.formData.password === ""){
        ElNotification({
          message:"密码不能为空"
        })
        return
      }



      this.signIn({
        username:this.formData.username,
        password:this.formData.password
      }).then((data)=>{{
        if(data!==""){
          ElNotification({
            message:"登录成功",
            type:"success"
          })
          this.$emit("success")
          this.$refs.formData.resetFields()
        }else {
          ElNotification({
            message:"登陆失败，用户名或密码错误",
            type:"error"
          })
        }
      }})
    }
  }
}
</script>

<style lang="scss">
.myBtn{
  border-radius: 30px;
  min-width: 200px;
  height: 40px;
  margin: 0 auto;
  display: block;
  border: none;
  background-color: #eeeeee;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover{
    background-color: #bbbbbb;
  }
}
.smallTips{
  font-size: 16px;
  a{
    cursor:pointer;
    font-size: 19px;
    color: cornflowerblue;
  }
}
</style>