import { getRepository, Repository} from 'typeorm';
import ISpecialtiesRepository from '@modules/specialties/repositories/ISpecialtiesRepository';
import ICreateSpecialtyDTO from '@modules/specialties/dtos/ICreateSpecialtyDTO';
import Specialty from '../entities/specialties';


class SpecialtyRepository implements ISpecialtiesRepository{
  private ormRepository: Repository<Specialty>
  constructor() {
    this.ormRepository = getRepository(Specialty);
  }

  public async findAll(): Promise<Specialty[]> {
    const specialty = await this.ormRepository.find({
      order: {
        created_at: 'ASC',
      }
    });

    return specialty;
  }

  public async findById(id: string): Promise<Specialty | undefined> {
    const specialty = await this.ormRepository.findOne(id);

    return specialty;
  }
  public async create({name}: ICreateSpecialtyDTO): Promise<Specialty>{
      const specialty = this.ormRepository.create({
      name,
     });
      await this.ormRepository.save(specialty);
      return specialty;
  }

  public async save(specialty: Specialty): Promise<Specialty> {
    return this.ormRepository.save(specialty);
  }

  public async delete(id: string): Promise<void> {
    const specialty = await this.ormRepository.findOne(id);
    if(specialty){
     this.ormRepository.save(specialty);
    }
  }
}
export default SpecialtyRepository;
