import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class AddAddressIdToPlaces1617069635096 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('places', 'address_id');
		await queryRunner.addColumn(
			'places',
			new TableColumn({
				name: 'address_id',
				type: 'uuid',
				isNullable: true,
			}),
		);
		await queryRunner.createForeignKey(
			'places',
			new TableForeignKey({
				columnNames: ['address_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'addresses',
				name: 'PlaceAddress',
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('places', 'PlaceAddress');
		await queryRunner.dropColumn('places', 'address_id');
		await queryRunner.addColumn(
			'places',
			new TableColumn({
				name: 'address_id',
				type: 'varchar',
			}),
		);
	}
}
