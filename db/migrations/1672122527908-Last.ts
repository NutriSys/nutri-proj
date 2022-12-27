import { MigrationInterface, QueryRunner } from "typeorm";

export class Last1672122527908 implements MigrationInterface {
    name = 'Last1672122527908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "template" ("idTemplate" SERIAL NOT NULL, "nameTemplate" character varying NOT NULL, "anotations" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_c8ecf28fc0207741bdb95ad6c86" PRIMARY KEY ("idTemplate"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "template"`);
    }

}
