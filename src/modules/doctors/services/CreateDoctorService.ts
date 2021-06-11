import Doctors from '../infra/typeorm/entities/doctors';
import IDoctorsRepository from '../repositories/IDoctorsRepository';
import { injectable, inject } from 'tsyringe';


interface IRequest {
	name: string;
	crm: string;
	phone: string;
	mobile_phone: string;
	zip_code: string;
  specialty_id: string;
	}

@injectable()
class CreateDoctorService {
  constructor(
    @inject('DoctorsRepository')
    private doctorsRepository: IDoctorsRepository,
    ){}

	public async execute({
    name,
    crm,
    phone,
    mobile_phone,
    zip_code,
    specialty_id,
  }: IRequest): Promise<Doctors> {

		const doctors = await this.doctorsRepository.create({
			name,
			crm,
			phone,
			mobile_phone,
			zip_code,
			specialty_id,
		});

		return doctors;
	}
}
export default CreateDoctorService;
