import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Cut } from './Cut';
import { User } from './User';

@ObjectType({ description: '좋아요' })
@Entity()
export class CutVote extends BaseEntity {
    @PrimaryColumn()
    @Field(() => Int)
    userId: number;

    @PrimaryColumn()
    @Field(() => Int)
    cutId: number;

    @Field(() => Cut)
    cut: Cut;

    @ManyToOne(() => User, (user) => user.cutVotes)
    @Field(() => User)
    user: User;
}
