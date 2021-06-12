import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IDoctorsRepository from '../repositories/IDoctorsRepository';

interface Request {
  doctor_id: string;
}

@injectable()
class DeleteDoctorService {

  constructor(
    @inject('DoctorsRepository')
    private doctorsRepository: IDoctorsRepository,
  ){}
	public async execute({doctor_id}: Request): Promise<void> {

		const doctors = await this.doctorsRepository.findById(doctor_id);
		if (!doctors) {
			throw new AppError('doctors does not exists');
		}
		await this.doctorsRepository.delete(doctor_id);
	}
}

export default DeleteDoctorService;
