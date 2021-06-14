import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IDoctorRepository from '../repositories/IDoctorRepository';

interface Request {
  doctor_id: string;
}

@injectable()
class DeleteDoctorService {

  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ){}
	public async execute({ doctor_id }: Request): Promise<void> {

    const doctor = await this.doctorRepository.findById(doctor_id);

    if (!doctor) {
      throw new AppError('Doctor does not exists');
    }

    await this.doctorRepository.delete(doctor_id);
  }
}

export default DeleteDoctorService;


