import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';



import DoctorsController from '../controllers/DoctorsController';

const doctorsRouter = Router();
const doctorsController = new DoctorsController();

doctorsRouter.get(
  '/',
  doctorsController.index,
);


doctorsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      specialty_id: Joi.string().required(),
      name: Joi.string().required(),
      crm: Joi.string().required(),
      phone: Joi.string().required(),
      mobile_phone: Joi.string().required(),
      zip_code: Joi.string().required(),
    },
  }),
  doctorsController.create,
);

doctorsRouter.put(
  '/:doctor_id',
  celebrate({
    [Segments.PARAMS]: {
      doctor_id: Joi.string().required(),
    },
    [Segments.BODY]: {
      specialty_id: Joi.string().required(),
      name: Joi.string().required(),
      crm: Joi.string().required(),
      phone: Joi.string().required(),
      mobile_phone: Joi.string().required(),
      zip_code: Joi.string().required(),
      },
  }),
  doctorsController.update,
);

doctorsRouter.delete(
  '/:doctor_id',
  celebrate({
    [Segments.PARAMS]: {
      doctor_id: Joi.string().required(),
    },
  }),
  doctorsController.delete,
);
export default doctorsRouter;
