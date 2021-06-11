import { injectable, inject } from 'tsyringe';

import IDoctorsRepository from '../repositories/IDoctorsRepository';
import Doctor from '../infra/typeorm/entities/doctors';

@injectable()
class ShowAllDoctorsService {
  constructor(
    @inject('DoctorsRepository')
    private doctorsRepository: IDoctorsRepository,
  ) {}

  public async execute(): Promise<Doctor[]> {
    const doctor = await this.doctorsRepository.findAll();

    return doctor;
  }
}

export default ShowAllDoctorsService;
