import { Router } from 'express';
import multer from 'multer';
import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import CreatePlaceService from '../services/CreatePlaceService';
import Places from 'models/places';
import ImagePlaceService from 'services/ImagePlaceService';

const upload = multer(uploadConfig.multer);

const placesRouter = Router();

placesRouter.get('/', async (request, response) => {
	const listPlaces = getRepository(Places);
	const places = await listPlaces.find();
	return response.json(places);
});
placesRouter.post('/', async (request, response) => {
	try {
		const { name, image, description, category_id, address_id } = request.body;
		const createPlace = new CreatePlaceService();
		const place = await createPlace.execute({
			name,
			image,
			description,
			category_id,
			address_id,
		});
		return response.json(place);
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

placesRouter.patch(
	'/image',
	upload.single('file'),
	async (request, response) => {
		try {
			const imagePlace = new ImagePlaceService();
			const place = await imagePlace.execute({
				images: request.file.filename,
			});
			return response.json(place);
		} catch (err) {
			return response.status(400).json({ error: err.message });
		}
	},
);

export default placesRouter;
