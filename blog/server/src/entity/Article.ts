import {Entity, Column, PrimaryGeneratedColumn, ManyToMany} from "typeorm";
import KeyWord from "./KeyWord";

@Entity()
export default class Article {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    profile: string

    @Column()
    lastFixedDate: Date

    @Column()
    author: string

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    tag: string

    @Column({default:0})
    read: number
    @ManyToMany(type => KeyWord,keyword=>keyword.articles)
    KeyWords:KeyWord[]

}