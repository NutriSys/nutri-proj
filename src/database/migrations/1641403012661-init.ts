import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1641403012661 implements MigrationInterface {
  name = 'init1641403012661';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "diet" DROP COLUMN "cals"`);
    await queryRunner.query(`ALTER TABLE "diet" ADD "cals" integer NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "diet" DROP COLUMN "cals"`);
    await queryRunner.query(
      `ALTER TABLE "diet" ADD "cals" character varying NOT NULL`,
    );
  }
}
