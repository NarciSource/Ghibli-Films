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

    @ManyToOne(
        () => User,
        (user) => user.cutVotes,
    )
    @Field(() => User, { description: '유저' })
    user: User;

    @PrimaryColumn({ comment: '명장면 아이디' })
    @RelationId((vote: CutVote) => vote.cut)
    cutId: number;

    @ManyToOne(
        () => Cut,
        (cut) => cut.cutVotes,
    )
    @Field(() => Cut, { description: '명장면' })
    cut: Cut;
}
