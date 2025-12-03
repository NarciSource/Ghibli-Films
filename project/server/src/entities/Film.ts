import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
    RelationId,
} from 'typeorm';

import { Director } from './Director';

@ObjectType({ description: '영화' })
@Entity()
export class Film extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int, { description: '영화 고유 아이디' })
    id: number;

    @Column({ comment: '영화 제목' })
    @Field({ description: '영화 제목' })
    title: string;

    @Column({ comment: '영화 부제목' })
    @Field({ nullable: true, description: '영화 부제목' })
    subtitle?: string;

    @Column({ comment: '영화 장르' })
    @Field({ description: '영화 장르' })
    genre: string;

    @Column({ comment: '영화 러닝 타임, minute' })
    @Field({ description: '영화 러닝 타임, minute' })
    runningTime: number; // number 기본은 float

    @Column({ comment: '영화 줄거리 및 설명' })
    @Field({ description: '영화 줄거리 및 설명' })
    description: string;

    @Column({ comment: '제작자 고유 ID' })
    @RelationId((film: Film) => film.director)
    directorId: number;

    @OneToOne(() => Director)
    @JoinColumn({ name: 'directorId' })
    @Field(() => Director, { description: '제작자' })
    director: Director;

    @Column({ comment: '포스터 이미지 URL' })
    @Field({ description: '포스터 이미지 URL' })
    posterImg: string;

    @Column({ type: 'date', comment: '개봉일' })
    @Field({ description: '개봉일' })
    releaseDate: string;
}
