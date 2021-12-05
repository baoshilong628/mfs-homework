import {Between, Connection, Repository} from "typeorm";
import Article from "../entity/Article";
import KeyWord from "../entity/KeyWord";

export default class ArticleService{

    articleRepository: Repository<Article>;

    keyWordRepository: Repository<KeyWord>;

    connection: Connection;
    constructor(articleRepository:Repository<Article>,  keyWordRepository: Repository<KeyWord>,connection:Connection) {
        this.articleRepository = articleRepository
        this.keyWordRepository = keyWordRepository
        this.connection = connection
    }
    public async getProfile( {name,month,tag,page,size,key} ){

        let [year,onlyMonth] =month.split("-");

        let query = this.articleRepository
            .createQueryBuilder("article")

            .select(  "article.id","id")
            .addSelect( "article.profile","profile")
            .addSelect(   "article.title","title")
            .addSelect( "article.author","author")
            .addSelect( "article.tag","tag")
            .addSelect(  "article.lastFixedDate","lastFixedDate")
            .where("article.author = :name",{name})
        if(month !== ""){
            let [year,onlyMonth] =month.split("-");
            query.andWhere("year(lastFixedDate) = :year",{year})
                .andWhere("month(lastFixedDate) = :month",{month:onlyMonth})
        }
        if(tag !== ""){
            query.andWhere("tag = :tag",{tag})
        }
        if(key !== ""){

            query.andWhere("wd.word = :key",{key})
                .leftJoin("article.KeyWords","wd")
        }
        query.limit(size)
            .offset(size * page)

        return query.getRawMany()
    }
    public async addNewArticle(article:Article,words:string[]){

        await this.deleteArticle(article.id)


        let newArticle = await this.articleRepository.save(article)

        for(let word of words){
            let wd = await this.keyWordRepository.findOne({
                word:word
            },{relations:["articles"]})

            wd.articles.push(newArticle)

            await this.connection.manager.save(wd)
        }
        return newArticle

    }
    public async getArticleById(username,articleId){

        return await this.articleRepository.findOne({
            id:articleId,
            author:username
        },{relations:["KeyWords"]})
    }
    public async getMonthCount(username){

        return await this.articleRepository.createQueryBuilder("article")
            .select("DATE_FORMAT(article.lastFixedDate,'%Y-%m')","month")
            .addSelect("count(*)","num")
            .where("article.author = :name",{name:username})
            .groupBy("month")
            .getRawMany()
    }

    public async getTagCount(username){

        return await this.articleRepository.createQueryBuilder("article")
            .select("article.tag","tag")
            .addSelect("count(*)","num")
            .where("article.author = :name",{name:username})
            .groupBy("tag")
            .getRawMany()

    }
    public async getAllArticle(){
        return await this.articleRepository.createQueryBuilder("article")
            .select("article")
            .where("article.id > 0 ")
            .getRawMany() //findAll
    }

    public async deleteArticle(id){
        const  ar = await this.articleRepository.findOne({
            id
        },{relations:["KeyWords"]})

        if(ar === undefined) return

        for(let word of ar.KeyWords){
            let wd  = await this.keyWordRepository.findOne(word.id,{relations:["articles"]})
            wd.articles = wd.articles.filter(item => item.id !== id)
            await this.connection.manager.save(wd)
        }
        ar.KeyWords = []
        await this.connection.manager.save(ar)
        await this.articleRepository.delete(ar.id)
    }

    public async getLastArticle(username){

        return await this.articleRepository.find({
            select:["id","title"],
            where:{
                lastFixedDate:Between(new Date(new Date().getTime() - 7000 * 24 * 60 * 60 ),new Date())
            }
        })
    }
}