import { Exclude, Transform } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Check,
  OneToMany,
} from 'typeorm';
import { Comment } from './comment.entity';

@Entity('users')
@Check(`"role" IN (1, 2)`)
@Check(`"status" IN (0, 1)`)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform((username) => username.value.toUpperCase())
  @Column({ type: 'varchar', length: 45 })
  username: string;

  @Column({ type: 'varchar', length: 45 })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 45 })
  password: string;

  @Column({ default: 2 })
  role: number;

  @Column({ default: 1 })
  status: number;

  @OneToMany(() => Comment, (comment) => comment.user)
  userComments: Comment[];
}
