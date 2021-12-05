import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import Article from "./Article";

@Entity()
export default class KeyWord{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    word: string

    @ManyToMany(type=>Article,article=>article.KeyWords,{

    })
    @JoinTable()
    articles: Article[]
}