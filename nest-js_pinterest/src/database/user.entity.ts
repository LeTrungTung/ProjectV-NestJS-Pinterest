import { Entity, PrimaryGeneratedColumn, Column, Check } from 'typeorm';

@Entity('users')
@Check(`"role" IN (1, 2)`)
@Check(`"status" IN (0, 1)`)
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  username: string;

  @Column({ type: 'varchar', length: 45 })
  email: string;

  @Column({ type: 'varchar', length: 45 })
  password: string;

  @Column({ default: 2 })
  role: number;

  @Column({ default: 1 })
  status: number;
}
