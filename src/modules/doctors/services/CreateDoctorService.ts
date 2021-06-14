import Doctor from '../infra/typeorm/entities/doctors';
import IDoctorRepository from '../repositories/IDoctorRepository';
import ICreateDoctorDTO from '@modules/doctors/dtos/ICreateDoctorDTO';
import { inject, injectable} from 'tsyringe';
import AppError from '@shared/errors/AppError';
import axios from 'axios';



@injectable()
class CreateDoctorService {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
    ){}

	public async execute({
    name,
    crm,
    phone,
    mobile_phone,
    zip_code,
    specialty_id,
  }: ICreateDoctorDTO): Promise<Doctor> {

		const doctors = await this.doctorRepository.create({
			name,
			crm,
			phone,
			mobile_phone,
			zip_code,
			specialty_id,
		});
    const { data } = await axios(`https://viacep.com.br/ws/${zip_code}/json/`)
    const ceps = Object.assign(doctors, data);
		return ceps;
	}
}
export default CreateDoctorService;
