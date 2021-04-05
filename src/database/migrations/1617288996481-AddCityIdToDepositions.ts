import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class AddCityIdToDepositions1617288996481 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'depositions',
			new TableColumn({
				name: 'city_id',
				type: 'uuid',
				isNullable: true,
			}),
		);
		await queryRunner.createForeignKey(
			'depositions',
			new TableForeignKey({
				columnNames: ['city_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'cities',
				name: 'DepositionCitie',
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('depositions', 'DepositionCitie');
		await queryRunner.dropColumn('depositions', 'city_id');
	}
}
