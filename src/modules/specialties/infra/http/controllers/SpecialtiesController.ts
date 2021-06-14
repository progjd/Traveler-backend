import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSpecialtyService from '@modules/specialties/services/CreateSpecialtyService';
import { classToClass } from 'class-transformer';
import DeleteSpecialtyService from '@modules/specialties/services/DeleteSpecialtyService';
import ShowAllSpecialtyService from '@modules/specialties/services/ShowAllSpecialtyService';
export default class SpecialtiesController{


  public async index(request: Request, response: Response): Promise<Response> {
    const showAllSpecialtyService = container.resolve(ShowAllSpecialtyService);

    const especialty = await showAllSpecialtyService.execute();

    return response.json(classToClass(especialty));
  }

  public async create(request: Request, response: Response): Promise<Response>{
    try {

      const { name } = request.body;
      const createSpecialty = container.resolve(CreateSpecialtyService);
      const specialty = await createSpecialty.execute({
        name,
      });
      return response.json(specialty);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteSpecialtyService = container.resolve(DeleteSpecialtyService);
    const { specialty_id } = request.params;

    const specialty = await deleteSpecialtyService.execute({ specialty_id });

    return response.json(classToClass(specialty));
  }
}
