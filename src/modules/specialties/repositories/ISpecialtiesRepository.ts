import Specialty from '../infra/typeorm/entities/specialties';
import ICreateSpecialtyDTO from '../dtos/ICreateSpecialtyDTO';


export default interface ISpecialtiesRepository{
  findById(id: string): Promise<Specialty | undefined>;
  findAll(): Promise<Specialty[]>;
  create(data: ICreateSpecialtyDTO): Promise<Specialty>;
  save(data: Specialty): Promise<Specialty>;
  delete(id: string): Promise<void>;

}
