import KeyWord from "../entity/KeyWord";
import {Repository} from "typeorm";

export  default class KeyWordService{
    keyWordRepository: Repository<KeyWord>

    constructor(keyWordRepository:Repository<KeyWord>) {
        this.keyWordRepository = keyWordRepository
    }
    public async  addNewWord(word:string){
        const key =new KeyWord()
        key.word = word

        let item = await this.getKeyWord(word)

        if(item !== undefined){
            return ""
        }

       return await this.keyWordRepository.save(key)
    }
    public async getKeyWord(word:string){

        return await this.keyWordRepository.findOne({
            word
        })
    }

    public async getAllKeyWords(){

        return await this.keyWordRepository.find()
    }

    public async getKeyWordInfo(){

        return await this.keyWordRepository
            .createQueryBuilder("KeyWord")
            .leftJoin("KeyWord.articles","art")
            .select("KeyWord.word","word")
            .addSelect("count(art.id)","num")
            .groupBy("word")
            .addGroupBy("art.id")
            .getRawMany()
    }
}