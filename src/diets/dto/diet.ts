import { IsNotEmpty } from 'class-validator';

export class CreateDietDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  cals: number;
}

//updateDietDto
export class UpdateDietDto {
  id?: number;
  name: string;
  description: string;
  cals: number;
}
