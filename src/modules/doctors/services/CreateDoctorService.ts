import Doctors from '../infra/typeorm/entities/doctors';
import IDoctorsRepository from '../repositories/IDoctorsRepository';
import ICreateDoctorDTO from '@modules/doctors/dtos/ICreateDoctorDTO'
import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import axios from 'axios';



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
  }: ICreateDoctorDTO): Promise<Doctors> {
    if(name.length > 120){
      throw new AppError('Name  must contain characters')
    }if(crm.toString().length > 7){
      throw new AppError('Crm  must contain characters')
    }if(typeof phone && typeof mobile_phone !== 'number'){
      throw new AppError('Must be a number')
    }
		const doctors = await this.doctorsRepository.create({
			name,
			crm,
			phone,
			mobile_phone,
			zip_code,
			specialty_id,
		});
    const { data } = await axios('https://viacep.com.br/ws/${zip_code}/json/')
    const ceps = Object.assign(doctors, data);
		return ceps;
	}
}
export default CreateDoctorService;
