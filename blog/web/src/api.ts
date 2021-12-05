import axios from "axios";

export class Api{

    debug = true

    getAPIAddress(apiPath:string){
        if(this.debug) return "http://localhost:8000/api"+apiPath
        else return "/api"+apiPath
    }

    postData(path:string,param:any){

        const address = this.getAPIAddress(path)

         return  axios.post(address,param,{
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
    public async signIn(username:string,password:string){

        const param  ={username,password}

        const res = await this.postData("/token",param)

        return res.data
    }
    public async signUp(param:{username:string,password:string}){

        const res = await this.postData("/user",param)

        return res.data
    }

    public async getUserInfo(param:{token:string}){

        const res = await this.postData("/user/info",param)

        return res.data
    }

    public async getProfile(param:{token:string,month:any,tag:any,page:any,size:any}){

        const res = await this.postData("/profile",param)

        return res.data
    }
    public async addNewArticle(param:{token:string,article:any}){

        const  res  = await this.postData("/article",param)

        return res.data
    }
    public async getArticle(param:{token:string,id:any}){

        const  res  = await this.postData("/article/id",param)

        return res.data
    }
    public async  getMonthCount(param:{token:string}){

        const  res  = await this.postData("/article/count",param)

        return res.data
    }
    public async getTagCount(param:{token:string}){

        const  res  = await this.postData("/article/tag",param)

        return res.data
    }
    public async getAllUser(param:{token:string}){

        const  res  = await this.postData("/user/all",param)

        return res.data
    }

    public async deleteUser(param:{token:string,id:any}){

        const  res  = await this.postData("/user/delete",param)

        return res.data
    }

    public async updateUser(param:{token:string,id:any,username:any,password:any}){

        const  res  = await this.postData("/user/update",param)

        return res.data
    }

    public async getAllArticles(param:{token:string}){

        const  res  = await this.postData("/article/all",param)

        return res.data
    }

    public async deleteArticles(param:{token:string,id:any}){


        const  res  = await this.postData("/article/delete",param)

        return res.data

    }
}