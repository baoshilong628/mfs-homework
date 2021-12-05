import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

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

}