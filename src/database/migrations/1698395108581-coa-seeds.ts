import { MigrationInterface, QueryRunner } from 'typeorm';
import { coaData } from '../data/coa.data';

const tableName = 'chart-of-accounts';

export class CoaSeeds1698395108581 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    let query = `INSERT INTO "${tableName}" ("id", "account", "isAccount", "baseName", "counter", "namespace", "code") VALUES `;
    for (const coa of coaData) {
      query += '(';
      query += `${coa.id}, `;
      query += `'${coa.account}', `;
      query += `${coa.isAccount}, `;
      if (coa.baseName) {
        query += `'${coa.baseName}', `;
      } else {
        query += 'NULL, ';
      }
      query += `${coa.counter || 'NULL'}, `;
      query += `'${coa.namespace}', `;
      if (coa.code) {
        query += `'${coa.code}' `;
      } else {
        query += 'NULL';
      }
      query += '),';
    }
    query = query.substring(0, query.length - 1);
    query += ';';
    console.log(
      '🚀 ~ file: 1698388960417-coa-seeds.ts:23 ~ CoaSeeds1698388960417 ~ up ~ query:',
      query,
    );
    await queryRunner.query(query);
    await queryRunner.commitTransaction();
    await queryRunner.query(
      `ALTER SEQUENCE "charts-of-accounts_id_seq" RESTART WITH ${
        coaData.length + 1
      };`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE "${tableName}";`);
    await queryRunner.query(
      `ALTER SEQUENCE "charts-of-accounts_id_seq" RESTART WITH 1;`,
    );
  }
}
