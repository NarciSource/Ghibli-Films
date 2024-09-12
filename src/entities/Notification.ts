import { Field, Int, ObjectType } from 'type-graphql';
import {
    Entity,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Notification extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({ type: 'varchar', length: 255, comment: 'Notification message' })
    text: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;

    @Field()
    @Column()
    userId!: number;

    @ManyToOne(() => User, (user) => user.notifications, { onDelete: 'CASCADE' })
    user: User;
}
