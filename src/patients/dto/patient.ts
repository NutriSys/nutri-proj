import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreatePatientDto {
  @IsNotEmpty()
  namePatient: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  DOB: string;

  @IsNotEmpty()
  lastApp: string;

  @IsNotEmpty()
  phoneNum: string;

  anotations: string;
}
