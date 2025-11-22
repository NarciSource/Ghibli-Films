import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, ManyToOne, PrimaryColumn, RelationId } from 'typeorm';

import { Cut } from './Cut';
import { User } from './User';

@ObjectType({ description: '좋아요' })
@Entity()
export class CutVote extends BaseEntity {
    @PrimaryColumn({ comment: '유저 아이디' })
    @RelationId((vote: CutVote) => vote.user)
    userId: number;

    @PrimaryColumn({ comment: '명장면 아이디' })
    @RelationId((vote: CutVote) => vote.cut)
    cutId: number;

    @Field(() => Cut, { description: '명장면' })
    @ManyToOne(
        () => Cut,
        (cut) => cut.cutVotes,
    )
    cut: Cut;

    @ManyToOne(
        () => User,
        (user) => user.cutVotes,
    )
    @Field(() => User, { description: '유저' })
    user: User;
}
