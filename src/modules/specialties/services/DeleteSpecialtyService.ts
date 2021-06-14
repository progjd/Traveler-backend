import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ISpecialtiesRepository from '../repositories/ISpecialtiesRepository';

interface Request {
  specialty_id: string;
}

@injectable()
class DeleteSpecialtyService {

  constructor(
    @inject('SpecialtyRepository')
    private specialtiesRepository: ISpecialtiesRepository,
  ){}

	public async execute({specialty_id}: Request): Promise<void> {

		const specialties = await this.specialtiesRepository.findById(specialty_id);
		if (!specialties) {
			throw new AppError('specialties does not exists');
		}
		await this.specialtiesRepository.delete(specialty_id);
	}
}

export default DeleteSpecialtyService;

