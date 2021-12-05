import * as jwt from "jwt-simple"
import UserInfo from "../entity/UserInfo"
import {User} from "../entity/User";



export default class Token{

    private static redisClient = null

    private static EXPIRED_TIME = 7 * 1000 * 60 *60 * 24

    private static SECRET ="baoshilong"

    public static getToken(username:string){

        const  expiredTime = new Date().getTime() + this.EXPIRED_TIME

        const  payload:UserInfo = {username, expiredTime}

       return  jwt.encode(payload,this.SECRET)

    }
    public static getUserInfo(token:string){

        let payload = jwt.decode(token,this.SECRET)

        if (payload.expiredTime < new Date().getTime())

            return ""

        else

            return  payload
    }
}