import {createStore} from 'vuex'
import {Api} from "@/api"

let api = new Api()


export default createStore({
  state: {
    token:"",
    userInfo:""
  },
  mutations: {
    setToken: function(state,token){
      state.token = token
    },
    setUserInfo: function(state,userInfo){
      state.userInfo = userInfo
    }
  },
  actions: {
    async signIn({dispatch,commit,state}, {username,password}:{username:string,password:string}) {

      const token = await api.signIn(username,password)

      commit("setToken",token)

      dispatch("getUserInfo")

      localStorage.token = token

      return token
    },

    async signUp({},{username,password}:{username:string,password:string}){

      return await api.signUp({username, password})
    },

    async getUserInfo({commit,state}){

      if(state.token === "") return

      const userInfo = await api.getUserInfo({token:state.token})

      commit("setUserInfo",userInfo)
    },
    async getProfile({commit,state},{month,tag,page,size}) {

      if(state.token === "") return ""

      return await api.getProfile({token: state.token,month,tag,page,size})
    },
    async addNewArticle({commit,state},article){

      if(state.token === "") return ""

      return await api.addNewArticle({token: state.token,article})
    },
    async getArticle({commit,state},id) {

      if(state.token === "") return ""

      return await api.getArticle({token: state.token,id})

    },
    async getMonthCount({commit,state}) {

      if(state.token === "") return ""

      return await api.getMonthCount({token: state.token})

    },
    async getTagCount({commit,state}) {

      if(state.token === "") return ""

      return await api.getTagCount({token: state.token})

    },
    async getAllUser({commit,state}){


      if(state.token === "") return ""

      return await api.getAllUser({token: state.token})

    },
    async deleteUser({commit,state},{id}){

      if(state.token === "") return ""

      return await api.deleteUser({token: state.token,id})
    },
    async updateUser({commit,state},{id,username,password}){

      if(state.token === "") return ""

      return await api.updateUser({token: state.token,id,username,password})
    },

    async getAllArticles({commit,state}){

      if(state.token === "") return ""

      return await api.getAllArticles({token: state.token})

    },

    async deleteArticles({commit,state},{id}) {

      if(state.token === "") return ""

      return await api.deleteArticles({token: state.token,id})
    }

  },
  modules: {

  }
})
