import { Router } from 'express';
import Addresses from 'models/addresses';
import { getRepository } from 'typeorm';

import CreateAddressService from '../services/CreateAddressService';

const addressesRouter = Router();

addressesRouter.get('/', async (request, response) => {
	const listAddresses = getRepository(Addresses);
	const address = await listAddresses.find();
	return response.json(address);
});

addressesRouter.post('/', async (request, response) => {
	try {
		const { zip_code, street, neighborhood, number } = request.body;
		const createAddress = new CreateAddressService();
		const address = await createAddress.execute({
			zip_code,
			street,
			neighborhood,
			number,
		});
		return response.json(address);
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

export default addressesRouter;
