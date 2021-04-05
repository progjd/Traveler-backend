import { getRepository } from 'typeorm';
import Categories from '../models/categories';

interface Request {
	name: string;
}

class CreateCategoryService {
	public async execute({ name }: Request): Promise<Categories> {
		const categoriesRepository = getRepository(Categories);

		const categories = categoriesRepository.create({
			name,
		});
		await categoriesRepository.save(categories);
		return categories;
	}
}
export default CreateCategoryService;
