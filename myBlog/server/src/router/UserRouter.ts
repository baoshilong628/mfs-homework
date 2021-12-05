import * as Router from "koa-router"
import {UserService} from "../service/UserService";

export function UserRouterBuilder(userService: UserService){

    const router = new Router({
        prefix: '/api'
    })

    router.post("/user",async (ctx)=>{

        let {username, password} = ctx.request.body

        const  res = await userService.singUp(username,password)

        ctx.body = res
    })

    router.post("/token",async (ctx)=>{

        let {username, password} = ctx.request.body

        ctx.body =  await userService.singIn(username,password)
    })

    router.post("/user/info",async (ctx)=>{

        let {token} = ctx.request.body

        ctx.body = await userService.getUserInfo(token)

    })

    router.post("/user/all",async (ctx)=>{

        ctx.body = await userService.getAllUsers()
    })

    router.post("/user/delete",async (ctx)=>{

        let {token,id} = ctx.request.body

        await userService.deleteUser(id)

        ctx.body = "succ"
    })

    router.post("/user/update",async (ctx)=>{

        let {token,id,username,password} = ctx.request.body

        await userService.updateUser({id,username,password})

        ctx.body = "succ"
    })

    return router.routes()
}