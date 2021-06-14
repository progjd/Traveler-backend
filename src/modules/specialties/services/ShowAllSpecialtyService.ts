import { injectable, inject } from 'tsyringe';

import ISpecialtiesRepository from '../repositories/ISpecialtiesRepository';
import Specialty from '../infra/typeorm/entities/specialties';

@injectable()
class ShowAllSpecialtyService {
  constructor(
    @inject('SpecialtyRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ) {}

  public async execute(): Promise<Specialty[]> {
    const specialty = await this.specialtiesRepository.findAll();

    return specialty;
  }
}

export default ShowAllSpecialtyService;
