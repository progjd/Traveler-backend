import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	CreateDateColumn,
	OneToMany,
} from 'typeorm';
import Doctor from '@modules/doctors/infra/typeorm/entities/doctors';

@Entity('specialties')
class Specialties {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@OneToMany(() => Doctor, doctors => doctors.specialty)
	doctor: Doctor;

	@CreateDateColumn('')
  created_at: Date;

  @UpdateDateColumn('')
  updated_at: Date;

}
export default Specialties;
