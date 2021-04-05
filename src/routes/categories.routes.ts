import { Router } from 'express';
import { getRepository } from 'typeorm';

import CreateCategoryService from '../services/CreateCategoryService';
import Categories from '../models/categories';
import DeleteCategoryService from 'services/DeleteCategoryService';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
	const listCategories = getRepository(Categories);
	const categories = await listCategories.find();
	return response.json(categories);
});

categoriesRouter.post('/', async (request, response) => {
	try {
		const { name } = request.body;
		const createCategory = new CreateCategoryService();
		const category = await createCategory.execute({
			name,
		});
		return response.json(category);
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

categoriesRouter.delete('/:id', async (request, response) => {
	const { id } = request.params;
	const deleteCategory = new DeleteCategoryService();
	await deleteCategory.execute(id);
	return response.status(204).send();
});

export default categoriesRouter;
