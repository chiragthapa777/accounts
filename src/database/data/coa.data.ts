import { ChartOfAccountEntity } from 'src/modules/chart-of-account/entities/chart-of-account.entity';

export const coaData: ChartOfAccountEntity[] = [
  {
    id: 1,
    account: 'Assets',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/',
  },
  {
    id: 2,
    account: 'Liability',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/',
  },
  {
    id: 3,
    account: 'Equity',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/',
  },
  {
    id: 4,
    account: 'Income',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/',
  },
  {
    id: 5,
    account: 'Expenses',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/',
  },
  {
    id: 6,
    account: 'Current Assets',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/',
    baseName: 'CA',
    counter: 1,
  },
  {
    id: 7,
    account: 'Non Current Assets',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/',
    baseName: 'NCA',
    counter: 1,
  },
  {
    id: 8,
    account: 'Cash And Bank Balance',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/6/',
  },
  {
    id: 9,
    account: 'Account Receivables',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/6/',
  },
  {
    id: 10,
    account: 'Deposits (Assets)',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/6/',
  },
  {
    id: 11,
    account: 'Loans and Advance (Assets)',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/6/',
  },
  {
    id: 12,
    account: 'Property, Plant and Equipement',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/7/',
  },
  {
    id: 13,
    account: 'Long Term Investment',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/1/7/',
  },
  {
    id: 14,
    account: 'Current Liability',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/2/',
    counter: 2,
    baseName: 'CL',
  },
  {
    id: 15,
    account: 'Duties and Taxes Payable',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/2/14/',
  },
  {
    id: 16,
    account: 'Value Added Tax',
    isAccount: true,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/2/14/15/',
    code: 'CL-000001',
  },
  {
    id: 17,
    account: 'Account Payable',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/2/14/',
  },
  {
    id: 18,
    account: 'Loans and Borrowing - Short Term',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/2/14/',
  },
  {
    id: 19,
    account: 'Non Current Liability',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/2/',
    counter: 1,
    baseName: 'NCL',
  },
  {
    id: 20,
    account: 'Loans and Borrowing - Long Term',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/2/19/',
  },
  {
    id: 21,
    account: 'Capital',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/3/',
    counter: 2,
    baseName: 'C',
  },
  {
    id: 22,
    account: 'Share Capital',
    isAccount: true,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/3/21/',
    code: 'C-000001',
  },
  {
    id: 23,
    account: 'Reserve and Surplus',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/3/',
    counter: 2,
    baseName: 'RS',
  },
  {
    id: 24,
    account: 'Retained Earning',
    isAccount: true,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/3/23/',
    code: 'RS-000001',
  },
  {
    id: 25,
    account: 'Direct Income',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/4/',
    counter: 3,
    baseName: 'DI',
  },
  {
    id: 26,
    account: 'Indirect Income',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/4/',
    counter: 1,
    baseName: 'II',
  },
  {
    id: 27,
    account: 'Sales',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/4/25/',
  },
  {
    id: 28,
    account: 'Sales of Goods',
    isAccount: true,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/4/25/27/',
    code: 'DI-000001',
  },
  {
    id: 29,
    account: 'Sales of Service',
    isAccount: true,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/4/25/27/',
    code: 'DI-000002',
  },
  {
    id: 30,
    account: 'Direct Expenses',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/5/',
    counter: 3,
    baseName: 'DE',
  },
  {
    id: 31,
    account: 'Indirect Expenses',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/5/',
    counter: 1,
    baseName: 'IE',
  },
  {
    id: 32,
    account: 'Purchase',
    isAccount: false,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/5/30/',
  },
  {
    id: 33,
    account: 'Expense On Goods',
    isAccount: true,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/5/30/32/',
    code: 'DE-000001',
  },
  {
    id: 34,
    account: 'Expense On Service',
    isAccount: true,
    lockedByAdmin: true,
    lockedBySystem: true,
    namespace: '/5/30/32/',
    code: 'DE-000002',
  },
];

/***
 import { MigrationInterface, QueryRunner } from 'typeorm';
import { coaData } from '../data/coa.data';

const tableName = 'chart-of-accounts';

export class CoaSeeds1698388960417 implements MigrationInterface {
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

 */
