import { getRepository, Repository} from 'typeorm';
import IDoctorsRepository from '@modules/doctors/repositories/IDoctorsRepository';
import ICreateDoctorDTO from '@modules/doctors/dtos/ICreateDoctorDTO';
import Doctor from '../entities/doctors';


class DoctorRepository implements IDoctorsRepository{
  private ormRepository: Repository<Doctor>
  constructor() {
    this.ormRepository = getRepository(Doctor);
  }

  public async findAll(): Promise<Doctor[]> {
    const doctor = await this.ormRepository.find({
      order: {
        created_at: 'ASC',
      }
    });

    return doctor;
  }

  public async findById(id: string): Promise<Doctor | undefined> {
    const doctor = await this.ormRepository.findOne(id);

    return doctor;
  }


  public async create({specialty_id, name, crm, phone, mobile_phone, zip_code}: ICreateDoctorDTO): Promise<Doctor>{
    const doctor = this.ormRepository.create({
      name,
      crm,
      phone,
      mobile_phone,
      zip_code,
      specialty_id,
    });
    await this.ormRepository.save(doctor);
    return doctor;
  }

  public async save(doctor: Doctor): Promise<Doctor> {
    return this.ormRepository.save(doctor);
  }

  public async delete(id: string): Promise<void> {
    const doctor = await this.ormRepository.findOne(id);
    if(doctor){
     this.ormRepository.save(doctor);
    }
  }
}
export default DoctorRepository;
