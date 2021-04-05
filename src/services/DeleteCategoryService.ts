import Categories from 'models/categories';
import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';

class DeleteCategoryService {
	public async execute(id: string): Promise<void> {
		const categoriesRepository = getRepository(Categories);
		const categories = await categoriesRepository.findOne(id);
		if (!categories) {
			throw new AppError('Categories does not exists');
		}
		await categoriesRepository.remove(categories);
	}
}

export default DeleteCategoryService;
