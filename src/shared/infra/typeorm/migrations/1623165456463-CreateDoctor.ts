import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateDoctor1623165456463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'doctor',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },

            {
              name: 'name',
              type: 'varchar',
            },
            {
              name: 'crm',
              type: 'varchar',
            },
            {
              name: 'phone',
              type: 'varchar',
            },
            {
              name: 'mobile_phone',
              type: 'varchar',
            },
            {
              name: 'zip_code',
              type: 'varchar',

            },

            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        }),
      );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable('doctor');
    }

}
