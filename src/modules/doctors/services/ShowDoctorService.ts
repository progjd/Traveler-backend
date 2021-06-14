import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IDoctorRepository from '../repositories/IDoctorRepository';
import Doctor from '../infra/typeorm/entities/doctors';

interface Request {
  doctor_id: string;
}

@injectable()
class ShowDoctorService {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ) {}

  public async execute({ doctor_id }: Request): Promise<Doctor> {
    const doctor = await this.doctorRepository.findById(doctor_id);

    if (!doctor) {
      throw new AppError('Médico não encontrado');
    }

    return doctor;
  }
}

export default ShowDoctorService;
