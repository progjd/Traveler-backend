import { getRepository } from 'typeorm';
import Cities from '../models/cities';

interface Request {
	name: string;
	image: string;
	description: string;
}

class CreateCityService {
	public async execute({ name, image, description }: Request): Promise<Cities> {
		const citiesRepository = getRepository(Cities);

		const cities = citiesRepository.create({
			name,
			image,
			description,
		});
		await citiesRepository.save(cities);
		return cities;
	}
}
export default CreateCityService;
