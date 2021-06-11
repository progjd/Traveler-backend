import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IDoctorsRepository from '../repositories/IDoctorsRepository';
import Doctor from '../infra/typeorm/entities/doctors';

interface Request {
  doctor_id: string;
}

@injectable()
class ShowDoctorService {
  constructor(
    @inject('DoctorsRepository')
    private doctorsRepository: IDoctorsRepository,
  ) {}

  public async execute({ doctor_id }: Request): Promise<Doctor> {
    const doctor = await this.doctorsRepository.findById(doctor_id);

    if (!doctor) {
      throw new AppError('Médico não encontrado');
    }

    return doctor;
  }
}

export default ShowDoctorService;
