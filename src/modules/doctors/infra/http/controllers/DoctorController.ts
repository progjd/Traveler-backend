import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';
import CreateDoctorService from '@modules/doctors/services/CreateDoctorService';
import ShowDoctorService from '@modules/doctors/services/ShowDoctorService';
import UpdateDoctorService from '@modules/doctors/services/UpdateDoctorService';
import DeleteDoctorService from '@modules/doctors/services/DeleteDoctorService';
import ShowAllDoctorService from '@modules/doctors/services/ShowAllDoctorService';

export default class DoctorController{

  public async index(request: Request, response: Response): Promise<Response> {
    const showAllDoctorService = container.resolve(ShowAllDoctorService);

    const doctor = await showAllDoctorService.execute();

    return response.json(classToClass(doctor));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showDoctorService = container.resolve(ShowDoctorService);
    const {doctor_id}  = request.params;

    const doctor = await showDoctorService.execute({doctor_id});

    return response.json(classToClass(doctor));
  }


  public async create(request: Request, response: Response): Promise<Response>{

    const createDoctor = container.resolve(CreateDoctorService);
      const { name, crm, phone, mobile_phone, zip_code, specialty_id} = request.body;

      const doctor = await createDoctor.execute({
        name,
        crm,
        phone,
        mobile_phone,
        zip_code,
        specialty_id,
      });
      return response.json(doctor);

  }

  public async update(request: Request, response: Response): Promise<Response> {
    const updateDoctorService = container.resolve(UpdateDoctorService);

    const {doctor_id } = request.params;

    const { name, crm, phone, mobile_phone, zip_code, specialty_id } = request.body;

    const doctor = await updateDoctorService.execute({
      doctor_id,
      specialty_id,
      name,
      crm,
      phone,
      mobile_phone,
      zip_code,
      });

    return response.json(classToClass(doctor));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { doctor_id } = request.params;
    const deleteDoctorService = container.resolve(DeleteDoctorService);

    const doctor = await deleteDoctorService.execute({ doctor_id });

    return response.json(classToClass(doctor));
  }
}
