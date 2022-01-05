import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Diet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cals: number;
}
