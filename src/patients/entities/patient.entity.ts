import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  idPatient: number;

  @Column()
  namePatient: string;

  @Column()
  email: string;

  @Column()
  DOB: string;

  @Column()
  lastApp: string;

  @Column()
  phoneNum: string;

  @Column()
  anotations: string;
}
