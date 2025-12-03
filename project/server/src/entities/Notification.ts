import { Field, Int, ObjectType } from 'type-graphql';
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    RelationId,
    UpdateDateColumn,
} from 'typeorm';

import { User } from './User';

@ObjectType({ description: '알림' })
@Entity()
export class Notification extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(() => Int, { description: '알림 고유 아이디' })
    id!: number;

    @Column({ type: 'varchar', length: 255, comment: 'Notification message' })
    @Field(() => String, { description: '알림 메시지' })
    text: string;

    @CreateDateColumn()
    @Field(() => String, { description: '작성 날짜' })
    createdAt: Date;

    @UpdateDateColumn()
    @Field(() => String, { description: '수정 날짜' })
    updatedAt: Date;

    @RelationId((notification: Notification) => notification.user)
    @Column({ comment: '유저 아이디' })
    userId!: number;

    @ManyToOne(
        () => User,
        (user) => user.notifications,
        { onDelete: 'CASCADE' },
    )
    @Field(() => User, { description: '유저' })
    user: User;
}
