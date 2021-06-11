import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateSpecialtyService from '@modules/specialties/services/CreateSpecialtyService';
import { classToClass } from 'class-transformer';
import DeleteSpecialtyService from '@modules/specialties/services/DeleteSpecialtyService';
export default class SpecialtiesController{
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
    const { specialty_id } = request.params;
    const deleteSpecialtyService = container.resolve(DeleteSpecialtyService);

    const specialty = await deleteSpecialtyService.execute({ specialty_id });

    return response.json(classToClass(specialty));
  }
}
