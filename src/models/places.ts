import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import Addresses from './addresses';
import Categories from './categories';

@Entity('places')
class Places {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	image: string;

	@Column()
	description: string;

	@ManyToOne(() => Categories, categories => categories.places, { eager: true })
	@JoinColumn({ name: 'category_id' })
	category: Categories;

	@Column()
	category_id: string;

	@ManyToOne(() => Addresses, addresses => addresses.places, { eager: true })
	@JoinColumn({ name: 'address_id' })
	address: Addresses;

	@Column()
	address_id: string;
}
export default Places;
