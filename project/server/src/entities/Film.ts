import { Field, Int, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Director } from './Director';

@ObjectType()
@Entity()
export class Film extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int, { description: '영화 고유 아이디' })
    id: number;

    @Field({ description: '영화 제목' })
    @Column({ comment: '영화 제목' })
    title: string;

    @Field({ nullable: true, description: '영화 부제목' })
    @Column({ comment: '영화 부제목' })
    subtitle?: string;

    @Field({ description: '영화 장르' })
    @Column({ comment: '영화 장르' })
    genre: string;

    @Field({ description: '영화 러닝 타임, minute' })
    @Column({ comment: '영화 러닝 타임, minute' })
    runningTime: number; // number 기본은 float

    @Field({ description: '영화 줄거리 및 설명' })
    @Column({ comment: '영화 줄거리 및 설명' })
    description: string;

    @Field(() => Int, { description: '제작자 고유 아이디' })
    @Column({ comment: '제작자 고유 ID' })
    directorId: number;

    @OneToOne(() => Director)
    @JoinColumn({ name: 'directorId' })
    director: Director;

    @Field({ description: '포스터 이미지 URL' })
    @Column({ comment: '포스터 이미지 URL' })
    posterImg: string;

    @Field({ description: '개봉일' })
    @Column({ type: 'date', comment: '개봉일' })
    releaseDate: string;
}

// --SDL--
// type Film {
//     id: Int!
//     title: String
//     subtitle: String
//     genre: String!
//     runningTime: Float!
//     description: String!
//     directorId: Int!
//     posterImg: String!
//     releaseDate: String
// }
