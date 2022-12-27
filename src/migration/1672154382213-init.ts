import { MigrationInterface, QueryRunner } from "typeorm";

export class init1672154382213 implements MigrationInterface {
    name = 'init1672154382213'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "patient" ("idPatient" SERIAL NOT NULL, "namePatient" character varying NOT NULL, "email" character varying NOT NULL, "DOB" character varying NOT NULL, "lastApp" character varying NOT NULL, "phoneNum" character varying NOT NULL, "anotations" character varying NOT NULL, CONSTRAINT "PK_e9f6699da62cd762419f11ae101" PRIMARY KEY ("idPatient"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "patient"`);
    }

}
