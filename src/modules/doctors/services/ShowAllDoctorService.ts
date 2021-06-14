import { injectable, inject } from 'tsyringe';

import IDoctorRepository from '../repositories/IDoctorRepository';
import Doctor from '../infra/typeorm/entities/doctors';

@injectable()
class ShowAllDoctorService {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  public async execute(): Promise<Doctor[]> {
    const doctor = await this.doctorRepository.findAll();

    return doctor;
  }
}

export default ShowAllDoctorService;
