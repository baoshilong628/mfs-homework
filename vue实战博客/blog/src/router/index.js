import Vue from 'vue'
import Router from 'vue-router'
import article from "../components/article";
import home from "../components/home";
import about from "../components/about";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path:'/article',
      component:article
    },{
      path:'/about',
      component:about
    }
  ]
})
