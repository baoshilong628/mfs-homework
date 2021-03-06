import * as Koa from "koa"
const app = new Koa()
import * as koaBody from "koa-body";
import * as koaJson from "koa-json";
import {UserRouterBuilder} from "./router/UserRouter";
import {UserService} from "./service/UserService";
import "reflect-metadata"
import { createConnection } from "typeorm";
import { User } from "./entity/User"
import * as cors from "koa2-cors"
import Article from "./entity/Article";
import {ArticleRouterBuilder} from "./router/ArticleRouter";
import ArticleService from "./service/ArticleService";
import KeyWord from "./entity/KeyWord";
import KeyWordRouterBuilder from "./router/KeyWordRouter";
import KeyWordService from "./service/KeyWordService";

async function run(){

    app.use(koaBody())
    app.use(koaJson())
    app.use(cors())

    let connection = await createConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "root",
        database: "blog",
        entities: [
            User,
            Article,
            KeyWord
        ],
        synchronize: true,
        logging: true
    })

    app.use(UserRouterBuilder(new UserService(connection.getRepository(User))))
    app.use(ArticleRouterBuilder(new ArticleService(connection.getRepository(Article),connection.getRepository(KeyWord),connection)))
    app.use(KeyWordRouterBuilder(new KeyWordService(connection.getRepository(KeyWord))))

    app.listen(8000);
}
run().then(()=>{
    console.log("server is running");
})