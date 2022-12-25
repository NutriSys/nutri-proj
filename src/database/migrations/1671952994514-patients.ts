import { MigrationInterface, QueryRunner } from 'typeorm';

export class patients1671952994514 implements MigrationInterface {
  name = 'patients1671952994514';

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
