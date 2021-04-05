import Cities from 'models/cities';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

class DeleteCityService {
	public async execute(id: string): Promise<void> {
		const cityRepository = getRepository(Cities);
		const cities = await cityRepository.findOne(id);
		if (!cities) {
			throw new AppError('cities does not exists');
		}
		await cityRepository.remove(cities);
	}
}

export default DeleteCityService;
