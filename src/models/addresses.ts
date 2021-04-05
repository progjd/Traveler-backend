import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import Places from './places';

@Entity('addresses')
class Addresses {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	zip_code: string;

	@OneToMany(() => Places, places => places.address)
	places: Places;

	@Column()
	street: string;

	@Column()
	neighborhood: string;

	@Column()
	number: string;
}
export default Addresses;
