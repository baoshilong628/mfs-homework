import {UserService} from "../service/UserService";
import ArticleService from "../service/ArticleService";
import * as Router from "koa-router";
import Token from "../util/token";

export function ArticleRouterBuilder(articleService: ArticleService){
    const router = new Router({
        prefix: '/api'
    })

    router.post("/profile",async (ctx)=>{

        let {token,month,tag,page,size} = ctx.request.body;

        let userInfo = Token.getUserInfo(token)

        ctx.body = await articleService.getProfile( {name:userInfo.username,month,tag,page,size} )

    })

    router.post("/article",async (ctx)=>{

        let {token,article} = ctx.request.body

        ctx.body = await articleService.addNewArticle(article)

    })

    router.post("/article/id", async (ctx)=>{

        let {token,id} = ctx.request.body

        let userInfo = Token.getUserInfo(token)

        ctx.body = await articleService.getArticleById(userInfo.username,id)
    })

    router.post("/article/count", async (ctx)=>{

        let {token} = ctx.request.body

        let userInfo = Token.getUserInfo(token)

        ctx.body = await articleService.getMonthCount(userInfo.username)
    })

    router.post("/article/tag",async (ctx)=>{

        let {token} = ctx.request.body

        let userInfo = Token.getUserInfo(token)

        ctx.body = await articleService.getTagCount(userInfo.username)

    })

    router.post("/article/all",async (ctx)=>{

        ctx.body = await articleService.getAllArticle()

    })


    router.post("/article/delete",async (ctx)=>{

        let {token,id} = ctx.request.body

        ctx.body = await articleService.deleteArticle(id)

    })

    return router.routes()
}