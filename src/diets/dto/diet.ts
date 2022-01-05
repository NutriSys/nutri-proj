//createDietDto
export class CreateDietDto {
    name: string;
    description: string;
    cals: string;
}

//updateDietDto
export class UpdateDietDto {
    id?: number;
    name: string;
    description: string;
    cals: string;
}
