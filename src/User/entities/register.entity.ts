import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class register {
  @PrimaryGeneratedColumn()
  fname: string;

  @Column()
  lname: string;

  @Column()
  email: string;

  @Column()
  contact: string;

  @Column()
  password: string;

  @Column()
  securityQ: string;

  @Column()
  securityA: string;
}
