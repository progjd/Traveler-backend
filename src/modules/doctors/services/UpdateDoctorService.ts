import { inject, injectable } from 'tsyringe';
import Doctor from '../infra/typeorm/entities/doctors';
import IDoctorRepository from '../repositories/IDoctorRepository';


import AppError from '@shared/errors/AppError';

interface Request {
  doctor_id: string;
	name: string;
	crm: string;
	phone: string;
	mobile_phone: string;
	zip_code: string;
	specialty_id: string;
}

@injectable()
class UpdateDoctorService {
  constructor(
    @inject('DoctorRepository')
    private doctorRepository: IDoctorRepository,
  ){

  }
	public async execute({ doctor_id, name, crm, phone, mobile_phone, zip_code, specialty_id }: Request): Promise<Doctor> {

    const doctor = await this.doctorRepository.findById(doctor_id);
    if(!doctor){
      throw new AppError('Doctor does not found');
    }

    doctor.name = name,
    doctor.crm = crm,
    doctor.phone = phone,
    doctor.mobile_phone = mobile_phone,
    doctor.zip_code = zip_code,
    specialty_id,


		await this.doctorRepository.save(doctor);
		return doctor;
	}
}
export default UpdateDoctorService;
