import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  UserName: string;

  @Column()
  Password: string;

  @Column({ default: false })
  isAdmin: boolean;
}
