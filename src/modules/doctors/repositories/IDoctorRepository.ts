import Doctor from '../infra/typeorm/entities/doctors';
import ICreateDoctorDTO from '../dtos/ICreateDoctorDTO';


export default interface IDoctorRepository{
  findById(id: string): Promise<Doctor | undefined>;
  findAll(): Promise<Doctor[]>;
  create(data: ICreateDoctorDTO): Promise<Doctor>;
  save(data: Doctor): Promise<Doctor>;
  delete(id: string): Promise<void>;
}
