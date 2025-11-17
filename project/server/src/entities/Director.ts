import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: '감독' })
@Entity()
export class Director extends BaseEntity {
    @Field(() => Int, { description: '감독 고유 아이디' })
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String, { description: '감독 이름' })
    @Column({ comment: '감독 이름' })
    name: string;
}
