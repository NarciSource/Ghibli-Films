import { IsString } from 'class-validator';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CreateOrUpdateCutReviewInput {
    @Field(() => Int, { description: '명장면 번호' })
    cutId: number;

    @Field(() => String, { description: '감상평 내용' })
    @IsString()
    contents: string;
}
