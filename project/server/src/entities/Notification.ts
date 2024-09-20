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

    @Field(() => Int, { description: '유저 아이디' })
    @Column()
    userId!: number;

    @ManyToOne(() => User, (user) => user.notifications, { onDelete: 'CASCADE' })
    user: User;
}
