import { getRepository } from 'typeorm';
import Cities from '../models/places';
import uploadConfig from '../config/upload';

import path from 'path';
import fs from 'fs';

interface Request {
	images: string;
}

class ImageCityService {
	public async execute({ images }: Request): Promise<Cities> {
		const citiesRepository = getRepository(Cities);
		const city = await citiesRepository.findOne();
		if (!city) {
			throw new Error('Cadastro city nao exists');
		}
		if (city.image) {
			const imageCityPath = path.join(uploadConfig.tmpFolder, city.image);
			const imageCityExists = await fs.promises.stat(imageCityPath);

			if (imageCityExists) {
				await fs.promises.unlink(imageCityPath);
			}
		}
		city.image = images;
		await citiesRepository.save(city);
		return city;
	}
}

export default ImageCityService;
