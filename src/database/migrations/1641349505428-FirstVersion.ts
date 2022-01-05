import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstVersion1641349505428 implements MigrationInterface {
  name = 'FirstVersion1641349505428';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "diet" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "cals" integer NOT NULL, CONSTRAINT "PK_f9d0f2b67d1c9bcaa6736f4cebd" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "diet"`);
  }
}
