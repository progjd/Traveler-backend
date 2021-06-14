import { Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn, ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    OneToMany,
       } from 'typeorm';
import Specialties from '@modules/specialties/infra/typeorm/entities/specialties';

@Entity('doctor')
class Doctor {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
  name: string;

  @ManyToOne(() => Specialties, specialties => specialties.doctor,  { eager: true })
	@JoinColumn({ name: 'specialty_id' })
	specialty: Specialties[];

  @Column()
  specialty_id: string;

	@Column()
	crm: string;

	@Column()
	phone: string;

  @Column()
	mobile_phone: string;

  @Column()
	zip_code: string;

  @CreateDateColumn('')
  created_at: Date;

  @UpdateDateColumn('')
  updated_at: Date;

}
export default Doctor;
