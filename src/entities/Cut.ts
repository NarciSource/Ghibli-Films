import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Film } from './Film';

@ObjectType()
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
    filmId: number;

    @ManyToOne(() => Film, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'filmId' })
    film: Film;
}
