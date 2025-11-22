import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    RelationId,
    UpdateDateColumn,
} from 'typeorm';

import { User } from './User';
import { Cut } from './Cut';

@ObjectType({ description: '감상평' })
@Entity()
export class CutReview extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int, { description: '감상평 고유 아이디' })
    id: number;

    @Field({ description: '감상평 내용' })
    @Column({ comment: '감상평 내용' })
    contents: string;

    @ManyToOne(
        () => Cut,
        (cut) => cut.cutReviews,
    )
    @Field(() => Cut, { description: '명장면' })
    cut: Cut;

    @Field(() => Int, { description: '명장면 번호' })
    @Column({ comment: '명장면 번호' })
    @RelationId((cutReview: CutReview) => cutReview.cut)
    cutId: number;

    @Field(() => User, { description: '유저' })
    @ManyToOne(
        () => User,
        (user) => user.cutReviews,
    )
    user: User;

    @Column({ comment: '유저 아이디' })
    @RelationId((cutReview: CutReview) => cutReview.user)
    userId: number;

    @Field(() => String, { description: '생성 일자' })
    @CreateDateColumn({ comment: '생성 일자' })
    createdAt: Date;

    @Field(() => String, { description: '수정 일자' })
    @UpdateDateColumn({ comment: '수정 일자' })
    updatedAt: Date;
}
