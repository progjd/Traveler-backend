import {
	MigrationInterface,
	QueryRunner,
	TableColumn,
	TableForeignKey,
} from 'typeorm';

export class AddCategoryIdToPlaces1617068607543 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('places', 'category_id');
		await queryRunner.addColumn(
			'places',
			new TableColumn({
				name: 'category_id',
				type: 'uuid',
				isNullable: true,
			}),
		);
		await queryRunner.createForeignKey(
			'places',
			new TableForeignKey({
				columnNames: ['category_id'],
				referencedColumnNames: ['id'],
				referencedTableName: 'categories',
				name: 'PlaceCategory',
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
			}),
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropForeignKey('places', 'PlaceCategory');
		await queryRunner.dropColumn('places', 'category_id');
		await queryRunner.addColumn(
			'places',
			new TableColumn({
				name: 'category_id',
				type: 'varchar',
			}),
		);
	}
}
