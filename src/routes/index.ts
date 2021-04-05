import { Router } from 'express';
import usersRouter from '../routes/users.routes';
import categoriesRouter from '../routes/categories.routes';
import citiesRouter from '../routes/cities.routes';
import addressesRouter from '../routes/addresses.routes';
import placesRouter from '../routes/places.routes';

const routes = Router();
routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/addresses', addressesRouter);
routes.use('/places', placesRouter);
routes.use('/cities', citiesRouter);

export default routes;
