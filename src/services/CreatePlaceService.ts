import { getRepository } from 'typeorm';
import Places from '../models/places';

interface Request {
	category_id: string;
	address_id: string;
	name: string;
	image: string;
	description: string;
}

class CreatePlaceService {
	public async execute({
		name,
		image,
		description,
		category_id,
		address_id,
	}: Request): Promise<Places> {
		const placesRepository = getRepository(Places);

		const place = placesRepository.create({
			name,
			image,
			description,
			category_id,
			address_id,
		});
		await placesRepository.save(place);
		return place;
	}
}
export default CreatePlaceService;
