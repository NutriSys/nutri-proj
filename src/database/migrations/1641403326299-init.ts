import {MigrationInterface, QueryRunner} from "typeorm";

export class init1641403326299 implements MigrationInterface {
    name = 'init1641403326299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diet" DROP COLUMN "cals"`);
        await queryRunner.query(`ALTER TABLE "diet" ADD "cals" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "diet" DROP COLUMN "cals"`);
        await queryRunner.query(`ALTER TABLE "diet" ADD "cals" character varying NOT NULL`);
    }

}
