import { MigrationInterface, QueryRunner } from 'typeorm';

export class poatients1671953513664 implements MigrationInterface {
  name = 'poatients1671953513664';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "diet" DROP COLUMN "cals"`);
    await queryRunner.query(`ALTER TABLE "diet" ADD "cals" integer NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "diet" DROP COLUMN "cals"`);
    await queryRunner.query(
      `ALTER TABLE "diet" ADD "cals" double precision NOT NULL DEFAULT '0'`,
    );
  }
}
