import { Router } from 'express';
import Cities from 'models/cities';
import multer from 'multer';
import uploadConfig from '../config/upload';
import DeleteCityService from 'services/DeleteCityService';
import { getRepository } from 'typeorm';

import CreateCityService from '../services/CreateCityService';
import ImageCityService from '../services/ImageCityService';

const upload = multer(uploadConfig.multer);
const citiesRouter = Router();

citiesRouter.get('/', async (request, response) => {
	const listCities = getRepository(Cities);
	const cities = await listCities.find();
	return response.json(cities);
});

citiesRouter.post('/', async (request, response) => {
	try {
		const { name, image, description } = request.body;
		const createCity = new CreateCityService();
		const city = await createCity.execute({
			name,
			image,
			description,
		});
		return response.json(city);
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

citiesRouter.delete('/:id', async (request, response) => {
	const { id } = request.params;
	const deleteCity = new DeleteCityService();
	await deleteCity.execute(id);
	return response.status(204).send();
});

citiesRouter.patch(
	'/image',
	upload.single('file'),
	async (request, response) => {
		try {
			const imageCity = new ImageCityService();
			const city = await imageCity.execute({
				images: request.file.filename,
			});
			return response.json(city);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	},
);

export default citiesRouter;
