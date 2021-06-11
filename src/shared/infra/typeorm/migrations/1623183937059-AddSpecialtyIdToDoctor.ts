import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export default class AddSpecialtyIdToDoctor1623183937059 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        'doctor',
        new TableColumn({
          name: 'specialty_id',
          type: 'uuid',
          isNullable: true,
        }),
      );
      await queryRunner.createForeignKey(
        'doctor',
        new TableForeignKey({
          columnNames: ['specialty_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'specialties',
          name: 'doctor_specialties',
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('doctor', 'doctor_specialties');
      await queryRunner.dropColumn('doctor', 'specialty_id');
    }

}
