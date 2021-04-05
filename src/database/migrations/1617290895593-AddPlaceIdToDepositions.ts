import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export default class AddPlaceIdToDepositions1617290895593
	implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'depositions',
			new TableColumn({
				name: 'place_id',
				type: 'uuid',
				isNullable: true,
			}),
		);
		await queryRunner.createForeignKey(
			'depositions',
			new TableForeignKey({
				columnNames: ['place_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'places',
				name: 'DepositionPlace',
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('depositions', 'DepositionPlace');
		await queryRunner.dropColumn('depositions', 'place_id');
	}
}
