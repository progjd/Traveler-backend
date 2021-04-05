import { getRepository } from 'typeorm';
import User from '../models/users';

interface Request {
	name: string;
	email: string;
	password: string;
}

class CreateUserService {
	public async execute({ name, email, password }: Request): Promise<User> {
		const usersRepository = getRepository(User);

		const checkUserExists = await usersRepository.findOne({
			where: { email },
		});
		if (checkUserExists) {
			throw new Error('Email adress alreay used');
		}
		const users = usersRepository.create({
			name,
			email,
			password,
		});
		await usersRepository.save(users);
		return users;
	}
}
export default CreateUserService;
