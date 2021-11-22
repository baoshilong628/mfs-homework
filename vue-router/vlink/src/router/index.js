import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from "../components/home";
import about from "../components/about";
import notfound from "../components/notfound";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/about',
      component:about
    },
    {
      path:"/404",
      component:notfound
    },
    {
      path:'*',
      redirect:{
        name:"/404"
      }
    }
  ]
})
