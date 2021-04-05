import { getRepository } from 'typeorm';
import Places from '../models/places';
import uploadConfig from '../config/upload';

import path from 'path';
import fs from 'fs';

interface Request {
	images: string;
}

class ImagePlaceService {
	public async execute({ images }: Request): Promise<Places> {
		const placeRepository = getRepository(Places);
		const place = await placeRepository.findOne();
		if (!place) {
			throw new Error('image place not exists');
		}
		if (place.image) {
			const imagePlacePath = path.join(uploadConfig.tmpFolder, place.image);
			const imagePlaceExists = await fs.promises.stat(imagePlacePath);

			if (imagePlaceExists) {
				await fs.promises.unlink(imagePlacePath);
			}
		}
		place.image = images;
		await placeRepository.save(place);
		return place;
	}
}

export default ImagePlaceService;
