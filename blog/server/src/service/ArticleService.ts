import {Repository} from "typeorm";
import Article from "../entity/Article";

export default class ArticleService{

    articleRepository: Repository<Article>;

    constructor(articleRepository:Repository<Article>) {
        this.articleRepository = articleRepository
    }
    public async getProfile( {name,month,tag,page,size} ){

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
        query.limit(size)
            .offset(size * page)

        return query.getRawMany()
    }
    public async addNewArticle(article:Article){
        const  ar = await this.articleRepository.findOne({
            id: article.id
        })
        if(ar != undefined)
            await this.articleRepository.delete(ar)
        return await this.articleRepository.save(article)

    }
    public async getArticleById(username,articleId){

        return await this.articleRepository.findOne({
            id:articleId,
            author:username
        })
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
        })
        if(ar != undefined)
            await this.articleRepository.delete(ar)
    }
}