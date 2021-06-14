import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import SpecialtiesController from '../controllers/SpecialtiesController';





const specialtiesController = new SpecialtiesController();
const specialtiesRouter = Router();

specialtiesRouter.get(
  '/',
  specialtiesController.index,
);


specialtiesRouter.post('/', specialtiesController.create);



specialtiesRouter.delete(
  '/:specialty_id',
  celebrate({
    [Segments.PARAMS]: {
      specialty_id: Joi.string().required(),
    },
  }),
  specialtiesController.delete,
);

export default specialtiesRouter;
