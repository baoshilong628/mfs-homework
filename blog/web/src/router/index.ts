import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import index from "../views/index.vue"
import BlogList from "../views/BlogList.vue"
import EditArticle from "../views/EditArticle.vue"

import BlogArticle from "../views/BlogArticle.vue"
import UserManager from "../views/UserManager.vue"
import ArticleManager from "../views/ArticleManager.vue"

import component from "*.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path:"/",
    redirect:"/list"
  },
  {
    path:"/",
    component:index,
    children: [
      {
        path: "list",
        component:BlogList
      },
      {
        path:"article/:articleId",
        component:BlogArticle
      }
    ]
  },
  {
    path:"/edit/:id",
    component:EditArticle
  },
  {
    path:"/UserManager",
    component:UserManager
  },{
  path:"/ArticleManager",
    component:ArticleManager
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
