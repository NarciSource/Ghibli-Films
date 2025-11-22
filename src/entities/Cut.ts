import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    RelationId,
} from 'typeorm';

import { CutReview } from './CutReview';
import { CutVote } from './CutVote';
import { Film } from './Film';

@ObjectType({ description: '명장면' })
@Entity()
export class Cut extends BaseEntity {
    @Field(() => Int, { description: '명장면 고유 아이디' })
    @PrimaryGeneratedColumn()
    id: number;

    @Field({ description: '명장면 사진 주소' })
    @Column({ comment: '명장면 사진 주소' })
    src: string;

    @Field(() => Int, { description: '영화 아이디' })
    @Column({ comment: '영화 아이디' })
    @RelationId((cut: Cut) => cut.film)
    filmId: number;

    @ManyToOne(() => Film, { onDelete: 'CASCADE' })
    @Field(() => Film, { description: '영화' })
    film: Film;

    @OneToMany(
        () => CutReview,
        (cutReview) => cutReview.cut,
    )
    @Field(() => CutReview, { description: '감상평' })
    cutReviews: CutReview[];

    @OneToMany(
        () => CutVote,
        (cutVote) => cutVote.user,
    )
    @Field(() => Film, { description: '좋아요' })
    cutVotes: CutVote[];
}
