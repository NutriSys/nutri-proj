//createDietDto
export class CreateDietDto {
  name: string;
  description: string;
  cals: number;
}

//updateDietDto
export class UpdateDietDto {
  id?: number;
  name: string;
  description: string;
  cals: number;
}
