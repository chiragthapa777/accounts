import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoaTable1698395087403 implements MigrationInterface {
  name = 'CoaTable1698395087403';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "chart-of-accounts" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "account" character varying NOT NULL, "code" character varying, "isAccount" boolean NOT NULL DEFAULT true, "lockedBySystem" boolean NOT NULL DEFAULT false, "lockedByAdmin" boolean NOT NULL DEFAULT false, "baseName" character varying, "counter" integer DEFAULT '0', "namespace" character varying NOT NULL, CONSTRAINT "UQ_8e77acf98baba86060809d60edb" UNIQUE ("account"), CONSTRAINT "UQ_1782fd97f39f42c2c46c70a83fd" UNIQUE ("code"), CONSTRAINT "UQ_a581da288d86992e8bc5fd435ee" UNIQUE ("baseName"), CONSTRAINT "PK_c9344ed9f84e809c9b1fdf62328" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "chart-of-accounts"`);
  }
}
