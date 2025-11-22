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
    @Field(() => Int, { description: '알림 고유 아이디' })
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String, { description: '알림 메시지' })
    @Column({ type: 'varchar', length: 255, comment: 'Notification message' })
    text: string;

    @Field(() => String, { description: '작성 날짜' })
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String, { description: '수정 날짜' })
    @UpdateDateColumn()
    updatedAt: Date;

    @RelationId((notification: Notification) => notification.user)
    @Column({ comment: '유저 아이디' })
    userId!: number;

    @Field(() => User, { description: '유저' })
    @ManyToOne(
        () => User,
        (user) => user.notifications,
        { onDelete: 'CASCADE' },
    )
    user: User;
}
