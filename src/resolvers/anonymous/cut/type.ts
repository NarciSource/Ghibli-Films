import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
export class PaginationArgs {
    @Field(() => Int, { defaultValue: 2 })
    take: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => Int)
    cutId: number;
}
