import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { CutReview } from './CutReview';
import { CutVote } from './CutVote';
import { Notification } from './Notification';

@ObjectType({ description: '유저' })
@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int, { description: '식별자' })
    id!: number;

    @Column({ default: false, comment: '관리자' })
    @Field({ description: '관리자' })
    isAdmin: boolean = false;

    @Column({ unique: true, comment: '유저 이름' })
    @Field({ description: '유저 이름' })
    username: string;

    @Column({ unique: true, comment: '유저 이름' })
    @Field({ description: '유저 이메일' })
    email: string;

    @Column({ comment: '유저 비밀번호' })
    password: string;

    @Column({ comment: '유저 프로필 사진 경로', nullable: true })
    @Field({ description: '유저 프로필 사진 경로', nullable: true })
    profileImage: string;

    @CreateDateColumn({ comment: '생성일자' })
    @Field(() => String, { description: '생성일자' })
    createdAt: Date;

    @UpdateDateColumn({ comment: '수정일자' })
    @Field(() => String, { description: '수정일자' })
    updatedAt: Date;

    @OneToMany(
        () => CutVote,
        (cutVote) => cutVote.user,
    )
    @Field(() => [CutVote], { description: '좋아요' })
    cutVotes: CutVote[];

    @OneToMany(
        () => CutReview,
        (cutReview) => cutReview.user,
    )
    @Field(() => [CutReview], { description: '감상평' })
    cutReviews: CutReview[];

    @OneToMany(
        () => Notification,
        (notifications) => notifications.user,
    )
    @Field(() => [Notification], { description: '알림' })
    notifications: Notification[];
}
