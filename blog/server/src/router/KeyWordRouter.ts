import KeyWord from "../entity/KeyWord";
import KeyWordService from "../service/KeyWordService";
import * as Router from "koa-router";

export default function KeyWordRouterBuilder(keyWordService:KeyWordService){

    const router = new Router({
        prefix: '/api'
    })

    router.post("/keyword",async (ctx)=>{

        let {token,word} = ctx.request.body

        ctx.body = await keyWordService.addNewWord(word)

    })


    router.post("/keyword/all",async (ctx)=>{

        let {token} = ctx.request.body

        ctx.body = await keyWordService.getAllKeyWords()

    })

    router.post("/keyword/count",async (ctx)=>{

        let {token} = ctx.request.body

        ctx.body = await keyWordService.getKeyWordInfo()

    })


    return router.routes()
}