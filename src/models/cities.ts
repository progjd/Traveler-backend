import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cities')
class Cities {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	image: string;

	@Column()
	description: string;
}
export default Cities;
