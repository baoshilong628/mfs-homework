<template>
  <div id="UserManager">
    <el-table
        :data="userList"
        style="width: 100%"
    >
      <el-table-column label="用户名" prop="user_username" />
      <el-table-column label="密码" prop="user_password" />
      <el-table-column align="right">
        <template #default="scope">
          <el-button  @click="handleEdit(scope.$index)"
          >修改</el-button
          >
          <el-button
              type="danger"
              @click="handleDelete(scope.$index)"
          >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
        v-model="isShowDialog"
        title="修改密码"
        width="30%"
        :before-close="handleDialogClose"
    >
    设置新密码
      <el-input v-model="pwd"></el-input>
      <el-button @click="handleSetPassword">设置</el-button>
    </el-dialog>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import { ElNotification } from 'element-plus'

export default {
  name: "UserManager",
  data(){
    return {
      search:"",
      userList:[],
      isShowDialog:false,
      pwd:"",
      id:"",
      username: "",
    }
  },
  methods:{
    ...mapActions([
        "getAllUser",
        "updateUser",
        "deleteUser"
    ]),
    handleSetPassword(){
      this.updateUser({
        id:this.id,
        username:this.username,
        password:this.pwd
      }).then((res)=>{
        console.log(res)
        ElNotification({
          message:"修改成功"
        })
        this.isShowDialog =false
        this.getData()
      })
    },
    handleDialogClose(){
      this.isShowDialog = false
      this.pwd =""
    },
    handleEdit(index){
      let user = this.userList[index]
      this.id = user.user_id
      this.username = user.user_username;
      this.isShowDialog = true
    },
    handleDelete(index){

      let user = this.userList[index]

      this.deleteUser({
        id:user.user_id
      }).then((res)=>{
        ElNotification({
          message:"删除成功"
        })
        this.getData()
      })
    },
    getData(){
      this.getAllUser().then((res)=>{
        this.userList= res
      })
    }
  },
  mounted() {
   this.getData()
  }
}
</script>

<style scoped lang="scss">
#UserManager{
  margin: 20px auto;
  width: 80%;
}
</style>