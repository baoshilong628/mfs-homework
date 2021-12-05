import {User} from "../entity/User";
import {Repository} from "typeorm";
import Token from "../util/token";

export class UserService {
    userRepository: Repository<User>;

    constructor(userRepository:Repository<User>) {
        this.userRepository = userRepository
    }

    // 注册
   public async singUp(username:string,password:string):Promise<boolean> {

       let user = await this.userRepository.findOne({
            username
        })

       if(user != undefined) return  false; // 用户名存在

       await this.userRepository.save(new User(username, password))

       return true
    }

    // 登陆
    public async singIn(username:string,password:string):Promise<string>{
        let user = await this.userRepository.findOne({
            username,password
        })

        if(user === undefined) return "" //登陆失败

        return Token.getToken(username)
    }

    //查询用户信息

    public async getUserInfo(token:string){

        return Token.getUserInfo(token)
    }

    public async getAllUsers(){

        return await this.userRepository.createQueryBuilder("user")
            .select("user")
            .where("user.id > 0 ")
            .getRawMany() //findAll
    }

    public async updateUser({id,username,password}){
        let user = await this.userRepository.findOne({id})
        user.username = username
        user.password = password

        await this.userRepository.save(user)
    }
    public async deleteUser(id){
        await this.userRepository
            .createQueryBuilder("user")
            .delete()
            .from(User)
            .where("id = :id", { id })
            .execute();
    }

}
