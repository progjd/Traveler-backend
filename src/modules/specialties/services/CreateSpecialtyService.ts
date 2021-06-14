import Specialty from '../infra/typeorm/entities/specialties';
import ISpecialtiesRepository from '../repositories/ISpecialtiesRepository';
import { inject, injectable } from 'tsyringe';



interface IRequest {
	name: string;
	}

@injectable()
class CreateSpecialtyService {
  constructor(
    @inject('SpecialtyRepository')
    private specialtiesRepository: ISpecialtiesRepository,
    ){}


	public async execute({ name }: IRequest): Promise<Specialty> {

		const specialties = await this.specialtiesRepository.create({
			name,
		});

		return specialties;
	}
}
export default CreateSpecialtyService;
