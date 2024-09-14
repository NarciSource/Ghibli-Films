import { ObjectType, Field, Int } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Director extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { description: '감독 이름' })
    @Column({ comment: '감독 이름' })
    name: string;
}
