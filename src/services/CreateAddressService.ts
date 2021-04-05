import { getRepository } from 'typeorm';
import Addresses from '../models/addresses';

interface Request {
	zip_code: string;
	street: string;
	neighborhood: string;
	number?: string;
}

class CreateAddressService {
	public async execute({
		zip_code,
		street,
		neighborhood,
		number,
	}: Request): Promise<Addresses> {
		const addressesRepository = getRepository(Addresses);

		const address = addressesRepository.create({
			zip_code,
			street,
			neighborhood,
			number,
		});
		await addressesRepository.save(address);
		return address;
	}
}
export default CreateAddressService;
